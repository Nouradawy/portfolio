import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import PhoneFrame from "./deck/PhoneFrame";
import WordReveal from "./deck/WordReveal";
import Proposal from "./deck/Proposal";
import BrandLogo from "./deck/BrandLogo";
import { slides, type Slide } from "./deck/slides";

interface AppProps {
  initialView?: "deck" | "proposal";
}

export default function App({ initialView = "deck" }: AppProps) {
  const [view, setView] = useState<"deck" | "proposal">(initialView);
  const [proposalTheme, setProposalTheme] = useState<"white" | "dark">("white");
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [phoneW, setPhoneW] = useState(slides[0].phoneWidth ?? 300);
  const slide = slides[i];
  const isSplit = slide.variant === "split";

  const go = useCallback((next: number) => {
    const clamped = Math.min(slides.length - 1, Math.max(0, next));
    setI((prev) => {
      if (clamped !== prev) setDir(clamped > prev ? 1 : -1);
      return clamped;
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (view !== "deck") return;
      if (e.key === "ArrowRight" || e.key === " ") go(i + 1);
      if (e.key === "ArrowLeft") go(i - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, i, view]);

  // Cinematic cold-open
  useEffect(() => {
    const target = slide.phoneWidth ?? 300;
    if (slide.id === "coldopen") {
      setPhoneW(206);
      const t = setTimeout(() => setPhoneW(target), 1400);
      return () => clearTimeout(t);
    }
    setPhoneW(target);
  }, [i, slide.id, slide.phoneWidth]);

  const handlePrint = () => {
    window.print();
  };

  const scrollToPage = (pageNum: number) => {
    const el = document.getElementById(`proposal-page-${pageNum}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isCenterLayout = isSplit && (!!slide.splitTextA || !!slide.splitTextB);
  const phoneCol = slide.align === "right" ? "lg:order-2" : "lg:order-1";
  const textCol = slide.align === "right" ? "lg:order-1" : "lg:order-2";

  /* ───────────────────────── PROPOSAL VIEW ───────────────────────── */
  if (view === "proposal") {
    return (
      <div className="relative h-full w-full bg-background text-foreground">
        {/* Floating Top Control Toolbar (No Print) */}
        <div className="no-print fixed top-3 left-1/2 -translate-x-1/2 z-50 flex flex-wrap items-center gap-2 rounded-2xl border border-border/80 bg-black/75 px-3 py-2 shadow-2xl backdrop-blur-xl">
          {/* View Switcher */}
          <div className="flex items-center gap-1 rounded-xl bg-white/5 p-1 border border-white/10">
            <button
              onClick={() => setView("deck")}
              className="rounded-lg px-3 py-1.5 text-xs font-semibold text-white/70 hover:text-white transition-all hover:bg-white/10"
              style={{ fontFamily: "var(--font-display)" }}
            >
              العرض التقديمي (Deck)
            </button>
            <button
              onClick={() => setView("proposal")}
              className="rounded-lg px-3 py-1.5 text-xs font-bold transition-all shadow-sm"
              style={{
                fontFamily: "var(--font-display)",
                background: "var(--accent)",
                color: "var(--accent-foreground)",
              }}
            >
              العرض المالي (Proposal)
            </button>
          </div>

          <div className="h-4 w-px bg-white/20" />

          {/* Theme Switcher: White Paper vs Dark Luxury */}
          <div className="flex items-center gap-1 rounded-xl bg-white/5 p-1 border border-white/10">
            <button
              onClick={() => setProposalTheme("white")}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                proposalTheme === "white"
                  ? "bg-white text-slate-900 shadow"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
              title="نسخة المستند الأبيض الرسمية للطباعة والمراسلات"
            >
              <span>📄</span>
              <span>المستند الأبيض (Print)</span>
            </button>
            <button
              onClick={() => setProposalTheme("dark")}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                proposalTheme === "dark"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
              title="الوضع الليلي الفاخر للشاشات"
            >
              <span>🌙</span>
              <span>الوضع الليلي</span>
            </button>
          </div>

          <div className="h-4 w-px bg-white/20" />

          {/* Quick Page Jump Anchors */}
          <div className="hidden lg:flex items-center gap-1 text-[11px] font-mono text-white/60">
            <span className="text-[10px] text-white/40 mr-1">انتقال:</span>
            {[
              { n: 1, label: "الغلاف" },
              { n: 2, label: "الاشتراكات" },
              { n: 3, label: "الجملة" },
              { n: 4, label: "الاعتماد" },
            ].map((p) => (
              <button
                key={p.n}
                onClick={() => scrollToPage(p.n)}
                className="rounded px-1.5 py-0.5 hover:bg-white/10 hover:text-white transition-colors text-[11px]"
              >
                P{p.n}
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-white/20" />

          {/* Print / Export PDF Action Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-3.5 py-1.5 text-xs font-extrabold text-[#04140c] shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <path d="M6 14h12v8H6z" />
            </svg>
            <span>طباعة / حفظ PDF</span>
          </button>
        </div>

        {/* The 4-page A4 Proposal */}
        <Proposal theme={proposalTheme} />
      </div>
    );
  }

  /* ───────────────────────── DECK VIEW ───────────────────────── */
  return (
    <div dir="rtl" className="relative h-full w-full overflow-hidden bg-background text-foreground">
      {/* ── Screen-Only Interactive Deck Experience ── */}
      <div className="screen-only relative flex h-full w-full flex-col overflow-hidden">
        {/* Floating Top Bar (No Print) */}
        <div className="no-print fixed top-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-2xl border border-border/80 bg-black/60 px-3 py-1.5 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-1 rounded-xl bg-white/5 p-1 border border-white/10">
            <button
              onClick={() => setView("deck")}
              className="rounded-lg px-3 py-1.5 text-xs font-bold transition-all shadow-sm"
              style={{
                fontFamily: "var(--font-display)",
                background: "var(--accent)",
                color: "var(--accent-foreground)",
              }}
            >
              العرض التقديمي (Deck)
            </button>
            <button
              onClick={() => setView("proposal")}
              className="rounded-lg px-3 py-1.5 text-xs font-semibold text-white/70 hover:text-white transition-all hover:bg-white/10"
              style={{ fontFamily: "var(--font-display)" }}
            >
              العرض المالي (Proposal)
            </button>
          </div>

          <div className="h-4 w-px bg-white/20" />

          {/* Print presentation button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-300 transition-all hover:bg-emerald-500/20"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <path d="M6 14h12v8H6z" />
            </svg>
            <span>طباعة العرض PDF</span>
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
        <header className="flex items-center justify-between px-8 py-5 lg:px-16">
          <BrandLogo size={32} theme="dark" withText showSubtitle />
          <span dir="ltr" className="text-[11px] tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
            COMPOUND OS · PITCH
          </span>
        </header>

        {/* Stage Content */}
        {slide.variant === "stage" ? (
          <main className="relative flex flex-1 flex-col items-center gap-4 overflow-hidden px-6 pb-6 lg:px-12">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={slide.id + "-stitle"}
                custom={dir}
                initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-4xl pt-2 text-center"
              >
                <p className="mb-2 text-xs font-medium tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                  {slide.kicker}
                </p>
                <h1 className="text-2xl font-bold leading-[1.1] tracking-tight lg:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                  {slide.title}
                </h1>
                <WordReveal
                  text={slide.lead}
                  runKey={slide.id}
                  delay={0.3}
                  className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-secondary-foreground lg:text-base"
                />
              </motion.div>
            </AnimatePresence>

            <div className="relative flex flex-1 w-full items-center justify-center">
              <ScreenSwap id={slide.id + "-stage"}>{slide.render}</ScreenSwap>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {slide.points.map((p, idx) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="rounded-xl border px-4 py-2 text-center"
                  style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="text-[12px] font-medium tracking-wider" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>
                    {p.label.toUpperCase()}
                  </div>
                  {p.value && (
                    <div className="mt-0.5 text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                      {p.value}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </main>
        ) : isCenterLayout ? (
          <main className="relative flex flex-1 flex-col items-center gap-3 overflow-hidden px-6 pb-4 lg:px-10">
            <div className="flex flex-1 w-full items-center justify-center" dir="ltr">
              <div className="flex w-full max-w-6xl items-end justify-center gap-x-[42px] gap-y-[32px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id + "-dA"}
                    initial={{ opacity: 0, x: -24, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -16, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-[299px] shrink-0 self-center"
                  >
                    {slide.splitTextA}
                  </motion.div>
                </AnimatePresence>

                <PhoneCaption label={slide.swapPhones ? slide.labelB : slide.labelA} dim>
                  <PhoneFrame glow={slide.glow} width={slide.phoneWidth ?? 320}>
                    <ScreenSwap id={slide.id + "-a"}>{slide.swapPhones ? slide.screenB : slide.screen}</ScreenSwap>
                  </PhoneFrame>
                </PhoneCaption>

                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 120, damping: 20 }}
                >
                  <PhoneCaption label={slide.swapPhones ? slide.labelA : slide.labelB} accent={slide.glow}>
                    <PhoneFrame glow={slide.glow} width={slide.phoneWidth ?? 320} morph={false}>
                      <ScreenSwap id={slide.id + "-b"}>{slide.swapPhones ? slide.screen : slide.screenB}</ScreenSwap>
                    </PhoneFrame>
                  </PhoneCaption>
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id + "-dB"}
                    initial={{ opacity: 0, x: 24, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 16, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="w-[299px] shrink-0 self-center"
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
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full text-center pb-1"
              >
                <p className="mb-2 text-xs font-medium tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                  {slide.kicker}
                </p>
                <h1 className="text-3xl font-bold leading-[1.1] tracking-tight lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                  {slide.title}
                </h1>
              </motion.div>
            </AnimatePresence>
          </main>
        ) : (
          <main
            className={`relative grid flex-1 grid-cols-1 items-center gap-8 px-8 pb-8 lg:gap-14 lg:px-16 ${
              isSplit ? "" : "lg:grid-cols-2"
            }`}
          >
            <div className={`flex items-center justify-center gap-5 ${isSplit ? "" : phoneCol}`}>
              {isSplit ? (
                <div className="flex items-end justify-center gap-6 lg:gap-12">
                  <PhoneCaption label={slide.labelA} dim>
                    <PhoneFrame glow={slide.glow} width={slide.phoneWidth ?? 380}>
                      <ScreenSwap id={slide.id + "-a"}>{slide.screen}</ScreenSwap>
                    </PhoneFrame>
                  </PhoneCaption>
                  <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35, type: "spring", stiffness: 120, damping: 20 }}
                  >
                    <PhoneCaption label={slide.labelB} accent={slide.glow}>
                      <PhoneFrame glow={slide.glow} width={slide.phoneWidth ?? 380} morph={false}>
                        <ScreenSwap id={slide.id + "-b"}>{slide.screenB}</ScreenSwap>
                      </PhoneFrame>
                    </PhoneCaption>
                  </motion.div>
                </div>
              ) : (
                <PhoneFrame glow={slide.glow} width={phoneW}>
                  <ScreenSwap id={slide.id}>{slide.screen}</ScreenSwap>
                </PhoneFrame>
              )}
            </div>

            <div className={`relative ${isSplit ? "mx-auto text-center" : textCol}`}>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={slide.id}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40, filter: "blur(6px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: dir * -40, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={isSplit ? "mx-auto max-w-3xl" : "max-w-xl"}
                >
                  <p className="mb-4 text-xs font-medium tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                    {slide.kicker}
                  </p>
                  <h1 className="text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
                    {slide.title}
                  </h1>

                  <WordReveal
                    text={slide.lead}
                    runKey={slide.id}
                    delay={0.35}
                    className="mt-5 text-xl leading-loose text-secondary-foreground lg:text-2xl"
                  />

                  <div className={`mt-8 flex flex-wrap gap-3 ${isSplit ? "justify-center" : ""}`}>
                    {slide.points.map((p, idx) => (
                      <motion.div
                        key={p.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="rounded-xl border px-4 py-2.5 text-left"
                        style={{
                          borderColor: p.danger ? "rgba(255,77,94,0.35)" : "var(--border)",
                          background: p.danger ? "rgba(255,77,94,0.06)" : "rgba(255,255,255,0.02)",
                        }}
                      >
                        <div
                          className="text-[13px] font-medium tracking-wider"
                          style={{ color: p.danger ? "#ff8a94" : "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
                        >
                          {p.label.toUpperCase()}
                        </div>
                        {p.value && (
                          <div className="mt-0.5 text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>
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
        <footer className="flex items-center justify-between px-8 py-5 lg:px-16">
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => go(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: idx === i ? 32 : 8,
                  background: idx === i ? "var(--accent)" : "rgba(255,255,255,0.15)",
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
          <span>JANNAH 2 · PITCH DECK</span>
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
        <span dir="ltr">WhatsUnity × Modon Security · Confidential Pitch</span>
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
        transition={{ duration: 0.4 }}
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
    <div className="flex flex-col items-center gap-3">
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
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/[0.02] text-foreground transition-all hover:border-accent hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-25"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: dir === "next" ? "rotate(180deg)" : "none" }}>
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
