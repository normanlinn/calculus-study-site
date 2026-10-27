import katex from "katex";
import type { Block, Section } from "@/content/types";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const unescape = (s: string) =>
  s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");

/** Render every \( \) and \[ \] in an HTML string to KaTeX markup, and prefix internal links with the base path. */
export function tex(html: string): string {
  return html
    .replace(/\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)/g, (_, display: string | undefined, inline: string | undefined) => {
      const src = unescape(display ?? inline ?? "");
      const out = katex.renderToString(src, { displayMode: display !== undefined, throwOnError: false, strict: "ignore" });
      return display !== undefined ? `<div class="math-display">${out}</div>` : out;
    })
    .replace(/href="\/(?!\/)/g, `href="${BASE}/`);
}

/** Plain text for card summaries. */
export const plain = (html: string) => unescape(html.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();

function renderBlock(b: Block): Block {
  switch (b.type) {
    case "heading":
      return b;
    case "prose":
      return { ...b, html: tex(b.html) };
    case "lab":
      return { ...b, html: tex(b.html) };
    case "rules":
      return { ...b, items: b.items.map((i) => ({ ...i, html: tex(i.html) })) };
    case "examples":
      return { ...b, items: b.items.map((i) => ({ ...i, html: tex(i.html) })) };
    case "traps":
      return { ...b, items: b.items.map((i) => ({ ...i, html: tex(i.html) })) };
    case "practice":
      return {
        ...b,
        items: b.items.map((p) => ({
          ...p,
          question: tex(p.question),
          reveals: p.reveals.map((r) => ({ ...r, html: tex(r.html) })),
          debug: p.debug?.map((l) => ({
            code: tex(`\\(\\displaystyle ${l.code}\\)`),
            why: tex(l.why),
            watch: l.watch?.map(([n, v]) => [tex(`\\(${n}\\)`), tex(`\\(\\displaystyle ${v}\\)`)] as [string, string]),
          })),
        })),
      };
    case "generator":
    case "checker":
    case "countdown":
    case "mock":
    case "gradecalc":
    case "invtrig":
      return b;
    case "sheet":
      return { ...b, items: b.items.map((c) => ({ ...c, html: tex(c.html), details: tex(c.details) })) };
    case "flashcards":
      return { ...b, items: b.items.map((c) => ({ ...c, front: tex(c.front), back: tex(c.back) })) };
    case "quiz":
      return {
        ...b,
        items: b.items.map((q) => ({
          ...q,
          question: tex(q.question),
          explain: tex(q.explain),
          options: q.options.map((o) => ({ ...o, html: tex(o.html) })),
        })),
      };
  }
}

export const renderSection = (s: Section): Section => ({ ...s, lede: tex(s.lede), blocks: s.blocks.map(renderBlock) });

export const problemIds = (s: Section) =>
  s.blocks.flatMap((b) => (b.type === "practice" ? b.items.map((p) => p.id) : []));
