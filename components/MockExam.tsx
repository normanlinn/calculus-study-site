"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { generate, parseNumber, type GenProblem, type GenSection } from "@/lib/mathgen";
import { tex } from "@/lib/tex";
import { recordGen } from "@/lib/genstats";

// One problem from every Midterm 2 section; the full exam adds a second from the heavier ones.
const SHORT: GenSection[] = ["2.8", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.9", "3.10", "3.11", "4.1"];
const FULL: GenSection[] = [...SHORT, "3.4", "3.5", "3.9", "4.1"];
const MIN_PER_PROBLEM = 5;

type Phase = "ready" | "running" | "review";
interface Item { p: GenProblem; typed: string; mark: boolean | null; open: boolean }

const clock = (s: number) => `${Math.floor(s / 60)}:${String(Math.max(0, s) % 60).padStart(2, "0")}`;

export default function MockExam() {
  const [phase, setPhase] = useState<Phase>("ready");
  const [length, setLength] = useState<"short" | "full">("short");
  const [items, setItems] = useState<Item[]>([]);
  const [left, setLeft] = useState(0);

  const start = () => {
    const list = (length === "short" ? SHORT : FULL).map((s) => ({ p: generate(s), typed: "", mark: null, open: false }));
    setItems(list);
    setLeft(list.length * MIN_PER_PROBLEM * 60);
    setPhase("running");
    window.scrollTo({ top: (document.querySelector(".mock") as HTMLElement)?.offsetTop - 80 || 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (phase !== "running") return;
    const t = setInterval(() => setLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [phase]);
  useEffect(() => { if (phase === "running" && left <= 0) finish(); });

  const finish = () => {
    // number answers grade themselves; the rest are marked by the student
    setItems((xs) => xs.map((it) => {
      if (!it.p.numeric) return it;
      const v = parseNumber(it.typed);
      const ok = v !== null && Math.abs(v - it.p.numeric.value) < 1e-6 + 1e-3 * Math.abs(it.p.numeric.value);
      return { ...it, mark: ok };
    }));
    setPhase("review");
  };

  const html = useMemo(() => items.map((it) => ({ q: tex(it.p.question), a: tex(it.p.answer), steps: it.p.steps.map(tex) })), [items]);
  const set = (i: number, patch: Partial<Item>) => setItems((xs) => xs.map((x, k) => (k === i ? { ...x, ...patch } : x)));

  const marked = items.filter((x) => x.mark !== null);
  const right = items.filter((x) => x.mark).length;
  const allMarked = phase === "review" && marked.length === items.length;
  const weak = [...new Set(items.filter((x) => x.mark === false).map((x) => x.p.section))];

  // save results once every problem is marked
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    if (allMarked && !saved) { items.forEach((x) => recordGen(x.p.section, !!x.mark)); setSaved(true); }
    if (phase !== "review" && saved) setSaved(false);
  }, [allMarked, saved, items, phase]);

  return (
    <div className="mock">
      {phase === "ready" && (
        <div className="mock-start">
          <p>A practice midterm with fresh problems from every section on Midterm 2. No calculator, just like the real exam: work on paper, then type number answers or mark the others yourself at the end.</p>
          <div className="controls">
            <div className="seg" role="group" aria-label="Length">
              <button type="button" className={length === "short" ? "on" : ""} aria-pressed={length === "short"} onClick={() => setLength("short")}>11 problems · 55 min</button>
              <button type="button" className={length === "full" ? "on" : ""} aria-pressed={length === "full"} onClick={() => setLength("full")}>15 problems · 75 min</button>
            </div>
            <button type="button" className="cta" onClick={start}>Start the mock midterm →</button>
          </div>
        </div>
      )}

      {phase !== "ready" && (
        <>
          <div className={"mock-bar" + (phase === "running" && left < 300 ? " low" : "")}>
            {phase === "running" ? (
              <>
                <b className="mock-clock" aria-live="off">{clock(left)}</b>
                <span>{items.length} problems · work on paper</span>
                <button type="button" className="btn" onClick={finish}>I'm done, check it</button>
              </>
            ) : (
              <>
                <b className="mock-clock">{allMarked ? `${right} / ${items.length}` : `${marked.length} / ${items.length} marked`}</b>
                <span>{allMarked ? (right / items.length >= 0.9 ? "A-level work. Keep it up." : right / items.length >= 0.8 ? "B-level work." : "Review the ones you missed, then try another.") : "Mark each formula answer below."}</span>
                <button type="button" className="btn" onClick={() => setPhase("ready")}>New mock exam</button>
              </>
            )}
          </div>
          {allMarked && weak.length > 0 && (
            <p className="mock-weak">Review: {weak.map((s) => <a key={s} href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${s.replace(".", "-")}/`}>§{s}</a>)}</p>
          )}
          <ol className="mock-list">
            {items.map((it, i) => (
              <motion.li key={i} className={"mock-item" + (it.mark === true ? " right" : it.mark === false ? " wrong" : "")}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(i * 0.03, 0.4) }}>
                <span className="gen-tag">{i + 1} · §{it.p.section} · {it.p.kind}</span>
                <div className="gen-q" dangerouslySetInnerHTML={{ __html: html[i]?.q ?? "" }} />
                {it.p.numeric && (
                  <label className="gen-answer">
                    {it.p.numeric.label}
                    <input value={it.typed} disabled={phase === "review"} onChange={(e) => set(i, { typed: e.target.value })} placeholder="answer" autoComplete="off" />
                  </label>
                )}
                {phase === "review" && (
                  <div className="mock-review">
                    <p className="ans"><span dangerouslySetInnerHTML={{ __html: "Answer: " + (html[i]?.a ?? "") }} /></p>
                    {it.p.numeric ? (
                      <p className={"gen-verdict " + (it.mark ? "right" : "wrong")}>{it.mark ? "Correct" : it.typed ? `You wrote ${it.typed}` : "No answer entered"}</p>
                    ) : it.mark === null ? (
                      <div className="gen-self">
                        <span>Did yours match?</span>
                        <button type="button" className="fc-got" onClick={() => set(i, { mark: true })}>Yes</button>
                        <button type="button" className="fc-again" onClick={() => set(i, { mark: false })}>No</button>
                      </div>
                    ) : (
                      <p className={"gen-verdict " + (it.mark ? "right" : "wrong")}>{it.mark ? "Marked right" : "Marked for review"}</p>
                    )}
                    <button type="button" className="reveal-btn" onClick={() => set(i, { open: !it.open })} aria-expanded={it.open}>
                      {it.open ? "Hide solution" : "Show solution"}
                    </button>
                    <AnimatePresence>
                      {it.open && (
                        <motion.div className="gen-steps" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                          {html[i].steps.map((s, k) => <div key={k} dangerouslySetInnerHTML={{ __html: s }} />)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </motion.li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}
