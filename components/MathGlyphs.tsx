// Faint math symbols drifting behind the home hero. Pure CSS animation, hidden from screen readers.
const GLYPHS: [string, number, number, number, number][] = [
  // symbol, left %, top %, size px, duration s
  ["∫", 6, 12, 54, 19], ["∂", 88, 8, 40, 23], ["π", 72, 62, 46, 17], ["Σ", 18, 70, 42, 21],
  ["√", 46, 6, 36, 25], ["∞", 93, 44, 38, 18], ["dx", 30, 38, 26, 22], ["f′", 60, 28, 34, 20],
  ["Δ", 4, 46, 30, 24], ["θ", 80, 84, 32, 16], ["lim", 38, 86, 24, 26], ["eˣ", 54, 74, 30, 19],
];

export default function MathGlyphs() {
  return (
    <div className="glyphs" aria-hidden>
      {GLYPHS.map(([g, l, t, s, d], i) => (
        <span key={i} style={{ left: `${l}%`, top: `${t}%`, fontSize: s, animationDuration: `${d}s`, animationDelay: `${-i * 1.7}s` }}>{g}</span>
      ))}
    </div>
  );
}
