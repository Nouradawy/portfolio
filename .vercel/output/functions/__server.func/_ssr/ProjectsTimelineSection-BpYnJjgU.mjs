import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as staggerContainer, f as fadeUp } from "./index-B2pXRVXk.mjs";
import { R as Root, P as Portal, C as Content, a as Close, O as Overlay, T as Title, D as Description } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import "../_libs/sonner.mjs";
import { m, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { e as Smartphone, m as Globe, i as ChevronDown, I as Image, n as Github, X, o as ChevronLeft, p as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
function TimelineItem({ project }) {
  const isMobile = project.platform === "Android";
  const [open, setOpen] = reactExports.useState(false);
  const [hovered, setHovered] = reactExports.useState(false);
  const [galleryHovered, setGalleryHovered] = reactExports.useState(false);
  const [imgIndex, setImgIndex] = reactExports.useState(0);
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(null);
  const hasImages = project.images.length > 0;
  const showGallery = hovered || open;
  reactExports.useEffect(() => {
    if (!showGallery || galleryHovered || project.images.length < 2) return;
    const id = setInterval(
      () => setImgIndex((i) => (i + 1) % project.images.length),
      2200
    );
    return () => clearInterval(id);
  }, [showGallery, galleryHovered, project.images.length]);
  reactExports.useEffect(() => {
    if (!showGallery) setImgIndex(0);
  }, [showGallery]);
  const firstPoint = project.descriptionPoints[0];
  const restPoints = project.descriptionPoints.slice(1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    m.li,
    {
      variants: fadeUp,
      className: "relative",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute left-3 top-6 hidden h-4 w-4 -translate-x-1/2 items-center justify-center md:flex md:left-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-electric/30 blur-md" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative h-2 w-2 rounded-full bg-electric shadow-glow-electric" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          m.article,
          {
            layout: true,
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            className: "glass-card group overflow-hidden rounded-2xl transition-colors hover:border-magenta/40 md:ml-12 lg:ml-16",
            children: [
              hasImages && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: showGallery && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                m.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: isMobile ? 380 : 200, opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  className: "relative overflow-hidden",
                  onMouseEnter: () => setGalleryHovered(true),
                  onMouseLeave: () => setGalleryHovered(false),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        "aria-hidden": true,
                        className: "absolute inset-0 opacity-50",
                        style: {
                          background: isMobile ? "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--magenta) 45%, transparent), transparent 60%), radial-gradient(circle at 70% 80%, color-mix(in oklab, var(--violet-glow) 45%, transparent), transparent 60%)" : "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--electric) 45%, transparent), transparent 60%), radial-gradient(circle at 70% 80%, color-mix(in oklab, var(--violet-glow) 40%, transparent), transparent 60%)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: (() => {
                      const media = project.images[imgIndex];
                      const isVideo = typeof media !== "string";
                      if (isVideo) {
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          m.iframe,
                          {
                            src: media.url,
                            title: `${project.title} video`,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: { duration: 0.4 },
                            className: "absolute inset-0 h-full w-full",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            allowFullScreen: true
                          },
                          imgIndex
                        );
                      }
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(
                        m.img,
                        {
                          src: media,
                          alt: `${project.title} preview ${imgIndex + 1}`,
                          initial: { opacity: 0, scale: 1.04 },
                          animate: { opacity: 1, scale: 1 },
                          exit: { opacity: 0, scale: 1.02 },
                          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                          drag: project.images.length > 1 ? "x" : false,
                          dragConstraints: { left: 0, right: 0 },
                          dragElastic: 0.2,
                          onDragEnd: (_, info) => {
                            const threshold = 50;
                            if (info.offset.x < -threshold) {
                              setImgIndex((i) => (i + 1) % project.images.length);
                            } else if (info.offset.x > threshold) {
                              setImgIndex(
                                (i) => (i - 1 + project.images.length) % project.images.length
                              );
                            }
                          },
                          onClick: (e) => {
                            e.stopPropagation();
                            setLightboxIndex(imgIndex);
                          },
                          className: `absolute inset-0 h-full w-full cursor-zoom-in touch-pan-y ${isMobile ? "object-contain" : "object-cover"}`,
                          loading: "lazy",
                          decoding: "async"
                        },
                        imgIndex
                      );
                    })() }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" }),
                    project.images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5", children: project.images.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Go to slide ${i + 1}`,
                        onClick: (e) => {
                          e.stopPropagation();
                          setImgIndex(i);
                        },
                        className: `h-2 rounded-full transition-all duration-300 cursor-pointer ${i === imgIndex ? "w-6 bg-magenta shadow-glow-electric" : "w-2 bg-white/30 hover:bg-white/60"}`
                      },
                      i
                    )) })
                  ]
                },
                "gallery"
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 md:p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-magenta/40 bg-magenta/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-magenta", children: project.position }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
                    project.startDate,
                    " — ",
                    project.endDate
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[9px] uppercase tracking-widest text-muted-foreground", children: [
                    isMobile ? /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3 w-3" }),
                    project.platform
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2.5 font-display text-2xl tracking-wide text-foreground md:text-3xl", children: project.title }),
                project.appIdea ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs uppercase tracking-wider text-violet-glow", children: project.appIdea }) : null,
                firstPoint ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: firstPoint }) : null,
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setOpen((o) => !o),
                      className: "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-medium text-magenta transition hover:text-foreground",
                      "aria-expanded": open,
                      children: [
                        open ? "Show less" : "Show more",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          m.span,
                          {
                            animate: { rotate: open ? 180 : 0 },
                            transition: { duration: 0.3 },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
                          }
                        )
                      ]
                    }
                  ),
                  hasImages && !showGallery ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden md:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-3 w-3" }),
                    project.images.length,
                    " screens"
                  ] }) : null,
                  project.github ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: project.github,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground transition-colors hover:border-magenta hover:text-magenta",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-3 w-3" }),
                        "Source"
                      ]
                    }
                  ) : null
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  m.div,
                  {
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: { height: 0, opacity: 0 },
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    className: "overflow-hidden",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-4 border-t border-white/10 pt-4", children: [
                      restPoints.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm leading-relaxed text-muted-foreground", children: restPoints.map((point, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-magenta" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: point })
                      ] }, i)) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-[10px] uppercase tracking-widest text-muted-foreground", children: "Stack" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: project.stack.map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-foreground",
                            children: tech
                          },
                          tech
                        )) })
                      ] })
                    ] })
                  },
                  "details"
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: lightboxIndex !== null, onOpenChange: (o) => !o && setLightboxIndex(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DialogContent,
          {
            className: "max-w-[95vw] border-white/10 bg-background/95 p-0 backdrop-blur-xl sm:max-w-5xl [&>button]:hidden",
            children: lightboxIndex !== null && (() => {
              const media = project.images[lightboxIndex];
              const isVideo = typeof media !== "string";
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-[85vh] w-full items-center justify-center overflow-auto", children: [
                isVideo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "iframe",
                  {
                    src: media.url,
                    title: `${project.title} video`,
                    className: "h-full w-full",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    allowFullScreen: true
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: media,
                    alt: `${project.title} full preview ${lightboxIndex + 1}`,
                    decoding: "async",
                    className: "max-h-full max-w-full object-contain"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setLightboxIndex(null),
                    "aria-label": "Close",
                    className: "absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground transition hover:border-magenta hover:text-magenta",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                  }
                ),
                project.images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setLightboxIndex(
                        (lightboxIndex - 1 + project.images.length) % project.images.length
                      ),
                      "aria-label": "Previous",
                      className: "absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground transition hover:border-magenta hover:text-magenta",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setLightboxIndex((lightboxIndex + 1) % project.images.length),
                      "aria-label": "Next",
                      className: "absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground transition hover:border-magenta hover:text-magenta",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
                    lightboxIndex + 1,
                    " / ",
                    project.images.length
                  ] })
                ] })
              ] });
            })()
          }
        ) })
      ]
    }
  );
}
const projects = [
  {
    id: "whatsunity",
    title: "whatsunity",
    appIdea: "Real time community app",
    position: "Founder & Flutter Engineer",
    platform: "Android",
    category: "Mobile Apps",
    startDate: "Aug 2025",
    endDate: "JAN 2026",
    year: "2026",
    github: "https://github.com/Nouradawy/super_app.git",
    descriptionPoints: [
      "Developed a comprehensive mobile platform using Flutter and Bloc to digitize compound management, enabling structured tenant organization by mapping users to specific buildings and apartment units for verified neighbor interactions.",
      "Built a dedicated polling and voting module detached from general chat streams. Residents vote on community situations using visual analytics, ensuring critical decision-making data is not lost in daily conversation flow.",
      "Integrated a full-stack Supabase backend for Admin-to-Resident announcements and a unified Report History system for Maintenance, Care Services, and Security requests.",
      "Deployed a self-hosted backend using Docker, DuckDNS, and Edge Functions, ensuring data privacy and low-latency real-time chat via REST APIs and WebSockets.",
      "Designed a rich-media chat interface supporting Google Drive integration for file sharing and voice notes with visual waveforms."
    ],
    stack: ["Flutter", "BLoC", "Supabase", "Docker", "WebSockets"],
    images: [
      {
        type: "youtube",
        url: "https://www.youtube.com/embed/h4EeJwGHUIE?mute=1&rel=0&playsinline=1"
      },
      "/assets/projects/Whatsunity/Screenshot_20251212_130927.png",
      "/assets/projects/Whatsunity/Screenshot_20251212_131138.png",
      "/assets/projects/Whatsunity/Screenshot_20251212_131212.png",
      "/assets/projects/Whatsunity/Screenshot_20251212_131717.png"
    ]
  },
  {
    id: "medicare",
    title: "Medicare",
    appIdea: "Medical services platform",
    position: "Full Stack Developer",
    platform: "web",
    category: "Web Apps",
    startDate: "SEP 2024",
    endDate: "FEB 2026",
    year: "2026",
    github: "https://github.com/Nouradawy/Medicare.git",
    descriptionPoints: [
      "Designed and developed a full-stack web application for Medicare, a medical services platform, using React on the frontend and Spring Boot for scalable, secure RESTful APIs.",
      "Implemented a MySQL relational database with optimized schema design and indexing for efficient data access and storage.",
      "Built interactive UI components with React, ensuring responsive design and seamless user experience across devices.",
      "Developed robust backend services with Spring Boot — user authentication, appointment scheduling, and role-based access control.",
      "Integrated third-party services for notifications, secure login, and form validation.",
      "Deployed to a cloud environment with a focus on performance, scalability, and uptime.",
      "Ensured maintainable, high-quality code through modular design, version control, and unit + integration testing."
    ],
    stack: ["React", "Spring Boot", "MySQL", "REST"],
    images: [
      "/assets/projects/Medicare/Home.png",
      "/assets/projects/Medicare/DocFilter.png",
      "/assets/projects/Medicare/patientReserv.png",
      "/assets/projects/Medicare/Reservation.png",
      "/assets/projects/Medicare/patientQueue.png",
      "/assets/projects/Medicare/medicalHistory.png",
      "/assets/projects/Medicare/Picture1.png",
      "/assets/projects/Medicare/Picture2.png",
      "/assets/projects/Medicare/Picture4.png",
      "/assets/projects/Medicare/Picture5.png",
      "/assets/projects/Medicare/Picture3.png"
    ]
  },
  {
    id: "mokhalafaty",
    title: "Mokhalafaty",
    appIdea: "Traffic Violations Extraction",
    position: "Flutter Engineer",
    platform: "Android",
    category: "Mobile Apps",
    startDate: "MAR 2024",
    endDate: "MAY 2024",
    year: "2024",
    github: "https://github.com/Nouradawy/Medicare.git",
    descriptionPoints: [
      "A mobile application that securely stores a user's license-related information (car license details, ID number, phone number) so they never re-enter the same data.",
      "Users save one or multiple licenses inside the app and, when needed, select a license with one tap — the app automatically retrieves traffic violation data by accessing the relevant traffic authority website and extracting the violation information.",
      "Simplifies checking traffic violations, saves time, and reduces repetitive data entry while keeping all license information organized in one place."
    ],
    stack: ["Flutter", "Dart", "JavaScript"],
    images: [
      "/assets/projects/mokhalafaty/1.png",
      "/assets/projects/mokhalafaty/2.jpeg",
      "/assets/projects/mokhalafaty/fineR.png"
    ]
  },
  {
    id: "phone-dialer",
    title: "Phone Dialer App",
    appIdea: "Smart caller experience",
    position: "Flutter Engineer",
    platform: "Android",
    category: "Mobile Apps",
    startDate: "NOV 2021",
    endDate: "NOV 2022",
    year: "2022",
    github: "https://github.com/Nouradawy/phone-dialer-app.git",
    descriptionPoints: [
      "Design, build and maintain high-performance, reusable, reliable code — including UI and core functionality.",
      "Application written in Flutter used to manage your contacts.",
      "Implementation for a Call Reason that can be filled by the caller and shown to the receiver, helping them decide whether to accept the call.",
      "Fetches Facebook friend-list pictures and applies them to your contacts.",
      "Reorganized contact details — Facebook, WhatsApp, Twitter — all in one place.",
      "Customization function to recolor or change the in-call screen background."
    ],
    stack: ["Flutter", "Dart", "Platform Channels"],
    images: [
      "/assets/projects/PhoneDialler/Login screen.png",
      "/assets/projects/PhoneDialler/Call log.jpg",
      "/assets/projects/PhoneDialler/Incoming call screen.png",
      "/assets/projects/PhoneDialler/Swap up to answer.png",
      "/assets/projects/PhoneDialler/Swap down decline.png",
      "/assets/projects/PhoneDialler/ongoing call screen.png",
      "/assets/projects/PhoneDialler/qucik note in action.png",
      "/assets/projects/PhoneDialler/Quick note.png",
      "/assets/projects/PhoneDialler/New contact.png",
      "/assets/projects/PhoneDialler/Contact details.png",
      "/assets/projects/PhoneDialler/Appearance.png",
      "/assets/projects/PhoneDialler/Theme customization.png",
      "/assets/projects/PhoneDialler/Theme customization 2.png"
    ]
  }
];
function useProjectFilter(projects2) {
  const [filter, setFilter] = reactExports.useState("All");
  const filtered = reactExports.useMemo(
    () => filter === "All" ? projects2 : projects2.filter((p) => p.category === filter),
    [filter, projects2]
  );
  return { filter, setFilter, filtered };
}
const FILTERS = ["All", "Mobile Apps", "Web Apps"];
function ProjectsTimelineSection() {
  const { filter, setFilter, filtered } = useProjectFilter(projects);
  const years = reactExports.useMemo(() => {
    const all = Array.from(new Set(projects.map((p) => p.year)));
    return all.sort((a, b) => Number(b) - Number(a));
  }, []);
  const [activeYear, setActiveYear] = reactExports.useState(null);
  const visible = activeYear ? filtered.filter((p) => p.year === activeYear) : filtered;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "bg-background px-6 pt-12 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-[280px_1fr] lg:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-24 lg:self-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-6xl leading-none tracking-tight md:text-7xl", children: [
        "TIME",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-aurora", children: "MACHINE." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground", children: "A journey through time, builds, stacks, passion, battle-tested code." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: FILTERS.map((f) => {
        const active = filter === f;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setFilter(f),
            className: `rounded-full px-3 py-1 text-[10px] uppercase tracking-widest transition-all ${active ? "text-primary-foreground shadow-glow-electric" : "border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"}`,
            style: active ? { background: "var(--gradient-aurora)" } : void 0,
            children: f
          },
          f
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col gap-1 border-l border-white/10 pl-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveYear(null),
            className: `text-left font-mono text-xs uppercase tracking-widest transition-colors ${activeYear === null ? "text-magenta" : "text-muted-foreground hover:text-foreground"}`,
            children: "ALL YEARS"
          }
        ),
        years.map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveYear(y === activeYear ? null : y),
            className: `text-left font-display text-2xl tracking-wider transition-colors ${activeYear === y ? "text-magenta" : "text-muted-foreground hover:text-foreground"}`,
            children: y
          },
          y
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          "aria-hidden": true,
          className: "absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-magenta/40 via-violet-glow/30 to-transparent md:block md:left-5"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        m.ul,
        {
          variants: staggerContainer,
          initial: "hidden",
          animate: "visible",
          className: "max-w-3xl space-y-8",
          children: visible.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineItem, { project }, project.id))
        },
        `${filter}-${activeYear ?? "all"}`
      )
    ] })
  ] }) });
}
export {
  ProjectsTimelineSection
};
