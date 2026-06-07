import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Smartphone, Code2, Server, Atom, Layers, GitBranch, Plus } from "lucide-react";
import { staggerContainer, fadeUp } from "../animations/variants";
import { skills } from "../../data/skills.data";

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
    iconColor: "text-electric",
  },
  Backend: {
    label: "text-violet-glow",
    glow: "bg-violet-glow/15 group-hover:bg-violet-glow/25",
    border: "group-hover:border-violet-glow/50",
    iconBg: "bg-violet-glow/10 group-hover:bg-violet-glow/20",
    iconColor: "text-violet-glow",
  },
  Frontend: {
    label: "text-magenta",
    glow: "bg-magenta/15 group-hover:bg-magenta/25",
    border: "group-hover:border-magenta/50",
    iconBg: "bg-magenta/10 group-hover:bg-magenta/20",
    iconColor: "text-magenta",
  },
  Architecture: {
    label: "text-electric",
    glow: "bg-electric/15 group-hover:bg-electric/25",
    border: "group-hover:border-electric/50",
    iconBg: "bg-electric/10 group-hover:bg-electric/20",
    iconColor: "text-electric",
  },
} as const;

const iconByName: Record<string, React.ReactNode> = {
  Flutter: <Smartphone size={22} strokeWidth={1.5} />,
  Dart: <Code2 size={22} strokeWidth={1.5} />,
  "Spring Boot": <Server size={22} strokeWidth={1.5} />,
  React: <Atom size={22} strokeWidth={1.5} />,
  "Clean Architecture": <Layers size={22} strokeWidth={1.5} />,
  "BLoC / Cubit": <GitBranch size={22} strokeWidth={1.5} />,
};

// Watermark logos burned into the bottom-right of each card.
// Real brand logos where they exist; Lucide fallback for the others.
const watermarkByName: Record<
  string,
  { kind: "img"; src: string } | { kind: "icon"; node: React.ReactNode }
> = {
  Flutter: { kind: "img", src: flutterLogo },
  Dart: { kind: "img", src: dartLogo },
  "Spring Boot": { kind: "img", src: springLogo },
  React: { kind: "img", src: reactViteLogo },
  "Clean Architecture": {
    kind: "icon",
    node: <Layers size={140} strokeWidth={1} />,
  },
  "BLoC / Cubit": {
    kind: "icon",
    node: <GitBranch size={140} strokeWidth={1} />,
  },
};

// Puzzle bento spans — tight, asymmetric, edge-sharing.
const spans = [
  "md:col-span-3", // Flutter
  "md:col-span-3", // Dart
  "md:col-span-4", // Spring Boot (hero)
  "md:col-span-2", // React
  "md:col-span-3", // Clean Architecture
  "md:col-span-3", // BLoC / Cubit
];

// Group skills into bento rows so the detail panel can drop right under the
// row that was clicked.
const rows: number[][] = [
  [0, 1], // Flutter | Dart
  [2, 3], // Spring Boot | React
  [4, 5], // Clean Architecture | BLoC / Cubit
];

export function PortfolioSummarySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="summary" className="relative px-6 pt-32 pb-12">
      <div className="mx-auto max-w-6xl">
        {/* Heading — v2 direction: stacked, gradient block beneath */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16 max-w-3xl"
        >

          <m.h2
            variants={fadeUp}
            className="mt-6 font-display text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl"
          >
            <span className="block text-foreground">Engineering the stack —</span>
            <span className="mt-2 block text-aurora">End to end.</span>
          </m.h2>

          <m.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            From the first paper sketch to a polished production build. I write
            Flutter for mobile, Spring Boot for the API, and React for the web —
            all glued together with{" "}
            <span className="text-foreground">Clean Architecture</span> so each
            layer can evolve on its own. Tap any card to dive deeper.
          </m.p>
        </m.div>

        {/* Puzzle bento — grouped per row so a detail panel can expand inline */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-4"
        >
          {rows.map((row, rowIdx) => {
            const activeInRow = row.find((i) => i === openIndex);
            const activeSkill = activeInRow !== undefined ? skills[activeInRow] : null;
            const activeAccent = activeSkill ? accentByCategory[activeSkill.category] : null;

            return (
              <div key={rowIdx} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
                  {row.map((i) => {
                    const skill = skills[i];
                    const accent = accentByCategory[skill.category];
                    const isOpen = openIndex === i;
                    return (
                      <m.button
                        type="button"
                        key={skill.name}
                        variants={fadeUp}
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`stack-detail-${rowIdx}`}
                        className={`group relative overflow-hidden rounded-3xl border bg-white/[0.02] p-5 text-left transition-all duration-500 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-electric/60 md:p-8 ${
                          isOpen ? "border-white/30" : "border-white/10"
                        } ${accent.border} ${spans[i] ?? "md:col-span-2"}`}

                      >
                        {/* ambient bloom */}
                        <div
                          aria-hidden
                          className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-[80px] transition-all duration-700 ${accent.glow}`}
                        />

                        {/* Burned-in brand watermark (bottom-right) */}
                        {(() => {
                          const wm = watermarkByName[skill.name];
                          if (!wm) return null;
                          return (
                            <div
                              aria-hidden
                              className="pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 opacity-25 mix-blend-multiply transition-all duration-700 group-hover:-translate-y-1 group-hover:opacity-40 dark:opacity-[0.10] dark:mix-blend-screen dark:group-hover:opacity-[0.22]"
                              style={{ filter: "saturate(1.1)" }}
                            >
                              {wm.kind === "img" ? (
                                <img
                                  src={wm.src}
                                  alt=""
                                  loading="lazy"
                                  decoding="async"
                                  width={144}
                                  height={144}
                                  className="h-full w-full object-contain"
                                />
                              ) : (
                                <div className={`flex h-full w-full items-center justify-center ${accent.iconColor}`}>
                                  {wm.node}
                                </div>
                              )}
                            </div>
                          );
                        })()}

                        {/* Expand affordance */}
                        <div
                          aria-hidden
                          className={`absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition-all duration-300 ${accent.iconColor} ${
                            isOpen ? "rotate-45 bg-white/10" : "group-hover:scale-110"
                          }`}
                        >
                          <Plus size={14} strokeWidth={2} />
                        </div>

                        <div className="relative flex h-full flex-col justify-between gap-8">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition-all duration-500 ${accent.iconBg} ${accent.iconColor}`}
                            >
                              {iconByName[skill.name]}
                            </div>
                            <span
                              className={`font-mono text-[10px] uppercase tracking-[0.3em] ${accent.label}`}
                            >
                              {skill.category}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-display text-3xl uppercase tracking-tight text-foreground md:text-4xl">
                              {skill.name}
                            </h3>
                            <p className="mt-3 text-sm text-muted-foreground md:text-base">
                              {skill.blurb}
                            </p>
                          </div>
                        </div>
                      </m.button>
                    );
                  })}
                </div>

                {/* Inline detail panel — drops under the row it belongs to */}
                <AnimatePresence initial={false}>
                  {activeSkill && activeAccent ? (
                    <m.div
                      id={`stack-detail-${rowIdx}`}
                      key={activeSkill.name}
                      initial={{ opacity: 0, height: 0, y: -8 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -8 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 ${activeAccent.border}`}
                      >
                        <div
                          aria-hidden
                          className={`pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-[100px] ${activeAccent.glow}`}
                        />

                        <div className="relative grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
                          <div>
                            <span
                              className={`font-mono text-[10px] uppercase tracking-[0.3em] ${activeAccent.label}`}
                            >
                              {activeSkill.category} — Deep dive
                            </span>
                            <h4 className="mt-3 font-display text-3xl uppercase tracking-tight text-foreground md:text-5xl">
                              {activeSkill.name}
                            </h4>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                              {activeSkill.detail ?? activeSkill.blurb}
                            </p>
                          </div>

                          {activeSkill.highlights?.length ? (
                            <ul className="grid content-start gap-3">
                              {activeSkill.highlights.map((h) => (
                                <li
                                  key={h}
                                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-foreground/90"
                                >
                                  <span
                                    className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${activeAccent.iconBg}`}
                                  />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    </m.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
