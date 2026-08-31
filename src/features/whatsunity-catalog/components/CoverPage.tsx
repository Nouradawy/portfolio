import { BrandMark, Wordmark } from "./Brand";
import { Icon } from "./icons";
import { pages, roles, compound, t, uiTranslations, type RoleKey, type Locale } from "../data/catalog";

export function CoverPage({ locale = "ar" }: { locale?: Locale }) {
  const roleKeys = Array.from(new Set(pages.map((p) => p.roleKey))) as RoleKey[];
  const ui = uiTranslations[locale];

  return (
    <article
      className={`catalog-page relative mx-auto flex w-full flex-col overflow-hidden rounded-2xl ${
        locale === "ar" ? "catalog-arabic" : "catalog-latin"
      }`}
      style={{
        maxWidth: "1123px",
        minHeight: "auto",
        background: "linear-gradient(155deg, #ffffff 0%, #f1f6ff 55%, #e6eefc 100%)",
        boxShadow: "0 25px 60px -20px rgba(15,23,42,0.18), 0 0 0 1px rgba(15,23,42,0.06)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
      {/* faint oversized mark */}
      <BrandMark className="pointer-events-none absolute -bottom-16 -end-10 h-[22rem] w-auto opacity-[0.05] md:h-[26rem]" />

      <header className="relative flex items-center justify-between px-6 py-6 md:px-14 md:pt-10">
        <div className="flex items-center gap-3" dir="ltr">
          <BrandMark className="h-8 w-auto" />
          <Wordmark className="text-[1.4rem]" />
        </div>
        <span className="catalog-latin text-[0.75rem] font-semibold tracking-[0.2em] text-slate-400">
          {compound}
        </span>
      </header>

      <div className="relative flex flex-1 flex-col justify-center px-6 py-6 md:px-14 md:py-10">
        <span className="catalog-latin text-[0.8rem] font-semibold uppercase tracking-[0.32em] text-blue-600">
          {ui.coverTag(roleKeys.length)}
        </span>
        <h1 className="mt-4 text-[2.4rem] font-bold leading-[1.1] text-slate-900 md:text-[3.6rem]">
          {ui.coverTitle}
          <br />
          <span className="text-blue-600">{ui.coverTitleHighlight}</span>
        </h1>
        <p className="mt-4 max-w-[56ch] text-[1rem] leading-relaxed text-slate-600 md:text-[1.1rem]">
          {ui.coverDesc}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3.5 py-1.5 text-[0.8rem] font-semibold text-white shadow-sm">
            <span className="size-1.5 rounded-full bg-white/90" />
            {ui.allInOne}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[0.8rem] font-semibold text-slate-800 backdrop-blur">
            <Icon name="offline" className="size-4 text-blue-600" />
            {ui.offlineFirst}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[0.8rem] font-semibold text-slate-800 backdrop-blur">
            <Icon name="sync" className="size-4 text-blue-600" />
            {ui.syncEngine}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {roleKeys.map((key) => {
            const r = roles[key];
            const n = pages.filter((p) => p.roleKey === key).length;
            return (
              <span
                key={key}
                className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1.5 text-[0.82rem] font-semibold backdrop-blur"
                style={{ color: r.accent, borderColor: r.accentChip }}
              >
                <span className="size-2 rounded-full" style={{ background: r.accent }} />
                {t(r.label, locale)}
                <span className="catalog-latin text-[0.75rem] font-medium text-slate-400">{n}</span>
              </span>
            );
          })}
        </div>
      </div>

      <footer className="relative flex items-center justify-between border-t border-slate-200/70 px-6 py-4 md:px-14">
        <span className="text-[0.78rem] text-slate-500">{ui.coverFooter(pages.length)}</span>
        <span className="catalog-latin text-[0.8rem] font-semibold tracking-widest text-blue-600">00</span>
      </footer>
    </article>
  );
}
