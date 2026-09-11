import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Layers, Presentation, Maximize2 } from "lucide-react";
import { WhatsunityCatalogInline } from "@/features/whatsunity-catalog/components/WhatsunityCatalogInline";
import { WhatsunityCatalogModal } from "@/features/whatsunity-catalog/components/WhatsunityCatalogModal";
import { WhatsunityPresentationModal } from "./WhatsunityPresentationModal";
import type { Locale, WhatsunityContent } from "../data/whatsunityContent";

interface Props {
  locale: Locale;
  content: WhatsunityContent;
}

export function WhatsunityInteractiveHub({ locale, content }: Props) {
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [catalogInitialTab, setCatalogInitialTab] = useState<"catalog" | "evolution">("catalog");
  const [presentationModalOpen, setPresentationModalOpen] = useState(false);

  const isRtl = locale === "ar";
  const hub = content.interactiveHub;

  return (
    <section id="catalog" className="relative py-16 sm:py-24 border-t border-slate-200 dark:border-white/10 transition-colors duration-200 bg-slate-50 dark:bg-[#05070a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-extrabold text-emerald-700 dark:text-emerald-400 ${
              isRtl ? "wu-font-ar-display tracking-normal" : "wu-font-mono uppercase tracking-wider"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>{hub.tag}</span>
          </span>
          <h2
            className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white ${
              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
            }`}
          >
            {hub.title}
          </h2>
          <p
            className={`mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed ${
              isRtl ? "wu-font-ar-body" : "wu-font-en-body"
            }`}
          >
            {hub.subtitle}
          </p>
        </div>

        {/* 2 Focused Showcase Launch Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {/* 1. Catalog Card */}
          <motion.div
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ transform: "translateY(-6px) scale(1.015)", transition: { duration: 0.2 } }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-blue-200 bg-white p-7 shadow-lg backdrop-blur-xl transition-colors hover:border-blue-400 dark:border-blue-500/30 dark:bg-slate-950/60 dark:shadow-none dark:hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                  <Layers className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20 wu-font-mono">
                  {hub.catalogCard.screensCount}
                </span>
              </div>
              <h3
                className={`mt-5 text-2xl font-bold text-slate-900 dark:text-white ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                {hub.catalogCard.title}
              </h3>
              <p
                className={`mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
                  isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                }`}
              >
                {hub.catalogCard.desc}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setCatalogInitialTab("catalog");
                  setCatalogModalOpen(true);
                }}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 wu-pressable hover:bg-blue-500 ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                <Maximize2 className="h-4 w-4" />
                <span>{hub.catalogCard.btn}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setCatalogInitialTab("evolution");
                  setCatalogModalOpen(true);
                }}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-50 py-2.5 text-xs font-bold text-slate-700 wu-pressable hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                {isRtl ? "استعراض التطور (قبل / بعد)" : "UI/UX Evolution (Before / After)"}
              </button>
            </div>
          </motion.div>

          {/* 2. Pitch Deck Card */}
          <motion.div
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ transform: "translateY(-6px) scale(1.015)", transition: { duration: 0.2 } }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-emerald-200 bg-white p-7 shadow-lg backdrop-blur-xl transition-colors hover:border-emerald-400 dark:border-emerald-500/35 dark:bg-slate-950/60 dark:shadow-none dark:hover:shadow-[0_0_35px_rgba(0,226,138,0.2)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  <Presentation className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 wu-font-mono">
                  Pitch Deck
                </span>
              </div>
              <h3
                className={`mt-5 text-2xl font-bold text-slate-900 dark:text-white ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                {hub.deckCard.title}
              </h3>
              <p
                className={`mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
                  isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                }`}
              >
                {hub.deckCard.desc}
              </p>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setPresentationModalOpen(true)}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-5 py-3 text-sm font-extrabold text-[#04140c] shadow-lg shadow-emerald-500/25 wu-pressable hover:brightness-110 ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                <Presentation className="h-4 w-4" />
                <span>{hub.deckCard.btn}</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Embedded Inline Catalog Viewer */}
        <div className="mt-16">
          <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
            <h3
              className={`text-xl font-bold text-slate-900 dark:text-white ${
                isRtl ? "wu-font-ar-display" : "wu-font-en-display"
              }`}
            >
              {isRtl ? "معاينة حية من شاشات الكتالوج" : "Live Inline Screen Preview"}
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400 wu-font-mono">
              {isRtl ? "تصفح الشاشات الحقيقية مباشرة أدناه" : "Browse live production screens below"}
            </span>
          </div>

          <WhatsunityCatalogInline
            onOpenFullscreen={() => {
              setCatalogInitialTab("catalog");
              setCatalogModalOpen(true);
            }}
          />
        </div>
      </div>

      {/* Catalog Modal (20+ Screens + Evolution) */}
      <WhatsunityCatalogModal
        open={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
        initialTab={catalogInitialTab}
      />

      {/* Presentation Deck Modal */}
      <WhatsunityPresentationModal
        open={presentationModalOpen}
        onClose={() => setPresentationModalOpen(false)}
      />
    </section>
  );
}
