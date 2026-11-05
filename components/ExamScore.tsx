"use client";
import { AnimatePresence, motion } from "motion/react";
import { setDone, useDone } from "@/lib/progress";

const CUTS: [string, number][] = [["A", 0.9], ["B", 0.8], ["C", 0.7]];

/** Live score for a practice exam: adds up the points of the problems ticked “I can do this”. */
export default function ExamScore({ items, total }: { items: { id: string; points: number }[]; total: number }) {
  const done = useDone();
  const got = items.reduce((s, x) => s + (done[x.id] ? x.points : 0), 0);
  const ticked = items.filter((x) => done[x.id]).length;
  const frac = got / total;
  const grade = CUTS.find(([, f]) => frac >= f)?.[0] ?? (frac >= 0.6 ? "D" : "F");
  const next = CUTS.slice().reverse().find(([, f]) => got < Math.ceil(f * total));
  const need = next ? Math.ceil(next[1] * total) - got : 0;

  return (
    <div className="exam-score" role="status" aria-live="polite">
      <div className="es-num">
        <motion.b key={got} initial={{ scale: 1.5, color: "var(--good)" }} animate={{ scale: 1, color: "var(--ink)" }} transition={{ type: "spring", stiffness: 380, damping: 18 }}>
          {got}
        </motion.b>
        <span>/ {total}</span>
      </div>
      <div className="es-mid">
        <div className="es-bar">
          <motion.div className="es-fill" initial={false} animate={{ scaleX: frac }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
          {CUTS.map(([L, f]) => (
            <span key={L} className={"es-cut" + (frac >= f ? " hit" : "")} style={{ left: `${f * 100}%` }}>{L}</span>
          ))}
        </div>
        <span className="es-note">
          {ticked === 0 ? "Tick “I can do this” on each problem you got fully right." : next ? `${need} more point${need > 1 ? "s" : ""} for ${next[0] === "A" ? "an" : "a"} ${next[0]}` : "A-level work!"}
        </span>
      </div>
      <AnimatePresence mode="popLayout">
        <motion.span key={grade} className={"es-grade g-" + grade} initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0 }} transition={{ type: "spring", stiffness: 400, damping: 16 }}>
          {ticked ? grade : "–"}
        </motion.span>
      </AnimatePresence>
      {ticked > 0 && (
        <button type="button" className="es-reset" onClick={() => items.forEach((x) => setDone(x.id, false))}>Reset</button>
      )}
    </div>
  );
}
