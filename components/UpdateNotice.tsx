"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const BUILD = process.env.NEXT_PUBLIC_BUILD_ID ?? "";
const DISMISS_KEY = "deriv-guide-dismissed-update";
const EVERY_MS = 60_000;

interface Version { id: string; time: string; note: string }

/** Checks for a newer published version while the page is open and offers a refresh. */
export default function UpdateNotice() {
  const [next, setNext] = useState<Version | null>(null);

  useEffect(() => {
    let stopped = false;
    const check = async () => {
      if (document.visibilityState !== "visible") return;
      try {
        const res = await fetch(`${BASE}/version.json?t=${Date.now()}`, { cache: "no-store" });
        if (!res.ok) return;
        const v: Version = await res.json();
        let dismissed: string | null = null;
        try { dismissed = sessionStorage.getItem(DISMISS_KEY); } catch {}
        if (!stopped && v.id && v.id !== BUILD && v.id !== dismissed) setNext(v);
      } catch {}
    };
    check();
    const timer = setInterval(check, EVERY_MS);
    const onVisible = () => { if (document.visibilityState === "visible") check(); };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", check);
    return () => {
      stopped = true;
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", check);
    };
  }, []);

  const later = () => {
    if (next) try { sessionStorage.setItem(DISMISS_KEY, next.id); } catch {}
    setNext(null);
  };

  return (
    <AnimatePresence>
      {next && (
        <motion.div
          className="update-toast"
          role="status"
          aria-live="polite"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
        >
          <motion.span className="update-dot" animate={{ scale: [1, 1.35, 1] }} transition={{ repeat: Infinity, duration: 1.6 }} aria-hidden />
          <div className="update-text">
            <b>The site was just updated</b>
            {next.note && <span>{next.note}</span>}
          </div>
          <div className="update-actions">
            <button type="button" className="update-later" onClick={later}>Later</button>
            <button type="button" className="update-go" onClick={() => location.reload()}>Refresh</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
