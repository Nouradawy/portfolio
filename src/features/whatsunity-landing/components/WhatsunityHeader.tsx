import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, ArrowLeft, ArrowRight, Menu, X, Globe } from "lucide-react";
import { useTheme } from "@/features/portfolio/presentation/theme/ThemeProvider";
import { WhatsUnityLogoText } from "./WhatsUnityLogoText";
import type { Locale, WhatsunityContent } from "../data/whatsunityContent";

interface Props {
  locale: Locale;
  onToggleLocale: () => void;
  content: WhatsunityContent;
}

export function WhatsunityHeader({ locale, onToggleLocale, content }: Props) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === "dark";
  const isRtl = locale === "ar";

  const navLinks = [
    { href: "#case-study", label: content.nav.caseStudy },
    { href: "#architecture", label: content.nav.architecture },
    { href: "#catalog", label: content.nav.catalog },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-xl transition-colors duration-200 dark:border-white/10 dark:bg-[#05070a]/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand: Icon + Typographic Logo */}
        <a href="#overview" className="group flex items-center gap-2.5 wu-pressable">
          <img
            src="/whatsunity/favicon.png"
            alt="WhatsUnity Logo"
            className="h-7 w-7 sm:h-8 sm:w-8 object-contain transition-transform group-hover:scale-105"
          />
          <WhatsUnityLogoText className="text-[20px] sm:text-[24px] md:text-[28px]" />
        </a>

        {/* Streamlined Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100/80 p-1 text-xs font-semibold backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-1.5 transition-colors text-slate-700 hover:text-emerald-600 hover:bg-emerald-500/10 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-500/15 wu-pressable ${
                isRtl ? "wu-font-ar-display" : "wu-font-en-display"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Essential Action Controls: Language + Theme + Portfolio */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Toggle Button */}
          <button
            type="button"
            onClick={onToggleLocale}
            className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm wu-pressable hover:border-emerald-500 hover:text-emerald-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-500/40 dark:hover:text-emerald-300"
            title={isRtl ? "Switch to English" : "التبديل إلى العربية"}
          >
            <Globe className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
            <span className={isRtl ? "wu-font-en-body" : "wu-font-ar-body"}>
              {isRtl ? "EN" : "العربية"}
            </span>
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 shadow-sm wu-pressable hover:border-emerald-500 hover:text-emerald-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-500/40 dark:hover:text-emerald-300"
            title={isDark ? "Switch to Light Mode" : "الوضع الليلي"}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-amber-300 transition-transform duration-200" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700 transition-transform duration-200" />
            )}
          </button>

          {/* Back to Portfolio Link */}
          <Link
            to="/"
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-emerald-600/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-700 wu-pressable hover:bg-emerald-500/20 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300 ${
              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
            }`}
          >
            {isRtl ? <ArrowRight className="h-3.5 w-3.5" /> : <ArrowLeft className="h-3.5 w-3.5" />}
            <span>{content.nav.backToPortfolio}</span>
          </Link>

          {/* Mobile Drawer Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 shadow-sm md:hidden wu-pressable dark:border-white/15 dark:bg-white/5 dark:text-slate-200"
            aria-label="Toggle mobile navigation"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-white/10 dark:bg-[#05070a]/98 shadow-xl"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-emerald-500/10 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-emerald-500/15 dark:hover:text-emerald-400 ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 border-t border-slate-200 dark:border-white/10 pt-3">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {isRtl ? <ArrowRight className="h-3.5 w-3.5" /> : <ArrowLeft className="h-3.5 w-3.5" />}
                  <span>{content.nav.backToPortfolio}</span>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
