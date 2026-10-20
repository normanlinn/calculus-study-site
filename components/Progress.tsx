"use client";
import { AnimatePresence, motion } from "motion/react";
import { useDone } from "@/lib/progress";

export function SectionProgress({ ids }: { ids: string[] }) {
  const done = useDone();
  const n = ids.filter((id) => done[id]).length;
  if (!ids.length) return null;
  return (
    <>
      <div className="sec-progress">
        <div className="bar"><motion.div initial={{ scaleX: 0 }} animate={{ scaleX: n / ids.length }} transition={{ type: "spring", stiffness: 120, damping: 20 }} /></div>
        <span>{n} / {ids.length} problems mastered</span>
      </div>
      <AnimatePresence>
        {n === ids.length && (
          <motion.div className="celebrate" initial={{ opacity: 0, y: -10, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }}>
            <motion.span animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.3, 1] }} transition={{ duration: 0.7 }} aria-hidden>★</motion.span>
            Every problem in this section is ticked. Nice work.
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Ring({ ids, size = 64 }: { ids: string[]; size?: number }) {
  const done = useDone();
  const n = ids.filter((id) => done[id]).length;
  const r = size / 2 - 5, c = 2 * Math.PI * r;
  return (
    <div className="ring-wrap">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--grid)" strokeWidth="6" />
        <motion.circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--good)" strokeWidth="6" strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`} strokeDasharray={c}
          initial={{ strokeDashoffset: c }} animate={{ strokeDashoffset: c * (1 - n / ids.length) }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} />
      </svg>
      <p><b>{n} / {ids.length}</b>problems mastered</p>
    </div>
  );
}

export function CardBar({ ids }: { ids: string[] }) {
  const done = useDone();
  const n = ids.filter((id) => done[id]).length;
  return (
    <>
      <div className="bar"><motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: ids.length ? n / ids.length : 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} /></div>
      <div className="meta"><span>{ids.length ? `${n} / ${ids.length} mastered` : "Review"}</span></div>
    </>
  );
}
