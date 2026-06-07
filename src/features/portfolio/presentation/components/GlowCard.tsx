import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "../animations/variants";

interface Props {
  children: ReactNode;
  className?: string;
  accent?: "electric" | "violet" | "magenta";
}

const accentMap = {
  electric: "from-electric/40",
  violet: "from-violet-glow/40",
  magenta: "from-magenta/40",
} as const;

export function GlowCard({ children, className = "", accent = "electric" }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`glass-card group relative overflow-hidden rounded-2xl p-6 ${className}`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${accentMap[accent]} to-transparent opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-80`}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
