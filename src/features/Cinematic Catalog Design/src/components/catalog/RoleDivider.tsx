import type { CSSProperties } from "react"
import { BrandMark } from "./Brand"
import { roles, compound, t, uiTranslations, type RoleKey, type Locale } from "../../data/catalog"

export function RoleDivider({
  roleKey,
  order,
  count,
  locale = "ar",
}: {
  roleKey: RoleKey
  order: string
  count: number
  locale?: Locale
}) {
  const r = roles[roleKey]
  const accentVars = { "--pa": r.accent, "--pat": r.accentTint, "--pac": r.accentChip } as CSSProperties
  const ui = uiTranslations[locale]

  return (
    <article
      className="catalog-page relative mx-auto flex flex-col overflow-hidden"
      style={{
        ...accentVars,
        width: "min(96vw, 1123px)",
        aspectRatio: "1123 / 794",
        background: "linear-gradient(150deg, #ffffff 0%, color-mix(in srgb, var(--pat) 65%, white) 60%, var(--pat) 100%)",
        boxShadow: "0 40px 80px -30px rgba(15,23,42,0.28)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
      <BrandMark className="pointer-events-none absolute -bottom-20 -end-12 h-[28rem] w-auto opacity-[0.05]" />

      <header className="relative flex items-center justify-between px-16 pt-12">
        <span className="font-latin text-[0.78rem] font-semibold tracking-[0.28em] text-muted">
          Whats<span className="font-extrabold text-ink">Unity</span>
        </span>
        <span className="font-latin text-[0.75rem] font-semibold tracking-[0.2em] text-muted">{compound}</span>
      </header>

      <div className="relative flex flex-1 flex-col justify-center px-16">
        <span
          className="font-latin text-[0.85rem] font-semibold uppercase tracking-[0.32em]"
          style={{ color: "var(--pa)" }}
        >
          {ui.sectionPrefix} {order} · {r.labelLatin}
        </span>

        <h2 className="mt-5 text-[3.6rem] font-bold leading-[1.05] text-ink">{t(r.label, locale)}</h2>

        <p className="mt-5 max-w-[50ch] text-[1.2rem] leading-relaxed text-slate">{t(r.intro, locale)}</p>

        <div className="mt-8 flex items-center gap-4">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.85rem] font-semibold"
            style={{ background: "var(--pa)", color: "#fff" }}
          >
            {ui.screensCount(count)}
          </span>
          <span className="h-px flex-1 max-w-[220px]" style={{ background: "var(--pac)" }} />
        </div>
      </div>

      <footer className="relative flex items-center justify-between border-t px-16 py-6" style={{ borderColor: "var(--pac)" }}>
        <span className="text-[0.8rem] text-slate">
          {locale === "ar" ? `${r.labelLatin} · ${ui.catalogWord}` : `${r.labelLatin} Catalog`}
        </span>
        <span className="font-latin text-[0.8rem] font-semibold tracking-widest" style={{ color: "var(--pa)" }}>
          {order}
        </span>
      </footer>
    </article>
  )
}
