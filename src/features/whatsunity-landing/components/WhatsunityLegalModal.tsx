import { useState, useEffect, useMemo, useRef } from "react";
import {
  X,
  ShieldCheck,
  FileText,
  Search,
  Printer,
  Copy,
  Check,
  ExternalLink,
  Globe,
  Lock,
  Calendar,
  Building2,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import {
  whatsunityLegalData,
  type LegalDocType,
  type LegalLocale,
} from "../data/whatsunityLegal";

interface Props {
  open: boolean;
  initialTab?: LegalDocType;
  initialLocale?: LegalLocale;
  onClose: () => void;
}

export function WhatsunityLegalModal({
  open,
  initialTab = "privacy",
  initialLocale = "ar",
  onClose,
}: Props) {
  const [activeTab, setActiveTab] = useState<LegalDocType>(initialTab);
  const [locale, setLocale] = useState<LegalLocale>(initialLocale);
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sync state when opened with new props
  useEffect(() => {
    if (open) {
      if (initialTab) setActiveTab(initialTab);
      if (initialLocale) setLocale(initialLocale);
      setSearchQuery("");
      setCopied(false);
    }
  }, [open, initialTab, initialLocale]);

  // Handle Escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const ui = whatsunityLegalData.ui[locale];
  const doc = whatsunityLegalData[activeTab][locale];
  const isRtl = locale === "ar";

  // Filter sections by search query
  const filteredSections = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return doc.sections;

    return doc.sections.filter((section) => {
      const matchTitle = section.title.toLowerCase().includes(query);
      const matchContent = section.content.some((c) =>
        c.toLowerCase().includes(query)
      );
      const matchSubs = section.subsections?.some(
        (sub) =>
          sub.subtitle.toLowerCase().includes(query) ||
          sub.points.some((p) => p.toLowerCase().includes(query))
      );
      const matchTables = section.tableData?.some(
        (t) =>
          t.service.toLowerCase().includes(query) ||
          t.purpose.toLowerCase().includes(query)
      );
      return matchTitle || matchContent || matchSubs || matchTables;
    });
  }, [doc.sections, searchQuery]);

  const handleCopyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(doc.rawMarkdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`legal-sec-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!open) return null;

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="fixed inset-0 z-[150] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md transition-all print:p-0 print:bg-white"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      {/* Click outside backdrop */}
      <div
        className="absolute inset-0 -z-10 no-print"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Container Card */}
      <div className="relative flex flex-col h-[94vh] max-h-[920px] w-full max-w-5xl rounded-3xl border border-slate-200/90 bg-white shadow-2xl overflow-hidden transition-all dark:border-white/10 dark:bg-[#070b10] dark:text-slate-100 print:h-auto print:max-h-none print:border-none print:shadow-none print:rounded-none">
        {/* Modal Header Bar */}
        <header className="relative z-10 flex flex-col gap-4 border-b border-slate-200/80 bg-slate-50/95 px-5 py-4 dark:border-white/10 dark:bg-[#090f17]/95 backdrop-blur-sm sm:px-8 sm:py-5 no-print">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 border border-emerald-500/20">
                {activeTab === "privacy" ? (
                  <ShieldCheck className="h-5 w-5" />
                ) : (
                  <FileText className="h-5 w-5" />
                )}
              </div>
              <div>
                <h2
                  id="legal-modal-title"
                  className={`text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {ui.legalCenterTitle}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                  {ui.legalCenterSubtitle}
                </p>
              </div>
            </div>

            {/* Quick Action Controls */}
            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <button
                type="button"
                onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                title="Switch document language"
              >
                <Globe className="h-3.5 w-3.5 text-emerald-500" />
                <span>{locale === "ar" ? "English" : "العربية"}</span>
              </button>

              {/* Print Document */}
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-white/25 dark:hover:text-white"
                title={ui.printDoc}
              >
                <Printer className="h-3.5 w-3.5" />
                <span className="hidden md:inline">{ui.printDoc}</span>
              </button>

              {/* Copy Markdown Text */}
              <button
                type="button"
                onClick={handleCopyMarkdown}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-white/25 dark:hover:text-white"
                title={ui.copyMarkdown}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      {ui.copied}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span className="hidden md:inline">{ui.copyMarkdown}</span>
                  </>
                )}
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
                aria-label={ui.close}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Subheader: Document Selector Tabs & Search Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
            {/* Tabs */}
            <div className="flex items-center gap-1.5 rounded-2xl bg-slate-200/60 p-1 dark:bg-white/5">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("privacy");
                  setSearchQuery("");
                }}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                  activeTab === "privacy"
                    ? "bg-white text-emerald-700 shadow-sm dark:bg-emerald-500/20 dark:text-emerald-300 border border-slate-300/40 dark:border-emerald-500/30"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>{ui.privacyTab}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("terms");
                  setSearchQuery("");
                }}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                  activeTab === "terms"
                    ? "bg-white text-emerald-700 shadow-sm dark:bg-emerald-500/20 dark:text-emerald-300 border border-slate-300/40 dark:border-emerald-500/30"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                <span>{ui.termsTab}</span>
              </button>
            </div>

            {/* Filter Search Input */}
            <div className="relative flex-1 max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 rtl:left-auto rtl:right-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={ui.searchPlaceholder}
                className="w-full rounded-xl border border-slate-200 bg-white py-1.5 pl-9 pr-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-white/10 dark:bg-black/30 dark:text-slate-200 dark:placeholder:text-slate-500 rtl:pl-3 rtl:pr-9"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rtl:right-auto rtl:left-2.5"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Scrollable Content Body */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8 space-y-8"
        >
          {/* Metadata Card: Effective Date & Verification Seal */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-5 dark:border-emerald-500/20 dark:bg-emerald-950/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300">
                  <Lock className="h-3 w-3" />
                  <span>{doc.badge}</span>
                </div>
                <h1
                  className={`text-2xl font-extrabold text-slate-900 dark:text-white ${
                    isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                  }`}
                >
                  {doc.title}
                </h1>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                  {doc.summary}
                </p>
              </div>

              <div className="flex flex-col gap-1 text-xs text-slate-600 dark:text-slate-400 shrink-0">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    <strong>{ui.effectiveDateLabel}:</strong> {ui.lastUpdated}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    <strong>Provider:</strong> {doc.serviceProvider}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    <strong>Support:</strong> {doc.supportEmail}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Section Pills (Table of Contents) */}
            {!searchQuery && doc.sections.length > 0 && (
              <div className="mt-4 pt-4 border-t border-emerald-500/15 flex flex-wrap items-center gap-1.5 no-print">
                <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 mr-2 rtl:mr-0 rtl:ml-2">
                  {ui.quickJump}:
                </span>
                {doc.sections.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollToSection(sec.id)}
                    className="rounded-lg border border-slate-200/80 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-emerald-400/50 dark:hover:text-emerald-300"
                  >
                    {sec.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Clauses & Content List */}
          <div className="space-y-8 max-w-4xl">
            {filteredSections.length === 0 ? (
              <div className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">
                {ui.noResults} &ldquo;{searchQuery}&rdquo;.
              </div>
            ) : (
              filteredSections.map((sec) => (
                <section
                  key={sec.id}
                  id={`legal-sec-${sec.id}`}
                  className="scroll-mt-6 border-b border-slate-200/80 pb-6 dark:border-white/10 last:border-b-0"
                >
                  <h3
                    className={`text-lg font-bold text-slate-900 dark:text-white tracking-tight ${
                      isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                    }`}
                  >
                    {sec.title}
                  </h3>

                  {/* Paragraphs */}
                  <div className="mt-3 space-y-2.5">
                    {sec.content.map((p, idx) => (
                      <p
                        key={idx}
                        className="text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Subsections with Bullet Points */}
                  {sec.subsections?.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="mt-4 rounded-xl border border-slate-200/70 bg-slate-50/70 p-4 dark:border-white/5 dark:bg-white/[0.02]"
                    >
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                        {sub.subtitle}
                      </h4>
                      <ul className="mt-2.5 space-y-2 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
                        {sub.points.map((pt, pIdx) => (
                          <li key={pIdx} className="leading-relaxed">
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Third-Party Subprocessors Table */}
                  {sec.tableData && sec.tableData.length > 0 && (
                    <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200/90 dark:border-white/10 shadow-sm">
                      <table className="w-full text-start text-xs">
                        <thead className="border-b border-slate-200 bg-slate-100/80 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                          <tr>
                            <th className="px-4 py-3 text-start font-bold">
                              Provider / Service
                            </th>
                            <th className="px-4 py-3 text-start font-bold">
                              Purpose & Scope
                            </th>
                            <th className="px-4 py-3 text-start font-bold">
                              Official Agreement
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200/70 dark:divide-white/5 bg-white dark:bg-transparent">
                          {sec.tableData.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className="hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition"
                            >
                              <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                                {row.service}
                              </td>
                              <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                                {row.purpose}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <a
                                  href={row.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                                >
                                  <span>{row.linkText}</span>
                                  <ArrowUpRight className="h-3 w-3" />
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))
            )}
          </div>

          {/* Footer Disclaimer within Scrollable View */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4 text-xs text-slate-500 dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>{ui.officialNotice}</span>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`mailto:${doc.supportEmail}`}
                className="font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                {doc.supportEmail}
              </a>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              <span className="text-[11px]">{doc.effectiveDate}</span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Fixed Footer */}
        <footer className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200/80 bg-slate-50/95 px-5 py-3.5 dark:border-white/10 dark:bg-[#090f17]/95 text-xs text-slate-500 dark:text-slate-400 no-print">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {ui.compliancePill}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline">{ui.securityNotice}</span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800 dark:bg-emerald-500 dark:text-emerald-950 dark:hover:bg-emerald-400"
            >
              {ui.close}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
