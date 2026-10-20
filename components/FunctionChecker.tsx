"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { compile, checkDerivative, type CheckResult, type Fn } from "@/lib/expr";
import { Plot, curve, css } from "@/lib/labs";

const num = (v: number, d: number) => v.toFixed(d).replace("-", "−");

const PRESETS = ["x^3 sin(x)", "e^(4x^2-3x)", "(x^2+3)/(x-1)", "sqrt(1+x^3)", "x^2 cos(3x)", "tan(x)/x"];

interface State { f: Fn; g: Fn; res: CheckResult }

/** Make your own problem: type any f(x) and your f′(x); the page checks it numerically and graphs both. */
export default function FunctionChecker() {
  const [fSrc, setF] = useState("x^3 sin(x)");
  const [gSrc, setG] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [state, setState] = useState<State | null>(null);
  const cv = useRef<HTMLCanvasElement>(null);

  const run = () => {
    try {
      const f = compile(fSrc);
      let g: Fn;
      try { g = compile(gSrc); } catch (e) { throw new Error("Your f′(x): " + (e as Error).message); }
      setErr(null);
      setState({ f, g, res: checkDerivative(f, g) });
    } catch (e) {
      const m = (e as Error).message;
      setErr(m.startsWith("Your f′") ? m : "f(x): " + m);
      setState(null);
    }
  };

  useEffect(() => {
    const el = cv.current;
    if (!el || !state) return;
    const draw = () => {
      const { f, g } = state;
      const slope: Fn = (x) => (f(x + 1e-5) - f(x - 1e-5)) / 2e-5;
      const ys: number[] = [];
      for (let x = -3; x <= 3; x += 0.05) for (const y of [f(x), slope(x), g(x)]) if (Number.isFinite(y)) ys.push(y);
      ys.sort((a, b) => a - b);
      const lo = ys[Math.floor(ys.length * 0.05)] ?? -5, hi = ys[Math.floor(ys.length * 0.95)] ?? 5;
      const pad = Math.max(1, (hi - lo) * 0.15);
      const P = Plot(el, -3.2, 3.2, Math.min(lo - pad, -1), Math.max(hi + pad, 1));
      curve(P, slope, css("--deriv"), 4.5);
      curve(P, g, css("--tangent"), 2.5, undefined, undefined, [7, 6]);
      curve(P, f, css("--accent"), 3);
    };
    draw();
    const ro = new ResizeObserver(() => draw());
    ro.observe(el);
    return () => ro.disconnect();
  }, [state]);

  return (
    <div className="lab checker">
      <div className="lab-head"><h4>Check any derivative</h4><span className="tag">Make your own problem</span></div>
      <div className="checker-presets">
        <span>Try:</span>
        {PRESETS.map((p) => (
          <button key={p} type="button" className="btn" onClick={() => { setF(p); setG(""); setState(null); setErr(null); }}>{p}</button>
        ))}
      </div>
      <form className="checker-form" onSubmit={(e) => { e.preventDefault(); run(); }}>
        <label htmlFor="chk-f">f(x) =</label>
        <input id="chk-f" value={fSrc} onChange={(e) => setF(e.target.value)} autoComplete="off" spellCheck={false} />
        <label htmlFor="chk-g">Your f′(x) =</label>
        <input id="chk-g" value={gSrc} onChange={(e) => setG(e.target.value)} autoComplete="off" spellCheck={false} placeholder="type your derivative" />
        <button type="submit" className="cta">Check my derivative</button>
      </form>
      <p className="note">Write x as the variable. Use ^ for powers, * or a space to multiply, and functions like sin(x), cos(x), tan(x), sec(x), e^(2x), sqrt(x), ln(x). Example: 3x^2 sin(x) + x^3 cos(x)</p>

      {err && <motion.p className="gen-verdict wrong" initial={{ opacity: 0 }} animate={{ opacity: 1, x: [0, -6, 6, 0] }}>{err}</motion.p>}
      {state && (
        <motion.p
          key={String(state.res.ok) + gSrc}
          className={"gen-verdict " + (state.res.ok ? "right" : "wrong")}
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
        >
          {state.res.ok
            ? `Correct! Your f′ matches the real slope at all ${state.res.tested} test points between x = −3 and 3.`
            : state.res.miss
              ? `Not quite. At x = ${num(state.res.miss.x, 2)}, your f′ gives ${num(state.res.miss.yours, 3)} but the real slope is ${num(state.res.miss.actual, 3)}. Compare the dashed orange curve with the pink one.`
              : "I couldn't test enough points. The function may not be defined between x = −3 and 3."}
        </motion.p>
      )}
      {state && (
        <>
          <canvas ref={cv} className="tall" aria-label="Graph of f, its true slope, and your derivative" />
          <div className="legend"><span className="lf">f(x)</span><span className="ld">real slope of f</span><span className="lt">your f′(x) (dashed)</span></div>
        </>
      )}
    </div>
  );
}
