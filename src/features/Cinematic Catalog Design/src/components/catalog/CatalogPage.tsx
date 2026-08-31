import type { CSSProperties } from "react"
import { BrandLockup } from "./Brand"
import { FeaturePanel } from "./FeaturePanel"
import { PhoneMockup } from "./PhoneMockup"
import { DetailCard } from "./DetailCard"
import { roles, compound, t, type CatalogPageData, type Locale } from "../../data/catalog"

export function CatalogPage({
  page,
  total,
  locale = "ar",
}: {
  page: CatalogPageData
  total: string
  locale?: Locale
}) {
  const hasDetails = Boolean(page.details?.length)
  const isHero = page.layout === "hero" && !hasDetails
  const r = roles[page.roleKey]

  const activeShots = locale === "en" && page.shotsEn?.length ? page.shotsEn : page.shots

  // per-role accent, cascaded to descendants via CSS custom properties
  const accentVars = {
    "--pa": r.accent,
    "--pat": r.accentTint,
    "--pac": r.accentChip,
  } as CSSProperties

  return (
    <article
      className="catalog-page relative mx-auto flex flex-col overflow-hidden bg-paper"
      style={{
        ...accentVars,
        width: "min(96vw, 1123px)",
        aspectRatio: "1123 / 794",
        boxShadow: "0 40px 80px -30px rgba(15,23,42,0.28)",
      }}
    >
      {/* subtle stage tint behind mockups (end side) */}
      <div
        className="pointer-events-none absolute inset-y-0 end-0 w-[46%]"
        style={{ background: "linear-gradient(180deg, color-mix(in srgb, var(--pat) 70%, white) 0%, var(--pat) 100%)" }}
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

      {/* header */}
      <header className="relative flex items-center justify-between px-14 pt-9">
        <BrandLockup />
        <div className="flex items-center gap-3">
          <span
            className="rounded-full px-3.5 py-1.5 text-[0.72rem] font-semibold ring-1"
            style={{ background: "var(--pat)", color: "var(--pa)", "--tw-ring-color": "var(--pac)" } as CSSProperties}
          >
            {t(r.label, locale)}
          </span>
          <span className="font-latin text-[0.72rem] font-semibold tracking-wide text-muted">{compound}</span>
        </div>
      </header>

      {/* body */}
      <div
        className="relative grid flex-1 items-center gap-8 px-14 pb-6"
        style={{ gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1fr)" }}
      >
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

        {/* mockups (end side) — with optional detail strip beneath */}
        <div className="flex h-full flex-col items-center justify-center gap-5">
          <div className={`flex items-center justify-center ${activeShots.length > 1 ? "gap-8" : ""}`}>
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
            <div className="flex w-full items-stretch gap-4">
              {page.details!.map((d, idx) => (
                <DetailCard key={idx} detail={d} locale={locale} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* footer */}
      <footer className="relative flex items-center justify-between border-t border-hairline px-14 py-4">
        <span className="text-[0.72rem] text-muted">
          {locale === "ar"
            ? `دليل الميزات · ${r.labelLatin} Catalog`
            : `Feature Catalog · ${r.labelLatin} Edition`}
        </span>
        <span dir="ltr" className="inline-flex items-center gap-1 font-latin text-[0.72rem] font-semibold tracking-widest" style={{ color: "var(--pa)" }}>
          {page.index} <span className="text-muted">/ {total}</span>
        </span>
      </footer>
    </article>
  )
}
