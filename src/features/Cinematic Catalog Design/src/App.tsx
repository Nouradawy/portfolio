import { Fragment, useState } from "react"
import { CoverPage } from "./components/catalog/CoverPage"
import { CatalogPage } from "./components/catalog/CatalogPage"
import { RoleDivider } from "./components/catalog/RoleDivider"
import { Icon } from "./components/catalog/icons"
import { pages, roles, t, uiTranslations, type RoleKey, type Locale } from "./data/catalog"

export default function App() {
  const [locale, setLocale] = useState<Locale>("ar")
  const [activeRole, setActiveRole] = useState<RoleKey | "all">("all")

  const ui = uiTranslations[locale]
  const filteredPages = activeRole === "all" ? pages : pages.filter((p) => p.roleKey === activeRole)
  const total = String(pages.length).padStart(2, "0")

  // track role order for section dividers
  const seenRoles: string[] = []

  const roleList: { key: RoleKey | "all"; label: string; count: number }[] = [
    { key: "all", label: ui.allRoles, count: pages.length },
    ...Object.entries(roles).map(([key, info]) => ({
      key: key as RoleKey,
      label: t(info.label, locale),
      count: pages.filter((p) => p.roleKey === key).length,
    })),
  ]

  const handlePrint = () => {
    window.print()
  }

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className={`min-h-screen w-full bg-stage ${locale === "en" ? "font-latin" : ""}`}>
      {/* toolbar */}
      <header className="no-print sticky top-0 z-30 border-b border-hairline bg-white/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-[1123px] flex-wrap items-center justify-between gap-3 px-6 py-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-baseline gap-2">
              <span className="font-latin text-[1.05rem] font-medium text-ink">
                Whats<span className="font-extrabold text-brand">Unity</span>
              </span>
              <span className="text-[0.82rem] font-medium text-slate">— {ui.subtitle}</span>
            </div>

            {/* Quick role filter pills */}
            <nav className="flex items-center gap-1.5 rounded-full bg-slate-100/80 p-1">
              {roleList.map((r) => {
                const isSelected = activeRole === r.key
                return (
                  <button
                    key={r.key}
                    onClick={() => setActiveRole(r.key)}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.78rem] font-semibold transition-all ${
                      isSelected
                        ? "bg-white text-brand shadow-sm"
                        : "text-slate hover:text-ink"
                    }`}
                  >
                    <span>{r.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[0.7rem] ${
                        isSelected ? "bg-brand/10 text-brand" : "bg-slate-200/70 text-slate"
                      }`}
                    >
                      {r.count}
                    </span>
                  </button>
                )
              })}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center rounded-full border border-hairline bg-slate-50 p-0.5 shadow-sm">
              <button
                onClick={() => setLocale("ar")}
                className={`rounded-full px-3 py-1 text-[0.78rem] font-bold transition-all ${
                  locale === "ar"
                    ? "bg-brand text-white shadow-xs"
                    : "text-slate hover:text-ink"
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`font-latin rounded-full px-3 py-1 text-[0.78rem] font-bold transition-all ${
                  locale === "en"
                    ? "bg-brand text-white shadow-xs"
                    : "text-slate hover:text-ink"
                }`}
              >
                English
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-[0.85rem] font-semibold text-white shadow-sm transition hover:bg-brand-deep active:scale-95"
            >
              <Icon name="layers" className="size-4" />
              {ui.printBtn}
            </button>
          </div>
        </div>
      </header>

      {/* stacked A4 landscape pages */}
      <main className="flex flex-col items-center gap-10 px-4 py-12">
        {activeRole === "all" && <CoverPage locale={locale} />}
        {filteredPages.map((page) => {
          let divider = null
          if (!seenRoles.includes(page.roleKey)) {
            seenRoles.push(page.roleKey)
            const order = String(seenRoles.length).padStart(2, "0")
            const count = filteredPages.filter((p) => p.roleKey === page.roleKey).length
            divider = <RoleDivider roleKey={page.roleKey} order={order} count={count} locale={locale} />
          }
          return (
            <Fragment key={page.index}>
              {divider}
              <CatalogPage page={page} total={total} locale={locale} />
            </Fragment>
          )
        })}
      </main>
    </div>
  )
}
