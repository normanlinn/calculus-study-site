"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { navItems, allProblemIds } from "@/content/nav";
import { useDone } from "@/lib/progress";

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

export default function Nav() {
  const path = usePathname().replace(/\/$/, "");
  const done = useDone();
  const count = allProblemIds.filter((id) => done[id]).length;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const listRef = useRef<HTMLDivElement>(null);

  // keep the active link visible in the scrollable row
  useEffect(() => {
    listRef.current?.querySelector(".active")?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [path]);

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
            {navItems.map((n) => {
              const active = path.endsWith("/" + n.slug);
              return (
                <Link key={n.slug} href={`/${n.slug}/`} className={"navlink" + (active ? " active" : "")} title={n.title} aria-current={active ? "page" : undefined}>
                  {active && <motion.span layoutId="nav-pill" className="pill" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                  <span>{n.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="navtools">
            <motion.span key={count} className="count" initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              {count} / {allProblemIds.length}
            </motion.span>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
