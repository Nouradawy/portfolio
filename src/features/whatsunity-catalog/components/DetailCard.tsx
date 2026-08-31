import { Icon } from "./icons";
import { t, type Detail, type Locale } from "../data/catalog";

export function DetailCard({ detail, locale }: { detail: Detail; locale: Locale }) {
  const imageSrc = locale === "en" && detail.srcEn ? detail.srcEn : detail.src;
  const labelText = t(detail.label, locale);
  const captionText = t(detail.caption, locale);

  return (
    <figure
      className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5"
      style={{ boxShadow: "0 14px 30px -18px rgba(15,23,42,0.35)", margin: 0 }}
    >
      {/* cropped screenshot region */}
      <div className="relative h-[118px] w-full overflow-hidden" style={{ background: "var(--pat, #eff4ff)" }}>
        <img
          src={imageSrc}
          alt={labelText}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: detail.focus }}
          loading="eager"
          decoding="async"
        />
        <span
          className="absolute end-2 top-2 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.68rem] font-semibold shadow-sm backdrop-blur"
          style={{ color: "var(--pa, #2563eb)" }}
        >
          <Icon name={detail.icon} className="size-3.5" />
          {labelText}
        </span>
      </div>
      <figcaption className="border-t border-slate-200/80 px-3.5 py-2.5 text-[0.78rem] font-medium text-slate-600">
        {captionText}
      </figcaption>
    </figure>
  );
}
