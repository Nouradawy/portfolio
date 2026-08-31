import { Fragment, useEffect, useState, useMemo, useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  X,
  Printer,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  LayoutGrid,
  Layers,
  SlidersHorizontal,
  BookOpen,
} from "lucide-react";
import { CoverPage } from "./CoverPage";
import { CatalogPage } from "./CatalogPage";
import { RoleDivider } from "./RoleDivider";
import { WhatsunityBeforeAfterShowcase } from "./WhatsunityBeforeAfterShowcase";
import {
  pages,
  roles,
  t,
  uiTranslations,
  type RoleKey,
  type Locale,
  type CatalogPageData,
} from "../data/catalog";

interface Props {
  open: boolean;
  onClose: () => void;
  initialRole?: RoleKey | "all";
  initialTab?: "catalog" | "evolution";
}

type SlideItem =
  | { type: "cover" }
  | { type: "divider"; roleKey: RoleKey; order: string; count: number }
  | { type: "page"; page: CatalogPageData };

export function WhatsunityCatalogModal({
  open,
  onClose,
  initialRole = "all",
  initialTab = "catalog",
}: Props) {
  const [activeMainTab, setActiveMainTab] = useState<"catalog" | "evolution">(initialTab);
  const [locale, setLocale] = useState<Locale>("ar");
  const [activeRole, setActiveRole] = useState<RoleKey | "all">(initialRole);
  const [viewMode, setViewMode] = useState<"slider" | "feed">("slider");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (open && initialTab) {
      setActiveMainTab(initialTab);
    }
  }, [open, initialTab]);

  const ui = uiTranslations[locale];
  const filteredPages = useMemo(
    () => (activeRole === "all" ? pages : pages.filter((p) => p.roleKey === activeRole)),
    [activeRole]
  );
  const totalPagesCount = String(pages.length).padStart(2, "0");

  // Build sequential slide items for slider mode
  const slides = useMemo<SlideItem[]>(() => {
    const items: SlideItem[] = [];
    if (activeRole === "all") {
      items.push({ type: "cover" });
    }

    const seenRoles: string[] = [];
    filteredPages.forEach((page) => {
      if (!seenRoles.includes(page.roleKey)) {
        seenRoles.push(page.roleKey);
        const order = String(seenRoles.length).padStart(2, "0");
        const count = filteredPages.filter((p) => p.roleKey === page.roleKey).length;
        items.push({ type: "divider", roleKey: page.roleKey, order, count });
      }
      items.push({ type: "page", page });
    });

    return items;
  }, [activeRole, filteredPages]);

  // Reset slider index when role changes
  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [activeRole]);

  // Keyboard navigation & Esc listener
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (viewMode === "slider") {
        if (e.key === "ArrowRight") {
          if (locale === "ar") {
            setCurrentSlideIndex((i) => Math.max(0, i - 1));
          } else {
            setCurrentSlideIndex((i) => Math.min(slides.length - 1, i + 1));
          }
        } else if (e.key === "ArrowLeft") {
          if (locale === "ar") {
            setCurrentSlideIndex((i) => Math.min(slides.length - 1, i + 1));
          } else {
            setCurrentSlideIndex((i) => Math.max(0, i - 1));
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, viewMode, slides.length, locale, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handlePrint = useCallback(() => {
    document.body.classList.add("catalog-printing");
    window.print();
    setTimeout(() => {
      document.body.classList.remove("catalog-printing");
    }, 1000);
  }, []);

  const roleList: { key: RoleKey | "all"; label: string; count: number }[] = useMemo(
    () => [
      { key: "all", label: ui.allRoles, count: pages.length },
      ...Object.entries(roles).map(([key, info]) => ({
        key: key as RoleKey,
        label: t(info.label, locale),
        count: pages.filter((p) => p.roleKey === key).length,
      })),
    ],
    [ui.allRoles, locale]
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 text-slate-100 backdrop-blur-2xl"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* HEADER CONTROL BAR */}
      <header className="no-print relative z-20 flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-slate-900/90 px-4 py-2.5 backdrop-blur-xl md:px-6">
        {/* Left: Brand & Main Section Switcher */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 font-bold text-white shadow-glow-electric">
              <BookOpen className="h-4 w-4" />
            </span>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5" dir="ltr">
                <span className="catalog-latin text-sm font-extrabold text-white">
                  Whats<span className="text-blue-400">Unity</span>
                </span>
                <span className="hidden text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:inline">
                  • Interactive Showcase
                </span>
              </div>
            </div>
          </div>

          {/* Primary View Switcher: Catalog vs UI/UX Evolution */}
          <div className="flex items-center rounded-full border border-white/15 bg-white/5 p-0.5" dir="ltr">
            <button
              type="button"
              onClick={() => setActiveMainTab("catalog")}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition-all ${
                activeMainTab === "catalog"
                  ? "bg-blue-600 text-white shadow-glow-electric"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>20+ Screens Catalog</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveMainTab("evolution")}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                activeMainTab === "evolution"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_14px_rgba(6,182,212,0.35)] font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>UI/UX Evolution (Before/After)</span>
            </button>
          </div>
        </div>

        {/* Center: Role filter tabs (Only in catalog mode) */}
        {activeMainTab === "catalog" && (
          <div className="order-3 flex w-full items-center justify-start overflow-x-auto py-1 scrollbar-none md:order-2 md:w-auto md:justify-center">
            <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
              {roleList.map((r) => {
                const isSelected = activeRole === r.key;
                return (
                  <button
                    key={r.key}
                    type="button"
                    onClick={() => setActiveRole(r.key)}
                    className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium transition-all ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-sm font-semibold"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{r.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[9px] ${
                        isSelected ? "bg-white/20 text-white" : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {r.count}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}

        {/* Right: View mode, Language & Action controls */}
        <div className="order-2 flex items-center gap-2 md:order-3">
          {activeMainTab === "catalog" && (
            <>
              {/* View mode toggle */}
              <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-0.5">
                <button
                  type="button"
                  onClick={() => setViewMode("slider")}
                  title="Slide by slide view"
                  className={`rounded-full p-1.5 transition-colors ${
                    viewMode === "slider" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Layers className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("feed")}
                  title="Continuous feed view"
                  className={`rounded-full p-1.5 transition-colors ${
                    viewMode === "feed" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Bilingual language switcher */}
              <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-0.5" dir="ltr">
                <button
                  type="button"
                  onClick={() => setLocale("ar")}
                  className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition-all ${
                    locale === "ar" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
                  }`}
                >
                  العربية
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition-all ${
                    locale === "en" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Print button */}
              <button
                type="button"
                onClick={handlePrint}
                title="Export / Print Catalog"
                className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-blue-500 hover:text-white sm:flex"
              >
                <Printer className="h-3.5 w-3.5 text-blue-400" />
                <span>{ui.printBtn}</span>
              </button>
            </>
          )}

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Case Study"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-slate-300 transition hover:border-rose-400 hover:bg-rose-500/20 hover:text-rose-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* MAIN VIEWPORT */}
      <main className="relative flex-1 overflow-y-auto overflow-x-hidden p-3 md:p-8" id="catalog-print-container">
        {activeMainTab === "evolution" ? (
          <div className="mx-auto max-w-6xl py-4">
            <WhatsunityBeforeAfterShowcase onOpenCatalog={() => setActiveMainTab("catalog")} />
          </div>
        ) : viewMode === "slider" ? (
          /* SLIDER / CAROUSEL MODE */
          <div className="flex min-h-full flex-col items-center justify-center">
            <div className="relative w-full max-w-[1123px]">
              <AnimatePresence mode="wait">
                <m.div
                  key={`${currentSlideIndex}-${activeRole}-${locale}`}
                  initial={{ opacity: 0, scale: 0.98, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  {(() => {
                    const slide = slides[currentSlideIndex];
                    if (!slide) return null;
                    if (slide.type === "cover") {
                      return <CoverPage locale={locale} />;
                    }
                    if (slide.type === "divider") {
                      return (
                        <RoleDivider
                          roleKey={slide.roleKey}
                          order={slide.order}
                          count={slide.count}
                          locale={locale}
                        />
                      );
                    }
                    return <CatalogPage page={slide.page} total={totalPagesCount} locale={locale} />;
                  })()}
                </m.div>
              </AnimatePresence>

              {/* Slider Prev / Next floating arrows */}
              {slides.length > 1 && (
                <>
                  {/* LEFT ARROW BUTTON */}
                  <button
                    type="button"
                    onClick={() => {
                      if (locale === "ar") {
                        // In Arabic RTL, left advances forward (Next)
                        setCurrentSlideIndex((i) => Math.min(slides.length - 1, i + 1));
                      } else {
                        // In English LTR, left goes back (Previous)
                        setCurrentSlideIndex((i) => Math.max(0, i - 1));
                      }
                    }}
                    disabled={
                      locale === "ar"
                        ? currentSlideIndex === slides.length - 1
                        : currentSlideIndex === 0
                    }
                    aria-label={locale === "ar" ? "الصفحة التالية" : "Previous Slide"}
                    title={locale === "ar" ? "الصفحة التالية" : "Previous Slide"}
                    className="no-print absolute -left-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-900/95 text-white shadow-xl backdrop-blur transition hover:border-blue-500 hover:bg-blue-600 disabled:opacity-20 disabled:pointer-events-none md:-left-6"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  {/* RIGHT ARROW BUTTON */}
                  <button
                    type="button"
                    onClick={() => {
                      if (locale === "ar") {
                        // In Arabic RTL, right goes back (Previous)
                        setCurrentSlideIndex((i) => Math.max(0, i - 1));
                      } else {
                        // In English LTR, right advances forward (Next)
                        setCurrentSlideIndex((i) => Math.min(slides.length - 1, i + 1));
                      }
                    }}
                    disabled={
                      locale === "ar"
                        ? currentSlideIndex === 0
                        : currentSlideIndex === slides.length - 1
                    }
                    aria-label={locale === "ar" ? "الصفحة السابقة" : "Next Slide"}
                    title={locale === "ar" ? "الصفحة السابقة" : "Next Slide"}
                    className="no-print absolute -right-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-900/95 text-white shadow-xl backdrop-blur transition hover:border-blue-500 hover:bg-blue-600 disabled:opacity-20 disabled:pointer-events-none md:-right-6"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
          </div>
        ) : (
          /* CONTINUOUS FEED / ALL PAGES MODE */
          <div className="mx-auto flex max-w-[1123px] flex-col items-center gap-10 py-6">
            {activeRole === "all" && <CoverPage locale={locale} />}
            {(() => {
              const seenRoles: string[] = [];
              return filteredPages.map((page) => {
                let divider = null;
                if (!seenRoles.includes(page.roleKey)) {
                  seenRoles.push(page.roleKey);
                  const order = String(seenRoles.length).padStart(2, "0");
                  const count = filteredPages.filter((p) => p.roleKey === page.roleKey).length;
                  divider = (
                    <RoleDivider
                      roleKey={page.roleKey}
                      order={order}
                      count={count}
                      locale={locale}
                    />
                  );
                }
                return (
                  <Fragment key={page.index}>
                    {divider}
                    <CatalogPage page={page} total={totalPagesCount} locale={locale} />
                  </Fragment>
                );
              });
            })()}
          </div>
        )}
      </main>

      {/* BOTTOM SLIDER RAIL (Only in slider mode) */}
      {viewMode === "slider" && slides.length > 1 && (
        <footer className="no-print shrink-0 border-t border-white/10 bg-slate-900/80 px-4 py-2.5 backdrop-blur-xl">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
            <span className="catalog-latin font-mono text-[11px] font-semibold text-slate-400">
              Slide {currentSlideIndex + 1} of {slides.length}
            </span>

            {/* Quick jump slide pill track */}
            <div className="flex max-w-md flex-1 items-center justify-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
              {slides.map((s, idx) => {
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlideIndex(idx)}
                    title={`Slide ${idx + 1}: ${
                      s.type === "cover"
                        ? "Cover"
                        : s.type === "divider"
                        ? `Section ${s.order}`
                        : `Screen ${s.page.index}`
                    }`}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? "w-6 bg-blue-500 shadow-glow-electric"
                        : "w-2 bg-white/20 hover:bg-white/50"
                    }`}
                  />
                );
              })}
            </div>

            <div className="flex items-center gap-1 text-[11px] text-slate-400">
              <span className="hidden sm:inline">Use</span>
              <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-200">
                ←
              </kbd>
              <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-200">
                →
              </kbd>
              <span className="hidden sm:inline">keys to navigate</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
