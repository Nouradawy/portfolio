import type { CSSProperties } from "react";
import { BrandLockup } from "./Brand";
import { FeaturePanel } from "./FeaturePanel";
import { PhoneMockup } from "./PhoneMockup";
import { DetailCard } from "./DetailCard";
import { roles, compound, t, type CatalogPageData, type Locale } from "../data/catalog";

export function CatalogPage({
  page,
  total,
  locale = "ar",
}: {
  page: CatalogPageData;
  total: string;
  locale?: Locale;
}) {
  const hasDetails = Boolean(page.details?.length);
  const isHero = page.layout === "hero" && !hasDetails;
  const r = roles[page.roleKey] ?? {
    label: { ar: "العام", en: "General" },
    labelLatin: "General",
    accent: "#2563eb",
    accentTint: "#eff4ff",
    accentChip: "#e0e9ff",
  };

  const activeShots = locale === "en" && page.shotsEn?.length ? page.shotsEn : page.shots;

  // per-role accent, cascaded to descendants via CSS custom properties
  const accentVars = {
    "--pa": r.accent,
    "--pat": r.accentTint,
    "--pac": r.accentChip,
  } as CSSProperties;

  return (
    <article
      className={`catalog-page relative mx-auto flex w-full flex-col overflow-hidden rounded-2xl bg-white ${
        locale === "ar" ? "catalog-arabic" : "catalog-latin"
      }`}
      style={{
        ...accentVars,
        maxWidth: "1123px",
        minHeight: "auto",
        boxShadow: "0 25px 60px -20px rgba(15,23,42,0.18), 0 0 0 1px rgba(15,23,42,0.06)",
      }}
    >
      {/* subtle stage tint behind mockups (end side) */}
      <div
        className="pointer-events-none absolute inset-y-0 end-0 w-[46%]"
        style={{
          background: "linear-gradient(180deg, color-mix(in srgb, var(--pat) 70%, white) 0%, var(--pat) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

      {/* header */}
      <header className="relative flex items-center justify-between px-6 py-6 md:px-12 md:pt-8">
        <BrandLockup />
        <div className="flex items-center gap-3">
          <span
            className="rounded-full px-3 py-1 text-[0.72rem] font-semibold ring-1"
            style={
              {
                background: "var(--pat)",
                color: "var(--pa)",
                "--tw-ring-color": "var(--pac)",
              } as CSSProperties
            }
          >
            {t(r.label, locale)}
          </span>
          <span className="catalog-latin text-[0.72rem] font-semibold tracking-wide text-slate-400">
            {compound}
          </span>
        </div>
      </header>

      {/* body */}
      <div className="relative grid flex-1 items-center gap-8 px-6 pb-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:px-12">
        {/* narrative (start side) */}
        <div className="flex h-full items-center">
          <FeaturePanel
            eyebrow={page.eyebrow}
            title={page.title}
            lede={page.lede}
            features={page.features}
            locale={locale}
          />
        </div>

        {/* mockups (end side) */}
        <div className="flex h-full flex-col items-center justify-center gap-5">
          <div
            className={`flex flex-wrap items-center justify-center ${
              activeShots.length > 1 ? "gap-6 md:gap-8" : ""
            }`}
          >
            {activeShots.map((s, idx) => (
              <PhoneMockup
                key={idx}
                src={s.src}
                caption={hasDetails ? undefined : t(s.caption, locale)}
                variant={isHero ? "hero" : "grid"}
              />
            ))}
          </div>

          {hasDetails && (
            <div className="flex w-full flex-wrap items-stretch gap-3 md:gap-4">
              {page.details!.map((d, idx) => (
                <DetailCard key={idx} detail={d} locale={locale} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* footer */}
      <footer className="relative flex items-center justify-between border-t border-slate-100 px-6 py-4 md:px-12">
        <span className="text-[0.72rem] text-slate-500">
          {locale === "ar"
            ? `دليل الميزات · ${r.labelLatin} Catalog`
            : `Feature Catalog · ${r.labelLatin} Edition`}
        </span>
        <span
          dir="ltr"
          className="catalog-latin inline-flex items-center gap-1 text-[0.72rem] font-semibold tracking-widest"
          style={{ color: "var(--pa)" }}
        >
          {page.index} <span className="text-slate-400">/ {total}</span>
        </span>
      </footer>
    </article>
  );
}
