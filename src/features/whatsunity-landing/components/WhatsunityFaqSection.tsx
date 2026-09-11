import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { Locale, WhatsunityContent } from "../data/whatsunityContent";

interface Props {
  locale: Locale;
  content: WhatsunityContent;
}

export function WhatsunityFaqSection({ locale, content }: Props) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const isRtl = locale === "ar";
  const faq = content.faq;

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="relative py-16 sm:py-24 border-t border-slate-200 dark:border-white/10 transition-colors duration-200 bg-slate-50 dark:bg-[#05070a]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-center"
        >
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-extrabold text-emerald-700 dark:text-emerald-400 ${
              isRtl ? "wu-font-ar-display tracking-normal" : "wu-font-mono uppercase tracking-wider"
            }`}
          >
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{faq.tag}</span>
          </span>
          <h2
            className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white ${
              isRtl ? "wu-font-ar-display" : "wu-font-en-display"
            }`}
          >
            {faq.title}
          </h2>
          <p
            className={`mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed ${
              isRtl ? "wu-font-ar-body" : "wu-font-en-body"
            }`}
          >
            {faq.subtitle}
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3.5">
          {faq.items.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, transform: "translateY(16px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm backdrop-blur-xl transition-colors hover:border-emerald-500/40 dark:border-white/10 dark:bg-slate-950/40 dark:shadow-none"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="flex w-full items-center justify-between p-5 text-start transition-colors wu-pressable"
                >
                  <span
                    className={`text-base sm:text-lg font-bold text-slate-900 dark:text-white ${
                      isRtl ? "wu-font-ar-display" : "wu-font-en-display"
                    }`}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-emerald-600 dark:text-emerald-400 transition-transform duration-250 ease-out shrink-0 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`content-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`border-t border-slate-200/80 dark:border-white/5 px-5 pb-5 pt-3.5 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 font-normal ${
                          isRtl ? "wu-font-ar-body" : "wu-font-en-body"
                        }`}
                      >
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
