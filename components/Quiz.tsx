"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { QuizItem } from "@/content/types";

function Question({ q, n, onAnswer }: { q: QuizItem; n: number; onAnswer: (ok: boolean) => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    onAnswer(q.options[i].correct);
  };
  return (
    <div className="qq">
      <div dangerouslySetInnerHTML={{ __html: q.question }} />
      <div className="opts">
        {q.options.map((o, i) => {
          const state = picked === null ? "" : o.correct ? "right" : picked === i ? "wrong" : "";
          return (
            <motion.button
              key={i}
              type="button"
              className={state}
              onClick={() => pick(i)}
              whileHover={picked === null ? { y: -2 } : undefined}
              whileTap={picked === null ? { scale: 0.96 } : undefined}
              animate={state === "wrong" ? { x: [0, -8, 8, -6, 6, 0] } : state === "right" ? { scale: [1, 1.08, 1] } : {}}
              transition={{ duration: 0.4 }}
              aria-label={`Question ${n + 1}, option ${i + 1}`}
              dangerouslySetInnerHTML={{ __html: o.html }}
            />
          );
        })}
      </div>
      <AnimatePresence>
        {picked !== null && (
          <motion.p className="fb" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
            <b style={{ color: q.options[picked].correct ? "var(--good)" : "var(--bad)" }}>{q.options[picked].correct ? "Correct. " : "Not quite. "}</b>
            <span dangerouslySetInnerHTML={{ __html: q.explain }} />
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Quiz({ items }: { items: QuizItem[] }) {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [round, setRound] = useState(0);
  return (
    <div className="quiz">
      <div className="sec-progress" aria-live="polite">
        <span>Score</span>
        <motion.b key={score} initial={{ scale: 1.6, color: "var(--good)" }} animate={{ scale: 1, color: "var(--ink)" }} style={{ fontSize: 18 }}>
          {score}
        </motion.b>
        <span>/ {items.length} · {answered} answered</span>
        {answered > 0 && (
          <button type="button" className="btn" onClick={() => { setScore(0); setAnswered(0); setRound(round + 1); }}>Try again</button>
        )}
      </div>
      {items.map((q, i) => (
        <Question key={`${round}-${i}`} q={q} n={i} onAnswer={(ok) => { setAnswered((a) => a + 1); if (ok) setScore((s) => s + 1); }} />
      ))}
      <AnimatePresence>
        {answered === items.length && (
          <motion.div className="celebrate" initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
            You scored {score} / {items.length}. {score === items.length ? "Perfect!" : "Review the ones you missed, then try again."}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
