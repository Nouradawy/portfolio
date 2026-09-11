import React from "react";
import BrandLogo from "./BrandLogo";

const G_DARK = "#00e28a";
const G_LIGHT = "#059669";
const GOLD_DARK = "#ffd07a";
const GOLD_LIGHT = "#d97706";

export interface ProposalProps {
  theme?: "white" | "dark";
}

/* ───────────────────────── Document Primitives ───────────────────────── */

function SectionHead({
  n,
  en,
  ar,
  theme,
}: {
  n: string;
  en: string;
  ar: string;
  theme: "white" | "dark";
}) {
  const isWhite = theme === "white";
  return (
    <div className="mb-4 flex items-start gap-3.5">
      <span
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold tracking-tight"
        style={{
          background: isWhite ? "#ecfdf5" : "rgba(0, 226, 138, 0.12)",
          color: isWhite ? G_LIGHT : G_DARK,
          border: isWhite ? `1px solid rgba(5, 150, 105, 0.3)` : `1px solid rgba(0, 226, 138, 0.3)`,
          fontFamily: "var(--font-mono)",
        }}
      >
        {n}
      </span>
      <div className="flex-1">
        <h2
          dir="rtl"
          className="text-lg font-extrabold leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            color: isWhite ? "#0f172a" : "#ffffff",
          }}
        >
          {ar}
        </h2>
        <p
          dir="ltr"
          className="mt-0.5 text-[11.5px] font-semibold tracking-wide"
          style={{
            fontFamily: "var(--font-mono)",
            color: isWhite ? "#64748b" : "rgba(255, 255, 255, 0.45)",
          }}
        >
          {en}
        </p>
      </div>
    </div>
  );
}

/** Bilingual Arabic (RTL) + English (LTR) paragraph pair */
function BiPara({
  en,
  ar,
  theme,
}: {
  en: string;
  ar: string;
  theme: "white" | "dark";
}) {
  const isWhite = theme === "white";
  return (
    <div className="grid grid-cols-2 gap-5 mb-3">
      <p
        dir="ltr"
        className="text-[12px] leading-relaxed"
        style={{ color: isWhite ? "#475569" : "rgba(255, 255, 255, 0.65)" }}
      >
        {en}
      </p>
      <p
        dir="rtl"
        className="text-[12.5px] leading-relaxed"
        style={{ color: isWhite ? "#1e293b" : "rgba(255, 255, 255, 0.85)" }}
      >
        {ar}
      </p>
    </div>
  );
}

function Divider({ theme }: { theme: "white" | "dark" }) {
  const isWhite = theme === "white";
  return (
    <div
      className="my-5 h-px w-full"
      style={{
        background: isWhite
          ? "linear-gradient(90deg, transparent, rgba(5, 150, 105, 0.3), transparent)"
          : "linear-gradient(90deg, transparent, rgba(0, 226, 138, 0.3), transparent)",
      }}
    />
  );
}

function Page({
  children,
  theme,
  pageNumber,
}: {
  children: React.ReactNode;
  theme: "white" | "dark";
  pageNumber: number;
}) {
  const isWhite = theme === "white";
  return (
    <section
      id={`proposal-page-${pageNumber}`}
      className={`proposal-page relative flex flex-col justify-between transition-colors duration-200 ${
        isWhite
          ? "bg-white text-slate-900 border border-slate-200/80 shadow-2xl"
          : "bg-[#05070a] text-[#eef2f6] border border-white/5 shadow-2xl"
      }`}
      style={{
        width: "210mm",
        minHeight: "297mm",
        boxSizing: "border-box",
        padding: "16mm 18mm 12mm 18mm",
        margin: "0 auto 32px auto",
      }}
    >
      {/* Background watermark effect for executive look */}
      {isWhite && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(#0f172a 1px, transparent 1px), radial-gradient(#0f172a 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      )}

      <div className="relative z-10 flex-1 flex flex-col justify-between">
        {children}
      </div>

      <PageFooter n={pageNumber} theme={theme} />
    </section>
  );
}

function PageFooter({ n, theme }: { n: number; theme: "white" | "dark" }) {
  const isWhite = theme === "white";
  return (
    <div
      className="relative z-10 mt-6 flex items-center justify-between border-t pt-2.5 text-[9.5px]"
      style={{
        borderColor: isWhite ? "rgba(226, 232, 240, 0.9)" : "rgba(255, 255, 255, 0.1)",
        color: isWhite ? "#64748b" : "rgba(255, 255, 255, 0.35)",
        fontFamily: "var(--font-mono)",
      }}
    >
      <div className="flex items-center gap-2" dir="ltr">
        <span className="font-semibold text-emerald-600">WhatsUnity</span>
        <span>×</span>
        <span className="font-semibold">Modon Security</span>
        <span>·</span>
        <span className="tracking-wide">Confidential Enterprise Proposal</span>
      </div>
      <div className="flex items-center gap-3" dir="ltr">
        <span className="rounded px-1.5 py-0.5 text-[8.5px] font-bold" style={{ background: isWhite ? "#f1f5f9" : "rgba(255,255,255,0.05)" }}>
          JANNAH 2
        </span>
        <span className="font-bold tracking-wider">
          PAGE {String(n).padStart(2, "0")} / 04
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────── Full 4-Page Document ───────────────────────── */

export default function Proposal({ theme = "white" }: ProposalProps) {
  const isWhite = theme === "white";
  const G = isWhite ? G_LIGHT : G_DARK;
  const GOLD = isWhite ? GOLD_LIGHT : GOLD_DARK;

  return (
    <div
      className={`proposal-scroll py-8 px-4 flex flex-col items-center print:p-0 print:m-0 print:bg-transparent ${
        isWhite ? "bg-slate-100" : "bg-[#030507]"
      }`}
    >
      {/* ══════════════════ PAGE 1: COVER SHEET ══════════════════ */}
      <Page theme={theme} pageNumber={1}>
        <div className="flex flex-col justify-between h-full min-h-[250mm]">
          {/* Top Bar / Reference Header */}
          <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: isWhite ? "#e2e8f0" : "rgba(255,255,255,0.1)" }}>
            <BrandLogo size={42} theme={theme} withText showSubtitle />
            <div className="text-right" dir="ltr">
              <span
                className="inline-block rounded-md px-2.5 py-1 text-[10px] font-bold tracking-wider"
                style={{
                  background: isWhite ? "#fef2f2" : "rgba(255, 77, 94, 0.15)",
                  color: isWhite ? "#dc2626" : "#ff8a94",
                  border: isWhite ? "1px solid #fecaca" : "1px solid rgba(255, 77, 94, 0.3)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                CONFIDENTIAL · سري للغاية
              </span>
              <p
                className="mt-1 text-[10px] font-mono tracking-wider"
                style={{ color: isWhite ? "#94a3b8" : "rgba(255,255,255,0.4)" }}
              >
                DOC: WU-MDN-JAN2-2026
              </p>
            </div>
          </div>

          {/* Central Title & Badges */}
          <div className="my-auto py-8">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ background: G }}
              />
              <span
                dir="ltr"
                className="text-[12px] font-bold tracking-[0.25em]"
                style={{ color: G, fontFamily: "var(--font-mono)" }}
              >
                ENTERPRISE FINANCIAL & TECHNICAL PROPOSAL
              </span>
            </div>

            <h1
              dir="rtl"
              className="mt-4 text-4xl font-black leading-[1.2] tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: isWhite ? "#0f172a" : "#ffffff",
              }}
            >
              عرض مالي وتقني شامل
              <br />
              <span style={{ color: G }}>لإدارة وتشغيل المجتمعات السكنية</span>
            </h1>

            <h2
              dir="ltr"
              className="mt-2 text-xl font-bold leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: isWhite ? "#475569" : "rgba(255, 255, 255, 0.7)",
              }}
            >
              Enterprise Operating System & Smart Community Solutions
            </h2>

            {/* Launch Partner Highlights */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span
                className="flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold"
                style={{
                  borderColor: isWhite ? "rgba(5, 150, 105, 0.3)" : "rgba(0, 226, 138, 0.3)",
                  background: isWhite ? "#ecfdf5" : "rgba(0, 226, 138, 0.08)",
                  color: isWhite ? "#047857" : G_DARK,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                WhatsUnity × Modon Security
              </span>
              <span
                className="rounded-xl border px-4 py-2.5 text-sm font-bold"
                style={{
                  borderColor: isWhite ? "#cbd5e1" : "rgba(255, 255, 255, 0.15)",
                  background: isWhite ? "#f8fafc" : "rgba(255, 255, 255, 0.03)",
                  color: isWhite ? "#1e293b" : "#ffffff",
                }}
              >
                مشروع جنّة 2 · Jannah 2 Launch Partner
              </span>
            </div>

            {/* Executive Highlights Grid */}
            <div className="mt-8 grid grid-cols-3 gap-3.5">
              {[
                {
                  titleAr: "تطبيق بهوية مُدن",
                  titleEn: "100% White-Label",
                  descAr: "تطبيق كامل على App Store و Google Play يحمل شعار وهوية مُدن.",
                },
                {
                  titleAr: "نظام تشغيل بدون إنترنت",
                  titleEn: "Offline-First Engine",
                  descAr: "مسح QR والتحكم في البوابات يعمل لحظيًا حتى في حال انقطاع الشبكة.",
                },
                {
                  titleAr: "عائد استثماري مستدام",
                  titleEn: "Monetization Ready",
                  descAr: "جاهزية المرحلة 3 لتحويل المنصة لمركز إيرادات عبر سوق العقارات الموثق.",
                },
              ].map((card) => (
                <div
                  key={card.titleEn}
                  className="rounded-xl border p-3.5"
                  style={{
                    borderColor: isWhite ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)",
                    background: isWhite ? "#f8fafc" : "rgba(255, 255, 255, 0.02)",
                  }}
                >
                  <p
                    dir="rtl"
                    className="text-xs font-bold"
                    style={{ color: isWhite ? "#0f172a" : "#ffffff", fontFamily: "var(--font-display)" }}
                  >
                    {card.titleAr}
                  </p>
                  <p
                    dir="ltr"
                    className="text-[9.5px] font-mono font-semibold"
                    style={{ color: G }}
                  >
                    {card.titleEn}
                  </p>
                  <p
                    dir="rtl"
                    className="mt-1.5 text-[11px] leading-relaxed"
                    style={{ color: isWhite ? "#64748b" : "rgba(255, 255, 255, 0.6)" }}
                  >
                    {card.descAr}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Confidentiality & Client Info */}
          <div
            className="flex items-end justify-between border-t pt-4"
            style={{ borderColor: isWhite ? "#e2e8f0" : "rgba(255,255,255,0.1)" }}
          >
            <div dir="rtl" className="text-[12px] leading-relaxed" style={{ color: isWhite ? "#475569" : "rgba(255,255,255,0.6)" }}>
              مُعدّ خصيصًا لـ:{" "}
              <span className="font-extrabold" style={{ color: isWhite ? "#0f172a" : "#ffffff" }}>
                شركة مُدن للأمن والحراسة
              </span>
              <br />
              شريك الإطلاق والتشغيل — مشروع جنّة 2 (التجمع الخامس)
            </div>
            <div className="text-right text-[10px]" dir="ltr" style={{ fontFamily: "var(--font-mono)", color: isWhite ? "#94a3b8" : "rgba(255,255,255,0.4)" }}>
              <span className="font-bold text-emerald-600">VALIDITY: 30 DAYS</span>
              <br />
              VERSION: 2.4 FINAL · 2026
            </div>
          </div>
        </div>
      </Page>

      {/* ══════════════════ PAGE 2: WHITE-LABEL & SUBSCRIPTION ══════════════════ */}
      <Page theme={theme} pageNumber={2}>
        <div className="flex flex-col justify-between h-full min-h-[250mm]">
          <div>
            {/* Section 1 */}
            <div className="avoid-break">
              <SectionHead
                n="1"
                ar="العلامة البيضاء والنشر على المتاجر"
                en="White-Label Branding & App Store Deployment"
                theme={theme}
              />
              <BiPara
                en="To fully align the application with Modon's brand and corporate identity, WhatsUnity will build, compile, and deploy customized native mobile applications for iOS and Android."
                ar="لمواءمة التطبيق بالكامل مع علامة مُدن وهويّتها المؤسسية، تتولّى WhatsUnity بناء وتجميع ونشر تطبيقات أصلية مخصّصة بالكامل على متجري آبل وجوجل."
                theme={theme}
              />

              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  {
                    ar: "هوية مخصّصة",
                    en: "Custom Identity",
                    d: "شعارات مُدن للأمن، الألوان المؤسسية، وواجهات مستخدم مصمّمة خصيصًا.",
                  },
                  {
                    ar: "النشر على المتاجر",
                    en: "Store Publishing",
                    d: "نشر وصيانة التطبيقات على Google Play و Apple App Store تحت حسابات مُدن.",
                  },
                  {
                    ar: "الخلفية وحقوق الملكية",
                    en: "Backend & IP Rights",
                    d: "WhatsUnity تدير 100% من السيرفرات وقواعد البيانات والبنية السحابية، وتحتفظ بكامل الملكية الفكرية.",
                  },
                ].map((c) => (
                  <div
                    key={c.en}
                    className="rounded-xl border p-3"
                    style={{
                      borderColor: isWhite ? "#e2e8f0" : "rgba(255,255,255,0.08)",
                      background: isWhite ? "#f8fafc" : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <p
                      dir="rtl"
                      className="text-xs font-bold"
                      style={{ color: isWhite ? "#0f172a" : "#ffffff", fontFamily: "var(--font-display)" }}
                    >
                      {c.ar}
                    </p>
                    <p
                      dir="ltr"
                      className="text-[9.5px] font-mono font-semibold"
                      style={{ color: isWhite ? "#64748b" : "rgba(255,255,255,0.4)" }}
                    >
                      {c.en}
                    </p>
                    <p
                      dir="rtl"
                      className="mt-1.5 text-[11px] leading-relaxed"
                      style={{ color: isWhite ? "#64748b" : "rgba(255,255,255,0.6)" }}
                    >
                      {c.d}
                    </p>
                  </div>
                ))}
              </div>

              {/* Setup fee card */}
              <div
                className="mt-3.5 flex items-center justify-between rounded-xl border p-4"
                style={{
                  borderColor: isWhite ? "rgba(5, 150, 105, 0.3)" : "rgba(0, 226, 138, 0.35)",
                  background: isWhite ? "#ecfdf5" : "rgba(0, 226, 138, 0.06)",
                }}
              >
                <div dir="rtl">
                  <p
                    className="text-xs font-bold"
                    style={{ color: isWhite ? "#047857" : G_DARK, fontFamily: "var(--font-display)" }}
                  >
                    رسوم الإعداد والنشر المخصصة · تدفع لمرة واحدة
                  </p>
                  <p
                    dir="ltr"
                    className="mt-0.5 text-[10.5px] font-mono font-medium"
                    style={{ color: isWhite ? "#065f46" : "rgba(255,255,255,0.5)" }}
                  >
                    Special One-Time Setup Fee · 50% on signing · 50% on store launch approval
                  </p>
                </div>
                <div className="text-right" dir="ltr">
                  <span
                    className="text-xs line-through block"
                    style={{ color: isWhite ? "#94a3b8" : "rgba(255,255,255,0.35)", fontFamily: "var(--font-mono)" }}
                  >
                    150,000 EGP
                  </span>
                  <p
                    className="text-2xl font-black"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: isWhite ? "#047857" : "#ffffff",
                    }}
                  >
                    120,000 <span className="text-xs font-semibold">EGP</span>
                  </p>
                </div>
              </div>
            </div>

            <Divider theme={theme} />

            {/* Section 2 */}
            <div className="avoid-break">
              <SectionHead
                n="2"
                ar="نموذج الاشتراك المؤسسي للوحدات"
                en="Enterprise Unit Subscription Model"
                theme={theme}
              />
              <div
                className="overflow-hidden rounded-xl border"
                style={{ borderColor: isWhite ? "#e2e8f0" : "rgba(255,255,255,0.1)" }}
              >
                <table className="w-full text-center text-xs">
                  <thead>
                    <tr style={{ background: isWhite ? "#f1f5f9" : "rgba(255,255,255,0.04)" }}>
                      <th
                        dir="rtl"
                        className="px-4 py-2.5 text-right font-bold"
                        style={{ color: isWhite ? "#334155" : "rgba(255,255,255,0.7)" }}
                      >
                        تفاصيل الباقة · Plan Details
                      </th>
                      <th
                        className="px-4 py-2.5 font-bold"
                        style={{ color: isWhite ? "#475569" : "rgba(255,255,255,0.7)" }}
                      >
                        التعريفة القياسية
                        <br />
                        <span className="text-[9px] font-mono font-normal opacity-70">Standard Rate</span>
                      </th>
                      <th
                        className="px-4 py-2.5 font-bold"
                        style={{
                          background: isWhite ? "#ecfdf5" : "rgba(0, 226, 138, 0.12)",
                          color: isWhite ? "#047857" : G_DARK,
                        }}
                      >
                        شريك الإطلاق (جنّة 2) · خصم 30%
                        <br />
                        <span className="text-[9px] font-mono font-normal opacity-90">Launch Partner Special</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px]">
                    <tr className="border-t" style={{ borderColor: isWhite ? "#e2e8f0" : "rgba(255,255,255,0.08)" }}>
                      <td
                        dir="rtl"
                        className="px-4 py-2.5 text-right font-medium"
                        style={{ color: isWhite ? "#1e293b" : "rgba(255,255,255,0.85)" }}
                      >
                        الاشتراك الشهري / وحدة
                        <span className="text-[10px] block opacity-60" style={{ fontFamily: "var(--font-mono)" }}>
                          Monthly / Active Unit
                        </span>
                      </td>
                      <td className="px-4 py-2.5 font-semibold" style={{ color: isWhite ? "#475569" : "rgba(255,255,255,0.8)" }}>
                        50 <span className="text-[9px] opacity-60">EGP</span>
                      </td>
                      <td
                        className="px-4 py-2.5 font-extrabold"
                        style={{
                          background: isWhite ? "#f0fdf4" : "rgba(0, 226, 138, 0.06)",
                          color: isWhite ? "#047857" : G_DARK,
                        }}
                      >
                        35 <span className="text-[9px] font-normal opacity-80">EGP</span>
                      </td>
                    </tr>
                    <tr className="border-t" style={{ borderColor: isWhite ? "#e2e8f0" : "rgba(255,255,255,0.08)" }}>
                      <td
                        dir="rtl"
                        className="px-4 py-2.5 text-right font-medium"
                        style={{ color: isWhite ? "#1e293b" : "rgba(255,255,255,0.85)" }}
                      >
                        الاشتراك السنوي / وحدة (شهرين مجانًا)
                        <span className="text-[10px] block opacity-60" style={{ fontFamily: "var(--font-mono)" }}>
                          Annual Prepaid / Unit
                        </span>
                      </td>
                      <td className="px-4 py-2.5 font-semibold" style={{ color: isWhite ? "#475569" : "rgba(255,255,255,0.8)" }}>
                        500 <span className="text-[9px] opacity-60">EGP</span>
                      </td>
                      <td
                        className="px-4 py-2.5 font-extrabold"
                        style={{
                          background: isWhite ? "#f0fdf4" : "rgba(0, 226, 138, 0.06)",
                          color: isWhite ? "#047857" : G_DARK,
                        }}
                      >
                        350 <span className="text-[9px] font-normal opacity-80">EGP</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Crucial advantage box */}
              <div
                className="mt-3.5 rounded-xl border p-3.5"
                style={{
                  borderColor: isWhite ? "rgba(217, 119, 6, 0.35)" : "rgba(255, 208, 122, 0.35)",
                  background: isWhite ? "#fffbeb" : "rgba(255, 208, 122, 0.06)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">⭐</span>
                  <p
                    dir="rtl"
                    className="text-xs font-extrabold"
                    style={{
                      color: isWhite ? "#b45309" : GOLD_DARK,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    ميزة الترخيص الاستثنائية: «لكل وحدة سكنية» وليس «لكل حساب»
                  </p>
                </div>
                <p
                  dir="ltr"
                  className="mt-0.5 text-[10px] font-mono font-medium"
                  style={{ color: isWhite ? "#92400e" : "rgba(255,255,255,0.45)" }}
                >
                  Crucial License Advantage: Per Unit Model (Includes Family Members for Free)
                </p>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <p
                    dir="ltr"
                    className="text-[11px] leading-relaxed"
                    style={{ color: isWhite ? "#78350f" : "rgba(255, 255, 255, 0.65)" }}
                  >
                    Unlike competitors charging per individual user, one subscription covers the whole unit. The owner can invite up to 4 family members at no extra cost — reducing effective monthly cost to only <span className="font-bold">8.75 EGP / person</span>.
                  </p>
                  <p
                    dir="rtl"
                    className="text-[11.5px] leading-relaxed"
                    style={{ color: isWhite ? "#78350f" : "rgba(255, 255, 255, 0.85)" }}
                  >
                    خلافًا للأنظمة التي تُحاسب بالرأس، يغطي الاشتراك الواحد الوحدة السكنية كاملة. يُتاح للمالك إضافة حتى 4 أفراد من الأسرة مجانًا — مما يخفض التكلفة الفعلية إلى <span className="font-extrabold">8.75 ج.م للفرد شهريًا</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>

      {/* ══════════════════ PAGE 3: BULK SETS & FLEXIBILITY ══════════════════ */}
      <Page theme={theme} pageNumber={3}>
        <div className="flex flex-col justify-between h-full min-h-[250mm]">
          <div>
            <div className="avoid-break">
              <SectionHead
                n="3"
                ar="الدفع حسب الاستخدام ومجموعات الخصم بالجملة"
                en="Pay-As-You-Go & Flexible Volume Bulk Sets"
                theme={theme}
              />
              <BiPara
                en="If Modon prefers not to commit the entire compound upfront, deploy using our Flexible Bulk Sets Model. Purchase license blocks as the occupancy scales, unlocking cumulative compounding discounts."
                ar="إن فضّلت مُدن عدم شراء ترخيص كامل للمشروع مقدّمًا، يمكن الاعتماد على نموذج المجموعات المرنة — شراء كتل تراخيص تتناسب مع نسبة الإشغال وتدفق السكان، مع خصومات تراكمية متزايدة."
                theme={theme}
              />

              {/* Bulk Sets Table */}
              <div
                className="mt-3 overflow-hidden rounded-xl border"
                style={{ borderColor: isWhite ? "#e2e8f0" : "rgba(255,255,255,0.1)" }}
              >
                <table className="w-full text-center text-xs">
                  <thead>
                    <tr style={{ background: isWhite ? "#f1f5f9" : "rgba(255,255,255,0.04)" }}>
                      {[
                        "المجموعة · Set Tier",
                        "عدد الوحدات · Units",
                        "السعر / وحدة شهريًا",
                        "إجمالي الاشتراك الشهري",
                        "نسبة التوفير",
                      ].map((h, i) => (
                        <th
                          key={h}
                          className={`px-3 py-2.5 text-[11px] font-bold ${i === 0 ? "text-right" : ""}`}
                          style={{ color: isWhite ? "#334155" : "rgba(255,255,255,0.65)" }}
                          dir={i === 0 ? "rtl" : "ltr"}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { t: "المبتدئة · Starter Tier", u: "100 وحدة", r: "45 EGP", tot: "4,500 EGP", s: "10%", best: false },
                      { t: "النمو · Growth Tier", u: "250 وحدة", r: "42 EGP", tot: "10,500 EGP", s: "16%", best: false },
                      { t: "المتوسطة · Mid-Size Tier", u: "500 وحدة", r: "40 EGP", tot: "20,000 EGP", s: "20%", best: false },
                      { t: "المؤسسية · جنّة 2 (Enterprise)", u: "+1,000 وحدة", r: "35 EGP", tot: "35,000 EGP", s: "30%", best: true },
                    ].map((row) => (
                      <tr
                        key={row.t}
                        className="border-t transition-colors"
                        style={{
                          borderColor: isWhite ? "#e2e8f0" : "rgba(255,255,255,0.08)",
                          background: row.best
                            ? isWhite
                              ? "#ecfdf5"
                              : "rgba(0, 226, 138, 0.08)"
                            : "transparent",
                        }}
                      >
                        <td
                          className="px-3 py-2.5 text-right font-bold"
                          dir="rtl"
                          style={{
                            color: row.best ? (isWhite ? "#047857" : G_DARK) : isWhite ? "#0f172a" : "#ffffff",
                          }}
                        >
                          {row.t}
                          {row.best && (
                            <span
                              className="mr-1.5 rounded px-1.5 py-0.5 text-[8.5px] font-extrabold"
                              style={{
                                background: isWhite ? "#047857" : G_DARK,
                                color: isWhite ? "#ffffff" : "#04140c",
                              }}
                            >
                              الأفضل قيمة
                            </span>
                          )}
                        </td>
                        <td className="px-3 py-2.5" dir="ltr" style={{ color: isWhite ? "#475569" : "rgba(255,255,255,0.7)" }}>
                          {row.u}
                        </td>
                        <td className="px-3 py-2.5 font-medium" dir="ltr" style={{ color: isWhite ? "#475569" : "rgba(255,255,255,0.7)" }}>
                          {row.r}
                        </td>
                        <td
                          className="px-3 py-2.5 font-bold"
                          dir="ltr"
                          style={{
                            color: row.best ? (isWhite ? "#047857" : G_DARK) : isWhite ? "#0f172a" : "#ffffff",
                          }}
                        >
                          {row.tot}
                        </td>
                        <td
                          className="px-3 py-2.5 font-extrabold"
                          style={{
                            color: row.best ? (isWhite ? "#047857" : G_DARK) : isWhite ? "#b45309" : GOLD_DARK,
                          }}
                        >
                          {row.s}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Administrative Benefits Grid */}
              <div className="mt-4 grid grid-cols-2 gap-3.5">
                <div
                  className="rounded-xl border p-3.5"
                  style={{
                    borderColor: isWhite ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)",
                    background: isWhite ? "#f8fafc" : "rgba(255, 255, 255, 0.02)",
                  }}
                >
                  <p
                    dir="rtl"
                    className="text-xs font-bold"
                    style={{ color: isWhite ? "#0f172a" : "#ffffff", fontFamily: "var(--font-display)" }}
                  >
                    💳 الفوترة والتحصيل المباشر من السكان
                  </p>
                  <p
                    dir="rtl"
                    className="mt-1 text-[11.5px] leading-relaxed"
                    style={{ color: isWhite ? "#475569" : "rgba(255, 255, 255, 0.65)" }}
                  >
                    عند اختيار تفعيل السكان لاشتراكاتهم فرديًا داخل التطبيق عبر بوابات الدفع (Google Pay / البطاقات البنكية / فوري)، تتم عمليات الفوترة وتجديد التراخيص تلقائيًا — <span className="font-bold">بدون أي عبء مالي أو إداري على فريق مُدن</span>.
                  </p>
                </div>

                <div
                  className="rounded-xl border p-3.5"
                  style={{
                    borderColor: isWhite ? "#e2e8f0" : "rgba(255, 255, 255, 0.08)",
                    background: isWhite ? "#f8fafc" : "rgba(255, 255, 255, 0.02)",
                  }}
                >
                  <p
                    dir="rtl"
                    className="text-xs font-bold"
                    style={{ color: isWhite ? "#0f172a" : "#ffffff", fontFamily: "var(--font-display)" }}
                  >
                    ⚡ الصيانة والتحديثات المستمرة (SLA)
                  </p>
                  <p
                    dir="rtl"
                    className="mt-1 text-[11.5px] leading-relaxed"
                    style={{ color: isWhite ? "#475569" : "rgba(255, 255, 255, 0.65)" }}
                  >
                    يشمل الاشتراك كافة التحديثات الأمنية، النسخ الاحتياطي السحابي اليومي، وتوافر الخوادم بنسبة 99.9%، مع دعم فني مستمر لمعالجة أي طارئ على بوابات الكمبوند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>

      {/* ══════════════════ PAGE 4: MONETIZATION, PILOT & SIGNATURES ══════════════════ */}
      <Page theme={theme} pageNumber={4}>
        <div className="flex flex-col justify-between h-full min-h-[250mm]">
          <div>
            {/* Section 4 */}
            <div className="avoid-break">
              <SectionHead
                n="4"
                ar="تحقيق الدخل في المرحلة الثالثة والعائد طويل الأمد"
                en="Phase 3 Monetization & Long-Term Commercial ROI"
                theme={theme}
              />
              <BiPara
                en="By securing the customized Modon-branded application, Modon is pre-configured to unlock Phase 3: The Verified Gated Real Estate Marketplace — converting a tech cost into a recurring profit engine."
                ar="بتأمين التطبيق المخصّص بعلامة مُدن، تصبح مُدن مهيّأة لإطلاق المرحلة الثالثة: سوق العقارات الموثّق داخل الكمبوند — لتحويل المنظومة من تكلفة تشغيلية إلى مركز إيرادات مباشر."
                theme={theme}
              />

              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  {
                    ar: "الفكرة والمنظومة",
                    en: "The Concept",
                    d: "يعرض السكان والمالكون الوحدات للإيجار أو البيع عبر قناة موثقة ومطابقة لسجلات الكمبوند الفعلية.",
                  },
                  {
                    ar: "مصادر الإيراد",
                    en: "Revenue Streams",
                    d: "رسوم إدراج العقارات، عمولات وساطة على العقود المنجزة، ومساحات إعلانية حصرية لمقدمي الخدمات المعتمدين.",
                  },
                  {
                    ar: "العائد الاستثماري (ROI)",
                    en: "Net Profit ROI",
                    d: "تغطي إيرادات السوق تكلفة المنصة بالكامل وتدر فائضًا ربحيًا مستمرًا يعزز القيمة السوقية لمشروع جنّة 2.",
                  },
                ].map((c) => (
                  <div
                    key={c.en}
                    className="rounded-xl border p-3"
                    style={{
                      borderColor: isWhite ? "rgba(5, 150, 105, 0.25)" : "rgba(0, 226, 138, 0.2)",
                      background: isWhite ? "#ecfdf5" : "rgba(0, 226, 138, 0.04)",
                    }}
                  >
                    <p
                      dir="rtl"
                      className="text-xs font-bold"
                      style={{ color: isWhite ? "#047857" : G_DARK, fontFamily: "var(--font-display)" }}
                    >
                      {c.ar}
                    </p>
                    <p
                      dir="ltr"
                      className="text-[9.5px] font-mono font-semibold"
                      style={{ color: isWhite ? "#065f46" : "rgba(255,255,255,0.4)" }}
                    >
                      {c.en}
                    </p>
                    <p
                      dir="rtl"
                      className="mt-1.5 text-[11px] leading-relaxed"
                      style={{ color: isWhite ? "#475569" : "rgba(255,255,255,0.65)" }}
                    >
                      {c.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Divider theme={theme} />

            {/* Section 5: Next Steps */}
            <div className="avoid-break">
              <SectionHead
                n="5"
                ar="الخطوات التنفيذية للإطلاق"
                en="Next Steps to Commercial Launch"
                theme={theme}
              />
              <div className="space-y-2.5">
                {[
                  {
                    ar: "اعتماد العرض وتوقيع العقد",
                    en: "Proposal Approval & Final Contracting",
                    d: "تأكيد خطة النشر والاشتراك المفضلة وتوقيع اتفاقية مستوى الخدمة وحماية البيانات.",
                  },
                  {
                    ar: "تجربة البوابة المجانية · 14 يومًا (Pilot)",
                    en: "14-Day Free Gate Pilot (Gate 1)",
                    d: "تشغيل منظومة مسح QR والبحث اللحظي على بوابة 1 لاختبار السرعة وتدريب أفراد الأمن قبل الإطلاق الرسمي.",
                  },
                ].map((s, idx) => (
                  <div
                    key={s.en}
                    className="flex items-start gap-3 rounded-xl border p-3"
                    style={{
                      borderColor: isWhite ? "#e2e8f0" : "rgba(255,255,255,0.08)",
                      background: isWhite ? "#f8fafc" : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                      style={{
                        background: isWhite ? "#ecfdf5" : "rgba(0, 226, 138, 0.12)",
                        color: isWhite ? "#047857" : G_DARK,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {idx + 1}
                    </span>
                    <div dir="rtl" className="flex-1">
                      <p
                        className="text-xs font-bold"
                        style={{ color: isWhite ? "#0f172a" : "#ffffff", fontFamily: "var(--font-display)" }}
                      >
                        {s.ar}
                      </p>
                      <p
                        dir="ltr"
                        className="text-[9.5px] font-mono font-medium"
                        style={{ color: isWhite ? "#64748b" : "rgba(255,255,255,0.4)" }}
                      >
                        {s.en}
                      </p>
                      <p
                        className="mt-1 text-[11px] leading-relaxed"
                        style={{ color: isWhite ? "#475569" : "rgba(255,255,255,0.65)" }}
                      >
                        {s.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bilateral Signatures & Stamp Box */}
            <div
              className="mt-6 border-t pt-4 avoid-break"
              style={{ borderColor: isWhite ? "#e2e8f0" : "rgba(255,255,255,0.1)" }}
            >
              <p
                dir="rtl"
                className="mb-3 text-xs font-bold"
                style={{ color: isWhite ? "#0f172a" : "#ffffff", fontFamily: "var(--font-display)" }}
              >
                الموافقة والتوقيع الرسمي
              </p>

              <div className="grid grid-cols-2 gap-6">
                {/* WhatsUnity Side */}
                <div
                  className="rounded-xl border p-3.5 flex flex-col justify-between min-h-[90px]"
                  style={{
                    borderColor: isWhite ? "#e2e8f0" : "rgba(255,255,255,0.1)",
                    background: isWhite ? "#ffffff" : "rgba(255,255,255,0.02)",
                  }}
                >
                  <div>
                    <p dir="rtl" className="text-xs font-bold" style={{ color: isWhite ? "#0f172a" : "#ffffff" }}>
                      عن شركة WhatsUnity:
                    </p>
                    <p dir="ltr" className="text-[9.5px] font-mono" style={{ color: isWhite ? "#64748b" : "rgba(255,255,255,0.4)" }}>
                      For WhatsUnity Technology Solutions
                    </p>
                  </div>
                  <div className="mt-6 pt-2 border-t flex justify-between items-end" style={{ borderColor: isWhite ? "#cbd5e1" : "rgba(255,255,255,0.15)" }}>
                    <span className="text-[10px]" style={{ color: isWhite ? "#64748b" : "rgba(255,255,255,0.4)" }}>
                      التوقيع والختم / Signature & Stamp
                    </span>
                    <span className="text-[10px] font-mono" style={{ color: isWhite ? "#94a3b8" : "rgba(255,255,255,0.3)" }}>
                      Date: ___/___/2026
                    </span>
                  </div>
                </div>

                {/* Modon Security Side */}
                <div
                  className="rounded-xl border p-3.5 flex flex-col justify-between min-h-[90px]"
                  style={{
                    borderColor: isWhite ? "#e2e8f0" : "rgba(255,255,255,0.1)",
                    background: isWhite ? "#ffffff" : "rgba(255,255,255,0.02)",
                  }}
                >
                  <div>
                    <p dir="rtl" className="text-xs font-bold" style={{ color: isWhite ? "#0f172a" : "#ffffff" }}>
                      عن شركة مُدن للأمن (المفوّض بالتوقيع):
                    </p>
                    <p dir="ltr" className="text-[9.5px] font-mono" style={{ color: isWhite ? "#64748b" : "rgba(255,255,255,0.4)" }}>
                      For Modon Security Management
                    </p>
                  </div>
                  <div className="mt-6 pt-2 border-t flex justify-between items-end" style={{ borderColor: isWhite ? "#cbd5e1" : "rgba(255,255,255,0.15)" }}>
                    <span className="text-[10px]" style={{ color: isWhite ? "#64748b" : "rgba(255,255,255,0.4)" }}>
                      التوقيع والختم / Signature & Stamp
                    </span>
                    <span className="text-[10px] font-mono" style={{ color: isWhite ? "#94a3b8" : "rgba(255,255,255,0.3)" }}>
                      Date: ___/___/2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}
