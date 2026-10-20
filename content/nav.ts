import { sections } from "./sections";

/** Short labels for the top bar, in reading order. */
const SHORT: Record<string, string> = {
  "practice-quiz": "Practice quiz",
  "2-8": "2.8",
  "3-1": "3.1",
  "3-2": "3.2",
  "3-3": "3.3",
  "3-4": "3.4",
  "3-5": "3.5",
  "quick-quiz": "Quick quiz",
  "cheat-sheet": "Cheat sheet",
};

export const navItems = sections.map((s) => ({ slug: s.slug, label: SHORT[s.slug] ?? s.num, title: s.title }));

export const allProblemIds = sections.flatMap((s) =>
  s.blocks.flatMap((b) => (b.type === "practice" ? b.items.map((p) => p.id) : [])),
);
