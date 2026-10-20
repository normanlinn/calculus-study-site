"use client";
import { motion } from "motion/react";

/** Fades and lifts its content in the first time it scrolls into view. */
export default function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Staggers a list of children into view. */
export function Stagger({ children, className }: { children: React.ReactNode[]; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      variants={{ show: { transition: { staggerChildren: 0.06 } } }}
    >
      {children.map((c, i) => (
        <motion.div
          key={i}
          style={{ minWidth: 0, display: "grid" }}
          variants={{ hidden: { opacity: 0, y: 22, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}
        >
          {c}
        </motion.div>
      ))}
    </motion.div>
  );
}
