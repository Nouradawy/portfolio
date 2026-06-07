import { useEffect, useRef } from "react";
import { useTheme } from "../theme/ThemeProvider";

/**
 * MatrixRain — subtle cyber rain on a canvas.
 * Only renders in dark theme. Sits behind hero content (pointer-events none).
 */
export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme !== "dark") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    const fontSize = 14;

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789<>/{}[]=+*アABCDEF";

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent?.clientWidth ?? window.innerWidth;
      height = parent?.clientHeight ?? window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.random() * (height / fontSize),
      );
    };

    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    let last = 0;
    const fpsInterval = 1000 / 30; // 30fps is plenty

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (now - last < fpsInterval) return;
      last = now;

      // Fade trail
      ctx.fillStyle = "rgba(2, 6, 23, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", ui-monospace, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head glow — bright electric, very subtle
        ctx.fillStyle = "rgba(125, 211, 252, 0.55)";
        ctx.shadowColor = "rgba(125, 211, 252, 0.4)";
        ctx.shadowBlur = 4;
        ctx.fillText(text, x, y);

        // Trail — softer aurora tint, barely visible
        ctx.shadowBlur = 0;
        ctx.fillStyle = "rgba(99, 102, 241, 0.12)";
        ctx.fillText(text, x, y - fontSize);

        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  if (theme !== "dark") return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 opacity-15 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_45%,black,transparent_90%)]"
    />
  );
}

