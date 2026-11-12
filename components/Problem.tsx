"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const SPARKS = Array.from({ length: 10 }, (_, i) => (i / 10) * Math.PI * 2);

function Burst() {
  return (
    <span className="burst" aria-hidden>
      {SPARKS.map((a, i) => (
        <motion.i key={i} initial={{ x: 0, y: 0, opacity: 1, scale: 1 }} animate={{ x: Math.cos(a) * 34, y: Math.sin(a) * 34, opacity: 0, scale: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} style={{ background: i % 2 ? "var(--good)" : "var(--accent)" }} />
      ))}
    </span>
  );
}
import type { Problem as P } from "@/content/types";
import { setDone, useDone } from "@/lib/progress";
import DebugStepper from "./DebugStepper";

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

function DebugToggle({ lines }: { lines: NonNullable<P["debug"]> }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button type="button" className="reveal-btn dbg-open" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span aria-hidden>{open ? "■" : "▶"}</span> {open ? "Stop debugging" : "Step through it like a debugger"}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div className="reveal-body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <DebugStepper lines={lines} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Solution steps appear one line at a time. */
function StepLines({ html }: { html: string }) {
  // A written walkthrough comes wrapped in <div class="walk">; keep the wrapper whole and animate its pieces.
  const WALK = '<div class="walk">';
  const walk = html.startsWith(WALK) && html.endsWith("</div>");
  const body = walk ? html.slice(WALK.length, -"</div>".length) : html;
  const parts = body.split(walk ? /(?=<p[\s>]|<ul[\s>]|<pre[\s>])/ : /(?=<p[\s>])/).map((s) => s.trim()).filter(Boolean);
  const lines = parts.map((p, i) => (
    <motion.div
      key={i}
      style={{ minWidth: 0 }}
      variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0, transition: { duration: 0.3 } } }}
      dangerouslySetInnerHTML={{ __html: p }}
    />
  ));
  if (walk) return <div className="walk">{lines}</div>;
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
  const [bursts, setBursts] = useState(0);
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
        <motion.button type="button" className={"check" + (on ? " on" : "")} aria-pressed={on} onClick={() => { if (!on) setBursts((n) => n + 1); setDone(p.id, !on); }} whileTap={{ scale: 0.92 }}>
          <span className="box">
            {bursts > 0 && on && <Burst key={bursts} />}
            <svg viewBox="0 0 16 16" fill="none" stroke="var(--surface)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <motion.path d="M3 8.5l3.2 3L13 4.5" initial={false} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: 0.3 }} />
            </svg>
          </span>
          I can do this
        </motion.button>
      </div>
      <div className="reveals">
        {p.debug && <DebugToggle lines={p.debug} />}
        {p.reveals.map((r, i) => <Disclosure key={i} label={r.label} html={r.html} />)}
      </div>
    </motion.div>
  );
}
