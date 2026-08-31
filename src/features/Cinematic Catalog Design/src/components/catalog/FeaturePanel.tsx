import type { CSSProperties } from "react"
import { Icon } from "./icons"
import { t, type Feature, type Locale, type LocalizedString } from "../../data/catalog"

type FeaturePanelProps = {
  eyebrow: LocalizedString | string
  title: LocalizedString | string
  lede: LocalizedString | string
  features: Feature[]
  locale: Locale
}

export function FeaturePanel({ eyebrow, title, lede, features, locale }: FeaturePanelProps) {
  return (
    <div className="flex h-full flex-col justify-center">
      <span
        className="font-latin text-[0.72rem] font-semibold uppercase tracking-[0.22em]"
        style={{ color: "var(--pa, #2563eb)" }}
      >
        {t(eyebrow, locale)}
      </span>

      <h2 className="mt-3 text-[2rem] font-bold leading-tight text-ink">{t(title, locale)}</h2>

      <p className="mt-3 max-w-[44ch] text-[0.96rem] leading-relaxed text-slate">{t(lede, locale)}</p>

      <div className="mt-6 h-px w-full bg-hairline" />

      <ul className="mt-5 flex flex-col gap-4">
        {features.map((f, idx) => (
          <li key={idx} className="flex items-start gap-3.5">
            <span
              className="flex size-10 shrink-0 items-center justify-center rounded-2xl ring-1"
              style={{ background: "var(--pat, #eff4ff)", color: "var(--pa, #2563eb)", "--tw-ring-color": "var(--pac, #e0e9ff)" } as CSSProperties}
            >
              <Icon name={f.icon} className="size-4.5" />
            </span>
            <div className="pt-0.5">
              <h3 className="text-[0.98rem] font-semibold text-ink">{t(f.title, locale)}</h3>
              <p className="mt-0.5 text-[0.86rem] leading-relaxed text-slate">{t(f.body, locale)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
