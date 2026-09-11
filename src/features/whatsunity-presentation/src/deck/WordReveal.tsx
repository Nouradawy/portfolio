import { motion } from "motion/react";

type WordRevealProps = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** seconds before the first word appears */
  delay?: number;
  /** seconds between words — the "speaking" cadence */
  stagger?: number;
  /** re-run when this changes */
  runKey?: string | number;
};

/**
 * Reveals a sentence word-by-word with a gentle rise + fade, so the
 * narration lands like someone naturally speaking it out loud. Print-safe.
 */
export default function WordReveal({
  text,
  className,
  style,
  delay = 0.15,
  stagger = 0.055,
  runKey,
}: WordRevealProps) {
  const words = text.split(" ");
  return (
    <>
      {/* Screen animated version */}
      <motion.p
        key={runKey}
        className={`print:hidden ${className ?? ""}`}
        style={style}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
      >
        {words.map((w, idx) => (
          <motion.span
            key={idx}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: "0.5em", filter: "blur(4px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {w}
            {idx < words.length - 1 ? " " : ""}
          </motion.span>
        ))}
      </motion.p>
      {/* Print-only instant version */}
      <p className={`hidden print:block ${className ?? ""}`} style={style}>
        {text}
      </p>
    </>
  );
}
