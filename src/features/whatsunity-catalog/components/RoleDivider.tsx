import type { CSSProperties } from "react";
import { BrandMark } from "./Brand";
import { roles, compound, t, uiTranslations, type RoleKey, type Locale } from "../data/catalog";

export function RoleDivider({
  roleKey,
  order,
  count,
  locale = "ar",
}: {
  roleKey: RoleKey;
  order: string;
  count: number;
  locale?: Locale;
}) {
  const r = roles[roleKey] ?? {
    label: { ar: "العام", en: "General" },
    labelLatin: "General",
    accent: "#2563eb",
    accentTint: "#eff4ff",
    accentChip: "#e0e9ff",
    intro: { ar: "", en: "" },
  };
  const accentVars = { "--pa": r.accent, "--pat": r.accentTint, "--pac": r.accentChip } as CSSProperties;
  const ui = uiTranslations[locale];

  return (
    <article
      className={`catalog-page relative mx-auto flex w-full flex-col overflow-hidden rounded-2xl ${
        locale === "ar" ? "catalog-arabic" : "catalog-latin"
      }`}
      style={{
        ...accentVars,
        maxWidth: "1123px",
        minHeight: "auto",
        background:
          "linear-gradient(150deg, #ffffff 0%, color-mix(in srgb, var(--pat) 65%, white) 60%, var(--pat) 100%)",
        boxShadow: "0 25px 60px -20px rgba(15,23,42,0.18), 0 0 0 1px rgba(15,23,42,0.06)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
      <BrandMark className="pointer-events-none absolute -bottom-20 -end-12 h-[24rem] w-auto opacity-[0.04] md:h-[28rem]" />

      <header className="relative flex items-center justify-between px-6 py-6 md:px-14 md:pt-10">
        <span className="catalog-latin text-[0.78rem] font-semibold tracking-[0.28em] text-slate-400">
          Whats<span className="font-extrabold text-slate-900">Unity</span>
        </span>
        <span className="catalog-latin text-[0.75rem] font-semibold tracking-[0.2em] text-slate-400">{compound}</span>
      </header>

      <div className="relative flex flex-1 flex-col justify-center px-6 py-6 md:px-14 md:py-10">
        <span
          className="catalog-latin text-[0.82rem] font-semibold uppercase tracking-[0.32em]"
          style={{ color: "var(--pa)" }}
        >
          {ui.sectionPrefix} {order} · {r.labelLatin}
        </span>

        <h2 className="mt-4 text-[2.2rem] font-bold leading-[1.1] text-slate-900 md:text-[3.2rem]">
          {t(r.label, locale)}
        </h2>

        <p className="mt-4 max-w-[50ch] text-[1.05rem] leading-relaxed text-slate-600 md:text-[1.15rem]">
          {t(r.intro, locale)}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.82rem] font-semibold"
            style={{ background: "var(--pa)", color: "#fff" }}
          >
            {ui.screensCount(count)}
          </span>
          <span className="h-px flex-1 max-w-[220px]" style={{ background: "var(--pac)" }} />
        </div>
      </div>

      <footer
        className="relative flex items-center justify-between border-t px-6 py-4 md:px-14"
        style={{ borderColor: "var(--pac)" }}
      >
        <span className="text-[0.78rem] text-slate-500">
          {locale === "ar" ? `${r.labelLatin} · ${ui.catalogWord}` : `${r.labelLatin} Catalog`}
        </span>
        <span className="catalog-latin text-[0.8rem] font-semibold tracking-widest" style={{ color: "var(--pa)" }}>
          {order}
        </span>
      </footer>
    </article>
  );
}
