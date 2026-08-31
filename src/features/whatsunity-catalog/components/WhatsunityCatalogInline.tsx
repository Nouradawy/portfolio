import { useState } from "react";
import { m } from "framer-motion";
import { Sparkles, Maximize2, Layers, BookOpen, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { pages, roles, t, uiTranslations, type RoleKey, type Locale } from "../data/catalog";
import { CatalogPage } from "./CatalogPage";

interface Props {
  onOpenFullscreen: () => void;
}

export function WhatsunityCatalogInline({ onOpenFullscreen }: Props) {
  const [locale, setLocale] = useState<Locale>("ar");
  const [previewIndex, setPreviewIndex] = useState(0);

  const previewPages = pages.slice(0, 6); // First 6 key showcase pages
  const currentPage = previewPages[previewIndex] || pages[0];
  const total = String(pages.length).padStart(2, "0");
  const r = roles[currentPage.roleKey];

  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-blue-500/30 bg-slate-950/80 p-4 backdrop-blur-xl md:p-6">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 ring-1 ring-blue-500/30">
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold tracking-tight text-white">
                WhatsUnity Interactive Catalog & Architecture
              </h4>
              <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-400 ring-1 ring-blue-500/20">
                20+ Screens
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Explore live role-based dashboards, offline-first sync engines, and community governance.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-0.5" dir="ltr">
            <button
              type="button"
              onClick={() => setLocale("ar")}
              className={`rounded-full px-2.5 py-1 text-[10px] font-bold transition-all ${
                locale === "ar" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              العربية
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-full px-2.5 py-1 text-[10px] font-bold transition-all ${
                locale === "en" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          {/* Fullscreen Button */}
          <button
            type="button"
            onClick={onOpenFullscreen}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-glow-electric transition hover:bg-blue-500 active:scale-95"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span>Open Full Case Study</span>
          </button>
        </div>
      </div>

      {/* Inline Preview Container */}
      <div className="relative mt-4 overflow-hidden rounded-xl bg-slate-900/50 p-2 md:p-4">
        <div className="scale-[0.92] origin-top md:scale-100 transition-transform">
          <CatalogPage page={currentPage} total={total} locale={locale} />
        </div>

        {/* Floating Quick Preview Switcher */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">
              Previewing screen {previewIndex + 1} of {previewPages.length} (out of {pages.length} total)
            </span>
          </div>

          <div className="flex items-center gap-2" dir="ltr">
            {/* Left Button */}
            <button
              type="button"
              onClick={() => {
                if (locale === "ar") {
                  setPreviewIndex((i) => Math.min(previewPages.length - 1, i + 1));
                } else {
                  setPreviewIndex((i) => Math.max(0, i - 1));
                }
              }}
              disabled={
                locale === "ar"
                  ? previewIndex === previewPages.length - 1
                  : previewIndex === 0
              }
              aria-label={locale === "ar" ? "الصفحة التالية" : "Previous Screen"}
              title={locale === "ar" ? "الصفحة التالية" : "Previous Screen"}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Right Button */}
            <button
              type="button"
              onClick={() => {
                if (locale === "ar") {
                  setPreviewIndex((i) => Math.max(0, i - 1));
                } else {
                  setPreviewIndex((i) => Math.min(previewPages.length - 1, i + 1));
                }
              }}
              disabled={
                locale === "ar"
                  ? previewIndex === 0
                  : previewIndex === previewPages.length - 1
              }
              aria-label={locale === "ar" ? "الصفحة السابقة" : "Next Screen"}
              title={locale === "ar" ? "الصفحة السابقة" : "Next Screen"}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onOpenFullscreen}
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 hover:underline"
            >
              {locale === "ar" ? "عرض كامل الدليل (20+ شاشة) ←" : "View all 20+ screens →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
