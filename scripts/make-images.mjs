// Renders the link-preview image and the phone home-screen icon into public/.
// Run after changing the logo or the site name:  node scripts/make-images.mjs
import { ImageResponse } from "next/og.js";
import { createElement as h } from "react";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const font = (pkg, file) => readFileSync(path.join(root, "node_modules/@fontsource", pkg, "files", file));
const fonts = [
  { name: "Bricolage", data: font("bricolage-grotesque", "bricolage-grotesque-latin-800-normal.woff"), weight: 800, style: "normal" },
  { name: "Bricolage", data: font("bricolage-grotesque", "bricolage-grotesque-latin-400-normal.woff"), weight: 400, style: "normal" },
  { name: "Serif", data: font("source-serif-4", "source-serif-4-latin-700-italic.woff"), weight: 700, style: "italic" },
  { name: "Serif", data: font("source-serif-4", "source-serif-4-latin-400-normal.woff"), weight: 400, style: "normal" },
];

const C = { ink: "#18212e", bg: "#eef2f6", surface: "#fbfcfe", line: "#c9d3df", axis: "#8d9aab", muted: "#566274", blue: "#1f55d0", blueSoft: "#e2eafb", blueLight: "#7aa2ff", pink: "#ff78b9", orange: "#c65a06" };

/** The f′ logo: dark rounded square, italic serif f, pink prime, faint curve. */
function mark(size) {
  return h("div", { style: { width: size, height: size, borderRadius: size * 0.22, background: C.ink, display: "flex", position: "relative", overflow: "hidden" } },
    h("svg", { width: size, height: size, viewBox: "0 0 64 64", style: { position: "absolute", left: 0, top: 0 } },
      h("path", { d: "M8 46 C 18 46, 22 20, 32 24 S 46 40, 56 14", fill: "none", stroke: C.blueLight, strokeWidth: 3, strokeLinecap: "round", opacity: 0.55 }),
      h("path", { d: "M41 13 L37 27", stroke: C.pink, strokeWidth: 5, strokeLinecap: "round" })),
    h("div", { style: { position: "absolute", left: size * 0.2, top: size * -0.02, fontFamily: "Serif", fontStyle: "italic", fontWeight: 700, fontSize: size * 0.72, color: "#fff", lineHeight: 1 } }, "f"));
}

/** Graph panel: the cubic x³/3 − x with a true tangent line at x0. */
function graph(W, H) {
  const f = (x) => x ** 3 / 3 - x, fp = (x) => x * x - 1;
  const X = (x) => ((x + 2.4) / 4.8) * W, Y = (y) => H / 2 - y * (H / 5.2);
  const d = Array.from({ length: 97 }, (_, i) => -2.4 + (i / 96) * 4.8).map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`).join("");
  const x0 = 1.5, y0 = f(x0), m = fp(x0), dx = 0.85;
  return h("div", { style: { display: "flex", width: W, height: H, background: C.surface, borderRadius: 24, border: `2px solid ${C.line}`, overflow: "hidden" } },
    h("svg", { width: W, height: H, viewBox: `0 0 ${W} ${H}` },
      h("line", { x1: 0, y1: H / 2, x2: W, y2: H / 2, stroke: C.axis, strokeWidth: 2 }),
      h("line", { x1: W / 2, y1: 0, x2: W / 2, y2: H, stroke: C.axis, strokeWidth: 2 }),
      h("path", { d, fill: "none", stroke: C.blue, strokeWidth: 7, strokeLinecap: "round" }),
      h("line", { x1: X(x0 - dx), y1: Y(y0 - m * dx), x2: X(x0 + dx), y2: Y(y0 + m * dx), stroke: C.orange, strokeWidth: 5, strokeLinecap: "round" }),
      h("circle", { cx: X(x0), cy: Y(y0), r: 11, fill: C.orange, stroke: C.surface, strokeWidth: 3 })));
}

function preview() {
  const chip = (t) => h("div", { style: { display: "flex", fontFamily: "Bricolage", fontWeight: 400, fontSize: 21, color: C.blue, background: C.blueSoft, padding: "8px 16px", borderRadius: 999 } }, t);
  return h("div", { style: { width: "100%", height: "100%", display: "flex", alignItems: "center", gap: 44, padding: "56px 60px", background: C.bg } },
    h("div", { style: { display: "flex", flexDirection: "column", gap: 20, width: 520 } },
      mark(104),
      h("div", { style: { display: "flex", fontFamily: "Bricolage", fontWeight: 800, fontSize: 70, color: C.ink, lineHeight: 1.02, letterSpacing: -2 } }, "Derivatives Field Guide"),
      h("div", { style: { display: "flex", fontFamily: "Serif", fontWeight: 400, fontSize: 28, color: C.muted, lineHeight: 1.35, flexDirection: "column" } }, h("span", null, "Stewart Calculus 2.8 and 3.1–3.5"), h("span", null, "Math 190 quiz prep")),
      h("div", { style: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 4 } }, chip("Interactive graphs"), chip("77 practice problems"), chip("Flashcards"))),
    graph(520, 330));
}

async function save(el, w, hgt, file) {
  const res = new ImageResponse(el, { width: w, height: hgt, fonts });
  writeFileSync(path.join(root, "public", file), Buffer.from(await res.arrayBuffer()));
  console.log("wrote public/" + file);
}

await save(preview(), 1200, 630, "og-image.png");
await save(mark(180), 180, 180, "apple-touch-icon.png");
