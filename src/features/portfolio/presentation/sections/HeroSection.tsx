import { motion } from "framer-motion";
import { ArrowDown, Download, MessageCircle, FileText } from "lucide-react";
import { PaperAirplane } from "../components/PaperAirplane";
import { Signature } from "../components/Signature";
import { MatrixRain } from "../components/MatrixRain";
import { fadeUp, staggerContainer } from "../animations/variants";
import resumeAsset from "@/assets/Resume.pdf.asset.json";

/**
 * HeroSection
 * Fully adapted for both Light and Dark themes with responsive blend modes
 * and color-matched typography refraction.
 */
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-24 transition-colors duration-500"
    >
      {/* Matrix rain (dark theme only) */}
      <MatrixRain />

      {/* Animated SVG airplane background */}
      <PaperAirplane />

      {/* Adaptive Theme Aurora Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-80 dark:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 40%, color-mix(in oklab, var(--electric) 12%, transparent), transparent 70%)",
        }}
      />

      {/* --- DIFFUSED OPTICAL LENS FLARE & PRISM BEAM --- */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[46%] -z-0 flex w-[140%] -translate-x-1/2 -rotate-3 items-center justify-center overflow-visible opacity-40 dark:opacity-100"
      >
        {/* LAYER 1: Deep Atmospheric Halo */}
        <div className="absolute h-64 w-[120%] rounded-full bg-gradient-to-r from-blue-600/0 via-cyan-500/[0.08] via-fuchsia-500/[0.12] via-yellow-400/[0.08] to-purple-600/0 blur-[80px] mix-blend-screen dark:via-cyan-500/25 dark:via-fuchsia-500/35 dark:via-yellow-400/25" />

        {/* LAYER 2: The Outer Prism Ribbon */}
        <div className="absolute h-16 w-[115%] rounded-full bg-gradient-to-r from-transparent via-cyan-400/[0.15] via-pink-500/[0.18] via-amber-300/[0.15] via-purple-500/[0.12] to-transparent blur-[32px] mix-blend-screen dark:via-cyan-400/50 dark:via-pink-500/60 dark:via-amber-300/50 dark:via-purple-500/40" />

        {/* LAYER 3: The Concentrated Spectral Core */}
        <div className="absolute h-8 w-[105%] rounded-full bg-gradient-to-r from-transparent via-cyan-300/[0.25] via-fuchsia-400/[0.28] via-yellow-300/[0.25] via-purple-400/[0.22] to-transparent blur-[14px] opacity-90 mix-blend-screen shadow-[0_0_30px_rgba(236,72,153,0.25)] dark:via-cyan-300/80 dark:via-fuchsia-400/90 dark:via-yellow-300/80 dark:via-purple-400/70 dark:shadow-[0_0_30px_rgba(236,72,153,0.6)]" />

        {/* LAYER 4: The Refraction Hotspot */}
        <div className="absolute h-20 w-[550px] rounded-full bg-gradient-to-r from-transparent via-white/15 via-cyan-300/[0.15] via-pink-300/[0.12] to-transparent blur-[25px] mix-blend-screen animate-pulse dark:via-white/40 dark:via-cyan-300/50 dark:via-pink-300/40" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <motion.span
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-glow-electric" />
          Full-Stack Software Engineer
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl lg:text-9xl"
        >
          <span className="block text-foreground/95">From paper ball</span>
          <span className="my-2 block text-sm font-sans uppercase tracking-[0.4em] text-muted-foreground md:text-base">
            ↓ to ↓
          </span>

          {/* --- SYNCHRONIZED ADAPTIVE TECHNICOLOR TEXT --- */}
          <span
            className="relative inline-block bg-gradient-to-r from-cyan-600 via-fuchsia-600 via-pink-500 to-amber-500 dark:from-cyan-300 dark:via-fuchsia-400 dark:via-pink-400 dark:to-amber-300 bg-clip-text text-transparent transition-all duration-300"
            style={{
              filter: "drop-shadow(0 0 20px rgba(236,72,153,0.35))",
            }}
          >
            To paper plane
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Hi, I'm <span className="text-foreground">Noureldin</span> — a full-stack software
          engineer crafting polished products across{" "}
          <span className="text-electric font-medium">Flutter</span>,{" "}
          <span className="text-violet-600 dark:text-violet-glow font-medium">Spring Boot</span>,
          and <span className="text-magenta font-medium">React</span>, amplified by{" "}
          <span className="text-cyan-500 dark:text-cyan-400 font-medium">AI Engineering & MCPs</span>, with Clean Architecture from mobile to web.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/resume.html"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
            style={{ background: "var(--gradient-aurora)" }}
          >
            <span
              aria-hidden
              className="absolute inset-0 -z-10 opacity-60 blur-2xl transition-opacity group-hover:opacity-90"
              style={{ background: "var(--gradient-aurora)" }}
            />
            <FileText className="h-4 w-4" />
            Resume (HTML & PDF)
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 px-7 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:border-electric/60 hover:bg-black/10 dark:hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
            Let's Talk
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-16">
          <Signature className="h-16 w-56 opacity-95" />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
