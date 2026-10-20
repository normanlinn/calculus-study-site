"use client";
import { motion } from "motion/react";

const WORDS = ["The", "derivative,", "from", "f′", "to", "implicit", "curves"];

export function HeroTitle() {
  return (
    <h1>
      {WORDS.map((w, i) => (
        <motion.span
          key={i}
          className={"word" + (w === "f′" ? " prime" : "")}
          initial={{ opacity: 0, y: 28, rotateX: -60 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.05 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {w}
        </motion.span>
      ))}
    </h1>
  );
}

export function HeroFade({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.5 }}>
      {children}
    </motion.div>
  );
}
