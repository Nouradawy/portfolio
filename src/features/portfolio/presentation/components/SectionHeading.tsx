import { m } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/variants";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`mb-14 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <m.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-glow-electric" />
        {eyebrow}
      </m.span>
      <m.h2
        variants={fadeUp}
        className="mt-5 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl"
      >
        {title}
      </m.h2>
      {subtitle ? (
        <m.p variants={fadeUp} className="mt-5 text-base text-muted-foreground md:text-lg">
          {subtitle}
        </m.p>
      ) : null}
    </m.div>
  );
}
