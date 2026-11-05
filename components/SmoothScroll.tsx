"use client";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window { __lenis?: Lenis }
}

// Slow, gliding mouse-wheel and trackpad scrolling across the whole site.
// Phones keep their own native touch scrolling, and it switches off for
// anyone who has "reduce motion" turned on.
export default function SmoothScroll() {
  const path = usePathname();

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      lerp: 0.065, // lower = slower, floatier glide (Lenis default is 0.1)
      wheelMultiplier: 0.85,
      smoothWheel: true,
      anchors: { offset: -90 }, // in-page links glide too, clearing the sticky top bar
      allowNestedScroll: true, // menus, modals and the debugger keep their own scrolling
      autoRaf: true,
    });
    window.__lenis = lenis;
    return () => {
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // A new page starts at the top instead of finishing the previous page's glide.
  useEffect(() => {
    const lenis = window.__lenis;
    if (lenis && !location.hash) lenis.scrollTo(0, { immediate: true, force: true });
  }, [path]);

  return null;
}
