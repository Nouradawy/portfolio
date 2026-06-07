import { m } from "framer-motion";
import { ArrowDown, Download, MessageCircle } from "lucide-react";
import { PaperAirplane } from "../components/PaperAirplane";
import { Signature } from "../components/Signature";
import { MatrixRain } from "../components/MatrixRain";
import { fadeUp, staggerContainer } from "../animations/variants";
import resumeAsset from "@/assets/Resume.pdf.asset.json";


/**
 * HeroSection
 * Keeps the original copy verbatim:
 * - "From paper ball → To paper plane" reveal
 * - signature
 * - Resume + Let's Talk CTAs
 * Visual upgrade only: cinematic slate-950 stage, SVG paper-airplane bg
 * (Motion-driven), aurora text, glow CTAs.
 */
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Matrix rain (dark theme only) */}
      <MatrixRain />

      {/* Animated SVG airplane background */}
      <PaperAirplane />


      {/* Aurora vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 40%, color-mix(in oklab, var(--electric) 14%, transparent), transparent 70%)",
        }}
      />


      <m.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <m.span
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-glow-electric" />
          Full-Stack Software Engineer
        </m.span>



        <m.h1
          variants={fadeUp}
          className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl lg:text-9xl"
        >
          <span className="block text-foreground/90">From paper ball</span>
          <span className="my-2 block text-sm font-sans uppercase tracking-[0.4em] text-muted-foreground md:text-base">
            ↓ to ↓
          </span>
          <span className="block text-aurora">To paper plane</span>
        </m.h1>

        <m.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Hi, I'm <span className="text-foreground">Noureldin</span> — a
          full-stack software engineer crafting polished products across{" "}
          <span className="text-electric">Flutter</span>,{" "}
          <span className="text-violet-glow">Spring Boot</span>, and{" "}
          <span className="text-magenta">React</span>, with Clean Architecture
          from mobile to web.
        </m.p>

        <m.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={resumeAsset.url}
            target="_blank"
            rel="noreferrer"
            download="Noureldin-Resume.pdf"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            style={{ background: "var(--gradient-aurora)" }}
          >
            <span
              aria-hidden
              className="absolute inset-0 -z-10 opacity-60 blur-2xl transition-opacity group-hover:opacity-90"
              style={{ background: "var(--gradient-aurora)" }}
            />
            <Download className="h-4 w-4" />
            Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:border-electric/60 hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
            Let's Talk
          </a>
        </m.div>

        <m.div variants={fadeUp} className="mt-16">
          <Signature className="h-16 w-56 opacity-90" />
        </m.div>
      </m.div>

      {/* Scroll cue */}
      <m.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5" />
      </m.div>
    </section>
  );
}
