"use client";
import { MotionConfig } from "motion/react";
import AuthProvider from "./AuthProvider";

// Honors the viewer's "reduce motion" setting for every animation.
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <AuthProvider>{children}</AuthProvider>
    </MotionConfig>
  );
}
