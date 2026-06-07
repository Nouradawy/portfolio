import { motion } from "framer-motion";

/**
 * Stylized "Noureldin" signature that draws itself in via SVG stroke-dash.
 */
export function Signature({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 80"
      className={className}
      fill="none"
      aria-label="Noureldin signature"
    >
      <motion.path
        d="M 10 55 Q 25 10, 40 55 T 70 55 Q 85 20, 100 50 Q 115 70, 130 40 Q 145 15, 160 55 Q 175 65, 190 35 Q 205 10, 220 50 T 260 50 Q 275 60, 290 30"
        stroke="url(#sigGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="sigGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="oklch(0.72 0.21 255)" />
          <stop offset="50%" stopColor="oklch(0.62 0.27 295)" />
          <stop offset="100%" stopColor="oklch(0.68 0.31 340)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
