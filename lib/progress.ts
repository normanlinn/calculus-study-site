"use client";
import { useSyncExternalStore } from "react";

// "I can do this" ticks, kept in this browser (and synced to the account when signed in).
const KEY = "deriv-guide-done";
type Done = Record<string, boolean>;

let cache: Done | null = null;
const listeners = new Set<() => void>();
const EMPTY: Done = {};

export function readDone(): Done {
  if (cache) return cache;
  try {
    cache = JSON.parse(localStorage.getItem(KEY) || "{}") || {};
  } catch {
    cache = {};
  }
  return cache!;
}

export function setDone(id: string, value: boolean) {
  cache = { ...readDone(), [id]: value };
  try {
    localStorage.setItem(KEY, JSON.stringify(cache));
  } catch {}
  listeners.forEach((l) => l());
}

/** Replace every tick at once (used when progress arrives from the account). */
export function replaceDone(next: Done) {
  cache = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(cache));
  } catch {}
  listeners.forEach((l) => l());
}

export const subscribeDone = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export const useDone = () => useSyncExternalStore(subscribeDone, readDone, () => EMPTY);
