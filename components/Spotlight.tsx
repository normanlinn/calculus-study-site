"use client";
import { useEffect } from "react";

// A soft light follows the pointer across cards and problems; home cards also tilt toward it.
const SEL = ".card, .prob, .rule, .trap, .cover-grid a, .qq";

export default function Spotlight() {
  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let last: HTMLElement | null = null;
    const clear = (el: HTMLElement) => { el.style.removeProperty("--rx"); el.style.removeProperty("--ry"); el.classList.remove("lit"); };
    const move = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(SEL) as HTMLElement | null;
      if (last && last !== el) clear(last);
      last = el;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      el.classList.add("lit");
      if (el.classList.contains("card")) {
        el.style.setProperty("--rx", `${((y / r.height) - 0.5) * -6}deg`);
        el.style.setProperty("--ry", `${((x / r.width) - 0.5) * 8}deg`);
      }
    };
    const leave = () => { if (last) clear(last); last = null; };
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => { document.removeEventListener("pointermove", move); document.removeEventListener("pointerleave", leave); };
  }, []);
  return null;
}
