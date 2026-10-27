"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { DebugLine } from "@/content/types";

/** Walk a solution one line at a time, like stepping through code in a debugger. */
export default function DebugStepper({ lines }: { lines: DebugLine[] }) {
  const [i, setI] = useState(0);
  const box = useRef<HTMLDivElement>(null);
  const last = lines.length - 1;
  const clamp = (n: number) => Math.max(0, Math.min(last, n));
  const go = (n: number) => setI(clamp(n));
  const by = (d: number) => setI((c) => clamp(c + d));

  // the watch panel shows every value defined up to the current line; newest wins
  const watch = new Map<string, { v: string; at: number }>();
  lines.slice(0, i + 1).forEach((l, k) => l.watch?.forEach(([n, v]) => watch.set(n, { v, at: k })));

  useEffect(() => { box.current?.querySelector(".dbg-line.cur")?.scrollIntoView({ block: "nearest", behavior: "smooth" }); }, [i]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); by(1); }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); by(-1); }
  };

  return (
    <div className="dbg" ref={box} tabIndex={0} onKeyDown={onKey} aria-label="Solution stepper. Use the arrow keys to step.">
      <div className="dbg-toolbar">
        <button type="button" onClick={() => go(0)} disabled={i === 0} title="Restart">⟲ Restart</button>
        <button type="button" onClick={() => by(-1)} disabled={i === 0} title="Back one line (←)">◀ Back</button>
        <button type="button" className="dbg-step" onClick={() => by(1)} disabled={i === last} title="Next line (→)">Step ▶</button>
        <button type="button" onClick={() => go(last)} disabled={i === last} title="Run to the end">Run to end ⏭</button>
        <span className="dbg-pos">line {i + 1} / {lines.length}</span>
      </div>
      <div className="dbg-body">
        <ol className="dbg-code">
          {lines.map((l, k) => (
            <li key={k} className={"dbg-line" + (k === i ? " cur" : k < i ? " past" : " future")} onClick={() => go(k)}>
              <span className="dbg-gutter" aria-hidden>{k === i ? "▶" : k + 1}</span>
              {k <= i ? <span className="dbg-src" dangerouslySetInnerHTML={{ __html: l.code }} /> : <span className="dbg-src dbg-hidden">· · ·</span>}
            </li>
          ))}
        </ol>
        <div className="dbg-side">
          <AnimatePresence mode="wait">
            <motion.div key={i} className="dbg-why" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}>
              <span className="dbg-label">Why line {i + 1}</span>
              <div dangerouslySetInnerHTML={{ __html: lines[i].why }} />
            </motion.div>
          </AnimatePresence>
          {watch.size > 0 && (
            <div className="dbg-watch">
              <span className="dbg-label">Watch</span>
              <table>
                <tbody>
                  {[...watch.entries()].map(([n, { v, at }]) => (
                    <motion.tr key={n + v} className={at === i ? "fresh" : ""} initial={at === i ? { backgroundColor: "var(--good-soft)" } : false} animate={{ backgroundColor: "rgba(0,0,0,0)" }} transition={{ duration: 1.2 }}>
                      <th dangerouslySetInnerHTML={{ __html: n }} />
                      <td dangerouslySetInnerHTML={{ __html: v }} />
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {i === last && <p className="dbg-done">✓ End of solution. Try the problem again on paper without looking.</p>}
    </div>
  );
}
