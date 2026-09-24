import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  Mail,
  MessageCircle,
  ShieldCheck,
  FileText,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import { WhatsUnityLogoText } from "./WhatsUnityLogoText";
import type { Locale, WhatsunityContent } from "../data/whatsunityContent";

interface Props {
  locale: Locale;
  content: WhatsunityContent;
  onOpenCatalog: () => void;
  onOpenPolicy?: (tab: "privacy" | "terms") => void;
}

export function WhatsunityCtaFooter({
  locale,
  content,
  onOpenCatalog,
  onOpenPolicy,
}: Props) {
  const isRtl = locale === "ar";
  const cta = content.cta;

  return (
    <footer className="relative border-t border-slate-200/80 bg-slate-50 py-16 sm:py-24 text-slate-600 transition-colors duration-200 dark:border-white/10 dark:bg-[#030508] dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Pre-footer Call to Action Card */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-b from-white via-emerald-50/40 to-teal-50/60 dark:from-[#091319] dark:via-[#060e12] dark:to-[#030709] p-8 sm:p-12 text-center shadow-[0_20px_60px_-15px_rgba(16,185,129,0.18)] transition-all dark:border-emerald-500/30 dark:shadow-[0_0_50px_rgba(0,226,138,0.12)]">
          {/* Subtle Ambient Radial Glow Layer */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-full max-w-3xl rounded-full bg-emerald-500/15 blur-3xl dark:bg-emerald-500/20"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2
              className={`text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
                isRtl ? "wu-font-ar-display" : "wu-font-en-display"
              }`}
            >
              {cta.title}
            </h2>
            <p
              className={`mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal ${
                isRtl ? "wu-font-ar-body" : "wu-font-en-body"
              }`}
            >
              {cta.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="https://wa.me/nouradawy?text=Hello%20Noureldin,%20I'm%20interested%20in%20deploying%20or%20licensing%20WhatsUnity%20for%20our%20community."
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_4px_25px_rgba(16,185,129,0.35)] wu-pressable hover:shadow-[0_6px_30px_rgba(16,185,129,0.45)] hover:brightness-105 ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                <span>{cta.primaryBtn}</span>
              </a>

              <Link
                to="/"
                hash="contact"
                className={`inline-flex items-center gap-2 rounded-2xl border border-slate-300/90 bg-white px-5 py-3.5 text-sm font-bold text-slate-800 shadow-sm wu-pressable hover:border-emerald-500 hover:bg-emerald-50/70 hover:text-emerald-800 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-emerald-400/50 dark:hover:bg-white/10 ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                <Mail className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>{isRtl ? "نموذج المراسلة المباشر" : "Contact Form"}</span>
              </Link>

              <button
                type="button"
                onClick={onOpenCatalog}
                className={`inline-flex items-center gap-2 rounded-2xl border border-slate-300/90 bg-white px-5 py-3.5 text-sm font-bold text-slate-800 shadow-sm wu-pressable hover:border-emerald-500 hover:bg-emerald-50/70 hover:text-emerald-800 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-400/50 dark:hover:bg-white/10 dark:hover:text-white ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                <Layers className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>{cta.secondaryBtn}</span>
              </button>

              <Link
                to="/"
                className={`inline-flex items-center gap-2 rounded-2xl border border-slate-300/90 bg-white px-5 py-3.5 text-sm font-bold text-slate-800 shadow-sm wu-pressable hover:border-emerald-500 hover:bg-emerald-50/70 hover:text-emerald-800 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-emerald-400/40 dark:hover:text-white ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                {isRtl ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
                <span>{cta.portfolioBtn}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Legal, Governance & Compliance Section Over the Footer */}
        <div className="mt-12 rounded-3xl border border-slate-200/90 bg-white/70 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02] sm:p-7 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <span
                  className={`text-base font-bold text-slate-900 dark:text-white ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {isRtl ? "الحوكمة والخصوصية القانونية" : "Legal & Privacy Governance"}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                {isRtl
                  ? "تلتزم منظومة WhatsUnity بأعلى معايير حماية البيانات السكنية: تشفير كامل لمستندات إثبات الملكية في خزائن Appwrite Storage المقيدة، فحص أوفلاين لتصاريح البوابات، وانعدام تام لأي تعقب إعلاني أو بيع للبيانات."
                  : "WhatsUnity enforces strict resident privacy and property data security: encrypted ownership verification in restricted Appwrite Storage vaults, 100% offline gate pass validation, and zero ad tracking."}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => onOpenPolicy?.("privacy")}
                className={`inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-sm wu-pressable hover:border-emerald-500 hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-400/60 dark:hover:text-emerald-300 ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>{isRtl ? "سياسة الخصوصية (Privacy)" : "Privacy Policy"}</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenPolicy?.("terms")}
                className={`inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-sm wu-pressable hover:border-emerald-500 hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-400/60 dark:hover:text-emerald-300 ${
                  isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                }`}
              >
                <FileText className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>{isRtl ? "الشروط والأحكام (Terms)" : "Terms & Conditions"}</span>
              </button>

              <a
                href="/whatsunity/privacy-policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-200/80 bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-600 transition hover:text-slate-900 hover:bg-slate-100 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:hover:text-white"
                title={isRtl ? "النسخة المستقلة الرسمية (HTML)" : "Standalone Official Page (HTML)"}
              >
                <span>HTML / App Stores</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="mt-4 pt-3.5 border-t border-slate-200/70 dark:border-white/5 flex flex-wrap items-center gap-y-2 gap-x-4 text-[11px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Lock className="h-3 w-3 text-emerald-500" />
              {isRtl ? "خزينة Appwrite مقيدة" : "Restricted Appwrite Vault"}
            </span>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <span>{isRtl ? "تاريخ السريان: 30 أبريل 2026" : "Effective Date: Apr 30, 2026"}</span>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <a
              href="mailto:support@whatsunity.work.gd"
              className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
            >
              support@whatsunity.work.gd
            </a>
          </div>
        </div>

        {/* Bottom Metadata: Typographic Logo and Navigation */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-slate-200 dark:border-white/10 pt-8 sm:flex-row">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/whatsunity/favicon.png"
                alt="WhatsUnity Icon"
                className="h-5 w-5 object-contain"
              />
              <WhatsUnityLogoText fontSize={16} />
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 sm:border-l sm:border-slate-200 sm:pl-4 dark:sm:border-white/10 rtl:sm:border-l-0 rtl:sm:border-r rtl:sm:pl-0 rtl:sm:pr-4">
              <button
                type="button"
                onClick={() => onOpenPolicy?.("privacy")}
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              >
                {isRtl ? "سياسة الخصوصية" : "Privacy Policy"}
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => onOpenPolicy?.("terms")}
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              >
                {isRtl ? "الشروط والأحكام" : "Terms & Conditions"}
              </button>
            </div>
          </div>

          <div className="text-center sm:text-end text-xs text-slate-600 dark:text-slate-400">
            <div className={isRtl ? "wu-font-ar-body" : "wu-font-en-body"}>
              {isRtl
                ? "نظام تشغيل WhatsUnity السكني · تطوير وبرمجة "
                : "WhatsUnity Residential Operating System · Engineered by "}
              <Link to="/" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                Nouradawy
              </Link>
            </div>
            <div className="mt-1 wu-font-mono text-[11px] text-slate-500 dark:text-slate-500">
              Flutter · Clean Architecture · SQLite Master · Appwrite · Cloudflare R2
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
