// Lesson content is stored as HTML with TeX between \( \) and \[ \]; lib/tex.ts renders the math at build time.

export type Block =
  | { type: "heading"; text: string; id?: string }
  | { type: "prose"; html: string }
  | { type: "lab"; id: LabId; html: string }
  | { type: "rules"; items: { key: boolean; html: string }[] }
  | { type: "examples"; items: { label: string; html: string }[] }
  | { type: "practice"; items: Problem[] }
  | { type: "traps"; items: { title: string; html: string }[] }
  | { type: "quiz"; items: QuizItem[] }
  | { type: "flashcards"; items: Flashcard[] }
  | { type: "sheet"; items: SheetCard[] }
  | { type: "generator" }
  | { type: "checker" }
  | { type: "countdown"; target: string; label: string }
  | { type: "mock" }
  | { type: "gradecalc" }
  | { type: "invtrig" };

export interface Problem {
  id: string;
  source: string;
  href: string | null;
  question: string;
  reveals: { label: string; html: string }[];
  /** Line-by-line walkthrough for the debugger-style stepper. */
  debug?: DebugLine[];
}

export interface DebugLine {
  /** The math written on this line (TeX, no delimiters). */
  code: string;
  /** Why this line is true / what rule produced it (HTML with TeX). */
  why: string;
  /** Values known after this line, shown in the Watch panel: [name, value] in TeX. */
  watch?: [string, string][];
}

/** A cheat sheet card: a short summary that opens a pop-up with the full explanation. */
export interface SheetCard {
  title: string;
  html: string;
  details: string;
  href: string;
  linkLabel: string;
}

export interface Flashcard {
  front: string;
  back: string;
  tag: string;
}

export interface QuizItem {
  question: string;
  /** Which quiz the question practices; untagged questions are Quiz 3. */
  unit?: Unit;
  options: { html: string; correct: boolean }[];
  explain: string;
}

export type LabId =
  | "lab-secant" | "lab-trace" | "lab-exp" | "lab-prod" | "lab-sin" | "lab-circ" | "lab-chain" | "lab-imp"
  | "lab-ln" | "lab-ladder" | "lab-linear" | "lab-hyper" | "lab-extrema";

export interface Section {
  id: string;
  slug: string;
  num: string;
  title: string;
  lede: string;
  blocks: Block[];
  /** Which quiz the section belongs to; tools have none. */
  unit?: Unit;
}

export type Unit = "q3" | "q4";
