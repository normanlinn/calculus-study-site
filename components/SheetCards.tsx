"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { SheetCard } from "@/content/types";

const CLOSE_MS = 200;

/** Cheat sheet grid. Tapping a card opens a pop-up with the full explanation. */
export default function SheetCards({ items }: { items: SheetCard[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const last = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  // Play the closing animation, then remove the pop-up from the page.
  const close = useCallback(() => {
    if (closing) return;
    setClosing(true);
    setTimeout(() => {
      setOpen(null);
      setClosing(false);
    }, CLOSE_MS);
  }, [closing]);

  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + items.length) % items.length)), [items.length]);

  const isOpen = open !== null;

  // Lock page scrolling while the pop-up is open; move focus in, then back to the card on close.
  useEffect(() => {
    if (!isOpen) return;
    const opener = last.current;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      if (opener !== null) cardRefs.current[opener]?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (open !== null) last.current = open;
  }, [open]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close, step]);

  const card = open !== null ? items[open] : null;

  return (
    <>
      <div className="sheet">
        {items.map((c, i) => (
          <motion.button
            key={c.title}
            ref={(el) => { cardRefs.current[i] = el; }}
            type="button"
            className="rule sheet-card"
            onClick={() => { last.current = i; setOpen(i); }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            aria-haspopup="dialog"
          >
            <h4>{c.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: c.html }} />
            <span className="sheet-more">Tap for details ↗</span>
          </motion.button>
        ))}
      </div>

      {/* Rendered into <body>: the page transition's transformed wrapper would otherwise trap position: fixed. */}
      {mounted && card && createPortal(
        <div className={"modal-backdrop" + (closing ? " closing" : "")} onClick={close}>
          <div
            key={open}
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sheet-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-head">
              <h3 id="sheet-modal-title">{card.title}</h3>
              <button ref={closeRef} type="button" className="modal-x" onClick={close} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="modal-body" dangerouslySetInnerHTML={{ __html: card.details }} />
            <div className="modal-foot">
              <button type="button" className="btn" onClick={() => step(-1)}>← Previous</button>
              <Link className="btn" href={card.href} onClick={() => setOpen(null)}>{card.linkLabel} →</Link>
              <button type="button" className="btn" onClick={() => step(1)}>Next →</button>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
