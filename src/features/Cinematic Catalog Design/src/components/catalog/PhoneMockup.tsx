type PhoneMockupProps = {
  src: string
  caption?: string
  variant?: "hero" | "grid"
}

export function PhoneMockup({ src, caption, variant = "grid" }: PhoneMockupProps) {
  const width = variant === "hero" ? "clamp(200px, 15.5vw, 250px)" : "clamp(150px, 11.5vw, 185px)"

  return (
    <figure className="group flex flex-col items-center gap-4" style={{ margin: 0 }}>
      <div className="relative" style={{ width }}>
        {/* ambient blue glow */}
        <div
          className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70 blur-2xl"
          style={{ background: "radial-gradient(60% 55% at 50% 35%, var(--color-brand-tint), transparent 70%)" }}
        />
        {/* device */}
        <div
          className="relative overflow-hidden rounded-[2rem] bg-white p-[6px] ring-1 ring-black/5"
          style={{ boxShadow: "0 30px 60px -20px rgba(15,23,42,0.35), 0 8px 20px -10px rgba(15,23,42,0.25)" }}
        >
          <div className="relative overflow-hidden rounded-[1.6rem] bg-neutral-50">
            {/* notch */}
            <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/15" />
            <img src={src} alt={caption ?? ""} className="block w-full" loading="eager" decoding="async" />
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="text-center text-[0.8rem] font-medium text-slate-500">{caption}</figcaption>
      )}
    </figure>
  )
}
