"use client";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { generate, parseNumber, type GenMix, type GenProblem, type GenSection } from "@/lib/mathgen";
import { tex } from "@/lib/tex";
import { recordGen, useGenStats } from "@/lib/genstats";

type Pick = GenSection | GenMix;
const GROUPS: { label: string; items: { id: Pick; label: string }[] }[] = [
  { label: "Quiz 4", items: [{ id: "mixed-q4", label: "Mix" }, { id: "3.6", label: "3.6" }, { id: "3.9", label: "3.9" }, { id: "3.10", label: "3.10" }, { id: "3.11", label: "3.11" }, { id: "4.1", label: "4.1" }] },
  { label: "Quiz 3", items: [{ id: "mixed-q3", label: "Mix" }, { id: "2.8", label: "2.8" }, { id: "3.1", label: "3.1" }, { id: "3.2", label: "3.2" }, { id: "3.3", label: "3.3" }, { id: "3.4", label: "3.4" }, { id: "3.5", label: "3.5" }] },
];

type Verdict = "right" | "wrong" | null;

export default function Generator() {
  const [section, setSection] = useState<Pick>("mixed-q4");
  const [prob, setProb] = useState<GenProblem | null>(null);
  const [n, setN] = useState(0);
  const [hint, setHint] = useState(false);
  const [sol, setSol] = useState(false);
  const [typed, setTyped] = useState("");
  const [verdict, setVerdict] = useState<Verdict>(null);
  const [marked, setMarked] = useState(false);
  const stats = useGenStats();

  const next = useCallback((s: Pick) => {
    setProb(generate(s));
    setN((k) => k + 1);
    setHint(false); setSol(false); setTyped(""); setVerdict(null); setMarked(false);
  }, []);

  // first problem after mount, so the server and browser renders match
  useEffect(() => next("mixed-q4"), [next]);

  const html = useMemo(() => prob && {
    q: tex(prob.question), hint: tex(prob.hint), steps: prob.steps.map(tex), answer: tex(prob.answer),
  }, [prob]);

  const check = () => {
    if (!prob?.numeric) return;
    const v = parseNumber(typed);
    if (v === null) { setVerdict(null); return; }
    const ok = Math.abs(v - prob.numeric.value) < 1e-6 + 1e-3 * Math.abs(prob.numeric.value);
    setVerdict(ok ? "right" : "wrong");
    if (!marked) { recordGen(prob.section, ok); setMarked(true); }
    if (ok) setSol(true);
  };

  const selfMark = (ok: boolean) => {
    if (!prob || marked) return;
    recordGen(prob.section, ok);
    setMarked(true);
    setVerdict(ok ? "right" : "wrong");
  };

  const tried = Object.values(stats).reduce((a, s) => a + s.tried, 0);
  const right = Object.values(stats).reduce((a, s) => a + s.right, 0);

  return (
    <div className="gen">
      <div className="controls">
        {GROUPS.map((g) => (
          <div key={g.label} className="gen-group">
            <span>{g.label}</span>
            <div className="seg" role="group" aria-label={`${g.label} sections`}>
              {g.items.map((s) => (
                <button key={s.id} type="button" className={section === s.id ? "on" : ""} aria-pressed={section === s.id}
                  onClick={() => { setSection(s.id); next(s.id); }}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        ))}
        <span className="gen-stats">{tried ? `${right} / ${tried} right so far` : "No problems tried yet"}</span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {prob && html && (
          <motion.div
            key={n}
            className="gen-card"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="gen-tag">§{prob.section} · {prob.kind}</span>
            <div className="gen-q" dangerouslySetInnerHTML={{ __html: html.q }} />

            {prob.numeric && (
              <form className="gen-answer" onSubmit={(e) => { e.preventDefault(); check(); }}>
                <label htmlFor="gen-input">{prob.numeric.label}</label>
                <input id="gen-input" inputMode="text" autoComplete="off" placeholder="e.g. -4/5 or 2.5" value={typed}
                  onChange={(e) => { setTyped(e.target.value); setVerdict(null); }} />
                <button type="submit" className="btn">Check</button>
              </form>
            )}

            <AnimatePresence>
              {verdict && (
                <motion.p
                  key={verdict}
                  className={"gen-verdict " + verdict}
                  initial={{ opacity: 0, x: verdict === "wrong" ? 0 : -6 }}
                  animate={verdict === "wrong" ? { opacity: 1, x: [0, -8, 8, -5, 5, 0] } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {verdict === "right" ? "Correct!" : prob.numeric && !sol ? "Not quite. Try again, or open the hint or solution." : "Marked for more practice."}
                </motion.p>
              )}
            </AnimatePresence>

            <div className="gen-buttons">
              <button type="button" className="btn" onClick={() => setHint(!hint)} aria-expanded={hint}>{hint ? "Hide hint" : "Hint"}</button>
              <button type="button" className="btn" onClick={() => setSol(!sol)} aria-expanded={sol}>{sol ? "Hide solution" : "Show solution"}</button>
              <button type="button" className="cta gen-next" onClick={() => next(section)}>New problem →</button>
            </div>

            <AnimatePresence initial={false}>
              {hint && (
                <motion.div key="hint" className="gen-hint" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                  <div dangerouslySetInnerHTML={{ __html: html.hint }} />
                </motion.div>
              )}
              {sol && (
                <motion.div key="sol" className="gen-sol" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                  <motion.div initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.08 } } }} className="gen-steps">
                    {html.steps.map((s, i) => (
                      <motion.div key={i} variants={{ h: { opacity: 0, x: -10 }, s: { opacity: 1, x: 0 } }} dangerouslySetInnerHTML={{ __html: s }} />
                    ))}
                    <motion.p variants={{ h: { opacity: 0, x: -10 }, s: { opacity: 1, x: 0 } }} className="ans">
                      <span dangerouslySetInnerHTML={{ __html: "Answer: " + html.answer }} />
                    </motion.p>
                  </motion.div>
                  {!prob.numeric && !marked && (
                    <div className="gen-self">
                      <span>Did your answer match?</span>
                      <button type="button" className="fc-got" onClick={() => selfMark(true)}>Yes, I got it</button>
                      <button type="button" className="fc-again" onClick={() => selfMark(false)}>No, not yet</button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
