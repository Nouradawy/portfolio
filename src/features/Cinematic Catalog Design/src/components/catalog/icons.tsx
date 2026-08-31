import type { ReactElement, SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
}

const paths: Record<string, ReactElement> = {
  megaphone: (
    <>
      <path d="m3 11 15-6v14L3 13z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      <path d="M18 8a3 3 0 0 1 0 6" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="1.6" />
      <path d="m21 15-4.5-4.5L5 21" />
    </>
  ),
  heart: <path d="M20.8 8.6a4.6 4.6 0 0 0-8-3 4.6 4.6 0 0 0-8 3c0 4.2 5.4 7.9 8 9.9 2.6-2 8-5.7 8-9.9Z" />,
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  refresh: (
    <>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v5h-5" />
    </>
  ),
  message: <path d="M21 12a8 8 0 0 1-11.3 7.3L3 21l1.7-6.7A8 8 0 1 1 21 12Z" />,
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
  vote: (
    <>
      <path d="m9 12 2 2 4-4" />
      <rect x="3" y="4" width="18" height="16" rx="2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L4 17l3 3 5.4-5.3a4 4 0 0 0 5.3-5.4l-2.7 2.7-2.6-.7-.7-2.6z" />,
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  filter: <path d="M3 4h18l-7 8v6l-4 2v-8L3 4Z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </>
  ),
  moon: <path d="M21 12.8A8 8 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z" />,
  shield: <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />,
  zap: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  send: <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />,
  mic: (
    <>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
    </>
  ),
  paperclip: <path d="M21 11.5 12.5 20a5 5 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7l-8.5 8.5a1.7 1.7 0 0 1-2.4-2.4l7.8-7.8" />,
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0" />
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M16 12.5h2.5" />
      <circle cx="16.5" cy="12.5" r="0.4" fill="currentColor" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3h12v18l-3-1.6L12 21l-3-1.6L6 21z" />
      <path d="M9 8h6M9 12h6" />
    </>
  ),
  trending: (
    <>
      <path d="m3 16 5-5 4 3 6-7" />
      <path d="M18 7h3v3" />
    </>
  ),
  qr: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3M20 14v0M14 20h0M17 20h4v-3M20 17v0" />
    </>
  ),
  offline: (
    <>
      <path d="M2 3.5 21.5 21" />
      <path d="M5 12.5a10 10 0 0 1 4-2.3M2 8.8a15 15 0 0 1 4-2.4M8.5 16a5 5 0 0 1 4-1.2" />
      <path d="M17.5 13a10 10 0 0 0-3-2.2M22 8.8a15 15 0 0 0-6.5-3.4" />
      <path d="M12 20h.01" />
    </>
  ),
  sync: (
    <>
      <path d="M18.5 8A6.5 6.5 0 0 0 7 6.5L5 8" />
      <path d="M5 4v4h4" />
      <path d="M5.5 16A6.5 6.5 0 0 0 17 17.5L19 16" />
      <path d="M19 20v-4h-4" />
    </>
  ),
  cloud: (
    <>
      <path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.6-1.5A4 4 0 0 0 6.5 19Z" />
      <path d="m9 13 2 2 4-4" />
    </>
  ),
  phone: <path d="M6.5 3h-2A1.5 1.5 0 0 0 3 4.6C3 13 11 21 19.4 21a1.5 1.5 0 0 0 1.6-1.5v-2a1.5 1.5 0 0 0-1.3-1.5l-2.3-.3a1.5 1.5 0 0 0-1.4.6l-.7 1a13 13 0 0 1-4.2-4.2l1-.7a1.5 1.5 0 0 0 .6-1.4l-.3-2.3A1.5 1.5 0 0 0 6.5 3Z" />,
  book: (
    <>
      <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19v18H5.5A1.5 1.5 0 0 1 4 19.5Z" />
      <path d="M4 17.5A1.5 1.5 0 0 1 5.5 16H19" />
      <path d="M9 8h6" />
    </>
  ),
  star: <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8-4.3-4.1 5.9-.9z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  camera: (
    <>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </>
  ),
  alert: (
    <>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  car: (
    <>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10l-2-4H7L5 10s-2.7.6-4.5 1.1C.7 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  check: (
    <>
      <path d="M20 6 9 17l-5-5" />
    </>
  ),
  patrol: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </>
  ),
  download: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </>
  ),
  gavel: (
    <>
      <path d="m14.5 12.5-8 8a2.12 2.12 0 1 1-3-3l8-8" />
      <path d="m16 16 6-6" />
      <path d="m8 8 6-6" />
      <path d="m9 7 8 8" />
      <path d="m21 11-8-8" />
    </>
  ),
  coins: (
    <>
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.7 13.5-.7.5" />
    </>
  ),
}

export function Icon({ name, ...props }: { name: string } & IconProps) {
  return (
    <svg {...base} {...props}>
      {paths[name] ?? paths.grid}
    </svg>
  )
}

export type IconName = keyof typeof paths
