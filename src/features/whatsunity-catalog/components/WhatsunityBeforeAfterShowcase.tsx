import { useState, useRef, useEffect, useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  SlidersHorizontal,
  Columns,
  Maximize2,
  Smartphone,
  Shield,
  Wrench,
  Vote,
  Home,
  Zap,
} from "lucide-react";

import legacyHome from "/assets/projects/Whatsunity/Screenshot_20251212_130927.png";
import legacyVoting from "/assets/projects/Whatsunity/Screenshot_20251212_131138.png";
import legacyMaintenance from "/assets/projects/Whatsunity/Screenshot_20251212_131212.png";
import legacyGate from "/assets/projects/Whatsunity/Screenshot_20251212_131717.png";

import newHome from "@/features/Cinematic Catalog Design/src/imports/Home_screen_community.png";
import newVoting from "@/features/Cinematic Catalog Design/src/imports/community_-_votting.png";
import newMaintenance from "@/features/Cinematic Catalog Design/src/imports/maintinace-reporting.png";
import newGate from "@/features/Cinematic Catalog Design/src/imports/gatekeeper_pass_verification_qr.png";

interface ComparisonItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  legacyImage: string;
  newImage: string;
  legacyYear: string;
  newYear: string;
  problemPoints: string[];
  solutionPoints: string[];
  keyMetric: string;
  architecturalUpgrade: string;
}

const COMPARISONS: ComparisonItem[] = [
  {
    id: "community-home",
    title: "Community Home & Verified Feed",
    subtitle: "From generic flat chat to structured role-based compound management",
    icon: Home,
    accentColor: "#2563eb",
    legacyImage: legacyHome,
    newImage: newHome,
    legacyYear: "2025 MVP (Legacy v1.0)",
    newYear: "2026 Redesign (Production v2.0)",
    problemPoints: [
      "Unstructured message stream where critical compound announcements were buried",
      "No visual apartment-to-building mapping or resident role verification",
      "Low-contrast dark styling with heavy cognitive load",
    ],
    solutionPoints: [
      "Verified resident badges mapped directly to building and apartment units",
      "Dedicated pinned announcement broadcast banner with rich media previews",
      "Swiss-editorial typography and high-contrast accessibility tokens",
    ],
    keyMetric: "-65% Cognitive Load & Instant Announcements",
    architecturalUpgrade: "BLoC Presentation + Appwrite Multi-Database & Realtime WebSockets",
  },
  {
    id: "voting-governance",
    title: "Polling & Governance Decisions",
    subtitle: "From buried in-chat text polls to a dedicated visual analytics voting module",
    icon: Vote,
    accentColor: "#8b5cf6",
    legacyImage: legacyVoting,
    newImage: newVoting,
    legacyYear: "2025 MVP (Legacy v1.0)",
    newYear: "2026 Redesign (Production v2.0)",
    problemPoints: [
      "Polls lived as temporary bubbles inside fast-moving general chat streams",
      "No quorum tracking, timeline countdowns, or verified voter restrictions",
      "Lack of visual analytical breakdown for compound decision-making",
    ],
    solutionPoints: [
      "Detached standalone governance module with visual bar graphs & live percentages",
      "Cryptographic resident-token voting with quorum threshold indicators",
      "Clear status flags: Active, Scheduled, Closed, and Quorum Reached",
    ],
    keyMetric: "+400% Resident Voter Participation",
    architecturalUpgrade: "Appwrite Social DB + Edge Function Token Verification",
  },
  {
    id: "maintenance-triage",
    title: "Maintenance & Issue Reporting",
    subtitle: "From a simple text form to an end-to-end multi-role triage & SLA desk",
    icon: Wrench,
    accentColor: "#16a34a",
    legacyImage: legacyMaintenance,
    newImage: newMaintenance,
    legacyYear: "2025 MVP (Legacy v1.0)",
    newYear: "2026 Redesign (Production v2.0)",
    problemPoints: [
      "Static submission form without SLA countdowns or status progression",
      "No direct technician assignment, work order logging, or proof-of-work capture",
      "Resident left in the dark after submitting a ticket",
    ],
    solutionPoints: [
      "Multi-stage ticket lifecycle: Submitted → Triage → Dispatched → Completed",
      "Live technician attribution with before/after repair photo uploads",
      "Integrated audio voice notes with visual waveforms and Cloudflare R2 direct edge pipeline",
    ],
    keyMetric: "3x Faster Resolution Time & Full Transparency",
    architecturalUpgrade: "Offline-First SQLite Master + Appwrite Maintenance Database",
  },
  {
    id: "gate-operations",
    title: "Access Control & Gate Operations",
    subtitle: "From basic manual code entry to high-speed QR pass verification & overstay stream",
    icon: Shield,
    accentColor: "#f59e0b",
    legacyImage: legacyGate,
    newImage: newGate,
    legacyYear: "2025 MVP (Legacy v1.0)",
    newYear: "2026 Redesign (Production v2.0)",
    problemPoints: [
      "Manual phone calls and plain numeric text codes causing gate traffic bottlenecks",
      "Zero visibility into guest overstaying or unauthorized parking duration",
      "No automated courier or delivery vehicle verification",
    ],
    solutionPoints: [
      "Sub-second QR pass scanner with instant animated unit directive popups",
      "Live overstayed vehicle stream with automated tactical patrol dispatch",
      "Dedicated courier 1-tap verification mode with pre-approved entry limits",
    ],
    keyMetric: "Sub-4-Second Gate Clearance Time",
    architecturalUpgrade: "Appwrite Security DB + Offline SQLite Local Gateway + Cloudflare R2",
  },
];

export function WhatsunityBeforeAfterShowcase({ onOpenCatalog }: { onOpenCatalog?: () => void }) {
  const [activeTabId, setActiveTabId] = useState(COMPARISONS[0].id);
  const [displayMode, setDisplayMode] = useState<"slider" | "side-by-side">("slider");
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const activeItem = COMPARISONS.find((c) => c.id === activeTabId) || COMPARISONS[0];

  const handlePointerMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercentage = Math.max(3, Math.min(97, (x / rect.width) * 100));
    setSliderPos(clampedPercentage);
  }, []);

  // Global window pointer listeners while dragging so drag is never dropped even outside screen/window
  useEffect(() => {
    if (!isDragging) return;

    const onGlobalPointerMove = (e: PointerEvent) => {
      handlePointerMove(e.clientX);
    };

    const onGlobalPointerUp = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
    };

    window.addEventListener("pointermove", onGlobalPointerMove, { passive: true });
    window.addEventListener("pointerup", onGlobalPointerUp);
    window.addEventListener("pointercancel", onGlobalPointerUp);

    return () => {
      window.removeEventListener("pointermove", onGlobalPointerMove);
      window.removeEventListener("pointerup", onGlobalPointerUp);
      window.removeEventListener("pointercancel", onGlobalPointerUp);
    };
  }, [isDragging, handlePointerMove]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    handlePointerMove(e.clientX);
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <div className="w-full space-y-6">
      {/* HEADER & CONTROLS */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-magenta to-electric text-white shadow-glow-magenta">
              <Zap className="h-4 w-4" />
            </span>
            <h3 className="text-lg font-bold tracking-tight text-white md:text-xl">
              UI/UX Evolution: 2025 MVP vs 2026 Redesign
            </h3>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Drag the interactive slider to inspect how the entire interface was re-engineered for production craft.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* View mode toggle */}
          <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-0.5">
            <button
              type="button"
              onClick={() => setDisplayMode("slider")}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                displayMode === "slider"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Split Slider</span>
            </button>
            <button
              type="button"
              onClick={() => setDisplayMode("side-by-side")}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                displayMode === "side-by-side"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Columns className="h-3.5 w-3.5" />
              <span>Side-by-Side</span>
            </button>
          </div>

          {onOpenCatalog && (
            <button
              type="button"
              onClick={onOpenCatalog}
              className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-600/20 px-3 py-1 text-xs font-bold text-blue-300 transition hover:bg-blue-600 hover:text-white"
            >
              <span>Explore 20+ Screens Catalog</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* SUBSYSTEM TABS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {COMPARISONS.map((comp) => {
          const IconComp = comp.icon;
          const isSelected = comp.id === activeTabId;
          return (
            <button
              key={comp.id}
              type="button"
              onClick={() => setActiveTabId(comp.id)}
              className={`flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all ${
                isSelected
                  ? "border-blue-500 bg-blue-600/20 text-white shadow-glow-electric"
                  : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"
              }`}
            >
              <IconComp className="h-4 w-4" style={{ color: comp.accentColor }} />
              <span>{comp.title}</span>
            </button>
          );
        })}
      </div>

      {/* COMPARISON INTERFACE */}
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        {/* LEFT: VISUAL COMPARATOR */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-slate-950/90 p-4 md:p-6">
          <AnimatePresence mode="wait">
            <m.div
              key={`${activeItem.id}-${displayMode}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col items-center"
            >
              {displayMode === "slider" ? (
                /* INTERACTIVE SPLIT SLIDER */
                <div className="relative mx-auto flex flex-col items-center" dir="ltr">
                  {/* Top Comparison Direction Legend */}
                  <div className="mb-3 flex w-full max-w-[290px] select-none items-center justify-between px-1">
                    <div className="flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-[10px] font-mono font-bold text-amber-300 shadow-sm backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span>◀ Before (2025)</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500">VS</span>
                    <div className="flex items-center gap-1.5 rounded-full border border-blue-500/50 bg-blue-600 px-2.5 py-1 text-[10px] font-mono font-bold text-white shadow-glow-electric backdrop-blur">
                      <span>After (2026) ▶</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>

                  <div
                    ref={containerRef}
                    onPointerDown={handlePointerDown}
                    className="relative h-[480px] w-[260px] cursor-ew-resize select-none overflow-hidden rounded-[2.2rem] border-4 border-slate-800 bg-black shadow-2xl touch-none md:h-[540px] md:w-[290px]"
                    style={{ touchAction: "none" }}
                  >
                    {/* AFTER (NEW REDESIGNED SCREEN) - Base Layer (Right side) */}
                    <img
                      src={activeItem.newImage}
                      alt={activeItem.newYear}
                      className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-top"
                      draggable={false}
                    />

                    {/* After Badge (On Base Layer - Right Top) */}
                    <span className="pointer-events-none absolute right-3 top-3 z-0 select-none rounded-md border border-blue-400/40 bg-blue-600/90 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur">
                      After (2026)
                    </span>

                    {/* BEFORE (LEGACY MVP SCREEN) - Clipped Overlay (Left side) */}
                    <div
                      className="absolute inset-0 z-10 overflow-hidden"
                      style={{ width: `${sliderPos}%` }}
                    >
                      <img
                        src={activeItem.legacyImage}
                        alt={activeItem.legacyYear}
                        className="pointer-events-none absolute inset-0 h-full max-w-none select-none object-cover object-top"
                        style={{ width: containerRef.current?.clientWidth || 290 }}
                        draggable={false}
                      />

                      {/* Before Badge (Clipped strictly within the Before overlay) */}
                      <span className="pointer-events-none absolute left-3 top-3 select-none rounded-md border border-amber-500/40 bg-slate-950/85 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-amber-300 backdrop-blur">
                        Before (2025)
                      </span>
                    </div>

                    {/* HIGH-VISIBILITY LUMINESCENT SLIDER DIVIDER LINE (NO CENTER CIRCLE ICON) */}
                    <div
                      className="pointer-events-none absolute inset-y-0 z-20 -ml-[2px] flex items-center justify-center"
                      style={{ left: `${sliderPos}%` }}
                    >
                      {/* Glowing vertical laser bar */}
                      <div className="h-full w-[3px] bg-gradient-to-b from-white via-cyan-300 to-white shadow-[0_0_12px_rgba(6,182,212,1),0_0_3px_#ffffff]" />

                      {/* Top Glowing Anchor Pin */}
                      <div className="absolute top-2 flex flex-col items-center">
                        <div className="h-4 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(6,182,212,1)]" />
                      </div>

                      {/* Bottom Glowing Anchor Pin */}
                      <div className="absolute bottom-2 flex flex-col items-center">
                        <div className="h-4 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(6,182,212,1)]" />
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-center text-xs text-slate-400">
                    ↔ Drag the slider left & right to compare
                  </p>
                </div>
              ) : (
                /* SIDE BY SIDE GRID */
                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2" dir="ltr">
                  {/* BEFORE CARD */}
                  <div className="flex flex-col items-center rounded-2xl border border-amber-500/20 bg-slate-900/40 p-3.5">
                    <div className="mb-2.5 flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span>Before • {activeItem.legacyYear}</span>
                    </div>
                    <div className="relative h-[380px] w-full max-w-[220px] overflow-hidden rounded-[1.8rem] border-2 border-slate-700 bg-black shadow-lg">
                      <img
                        src={activeItem.legacyImage}
                        alt="Legacy 2025 screen"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* AFTER CARD */}
                  <div className="flex flex-col items-center rounded-2xl border border-blue-500/30 bg-blue-950/20 p-3.5 shadow-glow-electric">
                    <div className="mb-2.5 flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-600 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      <span>After • {activeItem.newYear}</span>
                    </div>
                    <div className="relative h-[380px] w-full max-w-[220px] overflow-hidden rounded-[1.8rem] border-2 border-blue-500/40 bg-black shadow-lg">
                      <img
                        src={activeItem.newImage}
                        alt="Redesigned 2026 screen"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              )}
            </m.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: DETAILED UX/UI TRANSFORMATION BREAKDOWN */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="flex h-2.5 w-2.5 rounded-full"
                style={{ background: activeItem.accentColor }}
              />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Design System Transformation
              </span>
            </div>
            <h4 className="mt-1 text-base font-bold text-white">{activeItem.title}</h4>
            <p className="mt-1 text-xs text-slate-400">{activeItem.subtitle}</p>

            {/* Key metric banner */}
            <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-emerald-300">
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Measurable Impact</span>
              </div>
              <p className="mt-1 text-xs font-semibold text-white">{activeItem.keyMetric}</p>
            </div>

            {/* Problems in 2025 vs Solutions in 2026 */}
            <div className="mt-5 space-y-3">
              <div>
                <h5 className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-rose-400">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>2025 MVP Pain Points</span>
                </h5>
                <ul className="mt-1.5 space-y-1.5 text-xs text-slate-300">
                  {activeItem.problemPoints.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-3">
                <h5 className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>2026 Production Solutions</span>
                </h5>
                <ul className="mt-1.5 space-y-1.5 text-xs text-slate-200">
                  {activeItem.solutionPoints.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Architecture upgrade footer */}
          <div className="border-t border-white/10 pt-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Clean Architecture Stack
            </span>
            <p className="mt-1 font-mono text-xs font-semibold text-blue-300">
              {activeItem.architecturalUpgrade}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
