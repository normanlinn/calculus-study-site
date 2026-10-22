import { compile } from "./expr";

// Random practice problems with worked solutions. Text uses TeX between \( \) and \[ \]; render with tex().

export type GenSection = "2.8" | "3.1" | "3.2" | "3.3" | "3.4" | "3.5" | "3.6" | "3.9" | "3.10" | "3.11" | "4.1";
export type GenMix = "mixed" | "mixed-q3" | "mixed-q4";
const Q3: GenSection[] = ["2.8", "3.1", "3.2", "3.3", "3.4", "3.5"];
const Q4: GenSection[] = ["3.6", "3.9", "3.10", "3.11", "4.1"];

export interface GenProblem {
  section: GenSection;
  kind: string;
  question: string;
  hint: string;
  steps: string[];
  answer: string;
  /** When set, the problem has a single number answer the page can check. */
  numeric?: { value: number; label: string };
}

/* ---------- small helpers ---------- */
const ri = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1));
const nz = (a: number, b: number) => {
  let v = 0;
  while (v === 0) v = ri(a, b);
  return v;
};
const pick = <T,>(xs: T[]): T => xs[ri(0, xs.length - 1)];
const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));

/** A fraction n/d in lowest terms, as TeX. */
function frac(n: number, d: number): string {
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d) || 1;
  n /= g; d /= g;
  if (d === 1) return String(n);
  return (n < 0 ? "-" : "") + `\\frac{${Math.abs(n)}}{${d}}`;
}

interface Term { c: number; body: string }

/** Join terms like 3x^2 - x + 5 with correct signs. A body of "" is a constant. */
function join(terms: Term[]): string {
  const live = terms.filter((t) => t.c !== 0);
  if (!live.length) return "0";
  return live
    .map((t, i) => {
      const abs = Math.abs(t.c);
      const coef = t.body === "" ? String(abs) : abs === 1 ? "" : String(abs);
      const text = coef + t.body;
      if (i === 0) return (t.c < 0 ? "-" : "") + text;
      return (t.c < 0 ? " - " : " + ") + text;
    })
    .join("");
}

const xp = (p: number) => (p === 0 ? "" : p === 1 ? "x" : `x^{${p}}`);
const poly = (cs: [number, number][]) => join(cs.map(([c, p]) => ({ c, body: xp(p) })));
/** Coefficient in front of a body: 1 → "", -1 → "-". */
const lead = (c: number, body: string) => (c === 1 ? body : c === -1 ? "-" + body : `${c}${body}`);
/** Wrap in parentheses when it's a sum. */
const paren = (s: string) => (/[+-]/.test(s.slice(1)) ? `(${s})` : s);

/* ---------- polynomials (integer powers) ---------- */
type Poly = Map<number, number>;
const P = (cs: [number, number][]): Poly => {
  const m: Poly = new Map();
  for (const [c, p] of cs) m.set(p, (m.get(p) ?? 0) + c);
  return m;
};
const mul = (a: Poly, b: Poly): Poly => {
  const m: Poly = new Map();
  for (const [pa, ca] of a) for (const [pb, cb] of b) m.set(pa + pb, (m.get(pa + pb) ?? 0) + ca * cb);
  return m;
};
const deriv = (a: Poly): Poly => {
  const m: Poly = new Map();
  for (const [p, c] of a) if (p !== 0) m.set(p - 1, (m.get(p - 1) ?? 0) + c * p);
  return m;
};
const polyTeX = (a: Poly) => poly([...a.entries()].sort((x, y) => y[0] - x[0]).map(([p, c]) => [c, p]));
const evalPoly = (a: Poly, x: number) => [...a.entries()].reduce((s, [p, c]) => s + c * x ** p, 0);

/* ---------- §2.8 ---------- */
function defQuadratic(): GenProblem {
  const a = nz(-5, 5), b = ri(-9, 9), c = ri(-9, 9);
  const f = poly([[a, 2], [b, 1], [c, 0]]);
  const fxh = join([{ c: a, body: "(x+h)^2" }, { c: b, body: "(x+h)" }, { c, body: "" }]);
  const expanded = join([
    { c: a, body: "x^2" }, { c: 2 * a, body: "xh" }, { c: a, body: "h^2" }, { c: b, body: "x" }, { c: b, body: "h" }, { c, body: "" },
  ]);
  const diff = join([{ c: 2 * a, body: "xh" }, { c: a, body: "h^2" }, { c: b, body: "h" }]);
  const inner = join([{ c: 2 * a, body: "x" }, { c: a, body: "h" }, { c: b, body: "" }]);
  const ans = poly([[2 * a, 1], [b, 0]]);
  return {
    section: "2.8", kind: "Limit definition",
    question: `Use the limit definition to find \\(f'(x)\\) for \\(f(x)=${f}\\).`,
    hint: `<p>Expand \\(f(x+h)\\), subtract \\(f(x)\\), factor out \\(h\\), cancel it, and only then let \\(h\\to0\\).</p>`,
    steps: [
      `<p><strong>Write \\(f(x+h)\\).</strong> \\(f(x+h)=${fxh}\\)</p>`,
      `<p><strong>Expand.</strong> \\(f(x+h)=${expanded}\\)</p>`,
      `<p><strong>Subtract \\(f(x)\\).</strong> Every term without an \\(h\\) cancels: \\(f(x+h)-f(x)=${diff}\\)</p>`,
      `<p><strong>Divide by \\(h\\).</strong> \\(\\dfrac{f(x+h)-f(x)}{h}=${inner}\\)</p>`,
      `<p><strong>Let \\(h\\to0\\).</strong> The term with \\(h\\) disappears.</p>`,
    ],
    answer: `\\(f'(x)=${ans}\\)`,
  };
}

function slopeQuadratic(): GenProblem {
  const a = nz(-5, 5), b = ri(-9, 9), c = ri(-9, 9), k = nz(-4, 4);
  const f = poly([[a, 2], [b, 1], [c, 0]]);
  const m = 2 * a * k + b;
  return {
    section: "2.8", kind: "Tangent slope",
    question: `Find the slope of the tangent line to \\(f(x)=${f}\\) at \\(x=${k}\\).`,
    hint: `<p>The slope of the tangent at \\(x=a\\) is \\(f'(a)\\). Find \\(f'(x)\\) first, then plug in.</p>`,
    steps: [
      `<p><strong>Differentiate.</strong> \\(f'(x)=${poly([[2 * a, 1], [b, 0]])}\\)</p>`,
      `<p><strong>Plug in \\(x=${k}\\).</strong> \\(f'(${k})=${2 * a}(${k})${b < 0 ? " - " + -b : " + " + b}=${m}\\)</p>`,
    ],
    answer: `Slope \\(=${m}\\)`,
    numeric: { value: m, label: "Slope" },
  };
}

/* ---------- §3.1 ---------- */
function polyDeriv(): GenProblem {
  const pows = [6, 5, 4, 3, 2, 1, 0].filter(() => Math.random() < 0.6).slice(0, 4);
  if (pows.length < 3) pows.splice(0, pows.length, 5, 3, 1, 0);
  const cs: [number, number][] = pows.map((p) => [nz(-9, 9), p]);
  const f = P(cs), d = deriv(f);
  return {
    section: "3.1", kind: "Power rule",
    question: `Differentiate \\(y=${polyTeX(f)}\\).`,
    hint: `<p>Do each term separately: bring the power down, subtract one. A constant becomes 0.</p>`,
    steps: cs.map(([c, p]) =>
      p === 0
        ? `<p>\\(${c}\\) is a constant, so its derivative is \\(0\\).</p>`
        : `<p>\\(\\dfrac{d}{dx}\\big(${lead(c, xp(p))}\\big)=${c}\\cdot${p}${p - 1 ? `x^{${p - 1}}` : ""}=${p === 1 ? String(c * p) : lead(c * p, xp(p - 1))}\\)</p>`,
    ),
    answer: `\\(y'=${polyTeX(d)}\\)`,
  };
}

function rewritePowers(): GenProblem {
  const a = nz(-8, 8), b = nz(-6, 6), n = ri(1, 4), c = nz(-5, 5);
  const q = join([{ c: a, body: "\\sqrt{x}" }, { c: b, body: `\\frac{1}{x^{${n}}}`.replace("x^{1}", "x") }, { c, body: "e^x" }]);
  const r = join([{ c: a, body: "x^{1/2}" }, { c: b, body: `x^{-${n}}` }, { c, body: "e^x" }]);
  const cf = (f: string) => (f === "1" ? "" : f === "-1" ? "-" : f);
  const t1 = `${cf(frac(a, 2))}x^{-1/2}`, t2 = lead(-b * n, `x^{-${n + 1}}`);
  const half = frac(Math.abs(a), 2);
  const piece1 = half.startsWith("\\frac") ? `\\frac{${half.match(/\{(\d+)\}\{/)![1]}}{${half.match(/\}\{(\d+)\}$/)![1]}\\sqrt{x}}` : `\\frac{${half}}{\\sqrt{x}}`;
  const piece2 = `\\frac{${Math.abs(b * n)}}{x^{${n + 1}}}`;
  const fin = `${a < 0 ? "-" : ""}${piece1}${-b * n < 0 ? " - " : " + "}${piece2}${c < 0 ? " - " : " + "}${Math.abs(c) === 1 ? "" : Math.abs(c)}e^x`;
  return {
    section: "3.1", kind: "Rewrite, then power rule",
    question: `Differentiate \\(f(x)=${q}\\).`,
    hint: `<p>Rewrite roots and fractions as powers first: \\(\\sqrt{x}=x^{1/2}\\) and \\(\\frac{1}{x^n}=x^{-n}\\). And \\((e^x)'=e^x\\).</p>`,
    steps: [
      `<p><strong>Rewrite as powers.</strong> \\(f(x)=${r}\\)</p>`,
      `<p><strong>Power rule on each.</strong> \\(${lead(a, "x^{1/2}")}\\to ${t1}\\), \\(\\ ${lead(b, `x^{-${n}}`)}\\to ${t2}\\), \\(\\ ${lead(c, "e^x")}\\to ${lead(c, "e^x")}\\)</p>`,
      `<p class="why">Subtracting 1 from a negative power makes it more negative: \\(-${n}-1=-${n + 1}\\).</p>`,
    ],
    answer: `\\(f'(x)=${fin}\\)`,
  };
}

function tangentCubic(): GenProblem {
  const a = nz(-3, 3), b = ri(-6, 6), c = ri(-6, 6), k = nz(-2, 2);
  const f = P([[a, 3], [b, 1], [c, 0]]);
  const y0 = evalPoly(f, k), m = 3 * a * k * k + b, q = y0 - m * k;
  return {
    section: "3.1", kind: "Tangent line",
    question: `Find the tangent line to \\(y=${polyTeX(f)}\\) at \\(x=${k}\\).`,
    hint: `<p>You need a point (plug \\(x\\) into \\(y\\)) and a slope (plug \\(x\\) into \\(y'\\)). Then use \\(y-y_1=m(x-x_1)\\).</p>`,
    steps: [
      `<p><strong>Point.</strong> \\(y(${k})=${y0}\\), so the point is \\((${k},\\,${y0})\\).</p>`,
      `<p><strong>Slope.</strong> \\(y'=${polyTeX(deriv(f))}\\), so \\(y'(${k})=${m}\\).</p>`,
      `<p><strong>Point-slope form.</strong> \\(y-(${y0})=${m}(x-(${k}))\\)</p>`,
    ],
    answer: `\\(y=${poly([[m, 1], [q, 0]])}\\)`,
    numeric: { value: m, label: "Slope of the tangent" },
  };
}

/* ---------- §3.2 ---------- */
function productRule(): GenProblem {
  const p = ri(1, 3), qq = ri(1, 3), a = nz(-5, 5), b = nz(-9, 9), c = nz(-5, 5), d = nz(-9, 9);
  const f = P([[a, p], [b, 0]]), g = P([[c, qq], [d, 0]]);
  const F = polyTeX(f), G = polyTeX(g), dF = polyTeX(deriv(f)), dG = polyTeX(deriv(g));
  return {
    section: "3.2", kind: "Product rule",
    question: `Differentiate \\(y=(${F})(${G})\\).`,
    hint: `<p>First d-second plus second d-first: \\((fg)'=f\\,g'+g\\,f'\\).</p>`,
    steps: [
      `<p><strong>Name the pieces.</strong> \\(f=${F}\\), \\(f'=${dF}\\). \\(g=${G}\\), \\(g'=${dG}\\).</p>`,
      `<p><strong>Product rule.</strong> \\(y'=(${F})(${dG})+(${G})(${dF})\\)</p>`,
      `<p><strong>Multiply out and combine</strong> (optional): \\(y'=${polyTeX(deriv(mul(f, g)))}\\)</p>`,
      `<p class="why">Check: expanding first gives \\(y=${polyTeX(mul(f, g))}\\), and its derivative is the same.</p>`,
    ],
    answer: `\\(y'=(${F})(${dG})+(${G})(${dF})=${polyTeX(deriv(mul(f, g)))}\\)`,
  };
}

function quotientLinear(): GenProblem {
  let a = 0, b = 0, c = 0, d = 0;
  while (a * d - b * c === 0) { a = nz(-6, 6); b = nz(-9, 9); c = nz(-6, 6); d = nz(-9, 9); }
  const top = poly([[a, 1], [b, 0]]), bot = poly([[c, 1], [d, 0]]);
  const num = a * d - b * c;
  return {
    section: "3.2", kind: "Quotient rule",
    question: `Differentiate \\(y=\\dfrac{${top}}{${bot}}\\).`,
    hint: `<p>Low d-high minus high d-low, over low squared: \\(\\left(\\frac fg\\right)'=\\frac{g\\,f'-f\\,g'}{g^2}\\).</p>`,
    steps: [
      `<p><strong>Pieces.</strong> high \\(=${top}\\), d-high \\(=${a}\\). low \\(=${bot}\\), d-low \\(=${c}\\).</p>`,
      `<p><strong>Quotient rule.</strong> \\(y'=\\dfrac{(${bot})(${a})-(${top})(${c})}{(${bot})^2}\\)</p>`,
      `<p><strong>Simplify the top.</strong> The \\(x\\) terms cancel: \\(${poly([[a * c, 1], [a * d, 0]])}-(${poly([[a * c, 1], [b * c, 0]])})=${num}\\)</p>`,
    ],
    answer: `\\(y'=\\dfrac{${num}}{(${bot})^2}\\)`,
  };
}

function powerTimesExp(): GenProblem {
  const n = ri(2, 5), a = nz(-4, 4);
  return {
    section: "3.2", kind: "Product with eˣ",
    question: `Differentiate \\(y=${lead(a, `x^{${n}}e^x`)}\\).`,
    hint: `<p>Product rule with \\((e^x)'=e^x\\). Then factor out \\(e^x\\).</p>`,
    steps: [
      `<p><strong>Product rule.</strong> \\(y'=${a === 1 ? "" : a === -1 ? "-" : a}\\big(x^{${n}}\\cdot e^x+e^x\\cdot ${n}x^{${n - 1}}\\big)\\)</p>`,
      `<p><strong>Factor</strong> \\(x^{${n - 1}}e^x\\): \\(y'=${lead(a, `x^{${n - 1}}e^x(x+${n})`)}\\)</p>`,
    ].map((s) => s.replace("x^{1}", "x")),
    answer: `\\(y'=${lead(a, `x^{${n - 1}}e^x(x+${n})`).replace("x^{1}", "x")}\\)`,
  };
}

/* ---------- §3.3 ---------- */
function trigCombo(): GenProblem {
  const a = nz(-7, 7), b = nz(-7, 7), c = pick([0, nz(-5, 5)]);
  const q = join([{ c: a, body: "\\sin x" }, { c: b, body: "\\cos x" }, { c, body: "\\tan x" }]);
  const ans = join([{ c: a, body: "\\cos x" }, { c: -b, body: "\\sin x" }, { c, body: "\\sec^2 x" }]);
  return {
    section: "3.3", kind: "Trig derivatives",
    question: `Differentiate \\(y=${q}\\).`,
    hint: `<p>\\((\\sin x)'=\\cos x\\), \\((\\cos x)'=-\\sin x\\), \\((\\tan x)'=\\sec^2x\\). Watch the sign on cos.</p>`,
    steps: [
      `<p>\\(${lead(a, "\\sin x")}\\to ${lead(a, "\\cos x")}\\)</p>`,
      `<p>\\(${lead(b, "\\cos x")}\\to ${lead(b, "(-\\sin x)")}=${lead(-b, "\\sin x")}\\) <span class="why">(“co” gets a minus)</span></p>`,
      ...(c ? [`<p>\\(${lead(c, "\\tan x")}\\to ${lead(c, "\\sec^2x")}\\)</p>`] : []),
    ],
    answer: `\\(y'=${ans}\\)`,
  };
}

function powerTimesTrig(): GenProblem {
  const n = ri(2, 4), useSin = Math.random() < 0.5;
  const fn = useSin ? "\\sin x" : "\\cos x", dfn = useSin ? "\\cos x" : "(-\\sin x)";
  const ans = useSin ? `${n}x^{${n - 1}}\\sin x+x^{${n}}\\cos x` : `${n}x^{${n - 1}}\\cos x-x^{${n}}\\sin x`;
  return {
    section: "3.3", kind: "Product with trig",
    question: `Differentiate \\(y=x^{${n}}${fn}\\).`,
    hint: `<p>Product rule: first d-second plus second d-first.</p>`,
    steps: [
      `<p><strong>Pieces.</strong> \\(f=x^{${n}}\\), \\(f'=${n}x^{${n - 1}}\\). \\(g=${fn}\\), \\(g'=${dfn}\\).</p>`,
      `<p><strong>Product rule.</strong> \\(y'=${n}x^{${n - 1}}\\cdot${fn}+x^{${n}}\\cdot${dfn}\\)</p>`,
    ].map((s) => s.replace(/x\^\{1\}/g, "x")),
    answer: `\\(y'=${ans.replace(/x\^\{1\}/g, "x")}\\)`,
  };
}

function trigLimit(): GenProblem {
  const a = ri(2, 9), b = ri(2, 9), useTan = Math.random() < 0.4;
  const q = useTan ? `\\dfrac{\\tan ${a}x}{\\sin ${b}x}` : `\\dfrac{\\sin ${a}x}{${b}x}`;
  return {
    section: "3.3", kind: "Trig limit",
    question: `Find \\(\\displaystyle\\lim_{x\\to0}${q}\\).`,
    hint: `<p>Make each sine's angle match its denominator, using \\(\\lim_{\\theta\\to0}\\frac{\\sin\\theta}{\\theta}=1\\).</p>`,
    steps: useTan
      ? [
          `<p><strong>Rewrite tan.</strong> \\(\\dfrac{\\tan ${a}x}{\\sin ${b}x}=\\dfrac{\\sin ${a}x}{\\cos ${a}x\\,\\sin ${b}x}\\)</p>`,
          `<p><strong>Build the special limits.</strong> \\(=\\dfrac{\\sin ${a}x}{${a}x}\\cdot\\dfrac{${b}x}{\\sin ${b}x}\\cdot\\dfrac{${a}x}{${b}x}\\cdot\\dfrac{1}{\\cos ${a}x}\\)</p>`,
          `<p><strong>Take the limit.</strong> \\(1\\cdot1\\cdot\\dfrac{${a}}{${b}}\\cdot1\\)</p>`,
        ]
      : [
          `<p><strong>Match the denominator to the angle.</strong> \\(\\dfrac{\\sin ${a}x}{${b}x}=\\dfrac{${a}}{${b}}\\cdot\\dfrac{\\sin ${a}x}{${a}x}\\)</p>`,
          `<p><strong>Take the limit.</strong> \\(\\dfrac{\\sin ${a}x}{${a}x}\\to1\\).</p>`,
        ],
    answer: `\\(${frac(a, b)}\\)`,
    numeric: { value: a / b, label: "Limit" },
  };
}

function trigCycle(): GenProblem {
  const n = ri(10, 120), useSin = Math.random() < 0.5, r = n % 4;
  const cyc = useSin ? ["\\sin x", "\\cos x", "-\\sin x", "-\\cos x"] : ["\\cos x", "-\\sin x", "-\\cos x", "\\sin x"];
  return {
    section: "3.3", kind: "Derivative cycle",
    question: `Find \\(\\dfrac{d^{${n}}}{dx^{${n}}}${useSin ? "\\sin x" : "\\cos x"}\\).`,
    hint: `<p>The derivatives repeat every 4. Divide ${n} by 4 and use the remainder.</p>`,
    steps: [
      `<p><strong>The cycle.</strong> ${cyc.map((s) => `\\(${s}\\)`).join(" → ")} → back to the start.</p>`,
      `<p><strong>Divide by 4.</strong> \\(${n}=4\\cdot${Math.floor(n / 4)}+${r}\\), so it's the same as the derivative number ${r} in the cycle.</p>`,
    ],
    answer: `\\(${cyc[r]}\\)`,
  };
}

/* ---------- §3.4 ---------- */
function chainPower(): GenProblem {
  const n = ri(2, 4), m = ri(3, 8), a = nz(-5, 5), b = nz(-9, 9);
  const inner = poly([[a, n], [b, 0]]);
  return {
    section: "3.4", kind: "Chain rule: power",
    question: `Differentiate \\(y=(${inner})^{${m}}\\).`,
    hint: `<p>Outside: \\(u^{${m}}\\). Inside: \\(u=${inner}\\). Derivative of the outside, inside unchanged, times derivative of the inside.</p>`,
    steps: [
      `<p><strong>Outside and inside.</strong> \\(y=u^{${m}}\\), \\(u=${inner}\\), \\(u'=${lead(a * n, xp(n - 1))}\\).</p>`,
      `<p><strong>Chain rule.</strong> \\(y'=${m}(${inner})^{${m - 1}}\\cdot ${paren(lead(a * n, xp(n - 1)))}\\)</p>`,
      `<p><strong>Tidy the constants.</strong> \\(${m}\\cdot${a * n}=${m * a * n}\\)</p>`,
    ],
    answer: `\\(y'=${lead(m * a * n, xp(n - 1))}(${inner})^{${m - 1}}\\)`,
  };
}

function chainTrig(): GenProblem {
  const n = ri(2, 4), a = nz(-5, 5), b = nz(-6, 6), useSin = Math.random() < 0.5;
  const inner = poly([[a, n], [b, 1]]), dInner = poly([[a * n, n - 1], [b, 0]]), negInner = poly([[-a * n, n - 1], [-b, 0]]);
  const final = useSin ? `(${dInner})\\cos(${inner})` : `(${negInner})\\sin(${inner})`;
  return {
    section: "3.4", kind: "Chain rule: trig",
    question: `Differentiate \\(y=${useSin ? "\\sin" : "\\cos"}(${inner})\\).`,
    hint: `<p>\\(${useSin ? "\\sin(\\square)\\to\\cos(\\square)" : "\\cos(\\square)\\to-\\sin(\\square)"}\\cdot\\square'\\). Keep the inside unchanged.</p>`,
    steps: [
      `<p><strong>Inside.</strong> \\(u=${inner}\\), \\(u'=${dInner}\\).</p>`,
      `<p><strong>Outside derivative</strong> with the inside unchanged: \\(${useSin ? "\\cos" : "-\\sin"}(${inner})\\).</p>`,
      `<p><strong>Multiply.</strong> \\(y'=${useSin ? "" : "-"}(${dInner})${useSin ? "\\cos" : "\\sin"}(${inner})\\)${useSin ? "" : ` <span class="why">Move the minus inside the bracket:</span> \\(y'=${final}\\)`}</p>`,
    ],
    answer: `\\(y'=${final}\\)`,
  };
}

function chainExp(): GenProblem {
  const a = nz(-5, 5), b = nz(-7, 7);
  const inner = poly([[a, 2], [b, 1]]), dInner = poly([[2 * a, 1], [b, 0]]);
  return {
    section: "3.4", kind: "Chain rule: eˣ",
    question: `Differentiate \\(y=e^{${inner}}\\).`,
    hint: `<p>\\((e^{\\square})'=e^{\\square}\\cdot\\square'\\): copy the exponential, times the derivative of the exponent.</p>`,
    steps: [
      `<p><strong>Exponent.</strong> \\(u=${inner}\\), \\(u'=${dInner}\\).</p>`,
      `<p><strong>Copy the exponential, multiply.</strong> \\(y'=e^{${inner}}\\cdot(${dInner})\\)</p>`,
      `<p class="why">Not the power rule: the variable is in the exponent.</p>`,
    ],
    answer: `\\(y'=(${dInner})\\,e^{${inner}}\\)`,
  };
}

function chainSqrt(): GenProblem {
  const a = ri(1, 9), b = ri(1, 9);
  const inner = poly([[a, 2], [b, 0]]);
  return {
    section: "3.4", kind: "Chain rule: root",
    question: `Differentiate \\(y=\\sqrt{${inner}}\\).`,
    hint: `<p>\\(\\sqrt{u}=u^{1/2}\\), so \\((\\sqrt{u})'=\\dfrac{u'}{2\\sqrt{u}}\\).</p>`,
    steps: [
      `<p><strong>Rewrite.</strong> \\(y=(${inner})^{1/2}\\)</p>`,
      `<p><strong>Chain rule.</strong> \\(y'=\\tfrac12(${inner})^{-1/2}\\cdot ${2 * a}x\\)</p>`,
      `<p><strong>Simplify.</strong> \\(\\tfrac12\\cdot${2 * a}x=${lead(a, "x")}\\), and the negative power goes to the bottom.</p>`,
    ],
    answer: `\\(y'=\\dfrac{${lead(a, "x")}}{\\sqrt{${inner}}}\\)`,
  };
}

function chainTable(): GenProblem {
  const k = ri(1, 4), u = pick([2, 3, 4, 5, 6].filter((n) => n !== k)), v = nz(-5, 5), w = nz(-6, 6);
  let decoy = nz(-6, 6);
  while (decoy === w) decoy = nz(-6, 6);
  return {
    section: "3.4", kind: "Chain rule: table",
    question: `\\(h(x)=f(g(x))\\). Given \\(g(${k})=${u}\\), \\(g'(${k})=${v}\\), \\(f'(${u})=${w}\\) and \\(f'(${k})=${decoy}\\), find \\(h'(${k})\\).`,
    hint: `<p>\\(h'(x)=f'(g(x))\\cdot g'(x)\\). Evaluate \\(f'\\) at \\(g(${k})\\), not at ${k}.</p>`,
    steps: [
      `<p><strong>Chain rule.</strong> \\(h'(${k})=f'(g(${k}))\\cdot g'(${k})\\)</p>`,
      `<p><strong>Inner value first.</strong> \\(g(${k})=${u}\\), so we need \\(f'(${u})=${w}\\).</p>`,
      `<p><strong>Multiply.</strong> \\(${w}\\cdot${v}=${w * v}\\). (\\(f'(${k})=${decoy}\\) is a decoy.)</p>`,
    ],
    answer: `\\(h'(${k})=${w * v}\\)`,
    numeric: { value: w * v, label: `h′(${k})` },
  };
}

/* ---------- §3.5 ---------- */
function implicitCircle(): GenProblem {
  const [p0, q0, r] = pick([[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [4, 3, 5], [12, 5, 13]]);
  const p = p0 * pick([1, -1]), q = q0 * pick([1, -1]);
  return {
    section: "3.5", kind: "Implicit: circle",
    question: `Find the slope of the tangent line to \\(x^2+y^2=${r * r}\\) at \\((${p},\\,${q})\\).`,
    hint: `<p>Differentiate both sides: \\((y^2)'=2y\\,y'\\). Then plug in the point.</p>`,
    steps: [
      `<p><strong>Differentiate.</strong> \\(2x+2y\\,y'=0\\)</p>`,
      `<p><strong>Solve.</strong> \\(y'=-\\dfrac{x}{y}\\)</p>`,
      `<p><strong>Plug in.</strong> \\(y'=-\\dfrac{${p}}{${q}}=${frac(-p, q)}\\)</p>`,
    ],
    answer: `Slope \\(=${frac(-p, q)}\\)`,
    numeric: { value: -p / q, label: "Slope" },
  };
}

function implicitConic(): GenProblem {
  let a = 0, b = 0, c = 0, p = 0, q = 0, den = 0;
  while (den === 0) { a = ri(1, 3); b = nz(-3, 3); c = ri(1, 3); p = nz(-3, 3); q = nz(-3, 3); den = b * p + 2 * c * q; }
  const k = a * p * p + b * p * q + c * q * q;
  const lhs = join([{ c: a, body: "x^2" }, { c: b, body: "xy" }, { c, body: "y^2" }]);
  const num = 2 * a * p + b * q;
  return {
    section: "3.5", kind: "Implicit: slope at a point",
    question: `Find the slope of the tangent line to \\(${lhs}=${k}\\) at \\((${p},\\,${q})\\).`,
    hint: `<p>\\(xy\\) needs the product rule: \\((xy)'=y+xy'\\). Plugging in the point right after differentiating saves algebra.</p>`,
    steps: [
      `<p><strong>Check the point.</strong> \\(${a}(${p})^2${b < 0 ? "-" : "+"}${Math.abs(b)}(${p})(${q})+${c}(${q})^2=${k}\\) ✓</p>`,
      `<p><strong>Differentiate.</strong> \\(${join([{ c: 2 * a, body: "x" }])}${b < 0 ? "-" : "+"}${Math.abs(b) === 1 ? "" : Math.abs(b)}(y+xy')+${2 * c === 1 ? "" : 2 * c}yy'=0\\)</p>`,
      `<p><strong>Solve for \\(y'\\).</strong> \\(y'=-\\dfrac{${2 * a}x${b < 0 ? "-" : "+"}${Math.abs(b) === 1 ? "" : Math.abs(b)}y}{${b === 1 ? "" : b === -1 ? "-" : b}x+${2 * c}y}\\)</p>`,
      `<p><strong>Plug in \\((${p},${q})\\).</strong> \\(y'=-\\dfrac{${num}}{${den}}=${frac(-num, den)}\\)</p>`,
    ],
    answer: `Slope \\(=${frac(-num, den)}\\)`,
    numeric: { value: -num / den, label: "Slope" },
  };
}

function implicitGeneral(): GenProblem {
  const m = ri(2, 3), a = ri(1, 4), k = ri(2, 12);
  const ax = lead(a, `x^{${m}}`);
  return {
    section: "3.5", kind: "Implicit: find dy/dx",
    question: `Find \\(\\dfrac{dy}{dx}\\) if \\(${ax}y+y^3=${k}\\).`,
    hint: `<p>\\(${ax}y\\) is a product. \\((y^3)'=3y^2y'\\). Then collect the \\(y'\\) terms and factor.</p>`,
    steps: [
      `<p><strong>Differentiate.</strong> \\(${lead(a * m, xp(m - 1))}y+${ax}y'+3y^2y'=0\\)</p>`,
      `<p><strong>Collect \\(y'\\).</strong> \\(y'(${ax}+3y^2)=-${lead(a * m, xp(m - 1))}y\\)</p>`,
    ],
    answer: `\\(\\dfrac{dy}{dx}=-\\dfrac{${lead(a * m, xp(m - 1))}y}{${ax}+3y^2}\\)`,
  };
}

/* ---------- §3.6 ---------- */
function lnPoly(): GenProblem {
  const a = ri(1, 5), b = ri(-6, 6), c = ri(1, 9);
  const inner = poly([[a, 2], [b, 1], [c, 0]]), d = poly([[2 * a, 1], [b, 0]]);
  return {
    section: "3.6", kind: "ln of a function",
    question: `Differentiate \\(y=\\ln(${inner})\\).`,
    hint: `<p>\\(\\frac{d}{dx}\\ln u=\\frac{u'}{u}\\): derivative of the inside over the inside.</p>`,
    steps: [`<p><strong>Inside.</strong> \\(u=${inner}\\), \\(u'=${d}\\).</p>`, `<p><strong>Divide.</strong> \\(y'=\\dfrac{u'}{u}\\).</p>`],
    answer: `\\(y'=\\dfrac{${d}}{${inner}}\\)`,
  };
}

function logBase(): GenProblem {
  const b = pick([2, 3, 5, 10]), n = ri(2, 4), k = ri(1, 9);
  return {
    section: "3.6", kind: "Other log bases",
    question: `Differentiate \\(y=\\log_{${b}}(x^{${n}}+${k})\\).`,
    hint: `<p>\\(\\frac{d}{dx}\\log_b u=\\dfrac{u'}{u\\ln b}\\). Same as ln, then divide by \\(\\ln b\\).</p>`,
    steps: [`<p><strong>Inside.</strong> \\(u=x^{${n}}+${k}\\), \\(u'=${n}x^{${n - 1}}\\).</p>`.replace("x^{1}", "x"), `<p><strong>Divide by \\(u\\ln ${b}\\).</strong></p>`],
    answer: `\\(y'=\\dfrac{${n}x^{${n - 1}}}{(x^{${n}}+${k})\\ln ${b}}\\)`.replace("x^{1}", "x"),
  };
}

function lnSlope(): GenProblem {
  const k = ri(1, 4), c = ri(-3, 3);
  const d = 1 - k * k - c * k; // makes the inside equal 1 at x = k, so y = 0 there
  const inner = poly([[1, 2], [c, 1], [d, 0]]), m = 2 * k + c;
  return {
    section: "3.6", kind: "Tangent slope with ln",
    question: `Find the slope of the tangent line to \\(y=\\ln(${inner})\\) at \\((${k},\\,0)\\).`,
    hint: `<p>\\(y'=\\frac{u'}{u}\\), then plug in \\(x=${k}\\). The inside equals 1 there (that's why \\(y=0\\)).</p>`,
    steps: [
      `<p><strong>Differentiate.</strong> \\(y'=\\dfrac{${poly([[2, 1], [c, 0]])}}{${inner}}\\)</p>`,
      `<p><strong>Plug in \\(x=${k}\\).</strong> Top: \\(${m}\\). Bottom: \\(${k * k + c * k + d}\\).</p>`,
    ],
    answer: `Slope \\(=${m}\\)`,
    numeric: { value: m, label: "Slope" },
  };
}

function logDiffPower(): GenProblem {
  const a = ri(2, 5), useTrig = Math.random() < 0.5;
  if (useTrig) {
    return {
      section: "3.6", kind: "Logarithmic differentiation",
      question: `Differentiate \\(y=x^{\\cos x}\\).`,
      hint: `<p>Variable base and variable exponent: take \\(\\ln\\) of both sides first.</p>`,
      steps: [
        `<p><strong>Take ln.</strong> \\(\\ln y=\\cos x\\,\\ln x\\)</p>`,
        `<p><strong>Differentiate.</strong> \\(\\dfrac{y'}{y}=-\\sin x\\ln x+\\dfrac{\\cos x}{x}\\)</p>`,
        `<p><strong>Multiply by \\(y\\).</strong></p>`,
      ],
      answer: `\\(y'=x^{\\cos x}\\left(\\dfrac{\\cos x}{x}-\\sin x\\ln x\\right)\\)`,
    };
  }
  return {
    section: "3.6", kind: "Logarithmic differentiation",
    question: `Differentiate \\(y=x^{${a}x}\\).`,
    hint: `<p>Take \\(\\ln\\) of both sides: \\(\\ln y=${a}x\\ln x\\).</p>`,
    steps: [
      `<p><strong>Take ln.</strong> \\(\\ln y=${a}x\\ln x\\)</p>`,
      `<p><strong>Differentiate.</strong> \\(\\dfrac{y'}{y}=${a}\\ln x+${a}x\\cdot\\dfrac1x=${a}(\\ln x+1)\\)</p>`,
      `<p><strong>Multiply by \\(y\\).</strong></p>`,
    ],
    answer: `\\(y'=${a}x^{${a}x}(\\ln x+1)\\)`,
  };
}

function invTrig(): GenProblem {
  // inside u, u', u² — the same three pieces every problem needs
  const a = ri(2, 5), n = ri(2, 4);
  const inner = pick([
    { u: "e^x", du: "e^x", u2: "e^{2x}" },
    { u: `e^{${a}x}`, du: `${a}e^{${a}x}`, u2: `e^{${2 * a}x}` },
    { u: `${a}x`, du: String(a), u2: `${a * a}x^2` },
    { u: xp(n), du: `${n}${xp(n - 1)}`, u2: xp(2 * n) },
    { u: "\\sqrt{x}", du: "\\frac{1}{2\\sqrt{x}}", u2: "x" },
    { u: "\\ln x", du: "\\frac{1}{x}", u2: "(\\ln x)^2" },
  ]);
  const outer = pick(["tan", "tan", "sin", "cos"] as const);
  const fn = outer === "tan" ? "\\tan^{-1}" : outer === "sin" ? "\\sin^{-1}" : "\\cos^{-1}";
  const rule = outer === "tan" ? "\\dfrac{u'}{1+u^2}" : outer === "sin" ? "\\dfrac{u'}{\\sqrt{1-u^2}}" : "-\\dfrac{u'}{\\sqrt{1-u^2}}";
  const ans = outer === "tan" ? `\\dfrac{${inner.du}}{1+${inner.u2}}` : `${outer === "cos" ? "-" : ""}\\dfrac{${inner.du}}{\\sqrt{1-${inner.u2}}}`;
  return {
    section: "3.6", kind: "Inverse trig + chain rule",
    question: `Find \\(y'\\) if \\(y=${fn}\\big(${inner.u}\\big)\\).`,
    hint: `<p>\\(\\frac{d}{dx}${fn}u=${rule}\\). Find \\(u\\), \\(u'\\) and \\(u^2\\) first.</p>`,
    steps: [
      `<p><strong>Inside.</strong> \\(u=${inner.u}\\)</p>`,
      `<p><strong>Its derivative.</strong> \\(u'=${inner.du}\\)</p>`,
      `<p><strong>Square the whole inside.</strong> \\(u^2=${inner.u2}\\)</p>`,
      `<p><strong>Plug into</strong> \\(${rule}\\).</p>`,
    ],
    answer: `\\(y'=${ans}\\)`,
  };
}

function invTrigSlope(): GenProblem {
  // tan⁻¹(e^{ax}) at x = 0: slope a/(1+1) = a/2
  const a = ri(1, 6);
  const u = a === 1 ? "e^{x}" : `e^{${a}x}`, du = a === 1 ? "e^{x}" : `${a}e^{${a}x}`, u2 = `e^{${2 * a}x}`;
  return {
    section: "3.6", kind: "Inverse trig slope",
    question: `Find the slope of \\(y=\\tan^{-1}(${u})\\) at \\(x=0\\).`,
    hint: `<p>\\(y'=\\dfrac{u'}{1+u^2}\\), then plug in \\(x=0\\). Every \\(e^{0}=1\\).</p>`,
    steps: [
      `<p><strong>Differentiate.</strong> \\(u=${u}\\), \\(u'=${du}\\), \\(u^2=${u2}\\), so \\(y'=\\dfrac{${du}}{1+${u2}}\\).</p>`,
      `<p><strong>At \\(x=0\\).</strong> \\(\\dfrac{${a}}{1+1}\\)</p>`,
    ],
    answer: `Slope \\(=${frac(a, 2)}\\)`,
    numeric: { value: a / 2, label: "Slope" },
  };
}

function trigProof(): GenProblem {
  const P_ = pick([
    { f: "\\cot x", g: "-\\csc^2x", w: "\\dfrac{\\cos x}{\\sin x}",
      q: "\\dfrac{\\sin x(-\\sin x)-\\cos x\\cos x}{\\sin^2x}", top: "\\dfrac{-(\\sin^2x+\\cos^2x)}{\\sin^2x}=\\dfrac{-1}{\\sin^2x}" },
    { f: "\\tan x", g: "\\sec^2x", w: "\\dfrac{\\sin x}{\\cos x}",
      q: "\\dfrac{\\cos x\\cos x-\\sin x(-\\sin x)}{\\cos^2x}", top: "\\dfrac{\\cos^2x+\\sin^2x}{\\cos^2x}=\\dfrac{1}{\\cos^2x}" },
    { f: "\\sec x", g: "\\sec x\\tan x", w: "\\dfrac{1}{\\cos x}",
      q: "\\dfrac{\\cos x\\cdot0-1\\cdot(-\\sin x)}{\\cos^2x}", top: "\\dfrac{\\sin x}{\\cos^2x}=\\dfrac{1}{\\cos x}\\cdot\\dfrac{\\sin x}{\\cos x}" },
    { f: "\\csc x", g: "-\\csc x\\cot x", w: "\\dfrac{1}{\\sin x}",
      q: "\\dfrac{\\sin x\\cdot0-1\\cdot\\cos x}{\\sin^2x}", top: "-\\dfrac{1}{\\sin x}\\cdot\\dfrac{\\cos x}{\\sin x}" },
  ]);
  return {
    section: "3.3", kind: "Prove a trig derivative",
    question: `Show that \\(\\dfrac{d}{dx}${P_.f}=${P_.g}\\).`,
    hint: `<p>Rewrite \\(${P_.f}=${P_.w}\\), use the quotient rule, then simplify with \\(\\sin^2x+\\cos^2x=1\\).</p>`,
    steps: [
      `<p><strong>Rewrite.</strong> \\(\\dfrac{d}{dx}${P_.f}=\\dfrac{d}{dx}\\left(${P_.w}\\right)\\)</p>`,
      `<p><strong>Quotient rule.</strong> \\(=${P_.q}\\)</p>`,
      `<p><strong>Simplify.</strong> \\(=${P_.top}\\)</p>`,
      `<p><strong>Rewrite back.</strong> \\(=${P_.g}\\) ✓</p>`,
    ],
    answer: `\\(\\dfrac{d}{dx}${P_.f}=${P_.g}\\) ✓`,
  };
}

/* ---------- §3.9 ---------- */
function sphereRate(): GenProblem {
  const r = ri(2, 12), dr = ri(1, 5), what = pick(["volume", "area"] as const);
  const isV = what === "volume";
  const coef = isV ? 4 * r * r * dr : 8 * r * dr;
  return {
    section: "3.9", kind: "Related rates: sphere",
    question: `A sphere's radius grows at ${dr} cm/s. How fast is its ${isV ? "volume" : "surface area"} growing when \\(r=${r}\\) cm?`,
    hint: `<p>${isV ? "\\(V=\\frac43\\pi r^3\\)" : "\\(S=4\\pi r^2\\)"}. Differentiate with respect to \\(t\\), then plug in.</p>`,
    steps: [
      `<p><strong>Differentiate.</strong> ${isV ? "\\(\\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}\\)" : "\\(\\frac{dS}{dt}=8\\pi r\\frac{dr}{dt}\\)"}</p>`,
      `<p><strong>Plug in.</strong> ${isV ? `\\(4\\pi(${r})^2(${dr})\\)` : `\\(8\\pi(${r})(${dr})\\)`}\\(=${coef}\\pi\\)</p>`,
    ],
    answer: `\\(${coef}\\pi\\approx${(coef * Math.PI).toFixed(1)}\\) ${isV ? "cm³/s" : "cm²/s"}`,
    numeric: { value: coef * Math.PI, label: isV ? "dV/dt (you can type 100pi)" : "dS/dt (you can type 100pi)" },
  };
}

function ladderRate(): GenProblem {
  const [p, q, L] = pick([[6, 8, 10], [5, 12, 13], [8, 6, 10], [12, 5, 13], [7, 24, 25], [9, 12, 15]]);
  const v = ri(1, 4);
  return {
    section: "3.9", kind: "Related rates: ladder",
    question: `A ${L} m ladder leans against a wall. Its foot slides away at ${v} m/s. How fast is the top sliding down when the foot is ${p} m from the wall?`,
    hint: `<p>\\(x^2+y^2=${L * L}\\). Differentiate, then find \\(y\\) at that moment.</p>`,
    steps: [
      `<p><strong>Differentiate.</strong> \\(2x\\dot x+2y\\dot y=0\\Rightarrow\\dot y=-\\frac{x}{y}\\dot x\\).</p>`,
      `<p><strong>Find y.</strong> \\(y=\\sqrt{${L * L}-${p * p}}=${q}\\).</p>`,
      `<p><strong>Plug in.</strong> \\(\\dot y=-\\frac{${p}}{${q}}(${v})=${frac(-p * v, q)}\\).</p>`,
    ],
    answer: `\\(\\frac{dy}{dt}=${frac(-p * v, q)}\\) m/s (sliding down at \\(${frac(p * v, q)}\\) m/s)`,
    numeric: { value: (-p * v) / q, label: "dy/dt (negative = down)" },
  };
}

function carsRate(): GenProblem {
  const k = ri(2, 6), t = ri(1, 4);
  const [a, b] = pick([[3, 4], [5, 12], [8, 15]]).map((n) => n * k);
  const c = Math.sqrt(a * a + b * b);
  return {
    section: "3.9", kind: "Related rates: two cars",
    question: `Two cars leave the same point. One drives north at ${a} km/h, the other east at ${b} km/h. How fast is the distance between them growing ${t} h later?`,
    hint: `<p>\\(z^2=x^2+y^2\\), so \\(z\\dot z=x\\dot x+y\\dot y\\). Find \\(x\\), \\(y\\), \\(z\\) at that time first.</p>`,
    steps: [
      `<p><strong>Positions.</strong> \\(x=${a * t}\\), \\(y=${b * t}\\), \\(z=\\sqrt{${a * t}^2+${b * t}^2}=${c * t}\\).</p>`,
      `<p><strong>Plug in.</strong> \\(\\dot z=\\frac{${a * t}(${a})+${b * t}(${b})}{${c * t}}=${c}\\).</p>`,
      `<p class="why">The answer doesn't depend on the time: the cars move apart at a steady \\(${c}\\) km/h.</p>`,
    ],
    answer: `\\(${c}\\) km/h`,
    numeric: { value: c, label: "dz/dt" },
  };
}

function coneRate(): GenProblem {
  const R = ri(1, 4), H = R * ri(2, 3), h = ri(1, H - 1), dV = ri(1, 9);
  const kNum = H * H * dV, kDen = R * R * h * h; // dh/dt = dV·H² / (π R² h²)
  return {
    section: "3.9", kind: "Related rates: cone",
    question: `Water pours at ${dV} m³/min into an inverted cone with top radius ${R} m and height ${H} m. How fast is the water level rising when the water is ${h} m deep?`,
    hint: `<p>Similar triangles: \\(r=\\frac{${R}}{${H}}h\\). Write \\(V\\) in terms of \\(h\\) only, then differentiate.</p>`,
    steps: [
      `<p><strong>Similar triangles.</strong> \\(r=\\frac{${R}h}{${H}}\\), so \\(V=\\frac13\\pi\\left(\\frac{${R}h}{${H}}\\right)^2h=\\frac{${R * R}\\pi h^3}{${3 * H * H}}\\).</p>`,
      `<p><strong>Differentiate.</strong> \\(\\frac{dV}{dt}=\\frac{${R * R}\\pi h^2}{${H * H}}\\frac{dh}{dt}\\).</p>`,
      `<p><strong>Plug in.</strong> \\(${dV}=\\frac{${R * R}\\pi(${h})^2}{${H * H}}\\frac{dh}{dt}\\Rightarrow\\frac{dh}{dt}=\\frac{${kNum}}{${kDen}\\pi}\\).</p>`,
    ],
    answer: `\\(\\frac{dh}{dt}=${frac(kNum, kDen)}\\cdot\\frac{1}{\\pi}\\approx${(kNum / (kDen * Math.PI)).toFixed(3)}\\) m/min`,
    numeric: { value: kNum / (kDen * Math.PI), label: "dh/dt (you can type 3/(4pi))" },
  };
}

/* ---------- §3.10 ---------- */
function linSqrt(): GenProblem {
  const n = ri(3, 12), d = pick([-0.2, -0.1, 0.1, 0.2, 0.3, -0.3, 0.5]);
  const a = n * n, est = n + d / (2 * n);
  return {
    section: "3.10", kind: "Estimate a root",
    question: `Use a linear approximation to estimate \\(\\sqrt{${+(a + d).toFixed(1)}}\\).`,
    hint: `<p>Use \\(f(x)=\\sqrt x\\) at the nearby perfect square \\(a=${a}\\).</p>`,
    steps: [
      `<p><strong>Pick a.</strong> \\(a=${a}\\): \\(f(${a})=${n}\\), \\(f'(x)=\\frac{1}{2\\sqrt x}\\Rightarrow f'(${a})=\\frac{1}{${2 * n}}\\).</p>`,
      `<p><strong>Linearize.</strong> \\(L(x)=${n}+\\frac{1}{${2 * n}}(x-${a})\\).</p>`,
      `<p><strong>Plug in.</strong> \\(L(${+(a + d).toFixed(1)})=${n}+\\frac{${d}}{${2 * n}}\\).</p>`,
    ],
    answer: `\\(\\approx${est.toFixed(4)}\\) (true value \\(${Math.sqrt(a + d).toFixed(4)}\\))`,
    numeric: { value: est, label: "Estimate" },
  };
}

function linCbrt(): GenProblem {
  const n = ri(2, 10), d = pick([-2, -1, 1, 2, 3]);
  const a = n ** 3, est = n + d / (3 * n * n);
  return {
    section: "3.10", kind: "Estimate a cube root",
    question: `Use a linear approximation to estimate \\(\\sqrt[3]{${a + d}}\\).`,
    hint: `<p>Use \\(f(x)=\\sqrt[3]{x}\\) at \\(a=${a}\\).</p>`,
    steps: [
      `<p><strong>Pick a.</strong> \\(f(${a})=${n}\\), \\(f'(x)=\\frac13x^{-2/3}\\Rightarrow f'(${a})=\\frac{1}{${3 * n * n}}\\).</p>`,
      `<p><strong>Plug in.</strong> \\(L(${a + d})=${n}+\\frac{${d}}{${3 * n * n}}\\).</p>`,
    ],
    answer: `\\(\\approx${est.toFixed(4)}\\) (true value \\(${Math.cbrt(a + d).toFixed(4)}\\))`,
    numeric: { value: est, label: "Estimate" },
  };
}

function linearization(): GenProblem {
  const a = nz(-3, 3), b = ri(-5, 5), c = ri(-6, 6);
  const f = P([[1, 3], [b, 1], [c, 0]]);
  const fa = evalPoly(f, a), m = 3 * a * a + b;
  return {
    section: "3.10", kind: "Linearization",
    question: `Find the linearization \\(L(x)\\) of \\(f(x)=${polyTeX(f)}\\) at \\(a=${a}\\).`,
    hint: `<p>\\(L(x)=f(a)+f'(a)(x-a)\\).</p>`,
    steps: [
      `<p><strong>f(a).</strong> \\(f(${a})=${fa}\\).</p>`,
      `<p><strong>f′(a).</strong> \\(f'(x)=${polyTeX(deriv(f))}\\Rightarrow f'(${a})=${m}\\).</p>`,
      `<p><strong>Assemble.</strong> \\(L(x)=${fa}${m < 0 ? "" : "+"}${m}(x${a < 0 ? "+" : "-"}${Math.abs(a)})\\).</p>`,
    ],
    answer: `\\(L(x)=${poly([[m, 1], [fa - m * a, 0]])}\\)`,
  };
}

function differential(): GenProblem {
  const x0 = ri(1, 4), k = ri(1, 6), dx = pick([0.1, -0.1, 0.05, 0.2, -0.05]);
  const dy = (3 * x0 * x0 - k) * dx;
  return {
    section: "3.10", kind: "Differentials",
    question: `For \\(y=x^3-${lead(k, "x")}\\), find \\(dy\\) and evaluate it at \\(x=${x0}\\), \\(dx=${dx}\\).`,
    hint: `<p>\\(dy=f'(x)\\,dx\\).</p>`,
    steps: [`<p>\\(dy=(3x^2-${k})\\,dx\\).</p>`, `<p>\\(dy=(3(${x0})^2-${k})(${dx})=(${3 * x0 * x0 - k})(${dx})\\).</p>`],
    answer: `\\(dy=(3x^2-${k})\\,dx=${+dy.toFixed(4)}\\)`,
    numeric: { value: dy, label: "dy" },
  };
}

/* ---------- §3.11 ---------- */
function hypDeriv(): GenProblem {
  const a = ri(2, 5), n = ri(1, 3), fn = pick(["sinh", "cosh", "tanh"] as const);
  const u = lead(a, xp(n)), du = n === 1 ? String(a) : lead(a * n, xp(n - 1));
  const outer = fn === "sinh" ? "\\cosh" : fn === "cosh" ? "\\sinh" : "\\operatorname{sech}^2";
  return {
    section: "3.11", kind: "Hyperbolic derivatives",
    question: `Differentiate \\(y=\\${fn}(${u})\\).`,
    hint: `<p>\\((\\sinh)'=\\cosh\\), \\((\\cosh)'=\\sinh\\) (no minus!), \\((\\tanh)'=\\operatorname{sech}^2\\). Then times the inside's derivative.</p>`,
    steps: [`<p><strong>Inside.</strong> \\(u=${u}\\), \\(u'=${du}\\).</p>`, `<p><strong>Outside.</strong> \\(\\${fn} u\\to ${outer} u\\).</p>`],
    answer: `\\(y'=${n === 1 ? a : `${a * n}${xp(n - 1)}`}\\,${outer}(${u})\\)`,
  };
}

function coshLn(): GenProblem {
  const k = ri(2, 9), useCosh = Math.random() < 0.5;
  const val = useCosh ? (k + 1 / k) / 2 : (k - 1 / k) / 2;
  return {
    section: "3.11", kind: "Evaluate with eˣ",
    question: `Find the exact value of \\(\\${useCosh ? "cosh" : "sinh"}(\\ln ${k})\\).`,
    hint: `<p>Use the definition, and \\(e^{\\ln ${k}}=${k}\\), \\(e^{-\\ln ${k}}=\\frac1{${k}}\\).</p>`,
    steps: [
      `<p>\\(\\${useCosh ? "cosh" : "sinh"}(\\ln ${k})=\\dfrac{${k}${useCosh ? "+" : "-"}\\frac1{${k}}}{2}\\)</p>`,
      `<p>\\(=\\dfrac{${k * k}${useCosh ? "+" : "-"}1}{${2 * k}}\\)</p>`,
    ],
    answer: `\\(${frac(useCosh ? k * k + 1 : k * k - 1, 2 * k)}\\)`,
    numeric: { value: val, label: "Value" },
  };
}

function hypIdentity(): GenProblem {
  const [c, s] = pick([[5, 4], [13, 12], [17, 15], [25, 24]]) as [number, number];
  const d = Math.sqrt(c * c - s * s);
  return {
    section: "3.11", kind: "Hyperbolic identity",
    question: `If \\(\\cosh x=\\frac{${c}}{${d}}\\) and \\(x>0\\), find \\(\\tanh x\\).`,
    hint: `<p>\\(\\sinh^2x=\\cosh^2x-1\\). For \\(x>0\\), \\(\\sinh x>0\\).</p>`,
    steps: [
      `<p>\\(\\sinh^2x=\\frac{${c * c}}{${d * d}}-1=\\frac{${s * s}}{${d * d}}\\Rightarrow\\sinh x=\\frac{${s}}{${d}}\\).</p>`,
      `<p>\\(\\tanh x=\\frac{\\sinh x}{\\cosh x}=\\frac{${s}/${d}}{${c}/${d}}\\).</p>`,
    ],
    answer: `\\(\\tanh x=\\frac{${s}}{${c}}\\)`,
    numeric: { value: s / c, label: "tanh x" },
  };
}

/* ---------- §4.1 ---------- */
function critCubic(): GenProblem {
  let r1 = 0, r2 = 0;
  while ((r1 + r2) % 2 !== 0 || r1 === r2) { r1 = ri(-4, 3); r2 = ri(r1 + 1, 5); }
  const f = P([[1, 3], [(-3 * (r1 + r2)) / 2, 2], [3 * r1 * r2, 1], [ri(-5, 5), 0]]);
  return {
    section: "4.1", kind: "Critical numbers",
    question: `Find the critical numbers of \\(f(x)=${polyTeX(f)}\\).`,
    hint: `<p>Set \\(f'(x)=0\\) and factor. A polynomial's derivative is defined everywhere.</p>`,
    steps: [`<p>\\(f'(x)=${polyTeX(deriv(f))}=3(x-(${r1}))(x-(${r2}))\\).</p>`],
    answer: `\\(x=${r1}\\) and \\(x=${r2}\\)`,
  };
}

function closedInterval(): GenProblem {
  let r1 = 0, r2 = 0;
  while (r1 === r2) { r1 = ri(-3, 1); r2 = ri(r1 + 1, 4); }
  const d = ri(-6, 6);
  const f = P([[2, 3], [-3 * (r1 + r2), 2], [6 * r1 * r2, 1], [d, 0]]);
  const a = r1 - ri(0, 2), b = r2 + ri(0, 2);
  const cands = [...new Set([a, r1, r2, b])].sort((x, y) => x - y).map((x) => ({ x, y: evalPoly(f, x) }));
  const max = cands.reduce((m, k) => (k.y > m.y ? k : m)), min = cands.reduce((m, k) => (k.y < m.y ? k : m));
  return {
    section: "4.1", kind: "Closed Interval Method",
    question: `Find the absolute maximum and minimum of \\(f(x)=${polyTeX(f)}\\) on \\([${a},\\,${b}]\\).`,
    hint: `<p>Critical numbers inside the interval, plus both endpoints. Make a table and compare.</p>`,
    steps: [
      `<p><strong>Critical numbers.</strong> \\(f'(x)=${polyTeX(deriv(f))}=6(x-(${r1}))(x-(${r2}))\\Rightarrow x=${r1},\\ ${r2}\\).</p>`,
      `<p><strong>Table.</strong> ${cands.map((k) => `\\(f(${k.x})=${k.y}\\)`).join(", ")}.</p>`,
      `<p><strong>Compare.</strong> Largest \\(${max.y}\\), smallest \\(${min.y}\\).</p>`,
    ],
    answer: `Absolute max \\(f(${max.x})=${max.y}\\); absolute min \\(f(${min.x})=${min.y}\\)`,
    numeric: { value: max.y, label: "Absolute max value" },
  };
}

export const GENERATORS: Record<GenSection, (() => GenProblem)[]> = {
  "2.8": [defQuadratic, slopeQuadratic],
  "3.1": [polyDeriv, rewritePowers, tangentCubic],
  "3.2": [productRule, quotientLinear, powerTimesExp],
  "3.3": [trigCombo, powerTimesTrig, trigLimit, trigCycle, trigProof],
  "3.4": [chainPower, chainTrig, chainExp, chainSqrt, chainTable],
  "3.5": [implicitCircle, implicitConic, implicitGeneral],
  "3.6": [lnPoly, logBase, lnSlope, logDiffPower, invTrig, invTrig, invTrigSlope],
  "3.9": [sphereRate, ladderRate, carsRate, coneRate],
  "3.10": [linSqrt, linCbrt, linearization, differential],
  "3.11": [hypDeriv, coshLn, hypIdentity],
  "4.1": [critCubic, closedInterval, closedInterval],
};

export function generate(section: GenSection | GenMix): GenProblem {
  const s =
    section === "mixed" ? pick([...Q3, ...Q4]) : section === "mixed-q3" ? pick(Q3) : section === "mixed-q4" ? pick(Q4) : section;
  return pick(GENERATORS[s])();
}

/** Parse a typed number like "-4/5", "0.8", "−3", "400pi" or "800sqrt(5)/3". */
export function parseNumber(s: string): number | null {
  const t = s.replace(/−/g, "-").replace(/\s+/g, "");
  if (!t) return null;
  const m = t.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
  if (m) return Number(m[2]) === 0 ? null : Number(m[1]) / Number(m[2]);
  const v = Number(t);
  if (Number.isFinite(v)) return v;
  if (/x/i.test(t)) return null;
  try {
    const w = compile(t)(0);
    return Number.isFinite(w) ? w : null;
  } catch {
    return null;
  }
}
