"use client";
import { animate, AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { tex } from "@/lib/tex";

/* ───────────── exact values ───────────── */

const TAU = Math.PI * 2;
const DEG = 180 / Math.PI;
export const SPECIAL = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];

interface Val { k: string; t: string } // TeX and plain text
const V = (k: string, t: string): Val => ({ k, t });
// sin of the reference angle; cos uses the complement
const SIN: Record<number, Val> = { 0: V("0", "0"), 30: V("\\tfrac12", "1/2"), 45: V("\\tfrac{\\sqrt2}{2}", "√2/2"), 60: V("\\tfrac{\\sqrt3}{2}", "√3/2"), 90: V("1", "1") };
const TAN: Record<number, Val | null> = { 0: V("0", "0"), 30: V("\\tfrac{\\sqrt3}{3}", "√3/3"), 45: V("1", "1"), 60: V("\\sqrt3", "√3"), 90: null };
const UNDEF = V("\\text{undefined}", "undefined");

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
/** 150 → 5π/6 */
export function radOf(d: number): Val {
  if (d === 0) return V("0", "0");
  const g = gcd(d, 180), n = d / g, m = 180 / g;
  const kn = n === 1 ? "\\pi" : `${n}\\pi`, tn = n === 1 ? "π" : `${n}π`;
  return m === 1 ? V(kn, tn) : V(`\\frac{${kn}}{${m}}`, `${tn}/${m}`);
}
const refOf = (d: number) => { const r = d % 180; return r <= 90 ? r : 180 - r; };
const sgn = (x: number) => (Math.abs(x) < 1e-9 ? 0 : Math.sign(x));
const neg = (v: Val, s: number): Val => (s === 0 ? V("0", "0") : s < 0 ? V(`-${v.k}`, `−${v.t}`) : v);

export function exact(d: number) {
  const r = refOf(d), a = d / DEG;
  const s = sgn(Math.sin(a)), c = sgn(Math.cos(a));
  const sin = neg(SIN[r], s), cos = neg(SIN[90 - r], c);
  const tan = c === 0 ? UNDEF : s === 0 ? V("0", "0") : neg(TAN[r]!, s * c);
  return { sin, cos, tan, ref: r };
}
const quadOf = (deg: number) => {
  const d = ((deg % 360) + 360) % 360;
  if ([0, 90, 180, 270].some((x) => Math.abs(d - x) < 1e-6)) return 0;
  return d < 90 ? 1 : d < 180 ? 2 : d < 270 ? 3 : 4;
};
const ASTC: Record<number, { word: string; pos: string }> = {
  1: { word: "All", pos: "sin, cos and tan are all positive" },
  2: { word: "Students", pos: "only sin is positive" },
  3: { word: "Take", pos: "only tan is positive" },
  4: { word: "Calculus", pos: "only cos is positive" },
};
const K = (s: string) => tex(`\\(${s}\\)`);

/* ───────────── the circle ───────────── */

function quadPath(q: number) {
  const r = 1.4, a0 = ((q - 1) * Math.PI) / 2, a1 = (q * Math.PI) / 2;
  const f = (n: number) => n.toFixed(4);
  return `M0 0 L${f(r * Math.cos(a0))} ${f(-r * Math.sin(a0))} A${r} ${r} 0 0 0 ${f(r * Math.cos(a1))} ${f(-r * Math.sin(a1))} Z`;
}

function arcPath(r: number, a: number) {
  if (a < 1e-4) return "";
  const x = r * Math.cos(a), y = -r * Math.sin(a), large = a > Math.PI ? 1 : 0;
  return `M ${r} 0 A ${r} ${r} 0 ${large} 0 ${x} ${y}`;
}

export default function UnitCircle() {
  const [theta, setTheta] = useState(Math.PI / 6);
  const [snap, setSnap] = useState(true);
  const [labels, setLabels] = useState<"rad" | "deg">("rad");
  const [showTan, setShowTan] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [dragging, setDragging] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const waveRef = useRef<SVGSVGElement>(null);
  const tween = useRef<{ stop: () => void } | null>(null);
  const thetaRef = useRef(theta);
  useEffect(() => { thetaRef.current = theta; }, [theta]);

  const deg = ((theta * DEG) % 360 + 360) % 360;
  const nearest = SPECIAL.concat(360).reduce((b, x) => (Math.abs(x - deg) < Math.abs(b - deg) ? x : b), 0) % 360;
  const isSpecial = Math.abs(((nearest - deg + 540) % 360) - 180) < 0.01;
  const c = Math.cos(theta), s = Math.sin(theta), t = Math.abs(c) < 1e-9 ? Infinity : s / c;
  const q = quadOf(deg);
  const ex = isSpecial ? exact(nearest) : null;

  const stopTween = () => { tween.current?.stop(); tween.current = null; };

  /** Glide the point to an angle (in degrees), always moving counter-clockwise the short way round. */
  const goTo = useCallback((d: number) => {
    setPlaying(false);
    stopTween();
    const from = thetaRef.current;
    let to = d / DEG;
    while (to - from > Math.PI) to -= TAU;
    while (from - to > Math.PI) to += TAU;
    tween.current = animate(from, to, {
      duration: 0.7, ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setTheta(v),
      onComplete: () => setTheta(((d / DEG) % TAU + TAU) % TAU),
    });
  }, []);

  // spin mode
  useEffect(() => {
    if (!playing) return;
    stopTween();
    let raf = 0, last = performance.now();
    const step = (now: number) => {
      setTheta((v) => (v + ((now - last) / 1000) * (TAU / 12)) % TAU); // one lap every 12 s
      last = now;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const angleFrom = (e: React.PointerEvent) => {
    const svg = svgRef.current!;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const p = pt.matrixTransform(svg.getScreenCTM()!.inverse());
    let a = Math.atan2(-p.y, p.x);
    if (a < 0) a += TAU;
    if (snap) {
      const d = a * DEG;
      const n = SPECIAL.concat(360).reduce((b, x) => (Math.abs(x - d) < Math.abs(b - d) ? x : b), 0);
      if (Math.abs(n - d) < 6) a = (n % 360) / DEG;
    }
    return a;
  };
  const onDown = (e: React.PointerEvent<SVGSVGElement>) => {
    setPlaying(false); stopTween();
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    setTheta(angleFrom(e));
  };
  const onMove = (e: React.PointerEvent) => { if (dragging) setTheta(angleFrom(e)); };
  const onUp = () => setDragging(false);

  // the wave below: drag along it to set θ
  const [waveDrag, setWaveDrag] = useState(false);
  const waveAngle = (e: React.PointerEvent) => {
    const svg = waveRef.current!;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const p = pt.matrixTransform(svg.getScreenCTM()!.inverse());
    let a = Math.max(0, Math.min(TAU - 1e-6, ((p.x - WX0) / WW) * TAU));
    if (snap) {
      const d = a * DEG, n = SPECIAL.concat(360).reduce((b, x) => (Math.abs(x - d) < Math.abs(b - d) ? x : b), 0);
      if (Math.abs(n - d) < 6) a = (n % 360) / DEG;
    }
    return a;
  };

  const onKey = (e: React.KeyboardEvent) => {
    const dir = e.key === "ArrowRight" || e.key === "ArrowUp" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowDown" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    if (e.shiftKey) { setPlaying(false); setTheta((v) => (v + dir / DEG + TAU) % TAU); return; }
    const i = SPECIAL.indexOf(nearest);
    const next = isSpecial ? SPECIAL[(i + dir + SPECIAL.length) % SPECIAL.length]
      : dir > 0 ? (SPECIAL.find((x) => x > deg) ?? 0) : ([...SPECIAL].reverse().find((x) => x < deg) ?? 330);
    goTo(next);
  };

  const P = { x: c, y: -s };
  const tanY = -Math.max(-1.6, Math.min(1.6, t)); // clipped for drawing
  const fmt = (x: number) => (Math.abs(x) < 5e-4 ? "0" : x.toFixed(3));
  const thetaTex = isSpecial ? `\\theta=${radOf(nearest).k}=${nearest}^\\circ` : `\\theta\\approx${(deg / DEG).toFixed(3)}=${deg.toFixed(1)}^\\circ`;
  const refDeg = q === 1 ? deg : q === 2 ? 180 - deg : q === 3 ? deg - 180 : q === 4 ? 360 - deg : null;

  const rows: { name: string; cls: string; k: string; why: string }[] = [
    { name: "\\cos\\theta", cls: "uc-cos", k: ex ? ex.cos.k : fmt(c), why: "x-coordinate" },
    { name: "\\sin\\theta", cls: "uc-sin", k: ex ? ex.sin.k : fmt(s), why: "y-coordinate" },
    { name: "\\tan\\theta", cls: "uc-tan", k: ex ? ex.tan.k : Number.isFinite(t) ? fmt(t) : "\\text{undefined}", why: "y ÷ x (slope)" },
  ];

  return (
    <div className="lab uc">
      <div className="lab-head"><h4>The unit circle, live</h4><span className="tag">Drag the point · tap an angle</span></div>

      <div className="uc-grid">
        <div className="uc-stage">
          <svg
            ref={svgRef} className={"uc-svg" + (dragging ? " dragging" : "")} viewBox="-1.42 -1.42 2.84 2.84"
            onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
            role="img" aria-label={`Unit circle at ${deg.toFixed(0)} degrees`}
          >
            <defs>
              <clipPath id="uc-clip"><rect x="-1.42" y="-1.42" width="2.84" height="2.84" /></clipPath>
              <radialGradient id="uc-glow"><stop offset="0" stopColor="var(--accent)" stopOpacity=".35" /><stop offset="1" stopColor="var(--accent)" stopOpacity="0" /></radialGradient>
            </defs>
            {/* quadrant tint for the current quadrant */}
            <AnimatePresence>
              {q > 0 && (
                <motion.path
                  key={q} className="uc-quad"
                  d={quadPath(q)}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
                />
              )}
            </AnimatePresence>
            {[1, 2, 3, 4].map((n) => {
              const a = (n - 0.5) * (Math.PI / 2);
              return <text key={n} className={"uc-astc" + (q === n ? " on" : "")} x={Math.cos(a) * 0.62} y={-Math.sin(a) * 0.62 + 0.03}>{ASTC[n].word[0]}</text>;
            })}
            <line className="uc-axis" x1="-1.38" y1="0" x2="1.38" y2="0" />
            <line className="uc-axis" x1="0" y1="-1.38" x2="0" y2="1.38" />
            <circle className="uc-ring" cx="0" cy="0" r="1" />
            {showTan && <line className="uc-tanline" x1="1" y1="-1.42" x2="1" y2="1.42" />}

            {/* reference triangle */}
            <polygon className="uc-tri" points={`0,0 ${P.x},0 ${P.x},${P.y}`} />
            <path className="uc-arc" d={arcPath(0.2, ((theta % TAU) + TAU) % TAU)} />
            <g clipPath="url(#uc-clip)">
              {showTan && Number.isFinite(t) && (
                <>
                  <line className="uc-tanext" x1="0" y1="0" x2="1" y2={tanY} />
                  <line className="uc-tanseg" x1="1" y1="0" x2="1" y2={tanY} />
                </>
              )}
            </g>
            <line className="uc-cosseg" x1="0" y1="0" x2={P.x} y2="0" />
            <line className="uc-sinseg" x1={P.x} y1="0" x2={P.x} y2={P.y} />
            <line className="uc-radius" x1="0" y1="0" x2={P.x} y2={P.y} />

            {/* special angles */}
            {SPECIAL.map((d) => {
              const a = d / DEG, on = isSpecial && nearest === d;
              const lx = Math.cos(a) * 1.2, ly = -Math.sin(a) * 1.2;
              return (
                <g key={d} className={"uc-spot" + (on ? " on" : "")} onPointerDown={(e) => { e.stopPropagation(); goTo(d); }}>
                  <circle cx={Math.cos(a)} cy={-Math.sin(a)} r="0.11" className="uc-hit" />
                  <circle cx={Math.cos(a)} cy={-Math.sin(a)} r={on ? 0.042 : 0.028} className="uc-dot" />
                  <text x={lx} y={ly + 0.03} className="uc-lbl">{labels === "rad" ? radOf(d).t : `${d}°`}</text>
                </g>
              );
            })}

            <circle cx={P.x} cy={P.y} r="0.2" fill="url(#uc-glow)" />
            <circle cx={P.x} cy={P.y} r="0.14" className="uc-grab" />
            <motion.circle
              cx={P.x} cy={P.y} r="0.06" className="uc-handle" tabIndex={0} role="slider"
              aria-label="Angle" aria-valuemin={0} aria-valuemax={360} aria-valuenow={Math.round(deg)} aria-valuetext={isSpecial ? `${radOf(nearest).t} radians` : `${deg.toFixed(0)} degrees`}
              onKeyDown={onKey}
              animate={{ scale: dragging ? 1.35 : [1, 1.12, 1] }}
              transition={dragging ? { duration: 0.15 } : { duration: 1.8, repeat: Infinity }}
            />
          </svg>
        </div>

        <div className="uc-read" aria-live="polite">
          <div className="uc-theta" dangerouslySetInnerHTML={{ __html: K(thetaTex) }} />
          <div className="uc-point" dangerouslySetInnerHTML={{ __html: "Point " + K(`(\\cos\\theta,\\ \\sin\\theta)=\\Big(${ex ? ex.cos.k : fmt(c)},\\ ${ex ? ex.sin.k : fmt(s)}\\Big)`) }} />
          <div className="uc-badges">
            <span className={"uc-badge q" + q}>{q ? `Quadrant ${["I", "II", "III", "IV"][q - 1]}` : "On an axis"}</span>
            {refDeg !== null && q > 0 && (
              <span className="uc-badge" dangerouslySetInnerHTML={{ __html: "Reference angle " + K(isSpecial ? radOf(exact(nearest).ref).k : `${refDeg.toFixed(1)}^\\circ`) }} />
            )}
          </div>
          <table className="uc-table">
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className={r.cls}>
                  <th dangerouslySetInnerHTML={{ __html: K(r.name) }} />
                  <td>
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={isSpecial ? r.k : "live"} className="uc-val"
                        initial={{ opacity: 0, y: 8, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                        dangerouslySetInnerHTML={{ __html: K(r.k) }}
                      />
                    </AnimatePresence>
                  </td>
                  <td className="uc-why">{r.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="uc-note">
            {q > 0 ? <>Quadrant {["I", "II", "III", "IV"][q - 1]}: <b>{ASTC[q].word}</b>, so {ASTC[q].pos}.</> : <>On an axis one coordinate is 0, so the values are 0, 1 or −1.</>}
            {!isSpecial && <> Let go near a dot to snap to an exact value.</>}
          </p>
          <div className="controls uc-controls">
            <button type="button" className="uc-play" onClick={() => setPlaying((p) => !p)} aria-pressed={playing}>{playing ? "❚❚ Pause" : "▶ Spin"}</button>
            <div className="seg" role="group" aria-label="Angle labels">
              <button type="button" className={labels === "rad" ? "on" : ""} aria-pressed={labels === "rad"} onClick={() => setLabels("rad")}>Radians</button>
              <button type="button" className={labels === "deg" ? "on" : ""} aria-pressed={labels === "deg"} onClick={() => setLabels("deg")}>Degrees</button>
            </div>
            <label><input type="checkbox" checked={snap} onChange={(e) => setSnap(e.target.checked)} /> Snap</label>
            <label><input type="checkbox" checked={showTan} onChange={(e) => setShowTan(e.target.checked)} /> Show tan</label>
          </div>
        </div>
      </div>

      <div className="uc-chips" role="group" aria-label="Jump to an angle">
        {SPECIAL.map((d) => (
          <button key={d} type="button" className={isSpecial && nearest === d ? "on" : ""} onClick={() => goTo(d)}
            dangerouslySetInnerHTML={{ __html: labels === "rad" ? K(radOf(d).k) : `${d}°` }} />
        ))}
      </div>

      <Wave theta={((theta % TAU) + TAU) % TAU} svgRef={waveRef}
        onDown={(e) => { setPlaying(false); stopTween(); e.currentTarget.setPointerCapture(e.pointerId); setWaveDrag(true); setTheta(waveAngle(e)); }}
        onMove={(e) => { if (waveDrag) setTheta(waveAngle(e)); }}
        onUp={() => setWaveDrag(false)}
      />

      <Drill onShow={goTo} />
    </div>
  );
}

/* ───────────── sin & cos waves ───────────── */

const WX0 = 34, WW = 560, WH = 170, WY = WH / 2, WA = 62;
const wx = (a: number) => WX0 + (a / TAU) * WW;
const wy = (v: number) => WY - v * WA;
const wavePath = (f: (a: number) => number) =>
  Array.from({ length: 121 }, (_, i) => { const a = (i / 120) * TAU; return `${i ? "L" : "M"}${wx(a).toFixed(1)} ${wy(f(a)).toFixed(1)}`; }).join(" ");
const SIN_PATH = wavePath(Math.sin), COS_PATH = wavePath(Math.cos);

function Wave({ theta, svgRef, onDown, onMove, onUp }: {
  theta: number; svgRef: React.RefObject<SVGSVGElement | null>;
  onDown: (e: React.PointerEvent<SVGSVGElement>) => void; onMove: (e: React.PointerEvent) => void; onUp: () => void;
}) {
  const x = wx(theta);
  return (
    <div className="uc-wave">
      <div className="uc-wave-head">
        <span><i className="sw uc-sin" /> y = sin θ</span>
        <span><i className="sw uc-cos" /> y = cos θ</span>
        <span className="uc-hint">Drag along the graph too</span>
      </div>
      <svg ref={svgRef} viewBox={`0 0 ${WX0 + WW + 12} ${WH}`} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
        role="img" aria-label="Graphs of sine and cosine with the current angle marked">
        {[0, 1, 2, 3, 4].map((i) => <line key={i} className="uc-wgrid" x1={wx((i * TAU) / 4)} x2={wx((i * TAU) / 4)} y1={8} y2={WH - 8} />)}
        <line className="uc-axis-px" x1={WX0} x2={WX0 + WW} y1={WY} y2={WY} />
        {[1, -1].map((v) => <text key={v} className="uc-wlbl" x={WX0 - 6} y={wy(v) + 4} textAnchor="end">{v}</text>)}
        {["π/2", "π", "3π/2", "2π"].map((l, i) => <text key={l} className="uc-wlbl" x={wx(((i + 1) * TAU) / 4)} y={WH - 2} textAnchor="middle">{l}</text>)}
        <path d={COS_PATH} className="uc-wcos" />
        <path d={SIN_PATH} className="uc-wsin" />
        <line className="uc-wmark" x1={x} x2={x} y1={8} y2={WH - 14} />
        <line className="uc-wsinbar" x1={x} x2={x} y1={WY} y2={wy(Math.sin(theta))} />
        <circle cx={x} cy={wy(Math.cos(theta))} r="5" className="uc-wdot-cos" />
        <circle cx={x} cy={wy(Math.sin(theta))} r="5.5" className="uc-wdot-sin" />
      </svg>
    </div>
  );
}

/* ───────────── drill ───────────── */

const POOL = ["0", "1", "-1", "\\tfrac12", "-\\tfrac12", "\\tfrac{\\sqrt2}{2}", "-\\tfrac{\\sqrt2}{2}", "\\tfrac{\\sqrt3}{2}", "-\\tfrac{\\sqrt3}{2}"];
const TAN_POOL = ["0", "1", "-1", "\\sqrt3", "-\\sqrt3", "\\tfrac{\\sqrt3}{3}", "-\\tfrac{\\sqrt3}{3}", "\\text{undefined}"];
const rand = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];
const shuffle = <T,>(a: T[]) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const flip = (k: string) => (k === "0" || k.startsWith("\\text") ? k : k.startsWith("-") ? k.slice(1) : `-${k}`);

type Fn = "sin" | "cos" | "tan";
interface Question { d: number; prompt: string; options: string[]; answer: string; explain: string }

function makeValue(): Question {
  const d = rand(SPECIAL), fn = rand<Fn>(["sin", "cos", "tan", "sin", "cos"]);
  const e = exact(d), ans = e[fn].k;
  const other = fn === "sin" ? e.cos.k : fn === "cos" ? e.sin.k : e.sin.k;
  const picks = new Set<string>([ans]);
  for (const k of [flip(ans), other, flip(other)]) if (picks.size < 4 && k !== ans) picks.add(k);
  const pool = fn === "tan" ? TAN_POOL : POOL;
  while (picks.size < 4) picks.add(rand(pool));
  const q = quadOf(d), r = radOf(e.ref).k;
  const explain = q
    ? `Reference angle \\(${r}\\). Quadrant ${["I", "II", "III", "IV"][q - 1]} (${ASTC[q].word}): ${ASTC[q].pos}. So \\(\\${fn}${radOf(d).k.startsWith("\\frac") ? radOf(d).k : `(${radOf(d).k})`}=${ans}\\).`
    : `On an axis the point is \\((${e.cos.k},\\ ${e.sin.k})\\). \\(\\cos\\) is x, \\(\\sin\\) is y, \\(\\tan=y/x\\).`;
  return { d, prompt: `\\${fn}\\Big(${radOf(d).k}\\Big)=\\;?`, options: shuffle([...picks]), answer: ans, explain };
}
function makeAngle(): Question {
  const d = rand(SPECIAL), e = exact(d);
  // the best wrong answers share the reference angle
  const twins = [d, 180 - d, 180 + d, 360 - d].map((x) => ((x % 360) + 360) % 360);
  const picks = new Set<number>([d]);
  for (const x of shuffle(twins)) if (picks.size < 4 && SPECIAL.includes(x)) picks.add(x);
  while (picks.size < 4) picks.add(rand(SPECIAL));
  const q = quadOf(d);
  return {
    d, prompt: `\\cos\\theta=${e.cos.k},\\quad \\sin\\theta=${e.sin.k}.\\quad \\theta=\\;?`,
    options: shuffle([...picks]).map((x) => radOf(x).k), answer: radOf(d).k,
    explain: q ? `cos is the x-coordinate, sin is the y-coordinate. Signs \\((${sgn(Math.cos(d / DEG)) > 0 ? "+" : "-"},${sgn(Math.sin(d / DEG)) > 0 ? "+" : "-"})\\) put it in Quadrant ${["I", "II", "III", "IV"][q - 1]}.` : "One coordinate is 0, so the point is on an axis.",
  };
}

function Drill({ onShow }: { onShow: (d: number) => void }) {
  const [mode, setMode] = useState<"value" | "angle">("value");
  const [q, setQ] = useState<Question | null>(null);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState({ right: 0, total: 0, streak: 0 });
  const next = useCallback((m = mode) => { setPicked(null); setQ(m === "value" ? makeValue() : makeAngle()); }, [mode]);
  useEffect(() => { next(mode); }, [mode]); // eslint-disable-line react-hooks/exhaustive-deps

  const choose = (k: string) => {
    if (!q || picked) return;
    setPicked(k);
    const ok = k === q.answer;
    setScore((s) => ({ right: s.right + (ok ? 1 : 0), total: s.total + 1, streak: ok ? s.streak + 1 : 0 }));
    onShow(q.d);
  };
  const html = useMemo(() => q && { prompt: K(q.prompt), options: q.options.map(K), explain: tex(q.explain) }, [q]);

  return (
    <div className="uc-drill">
      <div className="uc-drill-head">
        <h4>Drill: recognise it fast</h4>
        <div className="seg" role="group" aria-label="Drill type">
          <button type="button" className={mode === "value" ? "on" : ""} aria-pressed={mode === "value"} onClick={() => setMode("value")}>Angle → value</button>
          <button type="button" className={mode === "angle" ? "on" : ""} aria-pressed={mode === "angle"} onClick={() => setMode("angle")}>Point → angle</button>
        </div>
        <span className="uc-score">
          {score.right}/{score.total}
          <AnimatePresence>{score.streak >= 3 && <motion.b key={score.streak} initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }}> 🔥 {score.streak}</motion.b>}</AnimatePresence>
        </span>
      </div>
      {q && html && (
        <AnimatePresence mode="wait">
          <motion.div key={q.prompt + q.options.join()} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>
            <div className="uc-prompt" dangerouslySetInnerHTML={{ __html: html.prompt }} />
            <div className="uc-opts">
              {q.options.map((k, i) => {
                const state = !picked ? "" : k === q.answer ? " right" : k === picked ? " wrong" : " dim";
                return (
                  <motion.button key={k} type="button" className={"uc-opt" + state} onClick={() => choose(k)} disabled={!!picked}
                    animate={picked && k === picked && k !== q.answer ? { x: [0, -6, 6, -4, 4, 0] } : picked && k === q.answer ? { scale: [1, 1.08, 1] } : {}}
                    transition={{ duration: 0.4 }}
                    dangerouslySetInnerHTML={{ __html: html.options[i] }} />
                );
              })}
            </div>
            {picked && (
              <motion.div className={"uc-explain" + (picked === q.answer ? " ok" : " no")} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                <b>{picked === q.answer ? "Correct!" : "Not quite."}</b> <span dangerouslySetInnerHTML={{ __html: html.explain }} /> The circle above now shows this angle.
                <button type="button" className="uc-next" onClick={() => next()}>Next →</button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
