"use client";
import { useSyncExternalStore } from "react";

// Generated-problem results, kept in this browser (and synced to the account when signed in).
export const GEN_KEY = "deriv-guide-gen-stats";
export type GenStats = Record<string, { tried: number; right: number }>;

let cache: GenStats | null = null;
const listeners = new Set<() => void>();
const EMPTY: GenStats = {};

export function readGen(): GenStats {
  if (cache) return cache;
  try { cache = JSON.parse(localStorage.getItem(GEN_KEY) || "{}") || {}; } catch { cache = {}; }
  return cache!;
}

export function writeGen(next: GenStats) {
  cache = next;
  try { localStorage.setItem(GEN_KEY, JSON.stringify(next)); } catch {}
  listeners.forEach((l) => l());
}

export function recordGen(section: string, right: boolean) {
  const cur = readGen(), s = cur[section] ?? { tried: 0, right: 0 };
  writeGen({ ...cur, [section]: { tried: s.tried + 1, right: s.right + (right ? 1 : 0) } });
}

const subscribe = (l: () => void) => { listeners.add(l); return () => listeners.delete(l); };
export const useGenStats = () => useSyncExternalStore(subscribe, readGen, () => EMPTY);
