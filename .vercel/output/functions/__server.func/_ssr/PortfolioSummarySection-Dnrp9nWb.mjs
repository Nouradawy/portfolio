import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as staggerContainer, f as fadeUp } from "./index-C_kqASHK.mjs";
import "../_libs/sonner.mjs";
import { m, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { P as Plus, G as GitBranch, L as Layers, c as Atom, d as Server, C as CodeXml, e as Smartphone } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const skills = [
  {
    name: "Flutter",
    category: "Mobile",
    blurb: "Cross-platform UI at native fidelity.",
    detail: "My primary mobile framework. I ship single-codebase apps for iOS and Android with native-feeling motion, gestures, and 60fps lists — no compromises on UX.",
    highlights: [
      "Custom design systems & theming",
      "Platform channels for native APIs",
      "Adaptive layouts for phone & tablet"
    ]
  },
  {
    name: "Dart",
    category: "Mobile",
    blurb: "Strongly typed, async-friendly.",
    detail: "The language behind every Flutter project I ship. Sound null-safety, isolates, and streams let me model complex async flows without fighting the type system.",
    highlights: [
      "Null-safe domain modeling",
      "Streams, Futures & isolates",
      "Codegen with freezed / json_serializable"
    ]
  },
  {
    name: "Spring Boot",
    category: "Backend",
    blurb: "Production-grade Java APIs.",
    detail: "My go-to for serious backends. Clean REST APIs, JPA-driven persistence, JWT auth, and a service layer designed to stay testable as the product grows.",
    highlights: [
      "REST APIs with Spring Web",
      "JPA / Hibernate & PostgreSQL",
      "Spring Security + JWT"
    ]
  },
  {
    name: "React",
    category: "Frontend",
    blurb: "Composable interfaces and SSR.",
    detail: "Where the web side of my stack lives. Component-driven UIs, TanStack Router + Query for data, and a strong eye for motion and micro-interactions.",
    highlights: [
      "TanStack Start / Router / Query",
      "Tailwind + design tokens",
      "Framer Motion choreography"
    ]
  },
  {
    name: "Clean Architecture",
    category: "Architecture",
    blurb: "Domain-first, testable layers.",
    detail: "The discipline that ties everything together. Domain, use-cases, data, presentation — each layer can evolve on its own without rewriting the rest.",
    highlights: [
      "Pure domain entities",
      "Repository pattern at the seams",
      "Framework-agnostic use-cases"
    ]
  },
  {
    name: "BLoC / Cubit",
    category: "Mobile",
    blurb: "Predictable Flutter state.",
    detail: "How I keep Flutter UIs predictable. Events in, states out — easy to test, easy to debug, and a clean boundary between business logic and widgets.",
    highlights: [
      "Event → state pipelines",
      "Hydrated state persistence",
      "BlocObserver for traceable flows"
    ]
  }
];
const flutterLogo = "/assets/icons/flutter.png";
const dartLogo = "/assets/icons/dart.png";
const springLogo = "/assets/icons/spring.png";
const reactViteLogo = "/assets/icons/vite.png";
const accentByCategory = {
  Mobile: {
    label: "text-electric",
    glow: "bg-electric/15 group-hover:bg-electric/25",
    border: "group-hover:border-electric/50",
    iconBg: "bg-electric/10 group-hover:bg-electric/20",
    iconColor: "text-electric"
  },
  Backend: {
    label: "text-violet-glow",
    glow: "bg-violet-glow/15 group-hover:bg-violet-glow/25",
    border: "group-hover:border-violet-glow/50",
    iconBg: "bg-violet-glow/10 group-hover:bg-violet-glow/20",
    iconColor: "text-violet-glow"
  },
  Frontend: {
    label: "text-magenta",
    glow: "bg-magenta/15 group-hover:bg-magenta/25",
    border: "group-hover:border-magenta/50",
    iconBg: "bg-magenta/10 group-hover:bg-magenta/20",
    iconColor: "text-magenta"
  },
  Architecture: {
    label: "text-electric",
    glow: "bg-electric/15 group-hover:bg-electric/25",
    border: "group-hover:border-electric/50",
    iconBg: "bg-electric/10 group-hover:bg-electric/20",
    iconColor: "text-electric"
  }
};
const iconByName = {
  Flutter: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 22, strokeWidth: 1.5 }),
  Dart: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { size: 22, strokeWidth: 1.5 }),
  "Spring Boot": /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { size: 22, strokeWidth: 1.5 }),
  React: /* @__PURE__ */ jsxRuntimeExports.jsx(Atom, { size: 22, strokeWidth: 1.5 }),
  "Clean Architecture": /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 22, strokeWidth: 1.5 }),
  "BLoC / Cubit": /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { size: 22, strokeWidth: 1.5 })
};
const watermarkByName = {
  Flutter: { kind: "img", src: flutterLogo },
  Dart: { kind: "img", src: dartLogo },
  "Spring Boot": { kind: "img", src: springLogo },
  React: { kind: "img", src: reactViteLogo },
  "Clean Architecture": {
    kind: "icon",
    node: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 140, strokeWidth: 1 })
  },
  "BLoC / Cubit": {
    kind: "icon",
    node: /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { size: 140, strokeWidth: 1 })
  }
};
const spans = [
  "md:col-span-3",
  // Flutter
  "md:col-span-3",
  // Dart
  "md:col-span-4",
  // Spring Boot (hero)
  "md:col-span-2",
  // React
  "md:col-span-3",
  // Clean Architecture
  "md:col-span-3"
  // BLoC / Cubit
];
const rows = [
  [0, 1],
  // Flutter | Dart
  [2, 3],
  // Spring Boot | React
  [4, 5]
  // Clean Architecture | BLoC / Cubit
];
function PortfolioSummarySection() {
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "summary", className: "relative px-6 pt-32 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      m.div,
      {
        variants: staggerContainer,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.4 },
        className: "mb-16 max-w-3xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            m.h2,
            {
              variants: fadeUp,
              className: "mt-6 font-display text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-foreground", children: "Engineering the stack —" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 block text-aurora", children: "End to end." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            m.p,
            {
              variants: fadeUp,
              className: "mt-6 max-w-2xl text-base text-muted-foreground md:text-lg",
              children: [
                "From the first paper sketch to a polished production build. I write Flutter for mobile, Spring Boot for the API, and React for the web — all glued together with",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Clean Architecture" }),
                " so each layer can evolve on its own. Tap any card to dive deeper."
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      m.div,
      {
        variants: staggerContainer,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
        className: "flex flex-col gap-4",
        children: rows.map((row, rowIdx) => {
          const activeInRow = row.find((i) => i === openIndex);
          const activeSkill = activeInRow !== void 0 ? skills[activeInRow] : null;
          const activeAccent = activeSkill ? accentByCategory[activeSkill.category] : null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4", children: row.map((i) => {
              const skill = skills[i];
              const accent = accentByCategory[skill.category];
              const isOpen = openIndex === i;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                m.button,
                {
                  type: "button",
                  variants: fadeUp,
                  onClick: () => setOpenIndex(isOpen ? null : i),
                  "aria-expanded": isOpen,
                  "aria-controls": `stack-detail-${rowIdx}`,
                  className: `group relative overflow-hidden rounded-3xl border bg-white/[0.02] p-5 text-left transition-all duration-500 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-electric/60 md:p-8 ${isOpen ? "border-white/30" : "border-white/10"} ${accent.border} ${spans[i] ?? "md:col-span-2"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        "aria-hidden": true,
                        className: `pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-[80px] transition-all duration-700 ${accent.glow}`
                      }
                    ),
                    (() => {
                      const wm = watermarkByName[skill.name];
                      if (!wm) return null;
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          "aria-hidden": true,
                          className: "pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 opacity-25 mix-blend-multiply transition-all duration-700 group-hover:-translate-y-1 group-hover:opacity-40 dark:opacity-[0.10] dark:mix-blend-screen dark:group-hover:opacity-[0.22]",
                          style: { filter: "saturate(1.1)" },
                          children: wm.kind === "img" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "img",
                            {
                              src: wm.src,
                              alt: "",
                              loading: "lazy",
                              decoding: "async",
                              width: 144,
                              height: 144,
                              className: "h-full w-full object-contain"
                            }
                          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-full w-full items-center justify-center ${accent.iconColor}`, children: wm.node })
                        }
                      );
                    })(),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        "aria-hidden": true,
                        className: `absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition-all duration-300 ${accent.iconColor} ${isOpen ? "rotate-45 bg-white/10" : "group-hover:scale-110"}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14, strokeWidth: 2 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col justify-between gap-8", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition-all duration-500 ${accent.iconBg} ${accent.iconColor}`,
                            children: iconByName[skill.name]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `font-mono text-[10px] uppercase tracking-[0.3em] ${accent.label}`,
                            children: skill.category
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl uppercase tracking-tight text-foreground md:text-4xl", children: skill.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground md:text-base", children: skill.blurb })
                      ] })
                    ] })
                  ]
                },
                skill.name
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: activeSkill && activeAccent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              m.div,
              {
                id: `stack-detail-${rowIdx}`,
                initial: { opacity: 0, height: 0, y: -8 },
                animate: { opacity: 1, height: "auto", y: 0 },
                exit: { opacity: 0, height: 0, y: -8 },
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 ${activeAccent.border}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          "aria-hidden": true,
                          className: `pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-[100px] ${activeAccent.glow}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              className: `font-mono text-[10px] uppercase tracking-[0.3em] ${activeAccent.label}`,
                              children: [
                                activeSkill.category,
                                " — Deep dive"
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-3 font-display text-3xl uppercase tracking-tight text-foreground md:text-5xl", children: activeSkill.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base", children: activeSkill.detail ?? activeSkill.blurb })
                        ] }),
                        activeSkill.highlights?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid content-start gap-3", children: activeSkill.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "li",
                          {
                            className: "flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-foreground/90",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: `mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${activeAccent.iconBg}`
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h })
                            ]
                          },
                          h
                        )) }) : null
                      ] })
                    ]
                  }
                )
              },
              activeSkill.name
            ) : null })
          ] }, rowIdx);
        })
      }
    )
  ] }) });
}
export {
  PortfolioSummarySection
};
