import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import {
  Smartphone,
  Users,
  ShieldCheck,
  Zap,
  QrCode,
  Wrench,
  CheckCircle2,
  Lock,
  Clock,
  MessageCircle,
  Presentation,
  Mail,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";
import WordReveal from "@/features/whatsunity-presentation/src/deck/WordReveal";
import type { Locale, WhatsunityContent } from "../data/whatsunityContent";

interface Props {
  locale: Locale;
  content: WhatsunityContent;
  onOpenCatalog: () => void;
  onOpenPresentation: () => void;
}

export function WhatsunityCinematicHero({
  locale,
  content,
  onOpenCatalog,
  onOpenPresentation,
}: Props) {
  const isRtl = locale === "ar";
  const cinematic = content.hero.cinematic;
  const scenes = cinematic.scenes;

  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [maxUnlockedIndex, setMaxUnlockedIndex] = useState(0);

  // Responsive device & accessibility detection
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 1024;
    }
    return false;
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  const runwayRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const targetTimeRef = useRef<number[]>([0, 0, 0, 0]);

  const currentScene = scenes[activeSceneIndex];

  // Scroll distribution across 4 acts:
  // Slide 1 spans 0.00 -> 0.40 (spans entire Video 1 playback)
  // Slide 2 spans 0.40 -> 0.60 (looping video 2 - Community)
  // Slide 3 spans 0.60 -> 0.80 (looping video 3 - QR Security)
  // Slide 4 spans 0.80 -> 1.00 (looping video 4 - Maintenance)
  const SLIDE_1_END = 0.40;
  const SLIDE_2_END = 0.60;
  const SLIDE_3_END = 0.80;

  // Track scroll progress through the pinned runway (responsive height)
  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(max-width: 1023px)");
    const motionMql = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMobile = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    const updateMotion = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);

    setIsMobile(mql.matches);
    setPrefersReducedMotion(motionMql.matches);

    mql.addEventListener("change", updateMobile);
    motionMql.addEventListener("change", updateMotion);

    return () => {
      mql.removeEventListener("change", updateMobile);
      motionMql.removeEventListener("change", updateMotion);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let nextIdx = 0;
    if (latest < SLIDE_1_END) {
      nextIdx = 0;
    } else if (latest < SLIDE_2_END) {
      nextIdx = 1;
    } else if (latest < SLIDE_3_END) {
      nextIdx = 2;
    } else {
      nextIdx = 3;
    }
    setActiveSceneIndex(nextIdx);
    setMaxUnlockedIndex((prev) => Math.max(prev, nextIdx));

    // Slide 1 video: progress tracks 0.0 -> 1.0 across the entire 0.00 -> 0.40 range
    const video0 = videoRefs.current[0];
    if (video0 && video0.duration && !isNaN(video0.duration)) {
      const progress0 = Math.min(Math.max(latest / SLIDE_1_END, 0), 1);
      targetTimeRef.current[0] = progress0 * (video0.duration - 0.05);
    }
  });

  // Silky smooth 60fps video playback & synchronization loop
  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId: number;

    const tick = () => {
      // 1. Control Slide 1 (Instant 0ms seek all-intra scroll-driven video)
      const video0 = videoRefs.current[0];
      if (video0 && video0.duration && !isNaN(video0.duration)) {
        if (!video0.paused) {
          video0.pause();
        }

        const target = targetTimeRef.current[0] ?? 0;
        const current = video0.currentTime;
        const diff = target - current;

        // Prevent decoder buffer lockup: only issue a new seek if not currently seeking
        if (!video0.seeking && Math.abs(diff) > 0.008) {
          const step = diff * 0.65;
          const nextTime = Math.abs(diff) < 0.025 ? target : current + step;
          const clamped = Math.max(0, Math.min(video0.duration - 0.01, nextTime));
          video0.currentTime = clamped;
        }
      }

      // 2. Control Slide 2, Slide 3 & Slide 4 (Seamless looping videos)
      [1, 2, 3].forEach((idx) => {
        const video = videoRefs.current[idx];
        if (!video) return;
        if (idx === activeSceneIndex) {
          if (video.paused) {
            video.play().catch(() => {});
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [activeSceneIndex, prefersReducedMotion]);

  // Map icon names to Lucide icons
  const getSceneIcon = (iconName: string, className = "h-5 w-5") => {
    switch (iconName) {
      case "Smartphone":
      case "Zap":
        return <Smartphone className={className} />;
      case "Users":
        return <Users className={className} />;
      case "Wrench":
        return <Wrench className={className} />;
      case "ShieldCheck":
      case "QrCode":
      default:
        return <ShieldCheck className={className} />;
    }
  };

  // Smoothly scroll to target scene within the pinned scroll runway
  const scrollToScene = (index: number) => {
    if (!runwayRef.current) return;
    const rect = runwayRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const runwayTop = rect.top + scrollTop;
    const runwayHeight = runwayRef.current.offsetHeight - window.innerHeight;

    let targetProgress = 0;
    if (index === 0) targetProgress = 0;
    else if (index === 1) targetProgress = SLIDE_1_END + 0.01;
    else if (index === 2) targetProgress = SLIDE_2_END + 0.01;
    else targetProgress = SLIDE_3_END + 0.01;

    const targetY = runwayTop + targetProgress * runwayHeight;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  // Get active video / poster source responsively (only fetch intended format)
  const getVideoSrc = (sc: (typeof scenes)[0]) => {
    return isMobile ? sc.videoMobileSrc : sc.videoSrc;
  };

  const getPosterSrc = (sc: (typeof scenes)[0]) => {
    return isMobile ? sc.posterMobileSrc : sc.posterSrc;
  };

  return (
    <div
      id="overview"
      ref={runwayRef}
      className="relative w-full h-[440vh] bg-[#03060a]"
    >
      {/* ══════════════════════════════════════════════════════════════
          PINNED CINEMATIC STAGE (STICKY VIEWPORT)
      ══════════════════════════════════════════════════════════════ */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        {/* ══════════════════════════════════════════════════════════════
            1. PURE BACKGROUND VIDEOS (PORTRAIT ON MOBILE, LANDSCAPE ON DESKTOP)
        ══════════════════════════════════════════════════════════════ */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {scenes.map((sc, idx) => {
            const isActive = idx === activeSceneIndex;
            const isScrollDriven = idx === 0;
            const vSrc = getVideoSrc(sc);
            const pSrc = getPosterSrc(sc);

            if (prefersReducedMotion) {
              // Reduced motion: render composed still poster
              return (
                <div
                  key={sc.id}
                  className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
                    isActive ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
                  }`}
                >
                  <img
                    src={pSrc}
                    alt={sc.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              );
            }

            return (
              <div
                key={sc.id}
                className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
                }`}
              >
                {isScrollDriven ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[0] = el;
                    }}
                    key={`scroll-${vSrc}`}
                    src={vSrc}
                    poster={pSrc}
                    muted
                    playsInline
                    preload="auto"
                    onLoadedMetadata={(e) => {
                      const video = e.currentTarget;
                      video.pause();
                      const currentProgress = scrollYProgress.get();
                      const p = Math.min(Math.max(currentProgress / SLIDE_1_END, 0), 1);
                      if (video.duration && !isNaN(video.duration)) {
                        targetTimeRef.current[0] = p * (video.duration - 0.05);
                        try {
                          video.currentTime = targetTimeRef.current[0];
                        } catch {
                          // Ignore initial seek
                        }
                      }
                    }}
                    className="h-full w-full object-cover object-center transform-gpu transition-transform duration-700 scale-x-100"
                  />
                ) : (
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    key={`loop-${vSrc}`}
                    src={vSrc}
                    poster={pSrc}
                    muted
                    playsInline
                    loop
                    autoPlay
                    preload="auto"
                    className="h-full w-full object-cover object-center transform-gpu transition-transform duration-700 scale-x-100"
                  />
                )}
              </div>
            );
          })}

          {/* Dynamic Ambient Glow Mesh */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/4 -translate-x-1/2 h-[650px] w-[950px] rounded-full blur-[160px] transition-all duration-1000 opacity-25 z-10"
            style={{
              background: `radial-gradient(circle, ${currentScene.accentColor} 0%, transparent 70%)`,
            }}
          />

          {/* Blueprint Squares Grid over the video */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />

          {/* Desktop Left Blend (Hidden on mobile so phone/video is 100% visible) */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-[45%] z-10 bg-gradient-to-r from-[#03060a]/90 via-[#03060a]/50 to-transparent hidden lg:block"
          />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            2. MOBILE HERO COMPOSITION: INTENTIONALLY CRAFTED FOR PHONES
            - Video occupies the upper 65% unhindered in negative space.
            - Smaller text, 1 headline, 1 primary action over bottom vignette.
            - Subtle scroll cue and skip-to-content action.
        ══════════════════════════════════════════════════════════════ */}
        <div
          dir={isRtl ? "rtl" : "ltr"}
          className="lg:hidden absolute inset-x-0 bottom-0 z-20 w-full pt-14 pb-5 px-4 bg-gradient-to-t from-[#03060a]/98 via-[#03060a]/85 to-transparent flex flex-col justify-end pointer-events-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${currentScene.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex flex-col"
            >
              {/* Feature Header Badge with Icon */}
              <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-emerald-400 backdrop-blur-md self-start">
                <span
                  className="flex h-4 w-4 items-center justify-center rounded-md"
                  style={{
                    backgroundColor: `${currentScene.accentColor}30`,
                    color: currentScene.accentColor,
                  }}
                >
                  {getSceneIcon(currentScene.iconName, "h-3 w-3")}
                </span>
                <span className={isRtl ? "wu-font-ar-display" : "wu-font-en-display"}>
                  {currentScene.dockLabel}
                </span>
              </div>

              {/* Scaled-down, impactful mobile headline */}
              <h1
                className={`mt-2 text-xl sm:text-2xl font-black tracking-tight text-white leading-tight ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                {currentScene.mobileTitle || currentScene.title}{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(115deg, ${currentScene.accentColor}, #ffffff)`,
                  }}
                >
                  {currentScene.titleHighlight}
                </span>
              </h1>

              {/* Short, crisp subtitle */}
              <p
                className={`mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2 ${
                  isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                }`}
              >
                {currentScene.mobileSubtitle || currentScene.subtitle}
              </p>

              {/* Primary Action Button (at least 44px touch target) */}
              <div className="mt-3 flex items-center gap-2">
                <a
                  href="https://wa.me/nouradawy?text=Hello%20Noureldin,%20I'd%20like%20to%20schedule%20a%20live%20demo%20and%20consultation%20for%20WhatsUnity."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group min-h-[44px] flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 px-4 py-2.5 text-xs sm:text-sm font-black text-[#04140c] shadow-[0_2px_15px_rgba(0,226,138,0.35)] wu-pressable ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>{isRtl ? "احجز موعد العرض عبر واتساب" : "Book Live Demo"}</span>
                  {isRtl ? (
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  )}
                </a>

                <button
                  type="button"
                  onClick={onOpenPresentation}
                  className={`min-h-[44px] flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-3.5 text-xs font-bold text-slate-200 wu-pressable hover:border-emerald-500/40 hover:text-white ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                  aria-label="Open presentation deck"
                >
                  <Presentation className="h-4 w-4 text-emerald-400" />
                  <span>{isRtl ? "العرض" : "Deck"}</span>
                </button>
              </div>

              {/* Subtle Scroll Cue + Skip to Case Study Link */}
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-slate-400">
                {/* 3 Interactive Stage Dots */}
                <div className="flex items-center gap-1.5">
                  {scenes.map((sc, idx) => (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => scrollToScene(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeSceneIndex
                          ? "w-6 bg-emerald-400"
                          : "w-2 bg-white/30"
                      }`}
                      aria-label={`Jump to stage 0${idx + 1}`}
                    />
                  ))}
                  <span className="text-[10px] text-slate-400 font-mono ms-1">
                    0{activeSceneIndex + 1}/04
                  </span>
                </div>

                {/* Visible Skip Story Cue */}
                <a
                  href="#case-study"
                  className={`flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors py-1 px-1 font-medium ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  <span>{cinematic.skipStory || (isRtl ? "تخطي إلى الدراسة" : "Skip to Case Study")}</span>
                  <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            3. DESKTOP HERO CONTENT CARD PINNED OVER LEFT (DESKTOP ONLY)
        ══════════════════════════════════════════════════════════════ */}
        <div className="relative z-20 w-full pl-4 sm:pl-8 lg:pl-10 xl:pl-12 pr-4 hidden lg:flex justify-start">
          <div className="w-full max-w-xl lg:max-w-[540px] xl:max-w-[580px] flex flex-col items-start">
            {/* Sleek Frosted Glass Story Card for Desktop */}
            <div
              dir={isRtl ? "rtl" : "ltr"}
              className={`w-full h-auto min-h-[580px] lg:h-[78vh] lg:min-h-[640px] lg:max-h-[760px] rounded-3xl border border-white/15 bg-slate-950/80 p-6 sm:p-7 backdrop-blur-2xl shadow-2xl flex flex-col justify-between ${
                isRtl ? "text-right" : "text-left"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScene.id}
                  initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Feature Header Badge with Icon */}
                    <motion.div
                      initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs sm:text-sm font-extrabold text-white backdrop-blur-md shadow-sm"
                    >
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-lg shadow-inner"
                        style={{
                          backgroundColor: `${currentScene.accentColor}30`,
                          color: currentScene.accentColor,
                        }}
                      >
                        {getSceneIcon(currentScene.iconName, "h-3.5 w-3.5")}
                      </span>
                      <span className={isRtl ? "wu-font-ar-display" : "wu-font-en-display"}>
                        {currentScene.tag}
                      </span>
                    </motion.div>

                    {/* Main Headline - Larger, impactful font with blur-reveal */}
                    <motion.h1
                      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.42, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className={`mt-4 text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-white ${
                        isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                      }`}
                      style={{
                        lineHeight: isRtl ? 1.3 : 1.15,
                      }}
                    >
                      {currentScene.title}{" "}
                      <span
                        className="bg-clip-text text-transparent drop-shadow-[0_2px_22px_rgba(0,226,138,0.4)]"
                        style={{
                          backgroundImage: `linear-gradient(115deg, ${currentScene.accentColor}, #ffffff)`,
                        }}
                      >
                        {currentScene.titleHighlight}
                      </span>
                    </motion.h1>

                    {/* Description - Animated with WordReveal */}
                    <WordReveal
                      text={currentScene.subtitle}
                      runKey={currentScene.id}
                      delay={0.18}
                      stagger={0.035}
                      className={`mt-3 sm:mt-4 text-sm sm:text-base lg:text-[17px] leading-relaxed text-slate-200 ${
                        isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                      }`}
                    />
                  </div>

                  {/* Feature Bullets (Desktop Only) */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {currentScene.bulletPoints.slice(0, 2).map((bp, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 14, filter: "blur(3px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                          delay: 0.25 + idx * 0.08,
                          duration: 0.38,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-3.5 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.07]"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 mt-0.5"
                          style={{ color: currentScene.accentColor }}
                        />
                        <div>
                          <div
                            className={`text-xs sm:text-sm font-bold text-white ${
                              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                            }`}
                          >
                            {bp.title}
                          </div>
                          <p
                            className={`mt-1 text-xs text-slate-300 leading-relaxed ${
                              isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                            }`}
                          >
                            {bp.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Consultation Banner (Desktop) */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.34, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-3.5 sm:mt-4 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-teal-950/30 p-3.5 sm:p-4 backdrop-blur-md shadow-[0_4px_24px_rgba(0,226,138,0.14)]"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span
                          className={`text-xs font-bold text-emerald-400 ${
                            isRtl ? "wu-font-ar-display" : "wu-font-mono uppercase tracking-wider"
                          }`}
                        >
                          {isRtl ? "استعراض حي واستشارة تقنية مجانية" : "Live Demo & Technical Consultation"}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                        <Clock className="h-3 w-3 text-emerald-400" />
                        <span>15 Min</span>
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <a
                        href="https://wa.me/nouradawy?text=Hello%20Noureldin,%20I'd%20like%20to%20schedule%20a%20live%20demo%20and%20consultation%20for%20WhatsUnity."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group wu-pressable flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 py-2.5 px-3.5 text-xs sm:text-sm font-black text-[#04140c] shadow-[0_2px_15px_rgba(0,226,138,0.35)] transition hover:brightness-110 ${
                          isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                        }`}
                      >
                        <MessageCircle className="h-4 w-4 shrink-0" />
                        <span>{isRtl ? "احجز موعد العرض عبر واتساب" : "Book Live Demo (WhatsApp)"}</span>
                        {isRtl ? (
                          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                        ) : (
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        )}
                      </a>

                      <button
                        type="button"
                        onClick={onOpenPresentation}
                        className={`wu-pressable flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.06] py-2.5 px-3 text-xs font-bold text-slate-200 transition hover:border-emerald-500/40 hover:bg-white/[0.1] hover:text-white ${
                          isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                        }`}
                      >
                        <Presentation className="h-3.5 w-3.5 text-emerald-400" />
                        <span>{isRtl ? "العرض التقديمي" : "Pitch Deck"}</span>
                      </button>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400 px-0.5">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{isRtl ? "استعراض لـ 34+ شاشة وبوابات أوفلاين" : "34+ production screens & offline gates"}</span>
                      </span>
                      <Link
                        to="/"
                        hash="contact"
                        className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-medium"
                      >
                        <Mail className="h-3 w-3" />
                        <span>{isRtl ? "نموذج المراسلة" : "Contact Form"}</span>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ══════════════════════════════════════════════════════════════
                3. CORE ARCHITECTURAL PILLARS (DESKTOP ANIMATED DROP DOCK)
            ══════════════════════════════════════════════════════════════ */}
            <div
              dir={isRtl ? "rtl" : "ltr"}
              className="mt-3.5 w-full"
            >
              <div className="mb-1.5 flex items-center justify-between px-1">
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider text-slate-300 ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {cinematic.dockTitle}
                </span>
                <span className="text-[10px] text-slate-400 wu-font-mono">
                  {cinematic.scrollHint}
                </span>
              </div>

              {/* 4-Column Slot Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {scenes.map((sc, idx) => {
                  const isUnlocked = idx <= activeSceneIndex;
                  const isActive = idx === activeSceneIndex;

                  if (!isUnlocked) {
                    return (
                      <div
                        key={`empty-${sc.id}`}
                        onClick={() => scrollToScene(idx)}
                        className="cursor-pointer group wu-pressable flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-2.5 text-slate-500 h-[68px] sm:h-[72px] transition hover:border-white/30 hover:bg-white/[0.04]"
                        title={isRtl ? "انقر للتمرير إلى هذه المرحلة" : "Click to scroll to this stage"}
                      >
                        <div className="flex items-center gap-1 text-[9px] font-bold wu-font-mono text-slate-400 group-hover:text-slate-300">
                          <Lock className="h-2.5 w-2.5 opacity-60" />
                          <span>STAGE 0{idx + 1}</span>
                        </div>
                        <span className="text-[9px] text-slate-500 mt-0.5 truncate max-w-full px-1">
                          {sc.dockLabel}
                        </span>
                      </div>
                    );
                  }

                  return (
                    <motion.button
                      key={`active-${sc.id}`}
                      initial={{ transform: "translateY(-30px) scale(0.94)", opacity: 0 }}
                      animate={{ transform: "translateY(0px) scale(1)", opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                        mass: 0.8,
                      }}
                      type="button"
                      onClick={() => scrollToScene(idx)}
                      className={`group relative wu-pressable flex flex-col justify-between overflow-hidden rounded-2xl border p-2.5 sm:p-3 text-start backdrop-blur-xl h-[68px] sm:h-[72px] ${
                        isActive
                          ? "border-emerald-500/80 bg-slate-950/95 shadow-[0_0_20px_rgba(0,226,138,0.3)] scale-[1.02]"
                          : "border-white/15 bg-slate-950/75 hover:border-white/30 hover:bg-slate-950/90"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div
                          className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:scale-105"
                          style={{
                            backgroundColor: isActive
                              ? `${sc.accentColor}25`
                              : "rgba(255,255,255,0.06)",
                            borderColor: isActive
                              ? `${sc.accentColor}50`
                              : "rgba(255,255,255,0.1)",
                            color: sc.accentColor,
                          }}
                        >
                          {getSceneIcon(sc.iconName, "h-3 w-3 sm:h-3.5 sm:w-3.5")}
                        </div>

                        <span
                          className={`rounded-full px-1.5 py-0.2 text-[8px] sm:text-[9px] font-bold wu-font-mono border ${
                            isActive
                              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                              : "bg-white/5 text-slate-400 border-white/10"
                          }`}
                        >
                          {sc.stageNumber}
                        </span>
                      </div>

                      <div className="mt-1">
                        <div
                          className={`text-[11px] sm:text-xs font-bold truncate transition-colors ${
                            isActive ? "text-white" : "text-slate-200 group-hover:text-white"
                          } ${isRtl ? "wu-font-ar-display" : "wu-font-en-display"}`}
                        >
                          {sc.dockLabel}
                        </div>
                      </div>

                      <div className="mt-1.5 h-0.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-300 ease-out"
                          style={{
                            width: isActive ? "100%" : "0%",
                            backgroundColor: sc.accentColor,
                          }}
                        />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
