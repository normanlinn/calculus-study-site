import { sections } from "./sections";
import type { Unit } from "./types";

/** Short labels for the top bar, in reading order. */
const SHORT: Record<string, string> = {
  "practice-quiz": "Practice quiz",
  "2-8": "2.8",
  "3-1": "3.1",
  "3-2": "3.2",
  "3-3": "3.3",
  "3-4": "3.4",
  "3-5": "3.5",
  "quiz-4": "Quiz 4 plan",
  "3-6": "3.6",
  "3-9": "3.9",
  "3-10": "3.10",
  "3-11": "3.11",
  "4-1": "4.1",
  "quiz-5": "Quiz 5 plan",
  "quiz-5-practice": "Practice quiz",
  "4-2": "4.2",
  "4-3": "4.3",
  "4-4": "4.4",
  "4-5": "4.5",
  "4-7": "4.7",
  "4-8": "4.8",
  "4-9": "4.9",
  "quiz-review": "Quiz 3 & 4 review",
  "midterm-practice": "Practice exam",
  "crash-course": "Crash course",
  "midterm-2": "Midterm 2",
  "grades": "Grades",
  "quick-quiz": "Quick quiz",
  "generate": "Generate",
  "memory-tricks": "Memorize",
  "unit-circle": "Unit circle",
  "cheat-sheet": "Cheat sheet",
};

export const UNITS: { id: Unit; label: string; long: string; date: string | null }[] = [
  { id: "q5", label: "Quiz 5", long: "Quiz 5 · §4.3, 4.4, 4.5, 4.7", date: "2026-11-12" },
  { id: "q4", label: "Quiz 4", long: "Quiz 4 · §3.6–4.1", date: "2026-10-27" },
  { id: "q3", label: "Quiz 3", long: "Quiz 3 · §2.8–3.5", date: null },
  { id: "later", label: "Later", long: "Not on Quiz 5 · §4.2, 4.8, 4.9", date: null },
];
export const LATEST_UNIT: Unit = "q5";

export const navItems = sections.map((s) => ({ slug: s.slug, label: SHORT[s.slug] ?? s.num, title: s.title, unit: s.unit, also: s.also ?? [] }));

const idsOf = (pred: (u: Unit | undefined) => boolean) =>
  sections.filter((s) => pred(s.unit) || (s.also ?? []).some(pred)).flatMap((s) => s.blocks.flatMap((b) => (b.type === "practice" ? b.items.map((p) => p.id) : [])));

export const allProblemIds = idsOf(() => true);
export const unitProblemIds = (u: Unit) => idsOf((x) => x === u);
