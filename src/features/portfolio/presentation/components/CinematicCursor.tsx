import { useEffect, useRef, useState } from "react";

/**
 * Cinematic cursor:
 *  - small precise dot that tracks the pointer 1:1
 *  - large soft glowing ring that eases behind it
 *  - subtle radial spotlight that follows the page
 *  - grows + tints on interactive elements (a, button, [role=button], input)
 *
 * Hidden on touch / coarse pointers. Respects prefers-reduced-motion.
 */
export function CinematicCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    // Target / current positions for easing
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let rx = tx;
    let ry = ty;
    let sx = tx;
    let sy = ty;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      }
    };

    const onDown = () => ringRef.current?.classList.add("cc-press");
    const onUp = () => ringRef.current?.classList.remove("cc-press");

    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest(
        'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="hover"]',
      );
      ringRef.current?.classList.toggle("cc-hover", !!interactive);
    };

    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      sx += (tx - sx) * 0.06;
      sy += (ty - sy) * 0.06;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${sx}px, ${sy}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointerover", onOver, { passive: true });

    // hide native cursor while ours is active
    const prevCursor = document.documentElement.style.cursor;
    document.documentElement.style.cursor = "none";

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.style.cursor = prevCursor;
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Soft spotlight that lags far behind — gives the scene a film-light feel */}
      <div
        ref={spotRef}
        className="absolute h-[520px] w-[520px] rounded-full opacity-[0.18] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--electric) 70%, transparent) 0%, transparent 60%)",
          willChange: "transform",
        }}
      />
      {/* Easing ring */}
      <div
        ref={ringRef}
        className="cc-ring absolute h-9 w-9 rounded-full border border-white/40 backdrop-blur-[2px] transition-[width,height,background-color,border-color,opacity] duration-200 ease-out"
        style={{ willChange: "transform", boxShadow: "0 0 24px rgba(120,160,255,0.35)" }}
      />
      {/* Precise dot */}
      <div
        ref={dotRef}
        className="absolute h-1.5 w-1.5 rounded-full bg-foreground"
        style={{ willChange: "transform", boxShadow: "0 0 12px rgba(255,255,255,0.6)" }}
      />

      <style>{`
        .cc-ring.cc-hover {
          width: 64px;
          height: 64px;
          background: color-mix(in oklab, var(--violet-glow) 18%, transparent);
          border-color: color-mix(in oklab, var(--violet-glow) 70%, transparent);
          box-shadow: 0 0 40px color-mix(in oklab, var(--violet-glow) 60%, transparent);
        }
        .cc-ring.cc-press {
          transform-origin: center;
          transform: translate3d(var(--x,0), var(--y,0), 0) translate(-50%,-50%) scale(0.78);
        }
      `}</style>
    </div>
  );
}
