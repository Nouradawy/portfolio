import { motion } from "motion/react";
import type { ReactNode } from "react";

type PhoneFrameProps = {
  /** Optional recorded demo video to drop in later. */
  videoSrc?: string;
  /** Designed screen content shown when no video is provided. */
  children?: ReactNode;
  /** Accent glow color behind the device. */
  glow?: string;
  /** Device width in px — animates smoothly (the phone "grows"). */
  width?: number;
  /** Set false on the secondary phone so it doesn't fight the shared morph. */
  morph?: boolean;
};

/**
 * A highly polished Samsung Galaxy-style device frame.
 * Uses explicit dimensions and dir="ltr" to prevent any layout shifts
 * across screen resolutions and print rendering.
 */
export default function PhoneFrame({
  videoSrc,
  children,
  glow = "#00e28a",
  width = 300,
  morph = true,
}: PhoneFrameProps) {
  const height = Math.round(width * (640 / 300));

  return (
    <motion.div
      dir="ltr"
      layoutId={morph ? "whatsunity-phone" : undefined}
      layout={morph}
      animate={{ width }}
      transition={{ type: "spring", stiffness: 140, damping: 22, mass: 1.1 }}
      className="relative shrink-0 select-none"
      style={{
        width,
        height,
        minWidth: width,
        minHeight: height,
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full blur-2xl opacity-35 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 40%, ${glow}, transparent 70%)` }}
      />

      {/* Titanium rail / outer body */}
      <div
        className="relative h-full w-full rounded-[2.6rem] p-[3px] shadow-2xl"
        style={{
          background:
            "linear-gradient(145deg, #4b5563 0%, #0b0f14 35%, #1c232c 60%, #545c66 100%)",
          boxShadow:
            "0 30px 90px -15px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        {/* Inner bezel */}
        <div className="relative h-full w-full rounded-[2.45rem] bg-black p-[6px]">
          {/* Screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-[#05070a]">
            {/* Punch-hole camera */}
            <div className="absolute left-1/2 top-3 z-30 h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10 pointer-events-none">
              <div className="absolute inset-[2px] rounded-full bg-[#0a1420]" />
              <div className="absolute left-[2px] top-[2px] h-[3px] w-[3px] rounded-full bg-[#1e3a4d]" />
            </div>

            {videoSrc ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <div className="absolute inset-0 h-full w-full overflow-hidden" dir="ltr">
                {children}
              </div>
            )}

            {/* Glass gloss */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-20"
              style={{
                background:
                  "linear-gradient(115deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.04) 100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Physical side buttons - fixed at exact pixel boundaries in LTR */}
      <div
        className="absolute top-[130px] h-14 w-[3px] rounded-r bg-gradient-to-b from-[#5b636d] to-[#20262e]"
        style={{ right: -3 }}
      />
      <div
        className="absolute top-[200px] h-9 w-[3px] rounded-r bg-gradient-to-b from-[#5b636d] to-[#20262e]"
        style={{ right: -3 }}
      />
      <div
        className="absolute top-[170px] h-20 w-[3px] rounded-l bg-gradient-to-b from-[#5b636d] to-[#20262e]"
        style={{ left: -3 }}
      />
    </motion.div>
  );
}
