import type { CSSProperties } from "react";
import { Icon } from "./icons";
import { t, type Feature, type Locale, type LocalizedString } from "../data/catalog";

type FeaturePanelProps = {
  eyebrow: LocalizedString | string;
  title: LocalizedString | string;
  lede: LocalizedString | string;
  features: Feature[];
  locale: Locale;
};

export function FeaturePanel({ eyebrow, title, lede, features, locale }: FeaturePanelProps) {
  return (
    <div className="flex h-full flex-col justify-center">
      <span
        className="catalog-latin text-[0.72rem] font-semibold uppercase tracking-[0.22em]"
        style={{ color: "var(--pa, #2563eb)" }}
      >
        {t(eyebrow, locale)}
      </span>

      <h2 className="mt-3 text-[1.85rem] font-bold leading-tight text-slate-900 md:text-[2rem]">
        {t(title, locale)}
      </h2>

      <p className="mt-3 max-w-[44ch] text-[0.95rem] leading-relaxed text-slate-600">
        {t(lede, locale)}
      </p>

      <div className="mt-5 h-px w-full bg-slate-200" />

      <ul className="mt-5 flex flex-col gap-3.5">
        {features.map((f, idx) => (
          <li key={idx} className="flex items-start gap-3.5">
            <span
              className="flex size-9 shrink-0 items-center justify-center rounded-2xl ring-1"
              style={
                {
                  background: "var(--pat, #eff4ff)",
                  color: "var(--pa, #2563eb)",
                  "--tw-ring-color": "var(--pac, #e0e9ff)",
                } as CSSProperties
              }
            >
              <Icon name={f.icon} className="size-4" />
            </span>
            <div className="pt-0.5">
              <h3 className="text-[0.92rem] font-semibold text-slate-900">{t(f.title, locale)}</h3>
              <p className="mt-0.5 text-[0.82rem] leading-relaxed text-slate-600">{t(f.body, locale)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
