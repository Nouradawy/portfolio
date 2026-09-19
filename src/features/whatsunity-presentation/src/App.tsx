import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import PhoneFrame from "./deck/PhoneFrame";
import WordReveal from "./deck/WordReveal";
import BrandLogo from "./deck/BrandLogo";
import { slides, type Slide } from "./deck/slides";

interface AppProps {
  initialSlideIndex?: number;
}

export default function App({ initialSlideIndex = 0 }: AppProps) {
  const [i, setI] = useState(initialSlideIndex);
  const [dir, setDir] = useState(1);
  const [phoneW, setPhoneW] = useState(slides[0].phoneWidth ?? 310);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slide = slides[i];
  const isSplit = slide.variant === "split";
  const isCenterLayout = isSplit && (!!slide.splitTextA || !!slide.splitTextB);
  const phoneCol = slide.align === "right" ? "lg:order-2" : "lg:order-1";
  const textCol = slide.align === "right" ? "lg:order-1" : "lg:order-2";

  const go = useCallback((next: number) => {
    const clamped = Math.min(slides.length - 1, Math.max(0, next));
    setI((prev) => {
      if (clamped !== prev) setDir(clamped > prev ? 1 : -1);
      return clamped;
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(i + 1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(i - 1);
      }
      if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, i]);

  // Cinematic cold-open phone morph
  useEffect(() => {
    const target = slide.phoneWidth ?? 310;
    if (slide.id === "coldopen") {
      setPhoneW(206);
      const t = setTimeout(() => setPhoneW(target), 1400);
      return () => clearTimeout(t);
    }
    setPhoneW(target);
  }, [i, slide.id, slide.phoneWidth]);

  // Fullscreen management
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div dir="rtl" className="relative h-full w-full overflow-hidden bg-background text-foreground select-none">
      {/* ── Screen-Only Interactive Deck Experience ── */}
      <div className="screen-only relative flex h-full w-full flex-col overflow-hidden">
        {/* Floating Top Control Toolbar (No Print) */}
        <div className="no-print fixed top-3.5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 rounded-full border border-white/10 bg-black/70 px-4 py-1.5 shadow-2xl backdrop-blur-xl">
          {/* Slide Counter Indicator */}
          <div className="flex items-center gap-1.5 text-xs font-mono" dir="ltr">
            <span className="text-emerald-400 font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-white/25">/</span>
            <span className="text-white/60">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <div className="h-3.5 w-px bg-white/15" />

          {/* Keyboard Navigation Tooltip / Hint */}
          <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-white/50" title="استخدم الأسهم أو مسافة للتنقل">
            <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/80 font-sans">←</kbd>
            <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/80 font-sans">→</kbd>
            <span className="text-[10px] text-white/40 mr-0.5">تنقل</span>
          </div>

          <div className="h-3.5 w-px bg-white/15" />

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold text-white/75 transition-all hover:bg-white/10 hover:text-white active:scale-95"
            title={isFullscreen ? "إنهاء وضع ملء الشاشة (F)" : "وضع ملء الشاشة (F)"}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              {isFullscreen ? (
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              ) : (
                <path d="M15 3h6v6M9 21H3v-6M21 9l-7 7M3 15l7-7" />
              )}
            </svg>
            <span className="hidden md:inline">{isFullscreen ? "تصغير" : "ملء الشاشة"}</span>
          </button>

          <div className="h-3.5 w-px bg-white/15" />

          {/* Print presentation button */}
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300 transition-all hover:bg-emerald-500/25 active:scale-95"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <path d="M6 14h12v8H6z" />
            </svg>
            <span>طباعة PDF</span>
          </button>
        </div>

        {/* Ambient background */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          animate={{
            background: `radial-gradient(120% 80% at ${
              slide.align === "left" ? "72%" : slide.align === "right" ? "28%" : "50%"
            } 42%, ${slide.glow}18, transparent 60%)`,
          }}
          transition={{ duration: 0.8 }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(circle at 50% 40%, black, transparent 75%)",
          }}
        />

        {/* Top Header */}
        <header className="flex items-center justify-between px-6 py-4 lg:px-14">
          <BrandLogo size={32} theme="dark" withText showSubtitle />
          <span dir="ltr" className="text-[11px] tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
            COMPOUND OS · EXECUTIVE PITCH
          </span>
        </header>

        {/* Stage Content */}
        {slide.variant === "stage" ? (
          <main className="relative flex flex-1 flex-col items-center justify-between gap-3 overflow-hidden px-6 pb-5 lg:px-12">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={slide.id + "-stitle"}
                custom={dir}
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-4xl pt-1 text-center"
              >
                <p className="mb-1.5 text-xs font-medium tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                  {slide.kicker}
                </p>
                <h1 className="text-2xl font-bold leading-[1.15] tracking-tight lg:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                  {slide.title}
                </h1>
                <WordReveal
                  text={slide.lead}
                  runKey={slide.id}
                  delay={0.25}
                  className="mx-auto mt-2 max-w-3xl text-xs sm:text-sm leading-relaxed text-secondary-foreground lg:text-base"
                />
              </motion.div>
            </AnimatePresence>

            <div className="relative flex flex-1 w-full items-center justify-center my-auto">
              <ScreenSwap id={slide.id + "-stage"}>{slide.render}</ScreenSwap>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5">
              {slide.points.map((p, idx) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.08 }}
                  className="rounded-xl border px-3.5 py-1.5 text-center"
                  style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="text-[11px] font-medium tracking-wider" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>
                    {p.label.toUpperCase()}
                  </div>
                  {p.value && (
                    <div className="mt-0.5 text-xs sm:text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                      {p.value}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </main>
        ) : isCenterLayout ? (
          <main className="relative flex flex-1 flex-col items-center justify-between gap-2 overflow-hidden px-4 pb-3 lg:px-8">
            <div className="flex flex-1 w-full items-center justify-center my-auto" dir="ltr">
              <div className="flex w-full max-w-6xl items-end justify-center gap-x-6 xl:gap-x-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id + "-dA"}
                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -12, filter: "blur(4px)" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="w-[240px] xl:w-[280px] shrink-0 self-center"
                  >
                    {slide.splitTextA}
                  </motion.div>
                </AnimatePresence>

                <PhoneCaption label={slide.swapPhones ? slide.labelB : slide.labelA} dim>
                  <PhoneFrame glow={slide.glow} width={slide.phoneWidth ?? 250}>
                    <ScreenSwap id={slide.id + "-a"}>{slide.swapPhones ? slide.screenB : slide.screen}</ScreenSwap>
                  </PhoneFrame>
                </PhoneCaption>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, type: "spring", stiffness: 120, damping: 20 }}
                >
                  <PhoneCaption label={slide.swapPhones ? slide.labelA : slide.labelB} accent={slide.glow}>
                    <PhoneFrame glow={slide.glow} width={slide.phoneWidth ?? 250} morph={false}>
                      <ScreenSwap id={slide.id + "-b"}>{slide.swapPhones ? slide.screen : slide.screenB}</ScreenSwap>
                    </PhoneFrame>
                  </PhoneCaption>
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id + "-dB"}
                    initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 12, filter: "blur(4px)" }}
                    transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-[240px] xl:w-[280px] shrink-0 self-center"
                  >
                    {slide.splitTextB}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={slide.id + "-title"}
                custom={dir}
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full text-center pb-1"
              >
                <p className="mb-1 text-xs font-medium tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                  {slide.kicker}
                </p>
                <h1 className="text-2xl font-bold leading-[1.15] tracking-tight lg:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                  {slide.title}
                </h1>
              </motion.div>
            </AnimatePresence>
          </main>
        ) : (
          <main
            className={`relative grid flex-1 grid-cols-1 items-center gap-6 px-6 pb-6 lg:gap-12 lg:px-14 ${
              isSplit ? "" : "lg:grid-cols-2"
            }`}
          >
            <div className={`flex items-center justify-center gap-4 ${isSplit ? "" : phoneCol}`}>
              {isSplit ? (
                <div className="flex items-end justify-center gap-5 lg:gap-8">
                  <PhoneCaption label={slide.labelA} dim>
                    <PhoneFrame glow={slide.glow} width={slide.phoneWidth ?? 250}>
                      <ScreenSwap id={slide.id + "-a"}>{slide.screen}</ScreenSwap>
                    </PhoneFrame>
                  </PhoneCaption>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25, type: "spring", stiffness: 120, damping: 20 }}
                  >
                    <PhoneCaption label={slide.labelB} accent={slide.glow}>
                      <PhoneFrame glow={slide.glow} width={slide.phoneWidth ?? 250} morph={false}>
                        <ScreenSwap id={slide.id + "-b"}>{slide.screenB}</ScreenSwap>
                      </PhoneFrame>
                    </PhoneCaption>
                  </motion.div>
                </div>
              ) : (
                <div className="flex items-center justify-center max-h-[min(620px,64vh)]">
                  <PhoneFrame glow={slide.glow} width={phoneW}>
                    <ScreenSwap id={slide.id}>{slide.screen}</ScreenSwap>
                  </PhoneFrame>
                </div>
              )}
            </div>

            <div className={`relative ${isSplit ? "mx-auto text-center" : textCol}`}>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={slide.id}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 30, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: dir * -30, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={isSplit ? "mx-auto max-w-3xl" : "max-w-xl"}
                >
                  <p className="mb-2.5 text-xs font-medium tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                    {slide.kicker}
                  </p>
                  <h1 className="text-3xl font-bold leading-[1.1] tracking-tight lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                    {slide.title}
                  </h1>

                  <WordReveal
                    text={slide.lead}
                    runKey={slide.id}
                    delay={0.25}
                    className="mt-4 text-base leading-relaxed text-secondary-foreground lg:text-xl lg:leading-relaxed"
                  />

                  <div className={`mt-6 flex flex-wrap gap-2.5 ${isSplit ? "justify-center" : ""}`}>
                    {slide.points.map((p, idx) => (
                      <motion.div
                        key={p.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.08 }}
                        className="rounded-xl border px-3.5 py-2 text-left"
                        style={{
                          borderColor: p.danger ? "rgba(255,77,94,0.35)" : "var(--border)",
                          background: p.danger ? "rgba(255,77,94,0.06)" : "rgba(255,255,255,0.02)",
                        }}
                      >
                        <div
                          className="text-[12px] font-medium tracking-wider"
                          style={{ color: p.danger ? "#ff8a94" : "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
                        >
                          {p.label.toUpperCase()}
                        </div>
                        {p.value && (
                          <div className="mt-0.5 text-xs sm:text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                            {p.value}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        )}

        {/* Footer / navigation */}
        <footer className="flex items-center justify-between px-6 py-4 lg:px-14">
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => go(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: idx === i ? 30 : 8,
                  background: idx === i ? "var(--accent)" : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span dir="ltr" className="text-[11px] tabular-nums text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
              {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <NavBtn onClick={() => go(i - 1)} disabled={i === 0} dir="prev" />
              <NavBtn onClick={() => go(i + 1)} disabled={i === slides.length - 1} dir="next" />
            </div>
          </div>
        </footer>
      </div>

      {/* ── Print-Only Sequential Presentation Deck (Landscape A4) ── */}
      <div className="hidden print:block w-full">
        {slides.map((s, idx) => (
          <PrintSlideItem key={s.id + "-print"} slide={s} index={idx} total={slides.length} />
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── Print Slide Component ───────────────────────── */
function PrintSlideItem({ slide, index, total }: { slide: Slide; index: number; total: number }) {
  const isSplit = slide.variant === "split";
  const isCenterLayout = isSplit && (!!slide.splitTextA || !!slide.splitTextB);

  return (
    <div className="deck-print-page relative flex flex-col justify-between" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <BrandLogo size={26} theme="dark" withText showSubtitle />
        <div className="flex items-center gap-3 text-[10px] font-mono text-white/50" dir="ltr">
          <span>WHATSUNITY · EXECUTIVE PITCH DECK</span>
          <span className="rounded bg-white/10 px-2 py-0.5 font-bold text-white">
            SLIDE {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Slide Body */}
      <div className="flex-1 my-auto flex flex-col justify-center py-2">
        {slide.variant === "stage" ? (
          <div className="flex flex-col items-center text-center gap-3">
            <p className="text-xs font-mono text-emerald-400 font-semibold">{slide.kicker}</p>
            <h2 className="text-2xl font-extrabold text-white" style={{ fontFamily: "var(--font-display)" }}>
              {slide.title}
            </h2>
            {slide.lead && <p className="max-w-2xl text-xs text-white/80 leading-relaxed">{slide.lead}</p>}
            <div className="w-full max-w-5xl my-1 flex items-center justify-center">{slide.render}</div>
            <div className="flex flex-wrap justify-center gap-2 mt-1">
              {slide.points.map((p) => (
                <div key={p.label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-center">
                  <span className="text-[9px] font-mono text-white/50 block">{p.label}</span>
                  {p.value && <span className="text-xs font-bold text-white">{p.value}</span>}
                </div>
              ))}
            </div>
          </div>
        ) : isCenterLayout ? (
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex items-center justify-center gap-6 w-full max-w-5xl my-auto" dir="ltr">
              <div className="w-56 text-right text-xs leading-relaxed">{slide.splitTextA}</div>
              <div className="flex items-end gap-3">
                <div className="flex flex-col items-center gap-1">
                  <PhoneFrame glow={slide.glow} width={165} morph={false}>
                    {slide.swapPhones ? slide.screenB : slide.screen}
                  </PhoneFrame>
                  {(slide.swapPhones ? slide.labelB : slide.labelA) && (
                    <span className="text-[9px] font-mono text-white/60 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                      {slide.swapPhones ? slide.labelB : slide.labelA}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-center gap-1">
                  <PhoneFrame glow={slide.glow} width={165} morph={false}>
                    {slide.swapPhones ? slide.screen : slide.screenB}
                  </PhoneFrame>
                  {(slide.swapPhones ? slide.labelA : slide.labelB) && (
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      {slide.swapPhones ? slide.labelA : slide.labelB}
                    </span>
                  )}
                </div>
              </div>
              <div className="w-56 text-left text-xs leading-relaxed">{slide.splitTextB}</div>
            </div>
            <div className="text-center mt-1">
              <p className="text-[11px] font-mono text-emerald-400 font-semibold">{slide.kicker}</p>
              <h2 className="text-2xl font-extrabold text-white" style={{ fontFamily: "var(--font-display)" }}>
                {slide.title}
              </h2>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 items-center gap-8">
            {/* Phone(s) */}
            <div className="flex items-center justify-center">
              {isSplit ? (
                <div className="flex items-end gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <PhoneFrame glow={slide.glow} width={165} morph={false}>
                      {slide.screen}
                    </PhoneFrame>
                    {slide.labelA && (
                      <span className="text-[9px] font-mono text-white/60 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                        {slide.labelA}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <PhoneFrame glow={slide.glow} width={165} morph={false}>
                      {slide.screenB}
                    </PhoneFrame>
                    {slide.labelB && (
                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        {slide.labelB}
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <PhoneFrame glow={slide.glow} width={200} morph={false}>
                  {slide.screen}
                </PhoneFrame>
              )}
            </div>

            {/* Text & Points */}
            <div className="text-right">
              <p className="text-xs font-mono text-emerald-400 font-semibold mb-1">{slide.kicker}</p>
              <h2 className="text-3xl font-extrabold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                {slide.title}
              </h2>
              {slide.lead && <p className="mt-2 text-xs text-white/80 leading-relaxed">{slide.lead}</p>}
              <div className="mt-4 flex flex-wrap gap-2">
                {slide.points.map((p) => (
                  <div
                    key={p.label}
                    className="rounded-lg border px-3 py-1.5 text-right"
                    style={{
                      borderColor: p.danger ? "rgba(255,77,94,0.35)" : "rgba(255,255,255,0.1)",
                      background: p.danger ? "rgba(255,77,94,0.06)" : "rgba(255,255,255,0.03)",
                    }}
                  >
                    <span
                      className="text-[9px] font-mono block"
                      style={{ color: p.danger ? "#ff8a94" : "rgba(255,255,255,0.5)" }}
                    >
                      {p.label.toUpperCase()}
                    </span>
                    {p.value && (
                      <span className="text-xs font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                        {p.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-white/10 pt-1.5 text-[9px] font-mono text-white/40">
        <span dir="ltr">WhatsUnity Compound OS · Executive Pitch Deck</span>
        <span dir="ltr">2026 · ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
}

function ScreenSwap({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function PhoneCaption({
  label,
  children,
  dim,
  accent,
}: {
  label?: string;
  children: React.ReactNode;
  dim?: boolean;
  accent?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      {children}
      {label && (
        <span
          className="rounded-full border px-3 py-1 text-[10px] font-medium tracking-wider"
          style={{
            fontFamily: "var(--font-mono)",
            color: dim ? "var(--muted-foreground)" : accent ?? "var(--foreground)",
            borderColor: dim ? "var(--border)" : `${accent}55`,
            background: dim ? "transparent" : `${accent}12`,
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

function NavBtn({ onClick, disabled, dir }: { onClick: () => void; disabled: boolean; dir: "prev" | "next" }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/[0.02] text-foreground transition-all hover:border-accent hover:bg-accent/10 active:scale-95 disabled:cursor-not-allowed disabled:opacity-25"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: dir === "next" ? "rotate(180deg)" : "none" }}>
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
