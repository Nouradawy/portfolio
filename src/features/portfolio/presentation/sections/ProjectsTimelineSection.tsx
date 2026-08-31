import { useMemo, useState } from "react";
import { m } from "framer-motion";

import { TimelineItem } from "../components/TimelineItem";
import { staggerContainer } from "../animations/variants";
import { projects } from "../../data/projects.data";
import { useProjectFilter, type FilterValue } from "../../usecases/useProjectFilter";

const FILTERS: FilterValue[] = ["All", "Mobile Apps", "Web Apps"];

export function ProjectsTimelineSection() {
  const { filter, setFilter, filtered } = useProjectFilter(projects);

  // Unique years derived from the data, newest first.
  const years = useMemo(() => {
    const all = Array.from(new Set(projects.map((p) => p.year)));
    return all.sort((a, b) => Number(b) - Number(a));
  }, []);

  const [activeYear, setActiveYear] = useState<string | null>(null);
  const visible = activeYear
    ? filtered.filter((p) => p.year === activeYear)
    : filtered;

  return (
    <section id="projects" className="bg-background px-6 pt-12 pb-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
        {/* LEFT: sticky Time Machine column */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-display text-6xl leading-none tracking-tight md:text-7xl">
            TIME
            <br />
            <span className="text-aurora">MACHINE.</span>
          </h2>
          <p className="mt-4 max-w-xs text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            A journey through time, builds, stacks, passion, battle-tested code.
          </p>

          {/* Platform filters */}
          <div className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-widest transition-all ${
                    active
                      ? "text-primary-foreground shadow-glow-electric"
                      : "border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-muted-foreground hover:text-foreground"
                  }`}
                  style={active ? { background: "var(--gradient-aurora)" } : undefined}
                >
                  {f}
                </button>
              );
            })}
          </div>

          {/* Year rail */}
          <div className="mt-8 flex flex-col gap-1 border-l border-black/10 dark:border-white/10 pl-4">
            <button
              type="button"
              onClick={() => setActiveYear(null)}
              className={`text-left font-mono text-xs uppercase tracking-widest transition-colors ${
                activeYear === null ? "text-magenta" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ALL YEARS
            </button>
            {years.map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setActiveYear(y === activeYear ? null : y)}
                className={`text-left font-display text-2xl tracking-wider transition-colors ${
                  activeYear === y ? "text-magenta" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </aside>

        {/* RIGHT: project stack */}
        <div className="relative">
          <span
            aria-hidden
            className="absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-magenta/40 via-violet-glow/30 to-transparent md:block md:left-5"
          />
          <m.ul
            key={`${filter}-${activeYear ?? "all"}`}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-8"
          >
            {visible.map((project) => (
              <TimelineItem key={project.id} project={project} />
            ))}
          </m.ul>
        </div>
      </div>
    </section>
  );
}
