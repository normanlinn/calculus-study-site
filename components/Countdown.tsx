"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

/** Days until a quiz date (local time). Rendered after mount so server and browser agree. */
export default function Countdown({ target, label }: { target: string; label: string }) {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    const calc = () => {
      const [y, m, d] = target.split("-").map(Number);
      const due = new Date(y, m - 1, d);
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      setDays(Math.round((due.getTime() - today.getTime()) / 86_400_000));
    };
    calc();
    const t = setInterval(calc, 60_000);
    return () => clearInterval(t);
  }, [target]);

  const date = new Date(target + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  const msg = days === null ? "" : days > 1 ? `${days} days to go` : days === 1 ? "Tomorrow!" : days === 0 ? "Today — good luck!" : "Done";
  return (
    <div className="countdown">
      <motion.b key={days ?? "x"} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        {days === null ? "–" : Math.max(days, 0)}
      </motion.b>
      <div>
        <span className="eyebrow">{label}</span>
        <strong>{msg}</strong>
        <span>{date}</span>
      </div>
    </div>
  );
}
