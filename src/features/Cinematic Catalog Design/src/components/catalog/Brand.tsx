export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 28" className={className} fill="none" aria-hidden>
      <path
        d="M13 6c-4.4 0-8 3.6-8 8s3.6 8 8 8c3 0 5.2-1.9 7-4.2l4-5.1c1.8-2.3 4-4.7 7-4.7 3.3 0 6 2.7 6 6s-2.7 6-6 6c-3 0-5.2-2.4-7-4.7"
        stroke="url(#bm)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="bm" x1="5" y1="6" x2="43" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-latin text-[1.15rem] font-medium tracking-tight text-ink ${className}`} dir="ltr">
      Whats<span className="font-extrabold">Unity</span>
    </span>
  )
}

export function BrandLockup() {
  return (
    <div className="flex items-center gap-2.5" dir="ltr">
      <BrandMark className="h-6 w-auto" />
      <Wordmark />
    </div>
  )
}
