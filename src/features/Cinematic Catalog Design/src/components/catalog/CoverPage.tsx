import { BrandMark, Wordmark } from "./Brand"
import { Icon } from "./icons"
import { pages, roles, compound, t, uiTranslations, type RoleKey, type Locale } from "../../data/catalog"

export function CoverPage({ locale = "ar" }: { locale?: Locale }) {
  const roleKeys = Array.from(new Set(pages.map((p) => p.roleKey))) as RoleKey[]
  const ui = uiTranslations[locale]

  return (
    <article
      className="catalog-page relative mx-auto flex flex-col overflow-hidden"
      style={{
        width: "min(96vw, 1123px)",
        aspectRatio: "1123 / 794",
        background: "linear-gradient(155deg, #ffffff 0%, #f1f6ff 55%, #e6eefc 100%)",
        boxShadow: "0 40px 80px -30px rgba(15,23,42,0.28)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
      {/* faint oversized mark */}
      <BrandMark className="pointer-events-none absolute -bottom-16 -end-10 h-[26rem] w-auto opacity-[0.06]" />

      <header className="relative flex items-center justify-between px-16 pt-12">
        <div className="flex items-center gap-3" dir="ltr">
          <BrandMark className="h-8 w-auto" />
          <Wordmark className="text-[1.4rem]" />
        </div>
        <span className="font-latin text-[0.75rem] font-semibold tracking-[0.2em] text-muted">{compound}</span>
      </header>

      <div className="relative flex flex-1 flex-col justify-center px-16">
        <span className="font-latin text-[0.8rem] font-semibold uppercase tracking-[0.32em] text-brand">
          {ui.coverTag(roleKeys.length)}
        </span>
        <h1 className="mt-5 text-[4rem] font-bold leading-[1.05] text-ink">
          {ui.coverTitle}
          <br />
          <span className="text-brand">{ui.coverTitleHighlight}</span>
        </h1>
        <p className="mt-6 max-w-[56ch] text-[1.12rem] leading-relaxed text-slate">
          {ui.coverDesc}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-4 py-2 text-[0.82rem] font-semibold text-white shadow-sm">
            <span className="size-1.5 rounded-full bg-white/90" />
            {ui.allInOne}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/70 px-3.5 py-2 text-[0.82rem] font-semibold text-ink backdrop-blur">
            <Icon name="offline" className="size-4 text-brand" />
            {ui.offlineFirst}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/70 px-3.5 py-2 text-[0.82rem] font-semibold text-ink backdrop-blur">
            <Icon name="sync" className="size-4 text-brand" />
            {ui.syncEngine}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {roleKeys.map((key) => {
            const r = roles[key]
            const n = pages.filter((p) => p.roleKey === key).length
            return (
              <span
                key={key}
                className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-2 text-[0.9rem] font-semibold backdrop-blur"
                style={{ color: r.accent, borderColor: r.accentChip }}
              >
                <span className="size-2 rounded-full" style={{ background: r.accent }} />
                {t(r.label, locale)}
                <span className="font-latin text-[0.78rem] font-medium text-muted">{n}</span>
              </span>
            )
          })}
        </div>
      </div>

      <footer className="relative flex items-center justify-between border-t border-hairline/70 px-16 py-6">
        <span className="text-[0.8rem] text-slate">{ui.coverFooter(pages.length)}</span>
        <span className="font-latin text-[0.8rem] font-semibold tracking-widest text-brand">00</span>
      </footer>
    </article>
  )
}
