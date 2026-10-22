"use client";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { tex } from "@/lib/tex";

type Outer = "tan" | "sin" | "cos";
interface Inner { id: string; u: string; du: string; u2: string; tan: string; sin: string; note?: string }

// Inside functions, with u, u′, u² and the simplified answers (sin⁻¹ answer; cos⁻¹ is its negative).
const INNERS: Inner[] = [
  { id: "ex", u: "e^x", du: "e^x", u2: "e^{2x}", tan: "\\dfrac{e^x}{1+e^{2x}}", sin: "\\dfrac{e^x}{\\sqrt{1-e^{2x}}}", note: "Squaring \\(e^x\\) doubles the exponent: \\((e^x)^2=e^{2x}\\), not \\(e^{x^2}\\)." },
  { id: "e2x", u: "e^{2x}", du: "2e^{2x}", u2: "e^{4x}", tan: "\\dfrac{2e^{2x}}{1+e^{4x}}", sin: "\\dfrac{2e^{2x}}{\\sqrt{1-e^{4x}}}" },
  { id: "x2", u: "x^2", du: "2x", u2: "x^4", tan: "\\dfrac{2x}{1+x^4}", sin: "\\dfrac{2x}{\\sqrt{1-x^4}}" },
  { id: "3x", u: "3x", du: "3", u2: "9x^2", tan: "\\dfrac{3}{1+9x^2}", sin: "\\dfrac{3}{\\sqrt{1-9x^2}}", note: "Square the 3 too: \\((3x)^2=9x^2\\)." },
  { id: "sqrt", u: "\\sqrt{x}", du: "\\frac{1}{2\\sqrt{x}}", u2: "x", tan: "\\dfrac{1}{2\\sqrt{x}\\,(1+x)}", sin: "\\dfrac{1}{2\\sqrt{x}\\,\\sqrt{1-x}}" },
  { id: "ln", u: "\\ln x", du: "\\frac{1}{x}", u2: "(\\ln x)^2", tan: "\\dfrac{1}{x\\,\\big(1+(\\ln x)^2\\big)}", sin: "\\dfrac{1}{x\\sqrt{1-(\\ln x)^2}}" },
  { id: "inv", u: "\\frac{1}{x}", du: "-\\frac{1}{x^2}", u2: "\\frac{1}{x^2}", tan: "-\\dfrac{1}{1+x^2}", sin: "-\\dfrac{1}{x\\sqrt{x^2-1}}\\ (x>1)", note: "Clear the small fractions by multiplying top and bottom by \\(x^2\\)." },
];
const OUTERS: { id: Outer; label: string; rule: string }[] = [
  { id: "tan", label: "tan⁻¹", rule: "\\dfrac{u'}{1+u^2}" },
  { id: "sin", label: "sin⁻¹", rule: "\\dfrac{u'}{\\sqrt{1-u^2}}" },
  { id: "cos", label: "cos⁻¹", rule: "-\\dfrac{u'}{\\sqrt{1-u^2}}" },
];

export default function InvTrigBuilder() {
  const [outer, setOuter] = useState<Outer>("tan");
  const [inner, setInner] = useState("ex");
  const I = INNERS.find((x) => x.id === inner)!, O = OUTERS.find((x) => x.id === outer)!;
  const fn = outer === "tan" ? "\\tan^{-1}" : outer === "sin" ? "\\sin^{-1}" : "\\cos^{-1}";
  const plug = outer === "tan" ? `\\dfrac{${I.du}}{1+${I.u2}}` : `${outer === "cos" ? "-" : ""}\\dfrac{${I.du}}{\\sqrt{1-${I.u2}}}`;
  const ans = outer === "tan" ? I.tan : outer === "sin" ? I.sin : I.sin.startsWith("-") ? I.sin.slice(1) : `-${I.sin}`;

  const steps = useMemo(() => [
    `<p><strong>1. Inside:</strong> \\(u=${I.u}\\)</p>`,
    `<p><strong>2. Its derivative:</strong> \\(u'=${I.du}\\)</p>`,
    `<p><strong>3. Square the inside:</strong> \\(u^2=${I.u2}\\)</p>`,
    `<p><strong>4. Pattern:</strong> \\(\\dfrac{d}{dx}${fn}u=${O.rule}=${plug}\\)</p>`,
    `<p class="ans"><strong>5. Answer:</strong> \\(y'=${ans}\\)</p>`,
    ...(I.note ? [`<p class="why">${I.note}</p>`] : []),
  ].map(tex), [I, O, fn, plug, ans]);

  return (
    <div className="lab itb">
      <div className="lab-head"><h4>Inverse trig step-builder</h4><span className="tag">Pick an outside and an inside</span></div>
      <div className="controls">
        <div className="seg" role="group" aria-label="Outside function">
          {OUTERS.map((o) => <button key={o.id} type="button" className={outer === o.id ? "on" : ""} aria-pressed={outer === o.id} onClick={() => setOuter(o.id)}>{o.label}</button>)}
        </div>
        <div className="seg" role="group" aria-label="Inside function">
          {INNERS.map((x) => (
            <button key={x.id} type="button" className={inner === x.id ? "on" : ""} aria-pressed={inner === x.id} onClick={() => setInner(x.id)}
              dangerouslySetInnerHTML={{ __html: tex(`\\(${x.u}\\)`) }} />
          ))}
        </div>
      </div>
      <div className="itb-q" dangerouslySetInnerHTML={{ __html: tex(`<p>Find \\(y'\\) for \\(y=${fn}\\big(${I.u}\\big)\\)</p>`) }} />
      <AnimatePresence mode="wait">
        <motion.div key={outer + inner} className="itb-steps" initial="h" animate="s" exit={{ opacity: 0 }} variants={{ s: { transition: { staggerChildren: 0.12 } } }}>
          {steps.map((s, i) => (
            <motion.div key={i} variants={{ h: { opacity: 0, x: -12 }, s: { opacity: 1, x: 0 } }} dangerouslySetInnerHTML={{ __html: s }} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
