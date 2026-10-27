"use client";
import { useEffect, useState } from "react";
import type { Unit } from "@/content/types";
import { LATEST_UNIT } from "@/content/nav";

// The Quiz 4 / Quiz 3 choice in the nav, shared with pages that filter by unit.
const KEY = "deriv-guide-unit";
const EVENT = "deriv-guide-unit";

export function shareUnit(u: Unit) {
  try { sessionStorage.setItem(KEY, u); } catch {}
  window.dispatchEvent(new CustomEvent<Unit>(EVENT, { detail: u }));
}

export function storedUnit(): Unit | null {
  try { const v = sessionStorage.getItem(KEY); return v === "q3" || v === "q4" ? v : null; } catch { return null; }
}

/** Follows the nav's unit switch; starts on the latest unit. */
export function useSharedUnit(): [Unit, (u: Unit) => void] {
  const [unit, setUnit] = useState<Unit>(LATEST_UNIT);
  useEffect(() => {
    const s = storedUnit();
    if (s) setUnit(s);
    const on = (e: Event) => setUnit((e as CustomEvent<Unit>).detail);
    window.addEventListener(EVENT, on);
    return () => window.removeEventListener(EVENT, on);
  }, []);
  return [unit, shareUnit];
}
