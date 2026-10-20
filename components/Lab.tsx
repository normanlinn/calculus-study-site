"use client";
import { useEffect, useRef } from "react";
import type { LabId } from "@/content/types";
import { initLab } from "@/lib/labs";

export default function Lab({ id, html }: { id: LabId; html: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => (ref.current ? initLab(id, ref.current) : undefined), [id]);
  return <div className="lab" id={id} ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
}
