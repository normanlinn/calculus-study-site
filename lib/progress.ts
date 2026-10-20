"use client";
import { useSyncExternalStore } from "react";

// "I can do this" ticks, kept in this browser only.
const KEY = "deriv-guide-done";
type Done = Record<string, boolean>;

let cache: Done | null = null;
const listeners = new Set<() => void>();
const EMPTY: Done = {};

function read(): Done {
  if (cache) return cache;
  try {
    cache = JSON.parse(localStorage.getItem(KEY) || "{}") || {};
  } catch {
    cache = {};
  }
  return cache!;
}

export function setDone(id: string, value: boolean) {
  cache = { ...read(), [id]: value };
  try {
    localStorage.setItem(KEY, JSON.stringify(cache));
  } catch {}
  listeners.forEach((l) => l());
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export const useDone = () => useSyncExternalStore(subscribe, read, () => EMPTY);
