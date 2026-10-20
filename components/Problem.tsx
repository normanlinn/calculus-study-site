"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Problem as P } from "@/content/types";
import { setDone, useDone } from "@/lib/progress";

function Disclosure({ label, html }: { label: string; html: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button type="button" className="reveal-btn" aria-expanded={open} onClick={() => setOpen(!open)}>
        <motion.span className="chev" animate={{ rotate: open ? 90 : 0 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>▸</motion.span>
        {open ? `Hide ${label.toLowerCase()}` : `Show ${label.toLowerCase()}`}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="reveal-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }}
            >
              <StepLines html={html} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Solution steps appear one line at a time. */
function StepLines({ html }: { html: string }) {
  const parts = html.split(/(?=<p[\s>])/).map((s) => s.trim()).filter(Boolean);
  return (
    <>
      {parts.map((p, i) => (
        <motion.div
          key={i}
          style={{ minWidth: 0 }}
          variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0, transition: { duration: 0.3 } } }}
          dangerouslySetInnerHTML={{ __html: p }}
        />
      ))}
    </>
  );
}

export default function Problem({ p }: { p: P }) {
  const done = useDone();
  const on = !!done[p.id];
  return (
    <motion.div
      className={"prob" + (on ? " done" : "")}
      id={p.id}
      layout="position"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
    >
      <div className="prob-top">
        <div className="q">
          {p.href ? <Link className="src-link" href={`/${p.href}/`}>{p.source} →</Link> : <span className="src-text">{p.source}</span>}
          <div dangerouslySetInnerHTML={{ __html: p.question }} />
        </div>
        <motion.button type="button" className={"check" + (on ? " on" : "")} aria-pressed={on} onClick={() => setDone(p.id, !on)} whileTap={{ scale: 0.92 }}>
          <span className="box">
            <svg viewBox="0 0 16 16" fill="none" stroke="var(--surface)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <motion.path d="M3 8.5l3.2 3L13 4.5" initial={false} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: 0.3 }} />
            </svg>
          </span>
          I can do this
        </motion.button>
      </div>
      <div className="reveals">
        {p.reveals.map((r, i) => <Disclosure key={i} label={r.label} html={r.html} />)}
      </div>
    </motion.div>
  );
}
