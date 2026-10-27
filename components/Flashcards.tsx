"use client";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Flashcard } from "@/content/types";
import { useSharedUnit } from "@/lib/unit";

type Filter = "all" | "q4" | "trig" | "rules";
const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All cards" },
  { id: "q4", label: "Quiz 4" },
  { id: "trig", label: "Trig" },
  { id: "rules", label: "Rules" },
];
const matches = (tag: string, f: Filter) =>
  f === "all" || (f === "q4" ? tag.startsWith("Q4") : f === "trig" ? tag.startsWith("Trig") : !tag.startsWith("Trig") && !tag.startsWith("Q4"));

const shuffle = (a: number[]) => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};

export default function Flashcards({ items }: { items: Flashcard[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [unit] = useSharedUnit();
  // open on the cards for the quiz picked in the top bar
  useEffect(() => setFilter(unit === "q4" ? "q4" : "all"), [unit]);
  const [reverse, setReverse] = useState(false);
  const pool = useMemo(
    () =>
      items
        .map((c, i) => ({ c, i }))
        .filter(({ c }) => matches(c.tag, filter))
        .map(({ i }) => i),
    [items, filter],
  );
  // start in textbook order so the first render matches the server; shuffling is a button
  const [queue, setQueue] = useState<number[]>(pool);
  const [known, setKnown] = useState(0);
  const [missed, setMissed] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const restart = useCallback((order: number[]) => {
    setQueue(order);
    setKnown(0);
    setMissed(0);
    setFlipped(false);
  }, []);
  useEffect(() => restart(pool), [pool, restart]);

  const current = queue[0];
  const card = current !== undefined ? items[current] : null;
  const answer = (got: boolean) => {
    if (!card) return;
    setFlipped(false);
    if (got) {
      setKnown((k) => k + 1);
      setQueue((q) => q.slice(1));
    } else {
      setMissed((m) => m + 1);
      setQueue((q) => [...q.slice(1), q[0]]);
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("input, select, textarea")) return;
      if (e.key === " " && t.closest("button")) return; // a focused button already handles Space
      if (!document.getElementById("flashdeck")?.matches(":hover, :focus-within")) return;
      if (e.key === " ") { e.preventDefault(); setFlipped((f) => !f); }
      if (flipped && e.key === "ArrowRight") answer(true);
      if (flipped && e.key === "ArrowLeft") answer(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const front = card ? (reverse ? card.back : card.front) : "";
  const back = card ? (reverse ? card.front : card.back) : "";
  const total = pool.length;

  return (
    <div className="flashdeck" id="flashdeck">
      <div className="controls">
        <div className="seg" role="group" aria-label="Which cards">
          {FILTERS.map((f) => (
            <button key={f.id} type="button" className={filter === f.id ? "on" : ""} aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
        <label htmlFor="fc-reverse">
          <input id="fc-reverse" type="checkbox" checked={reverse} onChange={(e) => { setReverse(e.target.checked); setFlipped(false); }} />
          Answer first (reverse)
        </label>
        <button type="button" onClick={() => restart(shuffle(pool))}>Shuffle &amp; restart</button>
      </div>

      <div className="fc-progress">
        <div className="bar"><motion.div animate={{ scaleX: total ? known / total : 0 }} transition={{ type: "spring", stiffness: 140, damping: 22 }} /></div>
        <span>{known} / {total} learned{missed ? ` · ${missed} to review again` : ""}</span>
      </div>

      <div className="fc-stage">
        <AnimatePresence mode="wait" initial={false}>
          {card ? (
            <motion.div
              key={`${current}-${reverse}-${known + missed}`}
              className="fc-slot"
              initial={{ opacity: 0, x: 40, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -40, rotate: -2 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className="fc-card"
                onClick={() => setFlipped((f) => !f)}
                aria-label={flipped ? "Showing the answer. Tap to see the question." : "Showing the question. Tap to see the answer."}
              >
                {/* Only one side is ever in the page: it turns edge-on, swaps, and turns back.
                    Stacking two faces with backface-visibility lets KaTeX text bleed through mirrored in Safari. */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={flipped ? "back" : "front"}
                    className={"fc-face " + (flipped ? "fc-back" : "fc-front")}
                    initial={{ rotateY: -90, opacity: 0.6 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0.6 }}
                    transition={{ duration: 0.16, ease: "easeInOut" }}
                  >
                    {flipped ? (
                      <>
                        <span className="fc-tag">Answer</span>
                        <div className="fc-math" dangerouslySetInnerHTML={{ __html: back }} />
                        <div className="fc-small" dangerouslySetInnerHTML={{ __html: front }} />
                      </>
                    ) : (
                      <>
                        <span className="fc-tag">{card.tag} · {reverse ? "what was differentiated?" : "what is it?"}</span>
                        <div className="fc-math" dangerouslySetInnerHTML={{ __html: front }} />
                        <span className="fc-hint">Tap to flip</span>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </motion.div>
          ) : (
            <motion.div key="done" className="fc-done" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}>
              <motion.span className="fc-star" animate={{ rotate: [0, -12, 12, 0], scale: [1, 1.25, 1] }} transition={{ duration: 0.8 }} aria-hidden>★</motion.span>
              <b>Round complete: all {total} cards learned.</b>
              <span>{missed ? `You needed ${missed} extra tries. Shuffle and go again until it's zero.` : "No misses. Try reverse mode next."}</span>
              <button type="button" className="cta" onClick={() => restart(shuffle(pool))}>Shuffle &amp; go again</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {card && (
        <div className="fc-actions">
          <motion.button type="button" className="fc-again" disabled={!flipped} onClick={() => answer(false)} whileTap={{ scale: 0.95 }}>
            ← Again
          </motion.button>
          <motion.button type="button" className="fc-got" disabled={!flipped} onClick={() => answer(true)} whileTap={{ scale: 0.95 }}>
            Got it →
          </motion.button>
        </div>
      )}
      <p className="note">Flip the card first, then mark it. On a keyboard: Space flips, → is Got it, ← is Again.</p>
    </div>
  );
}
