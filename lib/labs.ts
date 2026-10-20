// Canvas labs. Each init takes the lab's root element, wires its controls, and returns a cleanup function.
import type { LabId } from "@/content/types";

type Fn = (x: number) => number;
type Ctx = CanvasRenderingContext2D;

interface P {
  c: Ctx;
  w: number;
  h: number;
  xmin: number;
  xmax: number;
  ymin: number;
  ymax: number;
  X: Fn;
  Y: Fn;
  ix: Fn;
  iy: Fn;
}

interface PlotOpts {
  xstep?: number;
  ystep?: number;
  xfmt?: (x: number) => string;
}

const css = (n: string) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const fmt = (v: number, d = 3) =>
  Math.abs(v) > 1e6 || !isFinite(v) ? (v > 0 ? "∞" : v < 0 ? "−∞" : "undefined") : v.toFixed(d).replace("-", "−");

function setup(cv: HTMLCanvasElement) {
  const r = cv.getBoundingClientRect();
  const d = window.devicePixelRatio || 1;
  cv.width = Math.max(1, Math.round(r.width * d));
  cv.height = Math.max(1, Math.round(r.height * d));
  const c = cv.getContext("2d")!;
  c.setTransform(d, 0, 0, d, 0, 0);
  return { c, w: r.width, h: r.height };
}

function niceStep(range: number) {
  const raw = range / 8,
    p = Math.pow(10, Math.floor(Math.log10(raw))),
    m = raw / p;
  return (m < 1.5 ? 1 : m < 3 ? 2 : m < 7 ? 5 : 10) * p;
}

function Plot(cv: HTMLCanvasElement, xmin: number, xmax: number, ymin: number, ymax: number, opt: PlotOpts = {}): P {
  const { c, w, h } = setup(cv);
  const P: P = {
    c, w, h, xmin, xmax, ymin, ymax,
    X: (x) => ((x - xmin) / (xmax - xmin)) * w,
    Y: (y) => h - ((y - ymin) / (ymax - ymin)) * h,
    ix: (px) => xmin + (px / w) * (xmax - xmin),
    iy: (py) => ymin + ((h - py) / h) * (ymax - ymin),
  };
  c.fillStyle = css("--surface");
  c.fillRect(0, 0, w, h);
  const sx = opt.xstep || niceStep(xmax - xmin),
    sy = opt.ystep || niceStep(ymax - ymin);
  c.lineWidth = 1;
  c.strokeStyle = css("--grid");
  for (let x = Math.ceil(xmin / sx) * sx; x <= xmax; x += sx) {
    const px = Math.round(P.X(x)) + 0.5;
    c.beginPath(); c.moveTo(px, 0); c.lineTo(px, h); c.stroke();
  }
  for (let y = Math.ceil(ymin / sy) * sy; y <= ymax; y += sy) {
    const py = Math.round(P.Y(y)) + 0.5;
    c.beginPath(); c.moveTo(0, py); c.lineTo(w, py); c.stroke();
  }
  c.strokeStyle = css("--axis");
  c.lineWidth = 1.2;
  if (ymin < 0 && ymax > 0) { c.beginPath(); c.moveTo(0, P.Y(0)); c.lineTo(w, P.Y(0)); c.stroke(); }
  if (xmin < 0 && xmax > 0) { c.beginPath(); c.moveTo(P.X(0), 0); c.lineTo(P.X(0), h); c.stroke(); }
  c.fillStyle = css("--muted");
  c.font = "11px " + css("--font-mono");
  const y0 = Math.min(Math.max(P.Y(0) + 13, 13), h - 4),
    x0 = Math.min(Math.max(P.X(0) + 4, 4), w - 24);
  for (let x = Math.ceil(xmin / sx) * sx; x <= xmax; x += sx) {
    if (Math.abs(x) < 1e-9) continue;
    c.fillText(opt.xfmt ? opt.xfmt(x) : String(+x.toFixed(2)), P.X(x) + 3, y0);
  }
  for (let y = Math.ceil(ymin / sy) * sy; y <= ymax; y += sy) {
    if (Math.abs(y) < 1e-9) continue;
    c.fillText(String(+y.toFixed(2)), x0, P.Y(y) - 3);
  }
  return P;
}

function curve(P: P, f: Fn, color: string, width = 2.5, from = P.xmin, to = P.xmax, dash?: number[]) {
  const { c } = P;
  c.save(); c.strokeStyle = color; c.lineWidth = width; c.lineJoin = "round";
  if (dash) c.setLineDash(dash);
  c.beginPath();
  let pen = false, prevY: number | null = null;
  const a = Math.max(0, P.X(from)), b = Math.min(P.w, P.X(to));
  for (let px = a; px <= b; px += 0.75) {
    const y = f(P.ix(px));
    if (!isFinite(y)) { pen = false; prevY = null; continue; }
    const py = P.Y(y);
    if (py < -2000 || py > P.h + 2000 || (prevY !== null && Math.abs(py - prevY) > P.h)) { pen = false; prevY = py; continue; }
    if (!pen) { c.moveTo(px, py); pen = true; } else c.lineTo(px, py);
    prevY = py;
  }
  c.stroke(); c.restore();
}

function line(P: P, x0: number, y0: number, m: number, color: string, width = 2, dash?: number[]) {
  const { c } = P;
  c.save(); c.strokeStyle = color; c.lineWidth = width;
  if (dash) c.setLineDash(dash);
  c.beginPath();
  if (!isFinite(m)) { c.moveTo(P.X(x0), 0); c.lineTo(P.X(x0), P.h); }
  else { c.moveTo(0, P.Y(y0 + m * (P.xmin - x0))); c.lineTo(P.w, P.Y(y0 + m * (P.xmax - x0))); }
  c.stroke(); c.restore();
}

function dot(P: P, x: number, y: number, color: string, r = 5, hollow = false) {
  const { c } = P;
  c.save(); c.beginPath(); c.arc(P.X(x), P.Y(y), r, 0, Math.PI * 2);
  if (hollow) { c.fillStyle = css("--surface"); c.fill(); c.strokeStyle = color; c.lineWidth = 2; c.stroke(); }
  else { c.fillStyle = color; c.fill(); }
  c.restore();
}

function label(P: P, text: string, x: number, y: number, color: string, dx = 8, dy = -8) {
  const { c } = P;
  c.save(); c.fillStyle = color; c.font = "600 12px " + css("--font-mono"); c.fillText(text, P.X(x) + dx, P.Y(y) + dy); c.restore();
}

/** Lab context: scoped element lookup, listeners that are removed on cleanup, and animation of a slider. */
function makeKit(root: HTMLElement, signal: AbortSignal) {
  const $ = <T extends HTMLElement = HTMLElement>(sel: string) => root.querySelector(sel) as T;
  const on = (el: EventTarget, ev: string, fn: (e: Event) => void) => el.addEventListener(ev, fn, { signal });
  const text = (sel: string, v: string) => { $(sel).textContent = v; };
  let raf = 0;
  signal.addEventListener("abort", () => cancelAnimationFrame(raf));
  const animate = (input: HTMLInputElement, from: number, to: number, ms: number, onDone?: () => void) => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      input.value = String(to); input.dispatchEvent(new Event("input")); onDone?.(); return;
    }
    cancelAnimationFrame(raf);
    const t0 = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / ms), e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      input.value = String(from + (to - from) * e);
      input.dispatchEvent(new Event("input"));
      if (k < 1) raf = requestAnimationFrame(step); else onDone?.();
    };
    raf = requestAnimationFrame(step);
  };
  const dragX = (cv: HTMLCanvasElement, getP: () => P | null, input: HTMLInputElement) => {
    let down = false;
    const move = (e: Event) => {
      const P = getP(); if (!P) return;
      const r = cv.getBoundingClientRect();
      const x = P.ix((e as PointerEvent).clientX - r.left);
      input.value = String(Math.min(+input.max, Math.max(+input.min, x)));
      input.dispatchEvent(new Event("input"));
    };
    on(cv, "pointerdown", (e) => { down = true; cv.setPointerCapture((e as PointerEvent).pointerId); move(e); });
    on(cv, "pointermove", (e) => { if (down) move(e); });
    on(cv, "pointerup", () => (down = false));
    on(cv, "pointercancel", () => (down = false));
  };
  return { $, on, text, animate, dragX };
}
type Kit = ReturnType<typeof makeKit>;

/* ---------- Lab 1: secant → tangent ---------- */
function secant({ $, on, text, animate }: Kit) {
  const cv = $<HTMLCanvasElement>("canvas"), A = $<HTMLInputElement>("#sec-a"), H = $<HTMLInputElement>("#sec-h");
  const f: Fn = (x) => 0.25 * x ** 3 - x + 1, fp: Fn = (x) => 0.75 * x * x - 1;
  function draw() {
    const a = +A.value;
    let h = +H.value;
    if (Math.abs(h) < 0.001) h = h < 0 ? -0.001 : 0.001;
    const P = Plot(cv, -3.6, 3.6, -2.5, 4.5);
    const m = (f(a + h) - f(a)) / h;
    line(P, a, f(a), fp(a), css("--deriv"), 1.8, [6, 5]);
    line(P, a, f(a), m, css("--tangent"), 2.2);
    curve(P, f, css("--accent"), 3);
    const c = P.c;
    c.save(); c.strokeStyle = css("--muted"); c.setLineDash([3, 3]); c.lineWidth = 1.2;
    c.beginPath(); c.moveTo(P.X(a), P.Y(f(a))); c.lineTo(P.X(a + h), P.Y(f(a))); c.lineTo(P.X(a + h), P.Y(f(a + h))); c.stroke(); c.restore();
    label(P, "h", a + h / 2, f(a), css("--muted"), -4, f(a + h) > f(a) ? 16 : -6);
    dot(P, a, f(a), css("--accent"), 6);
    dot(P, a + h, f(a + h), css("--tangent"), 6, true);
    label(P, "P", a, f(a), css("--ink"), -18, -8);
    label(P, "Q", a + h, f(a + h), css("--tangent"));
    text("#sec-pt", `a = ${fmt(a, 2)}, h = ${fmt(h, 3)}`);
    text("#sec-m", fmt(m, 4));
    text("#sec-d", fmt(fp(a), 4));
  }
  on(A, "input", draw); on(H, "input", draw);
  on($("#sec-anim"), "click", () => { H.value = "1.8"; animate(H, 1.8, 0.001, 2600); });
  return draw;
}

/* ---------- Lab 2: trace f' ---------- */
function trace({ $, on, text, animate, dragX }: Kit) {
  const top = $<HTMLCanvasElement>("#tr-top"), bot = $<HTMLCanvasElement>("#tr-bot");
  const sel = $<HTMLSelectElement>("#tr-fn"), X = $<HTMLInputElement>("#tr-x");
  interface F { f: Fn; fp: Fn; y: [number, number]; yd: [number, number]; note: string; bad: (x: number) => boolean }
  const FN: Record<string, F> = {
    cubic: { f: (x) => x ** 3 - 3 * x, fp: (x) => 3 * x * x - 3, y: [-4, 4], yd: [-4, 10], note: "Peaks and valleys of f (x = ±1) are exactly where f′ crosses zero. Where f rises, f′ is above the axis.", bad: () => false },
    sin: { f: Math.sin, fp: Math.cos, y: [-1.6, 1.6], yd: [-1.6, 1.6], note: "The slope of sin x traces out cos x. You will prove this in §3.3.", bad: () => false },
    abs: { f: Math.abs, fp: (x) => (x > 0 ? 1 : x < 0 ? -1 : NaN), y: [-1, 3], yd: [-2, 2], note: "Slope is −1 on the left and +1 on the right. At the corner x = 0 the two don't agree, so f′(0) does not exist. f′ has a jump there.", bad: (x) => Math.abs(x) < 0.03 },
    cbrt: { f: Math.cbrt, fp: (x) => 1 / (3 * Math.cbrt(x * x)), y: [-1.8, 1.8], yd: [-0.5, 4], note: "Near x = 0 the tangent becomes vertical and f′ shoots to infinity. f is continuous at 0 but not differentiable.", bad: (x) => Math.abs(x) < 0.03 },
    jump: { f: (x) => (x < 1 ? 0.5 * x : 0.5 * x + 1.2), fp: (x) => (Math.abs(x - 1) < 1e-9 ? NaN : 0.5), y: [-2.2, 3.2], yd: [-1, 1.5], note: "At x = 1 the graph jumps, so it is not continuous there, and therefore not differentiable. The slope is 0.5 everywhere else.", bad: (x) => Math.abs(x - 1) < 0.03 },
  };
  let Ptop: P | null = null;
  function draw() {
    const F = FN[sel.value], x = +X.value;
    Ptop = Plot(top, -3.2, 3.2, F.y[0], F.y[1]);
    const m = F.fp(x), bad = F.bad(x) || !isFinite(m) || Math.abs(m) > 50;
    if (!bad) line(Ptop, x, F.f(x), m, css("--tangent"), 2);
    if (sel.value === "jump") {
      curve(Ptop, F.f, css("--accent"), 3, -3.2, 0.999); curve(Ptop, F.f, css("--accent"), 3, 1, 3.2);
      dot(Ptop, 1, 0.5, css("--accent"), 5, true); dot(Ptop, 1, 1.7, css("--accent"), 5);
    } else curve(Ptop, F.f, css("--accent"), 3);
    dot(Ptop, x, F.f(x), css("--tangent"), 6);
    label(Ptop, "f", 2.7, F.f(2.7), css("--accent"), 6, -8);
    const Pb = Plot(bot, -3.2, 3.2, F.yd[0], F.yd[1]);
    curve(Pb, F.fp, css("--deriv"), 3, -3.2, x);
    if (!bad) dot(Pb, x, m, css("--deriv"), 6);
    label(Pb, "f′ traced so far", -3.1, F.yd[1], css("--deriv"), 4, 16);
    for (const P of [Ptop, Pb]) {
      const c = P.c;
      c.save(); c.strokeStyle = css("--muted"); c.setLineDash([2, 4]); c.beginPath(); c.moveTo(P.X(x), 0); c.lineTo(P.X(x), P.h); c.stroke(); c.restore();
    }
    text("#tr-xv", fmt(x, 2));
    text("#tr-m", bad ? "does not exist" : fmt(m, 3));
    const ok = $("#tr-ok");
    ok.textContent = bad ? "No" : "Yes";
    ok.style.color = bad ? css("--bad") : css("--good");
    text("#tr-note", F.note);
  }
  on(sel, "change", () => { X.value = "-2.8"; draw(); });
  on(X, "input", draw);
  dragX(top, () => Ptop, X);
  on($("#tr-anim"), "click", () => animate(X, -3, 3, 4000));
  return draw;
}

/* ---------- Lab 3: why e ---------- */
function exp({ $, on, text, animate }: Kit) {
  const cv = $<HTMLCanvasElement>("canvas"), A = $<HTMLInputElement>("#exp-a");
  function draw() {
    const a = +A.value, k = Math.log(a);
    const P = Plot(cv, -2.5, 2.5, -1, 5.5);
    line(P, 0, 1, k, css("--tangent"), 2);
    curve(P, (x) => k * a ** x, css("--deriv"), 3, undefined, undefined, [7, 5]);
    curve(P, (x) => a ** x, css("--accent"), 3);
    dot(P, 0, 1, css("--tangent"), 6);
    label(P, "aˣ", 1.6, a ** 1.6, css("--accent"), 8, 4);
    label(P, "(aˣ)′", 1.2, k * a ** 1.2, css("--deriv"), 10, 14);
    const near = Math.abs(a - Math.E) < 0.01;
    text("#exp-av", `a = ${a.toFixed(3)}${near ? "  ≈ e" : ""}`);
    text("#exp-m", k.toFixed(4) + (near ? " ≈ 1" : ""));
    text("#exp-k", `${k.toFixed(3)} · ${a.toFixed(2)}ˣ`);
  }
  on(A, "input", draw);
  on($("#exp-e"), "click", () => animate(A, +A.value, Math.E, 900));
  return draw;
}

/* ---------- Lab 4: product rule rectangle ---------- */
function prod({ $, on, text }: Kit) {
  const cv = $<HTMLCanvasElement>("canvas"), X = $<HTMLInputElement>("#pr-x"), D = $<HTMLInputElement>("#pr-dx");
  function draw() {
    const x = +X.value, dx = +D.value;
    const u = x, v = x * x, du = dx, dv = (x + dx) ** 2 - x * x;
    const { c, w, h } = setup(cv);
    c.fillStyle = css("--surface"); c.fillRect(0, 0, w, h);
    const pad = 34, maxU = 2.6, maxV = 6.8;
    const sx = (w - pad * 2) / maxU, sy = (h - pad * 2) / maxV;
    const ox = pad, oy = h - pad;
    const rect = (x0: number, y0: number, ww: number, hh: number, fill: string, stroke: string) => {
      c.fillStyle = fill; c.fillRect(ox + x0 * sx, oy - (y0 + hh) * sy, ww * sx, hh * sy);
      c.strokeStyle = stroke; c.lineWidth = 1.5; c.strokeRect(ox + x0 * sx, oy - (y0 + hh) * sy, ww * sx, hh * sy);
    };
    const mix = (t: string, p: number) => `color-mix(in srgb, ${css(t)} ${p}%, ${css("--surface")})`;
    rect(0, 0, u, v, mix("--axis", 22), css("--axis"));
    rect(0, v, u, dv, mix("--accent", 45), css("--accent"));
    rect(u, 0, du, v, mix("--deriv", 45), css("--deriv"));
    rect(u, v, du, dv, mix("--tangent", 60), css("--tangent"));
    c.fillStyle = css("--ink"); c.font = "600 13px " + css("--font-mono");
    c.fillText("u·v", ox + (u * sx) / 2 - 12, oy - (v * sy) / 2);
    c.fillText("u = " + u.toFixed(2), ox + (u * sx) / 2 - 30, oy + 20);
    c.save(); c.translate(ox - 12, oy - (v * sy) / 2 + 30); c.rotate(-Math.PI / 2); c.fillText("v = " + v.toFixed(2), 0, 0); c.restore();
    if (dv * sy > 16) { c.fillStyle = css("--accent"); c.fillText("u·Δv", ox + (u * sx) / 2 - 16, oy - (v + dv / 2) * sy + 5); }
    if (du * sx > 34) { c.fillStyle = css("--deriv"); c.fillText("v·Δu", ox + (u + du / 2) * sx - 16, oy - (v * sy) / 2); }
    text("#pr-uv", `u = ${u.toFixed(2)}, v = ${v.toFixed(2)}`);
    text("#pr-a", (u * dv).toFixed(4));
    text("#pr-b", (v * du).toFixed(4));
    text("#pr-c", (du * dv).toFixed(4));
    text("#pr-q", dx > 0 ? (((u + du) * (v + dv) - u * v) / dx).toFixed(4) : "Δx = 0");
    text("#pr-d", (3 * x * x).toFixed(4));
  }
  on(X, "input", draw); on(D, "input", draw);
  return draw;
}

/* ---------- Lab 5a: slope of sin ---------- */
function sin({ $, on, text, animate, dragX }: Kit) {
  const top = $<HTMLCanvasElement>("#sin-top"), bot = $<HTMLCanvasElement>("#sin-bot");
  const X = $<HTMLInputElement>("#sin-x"), C = $<HTMLInputElement>("#sin-cos");
  const pif = (x: number) => {
    const k = Math.round(x / (Math.PI / 2));
    return (k === 0 ? "0" : k % 2 === 0 ? (k / 2 === 1 ? "π" : k / 2 === -1 ? "−π" : k / 2 + "π") : k + "π/2").replace("-", "−");
  };
  const opts: PlotOpts = { xstep: Math.PI / 2, ystep: 0.5, xfmt: pif };
  let Ptop: P | null = null;
  function draw() {
    const x = +X.value;
    Ptop = Plot(top, -6.6, 6.6, -1.6, 1.6, opts);
    line(Ptop, x, Math.sin(x), Math.cos(x), css("--tangent"), 2);
    curve(Ptop, Math.sin, css("--accent"), 3);
    dot(Ptop, x, Math.sin(x), css("--tangent"), 6);
    label(Ptop, "sin x", 5.0, 1.25, css("--accent"), 0, 0);
    const Pb = Plot(bot, -6.6, 6.6, -1.6, 1.6, opts);
    if (C.checked) curve(Pb, Math.cos, css("--axis"), 6);
    curve(Pb, Math.cos, css("--deriv"), 3, -6.6, x);
    dot(Pb, x, Math.cos(x), css("--deriv"), 6);
    label(Pb, "slope of sin", -6.5, 1.6, css("--deriv"), 4, 16);
    text("#sin-xv", fmt(x, 2));
    text("#sin-m", fmt(Math.cos(x), 3));
    text("#sin-c", fmt(Math.cos(x), 3));
  }
  on(X, "input", draw); on(C, "change", draw);
  dragX(top, () => Ptop, X);
  on($("#sin-anim"), "click", () => animate(X, -6.28, 6.28, 5000, () => { C.checked = true; draw(); }));
  return draw;
}

/* ---------- Lab 5b: unit circle ---------- */
function circ({ $, on, text }: Kit) {
  const cv = $<HTMLCanvasElement>("canvas"), T = $<HTMLInputElement>("#circ-t");
  function draw() {
    const t = +T.value;
    const P = Plot(cv, -0.25, 1.25, -0.25, 1.25, { xstep: 0.25, ystep: 0.25 });
    const c = P.c, R = P.X(1) - P.X(0);
    c.save();
    c.strokeStyle = css("--axis"); c.lineWidth = 1.5; c.beginPath(); c.arc(P.X(0), P.Y(0), R, -Math.PI / 2 - 0.3, 0.3, false); c.stroke();
    c.strokeStyle = css("--ink"); c.lineWidth = 1.5; c.beginPath(); c.moveTo(P.X(0), P.Y(0)); c.lineTo(P.X(Math.cos(t)), P.Y(Math.sin(t))); c.stroke();
    c.strokeStyle = css("--accent"); c.lineWidth = 5; c.beginPath(); c.arc(P.X(0), P.Y(0), R, 0, -t, true); c.stroke();
    c.strokeStyle = css("--deriv"); c.lineWidth = 4; c.beginPath(); c.moveTo(P.X(Math.cos(t)), P.Y(0)); c.lineTo(P.X(Math.cos(t)), P.Y(Math.sin(t))); c.stroke();
    c.restore();
    dot(P, Math.cos(t), Math.sin(t), css("--ink"), 4);
    label(P, "θ", 0.12 * Math.cos(t / 2), 0.12 * Math.sin(t / 2), css("--ink"), 2, 4);
    label(P, "sin θ", Math.cos(t), Math.sin(t) / 2, css("--deriv"), 8, 4);
    text("#circ-a", t.toFixed(4));
    text("#circ-s", Math.sin(t).toFixed(4));
    text("#circ-r", (Math.sin(t) / t).toFixed(5));
  }
  on(T, "input", draw);
  return draw;
}

/* ---------- Lab 6: chain rule number lines ---------- */
function chain({ $, on, text }: Kit) {
  const cv = $<HTMLCanvasElement>("canvas"), X = $<HTMLInputElement>("#ch-x"), D = $<HTMLInputElement>("#ch-dx");
  function draw() {
    const x = +X.value, dx = +D.value, u = x * x, u2 = (x + dx) ** 2, y = Math.sin(u), y2 = Math.sin(u2);
    const { c, w, h } = setup(cv);
    c.fillStyle = css("--surface"); c.fillRect(0, 0, w, h);
    const L = 70, Rr = w - 24;
    const rows = [
      { name: "x", lo: 0, hi: 2.6, a: x, b: x + dx, col: css("--ink"), y: h * 0.18 },
      { name: "u = x²", lo: 0, hi: 6.8, a: u, b: u2, col: css("--accent"), y: h * 0.5 },
      { name: "y = sin u", lo: -1.1, hi: 1.1, a: y, b: y2, col: css("--deriv"), y: h * 0.82 },
    ];
    type Row = (typeof rows)[number];
    const px = (r: Row, v: number) => L + ((v - r.lo) / (r.hi - r.lo)) * (Rr - L);
    for (let i = 0; i < 2; i++) {
      const r1 = rows[i], r2 = rows[i + 1];
      c.fillStyle = `color-mix(in srgb, ${r2.col} 14%, transparent)`;
      c.beginPath(); c.moveTo(px(r1, r1.a), r1.y + 8); c.lineTo(px(r1, r1.b), r1.y + 8); c.lineTo(px(r2, r2.b), r2.y - 8); c.lineTo(px(r2, r2.a), r2.y - 8); c.closePath(); c.fill();
    }
    c.font = "11px " + css("--font-mono");
    for (const r of rows) {
      c.strokeStyle = css("--axis"); c.lineWidth = 1.5; c.beginPath(); c.moveTo(L, r.y); c.lineTo(Rr, r.y); c.stroke();
      c.fillStyle = css("--muted");
      const st = niceStep(r.hi - r.lo) * 1.5;
      for (let v = Math.ceil(r.lo / st) * st; v <= r.hi + 1e-9; v += st) {
        const p = px(r, v);
        c.beginPath(); c.moveTo(p, r.y - 4); c.lineTo(p, r.y + 4); c.stroke();
        c.fillText(String(+v.toFixed(1)), p - 6, r.y + 18);
      }
      c.fillStyle = r.col; c.font = "600 13px " + css("--font-mono"); c.fillText(r.name, 4, r.y - 10); c.font = "11px " + css("--font-mono");
      const a = px(r, Math.min(r.a, r.b)), b = px(r, Math.max(r.a, r.b));
      c.fillStyle = r.col; c.fillRect(a, r.y - 5, Math.max(2, b - a), 10);
      c.beginPath(); c.arc(px(r, r.a), r.y, 5, 0, Math.PI * 2); c.fill();
    }
    text("#ch-1", `${((u2 - u) / dx).toFixed(3)}  (2x = ${(2 * x).toFixed(3)})`);
    const dydu = Math.abs(u2 - u) > 1e-12 ? (y2 - y) / (u2 - u) : Math.cos(u);
    text("#ch-2", `${dydu.toFixed(3)}  (cos u = ${Math.cos(u).toFixed(3)})`);
    text("#ch-3", (((u2 - u) / dx) * dydu).toFixed(4));
    text("#ch-4", (2 * x * Math.cos(u)).toFixed(4));
  }
  on(X, "input", draw); on(D, "input", draw);
  return draw;
}

/* ---------- Lab 7: implicit curves ---------- */
function imp({ $, on, text }: Kit) {
  const cv = $<HTMLCanvasElement>("canvas"), sel = $<HTMLSelectElement>("#imp-c");
  type F2 = (x: number, y: number) => number;
  interface Curve { F: F2; Fx: F2; Fy: F2; v: number; p: [number, number]; f: string }
  const CUR: Record<string, Curve> = {
    circle: { F: (x, y) => x * x + y * y - 25, Fx: (x) => 2 * x, Fy: (_x, y) => 2 * y, v: 7, p: [3, 4], f: "−x / y" },
    folium: { F: (x, y) => x ** 3 + y ** 3 - 6 * x * y, Fx: (x, y) => 3 * x * x - 6 * y, Fy: (x, y) => 3 * y * y - 6 * x, v: 5, p: [3, 3], f: "(2y − x²) / (y² − 2x)" },
    ellipse: { F: (x, y) => x * x - x * y + y * y - 3, Fx: (x, y) => 2 * x - y, Fy: (x, y) => 2 * y - x, v: 3, p: [-1, 1], f: "(y − 2x) / (2y − x)" },
    kampyle: { F: (x, y) => y * y - 5 * x ** 4 + x * x, Fx: (x) => -20 * x ** 3 + 2 * x, Fy: (_x, y) => 2 * y, v: 3, p: [1, 2], f: "(10x³ − x) / y" },
    wild: { F: (x, y) => Math.sin(x + y) - y * y * Math.cos(x), Fx: (x, y) => Math.cos(x + y) + y * y * Math.sin(x), Fy: (x, y) => Math.cos(x + y) - 2 * y * Math.cos(x), v: 6, p: [0, 0], f: "(y² sin x + cos(x+y)) / (2y cos x − cos(x+y))" },
  };
  let pt: [number, number] | null = null, P: P | null = null;
  function project(C: Curve, x: number, y: number): [number, number] {
    for (let i = 0; i < 40; i++) {
      const F = C.F(x, y), gx = C.Fx(x, y), gy = C.Fy(x, y), g2 = gx * gx + gy * gy;
      if (g2 < 1e-12) break;
      x -= (F * gx) / g2; y -= (F * gy) / g2;
      if (Math.abs(F) < 1e-10) break;
    }
    return [x, y];
  }
  function draw() {
    const C = CUR[sel.value];
    if (!pt) pt = [...C.p];
    P = Plot(cv, -C.v, C.v, -C.v, C.v);
    const N = 220, step = (2 * C.v) / N, c = P.c;
    const val = new Float64Array((N + 1) * (N + 1));
    for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) val[j * (N + 1) + i] = C.F(-C.v + i * step, -C.v + j * step);
    c.save(); c.strokeStyle = css("--accent"); c.lineWidth = 2.6; c.lineCap = "round"; c.beginPath();
    const interp = (x1: number, y1: number, v1: number, x2: number, y2: number, v2: number): [number, number] => {
      const t = v1 / (v1 - v2);
      return [x1 + t * (x2 - x1), y1 + t * (y2 - y1)];
    };
    for (let j = 0; j < N; j++)
      for (let i = 0; i < N; i++) {
        const x0 = -C.v + i * step, y0 = -C.v + j * step, x1 = x0 + step, y1 = y0 + step;
        const a = val[j * (N + 1) + i], b = val[j * (N + 1) + i + 1], d = val[(j + 1) * (N + 1) + i], e = val[(j + 1) * (N + 1) + i + 1];
        const pts: [number, number][] = [];
        if (a < 0 !== b < 0) pts.push(interp(x0, y0, a, x1, y0, b));
        if (b < 0 !== e < 0) pts.push(interp(x1, y0, b, x1, y1, e));
        if (e < 0 !== d < 0) pts.push(interp(x1, y1, e, x0, y1, d));
        if (d < 0 !== a < 0) pts.push(interp(x0, y1, d, x0, y0, a));
        for (let k = 0; k + 1 < pts.length; k += 2) { c.moveTo(P.X(pts[k][0]), P.Y(pts[k][1])); c.lineTo(P.X(pts[k + 1][0]), P.Y(pts[k + 1][1])); }
      }
    c.stroke(); c.restore();
    const [x, y] = pt, gx = C.Fx(x, y), gy = C.Fy(x, y);
    const vertical = Math.abs(gy) < 1e-6 * Math.max(1, Math.abs(gx));
    const m = vertical ? Infinity : -gx / gy;
    line(P, x, y, m, css("--tangent"), 2.2);
    dot(P, x, y, css("--tangent"), 7);
    text("#imp-p", `(${fmt(x, 3)}, ${fmt(y, 3)})`);
    text("#imp-f", "dy/dx = " + C.f);
    text("#imp-m", vertical ? "vertical tangent" : Math.abs(m) < 5e-4 ? "0 (horizontal)" : fmt(m, 3));
  }
  let down = false;
  const move = (e: Event) => {
    if (!P) return;
    const r = cv.getBoundingClientRect(), ev = e as PointerEvent;
    pt = project(CUR[sel.value], P.ix(ev.clientX - r.left), P.iy(ev.clientY - r.top));
    draw();
  };
  on(cv, "pointerdown", (e) => { down = true; cv.setPointerCapture((e as PointerEvent).pointerId); move(e); });
  on(cv, "pointermove", (e) => { if (down) move(e); });
  on(cv, "pointerup", () => (down = false));
  on(cv, "pointercancel", () => (down = false));
  on(sel, "change", () => { pt = null; draw(); });
  return draw;
}

const LABS: Record<LabId, (k: Kit) => () => void> = {
  "lab-secant": secant,
  "lab-trace": trace,
  "lab-exp": exp,
  "lab-prod": prod,
  "lab-sin": sin,
  "lab-circ": circ,
  "lab-chain": chain,
  "lab-imp": imp,
};

/** Start a lab inside root. Redraws on resize and theme change. Returns cleanup. */
export function initLab(id: LabId, root: HTMLElement): () => void {
  const ac = new AbortController();
  const draw = LABS[id](makeKit(root, ac.signal));
  let raf = 0;
  const schedule = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); };
  const ro = new ResizeObserver(schedule);
  ro.observe(root);
  const mo = new MutationObserver(schedule);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", schedule, { signal: ac.signal });
  document.fonts?.ready.then(() => { if (!ac.signal.aborted) schedule(); });
  draw();
  return () => { ac.abort(); ro.disconnect(); mo.disconnect(); cancelAnimationFrame(raf); };
}
