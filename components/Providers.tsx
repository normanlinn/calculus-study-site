"use client";
import { MotionConfig } from "motion/react";

// Honors the viewer's "reduce motion" setting for every animation.
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
