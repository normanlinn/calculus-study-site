"use client";
import { motion, useAnimationFrame, useReducedMotion } from "motion/react";
import { useRef } from "react";

// A cubic is drawn in, then a tangent line rides along it while its slope is plotted below.
const W = 560, H = 220, X0 = -2.4, X1 = 2.4;
const f = (x: number) => x ** 3 / 3 - x;
const fp = (x: number) => x * x - 1;
const sx = (x: number) => ((x - X0) / (X1 - X0)) * W;
const sy = (y: number) => H / 2 - y * 42;
const path = (g: (x: number) => number) =>
  Array.from({ length: 121 }, (_, i) => X0 + (i / 120) * (X1 - X0)).map((x, i) => `${i ? "L" : "M"}${sx(x).toFixed(1)},${sy(g(x)).toFixed(1)}`).join("");

export default function HeroGraph() {
  const reduce = useReducedMotion();
  const tan = useRef<SVGLineElement>(null), pt = useRef<SVGCircleElement>(null), dpt = useRef<SVGCircleElement>(null);
  useAnimationFrame((t) => {
    if (reduce || !tan.current || !pt.current || !dpt.current) return;
    const x = 2.1 * Math.sin(t / 2200), y = f(x), m = fp(x), d = 1.1;
    tan.current.setAttribute("x1", String(sx(x - d))); tan.current.setAttribute("y1", String(sy(y - m * d)));
    tan.current.setAttribute("x2", String(sx(x + d))); tan.current.setAttribute("y2", String(sy(y + m * d)));
    pt.current.setAttribute("cx", String(sx(x))); pt.current.setAttribute("cy", String(sy(y)));
    dpt.current.setAttribute("cx", String(sx(x))); dpt.current.setAttribute("cy", String(sy(m)));
  });
  return (
    <svg className="hero-graph" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A cubic curve with a moving tangent line; its slope traces the derivative">
      <line x1="0" x2={W} y1={H / 2} y2={H / 2} stroke="var(--axis)" strokeWidth="1" />
      <line x1={sx(0)} x2={sx(0)} y1="0" y2={H} stroke="var(--axis)" strokeWidth="1" />
      <motion.path d={path(fp)} fill="none" stroke="var(--deriv)" strokeWidth="2.5" strokeDasharray="7 6"
        initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{ delay: 1.2, duration: 0.8 }} />
      <motion.path d={path(f)} fill="none" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }} />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
        <line ref={tan} x1={sx(-1.1)} y1={sy(f(0) + 1.1)} x2={sx(1.1)} y2={sy(f(0) - 1.1)} stroke="var(--tangent)" strokeWidth="2.5" strokeLinecap="round" />
        <circle ref={pt} cx={sx(0)} cy={sy(0)} r="6" fill="var(--tangent)" />
        <circle ref={dpt} cx={sx(0)} cy={sy(-1)} r="5" fill="var(--deriv)" />
      </motion.g>
      <text x={sx(2.05)} y={sy(f(2.05)) - 10} fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="13" fontWeight="600">f</text>
      <text x={sx(1.95)} y={sy(fp(1.95)) + 4} dx="10" fill="var(--deriv)" fontFamily="var(--font-mono)" fontSize="13" fontWeight="600">f′</text>
    </svg>
  );
}
