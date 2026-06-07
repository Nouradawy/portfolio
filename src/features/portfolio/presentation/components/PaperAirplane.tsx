import { m } from "framer-motion";

/**
 * Pure-SVG paper airplane that glides, dips, and sways across the hero
 * background. Sits behind the hero text. No external assets.
 */
export function PaperAirplane() {
  // Detect mobile to simplify animations and reduce GPU cost
  const isMobile =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  // On mobile, slow the animation down and hide micro-planes to reduce paint cost
  const baseDuration = isMobile ? 24 : 18;
  const showParallax = !isMobile;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Soft chase glow that follows the plane */}
      <m.div
        className="absolute h-72 w-72 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--electric) 60%, transparent), transparent 70%)",
          top: "30%",
        }}
        animate={{
          x: ["-15%", "25%", "55%", "85%", "115%"],
          y: ["0%", "-6%", "4%", "-8%", "2%"],
        }}
        transition={{
          duration: baseDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* The airplane itself */}
      <m.svg
        viewBox="0 0 120 80"
        className="absolute h-20 w-32 md:h-28 md:w-44"
        style={{ top: "28%", left: 0 }}
        initial={{ x: "-20%", y: 0, rotate: -4 }}
        animate={{
          x: ["-20%", "20%", "50%", "80%", "115%"],
          y: [0, -28, 18, -22, 14],
          rotate: [-4, 6, -3, 8, -2],
        }}
        transition={{
          duration: baseDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          <linearGradient id="planeBody" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.98 0.005 250)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="oklch(0.72 0.21 255)" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="planeFold" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.62 0.27 295)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="oklch(0.72 0.21 255)" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="trailGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.72 0.21 255)" stopOpacity="0" />
            <stop offset="100%" stopColor="oklch(0.72 0.21 255)" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Dashed trail behind the plane */}
        <path
          d="M -300 50 Q -150 30 0 45"
          fill="none"
          stroke="url(#trailGrad)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          style={{ animation: "trail-dash 1.6s linear infinite" }}
        />

        {/* Right wing (upper) */}
        <path
          d="M 10 40 L 110 20 L 60 50 Z"
          fill="url(#planeBody)"
          stroke="oklch(0.98 0.005 250)"
          strokeWidth="0.6"
          strokeOpacity="0.7"
        />
        {/* Left wing (lower / underside) */}
        <path
          d="M 10 40 L 110 20 L 65 65 Z"
          fill="url(#planeFold)"
          stroke="oklch(0.98 0.005 250)"
          strokeWidth="0.6"
          strokeOpacity="0.5"
        />
        {/* Center crease */}
        <path
          d="M 10 40 L 110 20"
          stroke="oklch(0.98 0.005 250)"
          strokeWidth="0.8"
          strokeOpacity="0.9"
        />
      </m.svg>

      {/* Distant micro-planes for parallax depth */}
      {showParallax && (
        <>
          <m.div
            className="absolute h-1.5 w-1.5 rounded-full bg-white/40"
            style={{ top: "18%" }}
            animate={{ x: ["-5%", "110%"] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear", delay: 4 }}
          />
          <m.div
            className="absolute h-1 w-1 rounded-full bg-white/30"
            style={{ top: "62%" }}
            animate={{ x: ["-5%", "110%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear", delay: 10 }}
          />
        </>
      )}
    </div>
  );
}
