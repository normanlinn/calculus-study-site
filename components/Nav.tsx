"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { navItems, unitProblemIds, UNITS, LATEST_UNIT } from "@/content/nav";
import type { Unit } from "@/content/types";
import { useDone } from "@/lib/progress";
import AccountButton from "./AccountButton";

const THEME_KEY = "deriv-guide-theme";

function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);
  useEffect(() => {
    const t = document.documentElement.dataset.theme;
    setDark(t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);
  const flip = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try { localStorage.setItem(THEME_KEY, next ? "dark" : "light"); } catch {}
  };
  return (
    <button type="button" className="iconbtn" onClick={flip} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>
      <motion.svg key={String(dark)} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        initial={{ rotate: -90, scale: 0.6, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
        {dark ? (
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        )}
      </motion.svg>
    </button>
  );
}

// Study tools live in a menu so the bar never runs out of room.
const TOOLS: Record<string, string> = {
  "midterm-2": "Plan and a timed mock exam for Thu, Oct 29",
  grades: "What you need for an A or a B",
  "quick-quiz": "10 fast questions with instant feedback",
  generate: "Unlimited new problems, and check your own",
  "memory-tricks": "Learn the formulas, with a flashcard drill",
  "cheat-sheet": "Every rule on one page",
};
const toolItems = navItems.filter((n) => n.slug in TOOLS);

function ToolsMenu({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const current = toolItems.find((t) => path.endsWith("/" + t.slug));

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (!wrap.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", onDown);
    window.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("pointerdown", onDown); window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <div className="tools" ref={wrap}>
      <button type="button" className={"navlink tools-btn" + (current ? " active" : "")} aria-expanded={open} aria-haspopup="menu" onClick={() => setOpen(!open)}>
        {current && <motion.span layoutId="nav-pill" className="pill" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
        <span>{current ? current.label : "Study tools"}</span>
        <motion.svg width="12" height="12" viewBox="0 0 12 12" aria-hidden animate={{ rotate: open ? 180 : 0 }}>
          <path d="M2.5 4.5L6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="tools-menu"
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16 }}
          >
            {toolItems.map((t) => {
              const active = current?.slug === t.slug;
              return (
                <Link key={t.slug} href={`/${t.slug}/`} role="menuitem" className={"tools-item" + (active ? " on" : "")} aria-current={active ? "page" : undefined}>
                  <b>{t.label}</b>
                  <span>{TOOLS[t.slug]}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Nav() {
  const path = usePathname().replace(/\/$/, "");
  const done = useDone();
  const pageUnit = navItems.find((n) => path.endsWith("/" + n.slug))?.unit;
  const [unit, setUnit] = useState<Unit>(pageUnit ?? LATEST_UNIT);
  useEffect(() => { if (pageUnit) setUnit(pageUnit); }, [pageUnit]);
  const ids = unitProblemIds(unit);
  const count = ids.filter((id) => done[id]).length;
  const mainItems = navItems.filter((n) => n.unit === unit);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const listRef = useRef<HTMLDivElement>(null);

  // keep the active link visible in the scrollable row
  useEffect(() => {
    listRef.current?.querySelector(".active")?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [path, unit]);

  return (
    <>
      <motion.div className="scrollbar" style={{ scaleX }} aria-hidden />
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/" className="brand" aria-label="Derivatives Field Guide home">
            <span className="brand-mark">f′</span>
            <span className="brand-name">Field Guide</span>
          </Link>
          <nav className="navlinks" ref={listRef} aria-label="Sections">
            <div className="unit-switch" role="group" aria-label="Which quiz">
              {UNITS.map((u) => (
                <button key={u.id} type="button" className={unit === u.id ? "on" : ""} aria-pressed={unit === u.id} onClick={() => setUnit(u.id)} title={u.long}>
                  {u.label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="popLayout" initial={false}>
              {mainItems.map((n) => {
                const active = path.endsWith("/" + n.slug);
                return (
                  <motion.span key={n.slug} className="navlink-wrap" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.18 }}>
                    <Link href={`/${n.slug}/`} className={"navlink" + (active ? " active" : "")} title={n.title} aria-current={active ? "page" : undefined}>
                      {active && <motion.span layoutId="nav-pill" className="pill" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                      <span>{n.label}</span>
                    </Link>
                  </motion.span>
                );
              })}
            </AnimatePresence>
          </nav>
          <ToolsMenu path={path} />
          <div className="navtools">
            <motion.span key={unit + count} className="count" title={`${count} of ${ids.length} ${UNITS.find((u) => u.id === unit)!.label} problems marked “I can do this”`}
              initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden><path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {count}/{ids.length}
            </motion.span>
            <AccountButton />
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
