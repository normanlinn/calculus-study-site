"use client";
import { motion } from "motion/react";
import { useEffect } from "react";

// Re-mounts on every navigation, so each page plays an entrance transition.
export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0 });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
