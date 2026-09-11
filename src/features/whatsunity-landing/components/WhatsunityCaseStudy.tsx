import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageSquareOff,
  WifiOff,
  BadgePercent,
  FileWarning,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Send,
  Cloud,
  Building2,
  Check,
} from "lucide-react";
import {
  ArchitectureDiagram,
  OfflineSyncDiagram,
  EncryptionDiagram,
  TenancyDiagram,
} from "@/features/whatsunity-presentation/src/deck/ArchScreens";
import PhoneFrame from "@/features/whatsunity-presentation/src/deck/PhoneFrame";
import { AppShot, SHOTS } from "@/features/whatsunity-presentation/src/deck/Screens";
import type { Locale, WhatsunityContent } from "../data/whatsunityContent";

interface Props {
  locale: Locale;
  content: WhatsunityContent;
}

export function WhatsunityCaseStudy({ locale, content }: Props) {
  const isRtl = locale === "ar";
  const cs = content.caseStudy;
  const sec = cs.sections;

  // State for interactive 9-Role Persona Matrix
  const [activeRoleId, setActiveRoleId] = useState("resident");
  const selectedRole = sec.roles.list.find((r) => r.id === activeRoleId) || sec.roles.list[0];

  // State for Architecture Diagram tabs
  const [activeDiagramTab, setActiveDiagramTab] = useState("arch");

  // Map role screenshot keys to SHOTS
  const roleShotMap: Record<string, string> = {
    home: SHOTS.home,
    qr: SHOTS.qr,
    supervisorHome: SHOTS.supervisorHome,
    controlRoom: SHOTS.controlRoom,
    shiftRoster: SHOTS.shiftRoster,
    patrolHub: SHOTS.patrolHub,
    technicianOrders: SHOTS.technicianOrders,
    chiefTeams: SHOTS.chiefTeams,
  };

  return (
    <section id="case-study" className="relative py-20 sm:py-32 border-t border-slate-200 dark:border-white/10 transition-colors duration-200 bg-white dark:bg-[#05070a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Case Study Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span
            className={`inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-extrabold text-emerald-700 dark:text-emerald-400 ${
              isRtl ? "wu-font-ar-display tracking-normal" : "wu-font-mono uppercase tracking-wider"
            }`}
          >
            <Building2 className="h-4 w-4 shrink-0" />
            <span>{cs.badge}</span>
          </span>
          <h2
            className={`mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-900 dark:text-white ${
              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
            }`}
          >
            {cs.title}
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed ${
              isRtl ? "wu-font-ar-body" : "wu-font-en-body"
            }`}
          >
            {cs.subtitle}
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════
            PART 1: THE PROBLEM STATEMENT & MISSION (Screenshot 2 Fix)
        ══════════════════════════════════════════════════════════════ */}
        <div className="mt-20 sm:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <span
              className={`inline-flex items-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs sm:text-sm font-extrabold text-emerald-700 dark:text-emerald-400 ${
                isRtl ? "wu-font-ar-display tracking-normal" : "wu-font-mono uppercase tracking-wider"
              }`}
            >
              {sec.problem.tag}
            </span>
            <h3
              className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white ${
                isRtl ? "wu-font-ar-display" : "wu-font-en-display"
              }`}
            >
              {sec.problem.title}
            </h3>
            <p
              className={`mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed ${
                isRtl ? "wu-font-ar-body" : "wu-font-en-body"
              }`}
            >
              {sec.problem.desc}
            </p>
          </motion.div>

          {/* 4 High-Impact Friction Cards (Bigger, polished, animated) */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sec.problem.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-7 shadow-sm backdrop-blur-xl transition-all hover:border-red-400/60 hover:shadow-lg dark:border-white/10 dark:bg-slate-950/50 dark:shadow-none dark:hover:border-red-500/40 dark:hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
              >
                {/* Subtle top indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/0 via-red-500/40 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 shadow-inner">
                  {idx === 0 && <MessageSquareOff className="h-6 w-6" />}
                  {idx === 1 && <WifiOff className="h-6 w-6" />}
                  {idx === 2 && <BadgePercent className="h-6 w-6" />}
                  {idx === 3 && <FileWarning className="h-6 w-6" />}
                </div>

                <h4
                  className={`mt-5 text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {item.title}
                </h4>

                <p
                  className={`mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal ${
                    isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                  }`}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Before vs After Contrast Matrix (Generous, high-contrast, animated) */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* The WhatsApp Chaos (Crimson Card) */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border-2 border-red-300/80 bg-red-50/60 p-7 sm:p-9 backdrop-blur-xl dark:border-red-500/30 dark:bg-red-950/20 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/30">
                  <XCircle className="h-5 w-5" />
                </span>
                <h4
                  className={`text-lg sm:text-xl font-bold text-red-950 dark:text-red-200 ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {sec.problem.contrast.whatsappTitle}
                </h4>
              </div>

              <ul className={`mt-6 space-y-4 text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed ${
                isRtl ? "wu-font-ar-body" : "wu-font-en-body"
              }`}>
                {sec.problem.contrast.whatsappPoints.map((pt, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-600 dark:text-red-400">
                      ✕
                    </span>
                    <span>{pt}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* The WhatsUnity Solution (Emerald Card with Luminous Aura) */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border-2 border-emerald-400/80 bg-emerald-50/60 p-7 sm:p-9 backdrop-blur-xl shadow-xl dark:border-emerald-500/40 dark:bg-emerald-950/25 dark:shadow-[0_0_50px_rgba(0,226,138,0.15)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <h4
                  className={`text-lg sm:text-xl font-bold text-emerald-950 dark:text-emerald-200 ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {sec.problem.contrast.whatsunityTitle}
                </h4>
              </div>

              <ul className={`mt-6 space-y-4 text-sm sm:text-base text-slate-900 dark:text-slate-100 font-medium leading-relaxed ${
                isRtl ? "wu-font-ar-body" : "wu-font-en-body"
              }`}>
                {sec.problem.contrast.whatsunityPoints.map((pt, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
                      ✓
                    </span>
                    <span>{pt}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            PART 2: THE 9-ROLE PERSONA MATRIX & INTERACTIVE TOUR
        ══════════════════════════════════════════════════════════════ */}
        <div id="roles" className="mt-28 sm:mt-36 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <span
              className={`inline-flex items-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs sm:text-sm font-extrabold text-emerald-700 dark:text-emerald-400 ${
                isRtl ? "wu-font-ar-display tracking-normal" : "wu-font-mono uppercase tracking-wider"
              }`}
            >
              {sec.roles.tag}
            </span>
            <h3
              className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white ${
                isRtl ? "wu-font-ar-display" : "wu-font-en-display"
              }`}
            >
              {sec.roles.title}
            </h3>
            <p
              className={`mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed ${
                isRtl ? "wu-font-ar-body" : "wu-font-en-body"
              }`}
            >
              {sec.roles.desc}
            </p>
          </motion.div>

          {/* Role Tabs with Apple-style Gliding Pill Indicator */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            {sec.roles.list.map((r) => {
              const active = r.id === activeRoleId;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setActiveRoleId(r.id)}
                  className={`relative flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors wu-pressable ${
                    active
                      ? "text-[#04140c]"
                      : "border border-slate-300 bg-white text-slate-700 hover:border-emerald-500 hover:text-emerald-700 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
                  } ${isRtl ? "wu-font-ar-display" : "wu-font-en-display"}`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeRoleTabIndicator"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      className="absolute inset-0 rounded-2xl bg-emerald-500 shadow-[0_0_20px_rgba(0,226,138,0.4)]"
                    />
                  )}
                  <span className="relative z-10">{r.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Role Showcase (Phone Mockup + Details) */}
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60 dark:shadow-2xl">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              {/* Details Column with AnimatePresence */}
              <div className="flex flex-col items-start lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedRole.id}
                    initial={{ opacity: 0, transform: "translateY(8px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    exit={{ opacity: 0, transform: "translateY(-8px)" }}
                    transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full"
                  >
                    <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                      <ShieldCheck className="h-4 w-4" />
                      <span>{selectedRole.subtitle}</span>
                    </div>
                    <h4
                      className={`mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white ${
                        isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                      }`}
                    >
                      {selectedRole.name}
                    </h4>
                    <p
                      className={`mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed ${
                        isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                      }`}
                    >
                      {selectedRole.responsibility}
                    </p>

                    {/* Key Features Chips */}
                    <div className="mt-7 w-full">
                      <h5
                        className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3.5 wu-font-mono"
                      >
                        {isRtl ? "أبرز الإمكانيات والوحدات" : "Key Modules & Workflows"}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedRole.features.map((f, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 transition hover:border-emerald-500/40 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 ${
                              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                            }`}
                          >
                            <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Offline Capability Highlight Card */}
                    <div className="mt-7 w-full rounded-2xl border border-blue-200 bg-blue-50/80 p-4 sm:p-5 dark:border-blue-500/30 dark:bg-blue-950/20">
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-400">
                        <WifiOff className="h-4 w-4" />
                        <span>{isRtl ? "التشغيل أوفلاين دون إنترنت" : "Offline-First Resilience"}</span>
                      </div>
                      <p
                        className={`mt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed ${
                          isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                        }`}
                      >
                        {selectedRole.offlineCapability}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Phone Mockup Column */}
              <div className="flex justify-center lg:col-span-5">
                <div className="relative">
                  <PhoneFrame width={285} glow="#00e28a" morph={false}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedRole.id}
                        initial={{ opacity: 0, transform: "scale(0.97)" }}
                        animate={{ opacity: 1, transform: "scale(1)" }}
                        exit={{ opacity: 0, transform: "scale(1.02)" }}
                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                        className="h-full w-full"
                      >
                        <AppShot
                          src={roleShotMap[selectedRole.shotKey] || SHOTS.home}
                          alt={selectedRole.name}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </PhoneFrame>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            PART 3: DEEP TECHNICAL ARCHITECTURE & CLEAN ARCHITECTURE
        ══════════════════════════════════════════════════════════════ */}
        <div id="architecture" className="mt-28 sm:mt-36 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <span
              className={`inline-flex items-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs sm:text-sm font-extrabold text-emerald-700 dark:text-emerald-400 ${
                isRtl ? "wu-font-ar-display tracking-normal" : "wu-font-mono uppercase tracking-wider"
              }`}
            >
              {sec.architecture.tag}
            </span>
            <h3
              className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white ${
                isRtl ? "wu-font-ar-display" : "wu-font-en-display"
              }`}
            >
              {sec.architecture.title}
            </h3>
            <p
              className={`mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed ${
                isRtl ? "wu-font-ar-body" : "wu-font-en-body"
              }`}
            >
              {sec.architecture.desc}
            </p>
          </motion.div>

          {/* 3 Architecture Layer Boundaries */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {sec.architecture.principles.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/40 dark:shadow-none"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
                    L{idx + 1}
                  </span>
                  <h4
                    className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-white ${
                      isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                    }`}
                  >
                    {p.title}
                  </h4>
                </div>
                <p
                  className={`mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 ${
                    isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                  }`}
                >
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Interactive Architectural Diagram Viewer */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#05070a]">
            {/* Diagram Tab Selectors */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-4">
              {sec.architecture.diagramTabs.map((tab) => {
                const active = tab.id === activeDiagramTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveDiagramTab(tab.id)}
                    className={`relative rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-colors wu-pressable ${
                      active
                        ? "text-[#04140c]"
                        : "border border-slate-300/80 bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200/80 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10"
                    } ${isRtl ? "wu-font-ar-display" : "wu-font-en-display"}`}
                  >
                    {active && (
                      <motion.div
                        layoutId="activeArchTabIndicator"
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                        className="absolute inset-0 rounded-xl bg-emerald-500 shadow-[0_0_15px_rgba(0,226,138,0.4)]"
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Diagram Description Banner */}
            <AnimatePresence mode="wait">
              {(() => {
                const tab = sec.architecture.diagramTabs.find((t) => t.id === activeDiagramTab);
                if (!tab) return null;
                return (
                  <motion.div
                    key={activeDiagramTab}
                    initial={{ opacity: 0, transform: "translateY(6px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    exit={{ opacity: 0, transform: "translateY(-6px)" }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="mt-5 mb-2"
                  >
                    <h4
                      className={`text-xl font-extrabold text-slate-900 dark:text-white ${
                        isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                      }`}
                    >
                      {tab.title}
                    </h4>
                    <p
                      className={`text-sm text-slate-600 dark:text-slate-300 mt-1.5 max-w-3xl leading-relaxed ${
                        isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                      }`}
                    >
                      {tab.desc}
                    </p>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            {/* The SVG Diagram Stage */}
            <div className="mt-5 min-h-[360px] sm:min-h-[420px] rounded-2xl border border-slate-200/90 bg-slate-50/90 p-3 sm:p-4 flex items-center justify-center overflow-hidden dark:border-white/5 dark:bg-[#020407]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDiagramTab}
                  initial={{ opacity: 0, transform: "scale(0.97)" }}
                  animate={{ opacity: 1, transform: "scale(1)" }}
                  exit={{ opacity: 0, transform: "scale(1.03)" }}
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {activeDiagramTab === "arch" && <ArchitectureDiagram locale={locale} />}
                  {activeDiagramTab === "sync" && <OfflineSyncDiagram locale={locale} />}
                  {activeDiagramTab === "encryption" && <EncryptionDiagram locale={locale} />}
                  {activeDiagramTab === "tenancy" && <TenancyDiagram locale={locale} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dual-Engine Messaging & Cloudflare R2 Pipeline */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Dual Messaging Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/40 dark:shadow-none"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                  <Send className="h-5 w-5" />
                </span>
                <h4
                  className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-white ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {sec.architecture.messagingDualEngine.title}
                </h4>
              </div>
              <p
                className={`mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed ${
                  isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                }`}
              >
                {sec.architecture.messagingDualEngine.desc}
              </p>

              <div className="mt-5 space-y-3.5">
                <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-4 dark:border-blue-500/20 dark:bg-blue-950/20">
                  <div className="text-sm font-bold text-blue-700 dark:text-blue-400">
                    {sec.architecture.messagingDualEngine.telegramTitle}
                  </div>
                  <div className={`text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed ${isRtl ? "wu-font-ar-body" : "wu-font-en-body"}`}>
                    {sec.architecture.messagingDualEngine.telegramDesc}
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 dark:border-emerald-500/20 dark:bg-emerald-950/20">
                  <div className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                    {sec.architecture.messagingDualEngine.appwriteTitle}
                  </div>
                  <div className={`text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed ${isRtl ? "wu-font-ar-body" : "wu-font-en-body"}`}>
                    {sec.architecture.messagingDualEngine.appwriteDesc}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cloudflare R2 Direct Edge Storage Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/40 dark:shadow-none"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <Cloud className="h-5 w-5" />
                </span>
                <h4
                  className={`text-lg sm:text-xl font-bold text-slate-900 dark:text-white ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {sec.architecture.storagePipeline.title}
                </h4>
              </div>
              <p
                className={`mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed ${
                  isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                }`}
              >
                {sec.architecture.storagePipeline.desc}
              </p>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-100 p-5 text-xs sm:text-sm text-slate-800 space-y-2 dark:border-white/10 dark:bg-black/40 dark:text-slate-300 wu-font-mono" dir="ltr">
                <div className="text-emerald-600 dark:text-emerald-400 font-bold"># Direct R2 Edge Pipeline Workflow:</div>
                <div className="text-slate-600 dark:text-slate-400">1. Client requests signed URL from Appwrite Edge Function</div>
                <div className="text-slate-600 dark:text-slate-400">2. Client streams binary directly to Cloudflare R2 (HTTP/3)</div>
                <div className="text-slate-600 dark:text-slate-400">3. Media cached globally via Edge CDN without backend RAM load</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            PART 4: EMPIRICAL BENCHMARKS & TELEMETRY
        ══════════════════════════════════════════════════════════════ */}
        <div className="mt-28 sm:mt-36 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <span
              className={`inline-flex items-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs sm:text-sm font-extrabold text-emerald-700 dark:text-emerald-400 ${
                isRtl ? "wu-font-ar-display tracking-normal" : "wu-font-mono uppercase tracking-wider"
              }`}
            >
              {sec.benchmarks.tag}
            </span>
            <h3
              className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white ${
                isRtl ? "wu-font-ar-display" : "wu-font-en-display"
              }`}
            >
              {sec.benchmarks.title}
            </h3>
            <p
              className={`mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed ${
                isRtl ? "wu-font-ar-body" : "wu-font-en-body"
              }`}
            >
              {sec.benchmarks.desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60 dark:shadow-xl"
          >
            <table className="w-full text-start text-sm sm:text-base">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 dark:border-white/10 dark:text-slate-400 text-xs sm:text-sm uppercase tracking-wider wu-font-mono">
                  <th className="pb-4 text-start font-bold">{isRtl ? "المؤشر القياسي" : "Benchmark Metric"}</th>
                  <th className="pb-4 text-start font-bold">{isRtl ? "الأنظمة التقليدية السحابية" : "Legacy Cloud SaaS"}</th>
                  <th className="pb-4 text-start font-bold">{isRtl ? "منظومة WhatsUnity" : "WhatsUnity Compound OS"}</th>
                  <th className="pb-4 text-start font-bold">{isRtl ? "نسبة التحسن" : "Net Delta"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5 wu-font-mono">
                {sec.benchmarks.metrics.map((m, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-slate-50/50 dark:hover:bg-white/[0.02]">
                    <td className={`py-4 font-bold text-slate-900 dark:text-white ${isRtl ? "wu-font-ar-display" : "wu-font-en-display"}`}>
                      {m.metric}
                    </td>
                    <td className="py-4 text-red-500 dark:text-red-400 font-semibold">{m.before}</td>
                    <td className="py-4 font-bold text-emerald-600 dark:text-emerald-400">{m.after}</td>
                    <td className="py-4">
                      <span className="inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                        {m.delta}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
