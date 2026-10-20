// A small math expression parser for typed answers like "3x^2 sin(x) + e^(2x)".
// Supports + - * / ^, implicit multiplication (2x, x sin x, (x+1)(x-1)), x, pi, e and common functions.

export type Fn = (x: number) => number;

const FUNCS: Record<string, Fn> = {
  sin: Math.sin, cos: Math.cos, tan: Math.tan,
  sec: (v) => 1 / Math.cos(v), csc: (v) => 1 / Math.sin(v), cot: (v) => 1 / Math.tan(v),
  arcsin: Math.asin, arccos: Math.acos, arctan: Math.atan,
  ln: Math.log, log: Math.log10, exp: Math.exp, sqrt: Math.sqrt, abs: Math.abs,
};
const NAMES = Object.keys(FUNCS).sort((a, b) => b.length - a.length);

type Tok = { t: "num"; v: number } | { t: "x" } | { t: "const"; v: number } | { t: "fn"; name: string } | { t: "op"; v: string } | { t: "(" } | { t: ")" };

function tokenize(src: string): Tok[] {
  const s = src.toLowerCase().replace(/\s+/g, "").replace(/[−–]/g, "-").replace(/[×·]/g, "*").replace(/÷/g, "/").replace(/π/g, "pi").replace(/\*\*/g, "^");
  const out: Tok[] = [];
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (/[0-9.]/.test(ch)) {
      const m = s.slice(i).match(/^\d*\.?\d+(?:e[+-]?\d+)?|^\d+\.?/)!;
      out.push({ t: "num", v: Number(m[0]) });
      i += m[0].length;
      continue;
    }
    const name = NAMES.find((n) => s.startsWith(n, i));
    if (name) { out.push({ t: "fn", name }); i += name.length; continue; }
    if (s.startsWith("pi", i)) { out.push({ t: "const", v: Math.PI }); i += 2; continue; }
    if (ch === "e") { out.push({ t: "const", v: Math.E }); i++; continue; }
    if (ch === "x") { out.push({ t: "x" }); i++; continue; }
    if ("+-*/^".includes(ch)) { out.push({ t: "op", v: ch }); i++; continue; }
    if (ch === "(" || ch === "[" || ch === "{") { out.push({ t: "(" }); i++; continue; }
    if (ch === ")" || ch === "]" || ch === "}") { out.push({ t: ")" }); i++; continue; }
    throw new Error(`I don't recognize “${src.trim().slice(i, i + 6)}”. Use x as the variable, and functions like sin(x), e^(x), sqrt(x), ln(x).`);
  }
  // insert * for implicit multiplication: 2x, x(x+1), )(, 3sin(x), x e^x
  const res: Tok[] = [];
  for (const tk of out) {
    const prev = res[res.length - 1];
    const prevEnds = prev && (prev.t === "num" || prev.t === "x" || prev.t === "const" || prev.t === ")");
    const curStarts = tk.t === "num" || tk.t === "x" || tk.t === "const" || tk.t === "fn" || tk.t === "(";
    // but not in sin^2(x): the 2 is the function's power, and its argument follows
    const fnPower = res.length >= 3 && res[res.length - 3].t === "fn" && res[res.length - 2].t === "op" && (res[res.length - 2] as { v: string }).v === "^";
    if (prevEnds && curStarts && !fnPower) res.push({ t: "op", v: "*" });
    res.push(tk);
  }
  return res;
}

/** Parse to a function of x. Throws an Error with a readable message on bad input. */
export function compile(src: string): Fn {
  if (!src.trim()) throw new Error("Type an expression first.");
  const toks = tokenize(src);
  let p = 0;
  const peek = () => toks[p];
  const isOp = (v: string) => { const t = peek(); return t && t.t === "op" && t.v === v; };

  // expr := term (('+'|'-') term)*
  function expr(): Fn {
    let left = term();
    while (isOp("+") || isOp("-")) {
      const op = (toks[p++] as { v: string }).v, a = left, b = term();
      left = op === "+" ? (x) => a(x) + b(x) : (x) => a(x) - b(x);
    }
    return left;
  }
  // term := unary (('*'|'/') unary)*
  function term(): Fn {
    let left = unary();
    while (isOp("*") || isOp("/")) {
      const op = (toks[p++] as { v: string }).v, a = left, b = unary();
      left = op === "*" ? (x) => a(x) * b(x) : (x) => a(x) / b(x);
    }
    return left;
  }
  // unary := ('-'|'+') unary | power
  function unary(): Fn {
    if (isOp("-")) { p++; const a = unary(); return (x) => -a(x); }
    if (isOp("+")) { p++; return unary(); }
    return power();
  }
  // power := atom ('^' unary)?   (right-associative, so 2^-x and x^2^3 work)
  function power(): Fn {
    const base = atom();
    if (isOp("^")) { p++; const ex = unary(); return (x) => Math.pow(base(x), ex(x)); }
    return base;
  }
  function atom(): Fn {
    const t = toks[p++];
    if (!t) throw new Error("The expression ends too early. Check for a missing number or bracket.");
    if (t.t === "num") return () => t.v;
    if (t.t === "const") return () => t.v;
    if (t.t === "x") return (x) => x;
    if (t.t === "(") {
      const e = expr();
      if (!peek() || peek().t !== ")") throw new Error("A bracket is missing its closing “)”.");
      p++;
      return e;
    }
    if (t.t === "fn") {
      const f = FUNCS[t.name];
      // sin^2(x) means (sin x)^2
      let powFn: Fn | null = null;
      if (isOp("^")) { p++; powFn = unary(); }
      const arg = peek() && peek().t === "(" ? atom() : power();
      return powFn ? (x) => Math.pow(f(arg(x)), powFn!(x)) : (x) => f(arg(x));
    }
    throw new Error("Something's out of place near an operator. Check for two operators in a row.");
  }

  const fn = expr();
  if (p < toks.length) throw new Error("There's an extra symbol or bracket. Check the end of the expression.");
  return fn;
}

export interface CheckResult {
  ok: boolean;
  tested: number;
  /** First point where the answer disagrees with the real slope. */
  miss?: { x: number; yours: number; actual: number };
}

/** Compare a typed derivative with the numerical slope of f at many points. */
export function checkDerivative(f: Fn, g: Fn, lo = -3, hi = 3): CheckResult {
  const h = 1e-5;
  let tested = 0;
  for (let i = 0; i < 60 && tested < 24; i++) {
    const x = lo + ((i * 0.6180339887) % 1) * (hi - lo);
    const a = f(x + h), b = f(x - h), yours = g(x);
    if (![a, b, f(x), yours].every(Number.isFinite)) continue;
    const actual = (a - b) / (2 * h);
    if (!Number.isFinite(actual) || Math.abs(actual) > 1e6) continue;
    tested++;
    if (Math.abs(yours - actual) > 1e-3 * Math.max(1, Math.abs(actual))) return { ok: false, tested, miss: { x, yours, actual } };
  }
  return { ok: tested >= 5, tested };
}
