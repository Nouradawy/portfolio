import { AnimatePresence, m } from "framer-motion";
import { ChevronDown, Github, Smartphone, Globe, ImageIcon, X, ChevronLeft, ChevronRight, BookOpen, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project } from "../../domain/entities/Project";
import { fadeUp } from "../animations/variants";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { WhatsunityCatalogModal } from "@/features/whatsunity-catalog/components/WhatsunityCatalogModal";
import { WhatsunityCatalogInline } from "@/features/whatsunity-catalog/components/WhatsunityCatalogInline";


interface Props {
  project: Project;
}

export function TimelineItem({ project }: Props) {
  const isMobile = project.platform === "Android";
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [galleryHovered, setGalleryHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [catalogInitialTab, setCatalogInitialTab] = useState<"catalog" | "evolution">("catalog");
  const [catalogInlineOpen, setCatalogInlineOpen] = useState(false);
  const hasImages = project.images.length > 0;
  const showGallery = hovered || open;


  useEffect(() => {
    if (!showGallery || galleryHovered || project.images.length < 2) return;
    const id = setInterval(
      () => setImgIndex((i) => (i + 1) % project.images.length),
      2200,
    );
    return () => clearInterval(id);
  }, [showGallery, galleryHovered, project.images.length]);

  useEffect(() => {
    if (!showGallery) setImgIndex(0);
  }, [showGallery]);

  const firstPoint = project.descriptionPoints[0];
  const restPoints = project.descriptionPoints.slice(1);

  return (
    <m.li
      variants={fadeUp}
      className="relative"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Year rail dot */}
      <span className="absolute left-3 top-6 hidden h-4 w-4 -translate-x-1/2 items-center justify-center md:flex md:left-5">
        <span className="absolute inset-0 rounded-full bg-electric/30 blur-md" />
        <span className="relative h-2 w-2 rounded-full bg-electric shadow-glow-electric" />
      </span>

      <m.article
        layout
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card group overflow-hidden rounded-2xl transition-colors hover:border-magenta/40 md:ml-12 lg:ml-16"
      >
        {/* TOP: image gallery — expands from top */}
        {hasImages && (
          <AnimatePresence initial={false}>
            {showGallery && (
              <m.div
                key="gallery"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isMobile ? 380 : 200, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden"
                onMouseEnter={() => setGalleryHovered(true)}
                onMouseLeave={() => setGalleryHovered(false)}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-50"
                  style={{
                    background: isMobile
                      ? "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--magenta) 45%, transparent), transparent 60%), radial-gradient(circle at 70% 80%, color-mix(in oklab, var(--violet-glow) 45%, transparent), transparent 60%)"
                      : "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--electric) 45%, transparent), transparent 60%), radial-gradient(circle at 70% 80%, color-mix(in oklab, var(--violet-glow) 40%, transparent), transparent 60%)",
                  }}
                />
                <AnimatePresence mode="wait">
                  {(() => {
                    const media = project.images[imgIndex];
                    const isVideo = typeof media !== "string";
                    if (isVideo) {
                      return (
                        <m.iframe
                          key={imgIndex}
                          src={media.url}
                          title={`${project.title} video`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      );
                    }
                    return (
                      <m.img
                        key={imgIndex}
                        src={media}
                        alt={`${project.title} preview ${imgIndex + 1}`}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        drag={project.images.length > 1 ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                          const threshold = 50;
                          if (info.offset.x < -threshold) {
                            setImgIndex((i) => (i + 1) % project.images.length);
                          } else if (info.offset.x > threshold) {
                            setImgIndex(
                              (i) =>
                                (i - 1 + project.images.length) %
                                project.images.length,
                            );
                          }
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex(imgIndex);
                        }}
                        className={`absolute inset-0 h-full w-full cursor-zoom-in touch-pan-y ${isMobile ? "object-contain" : "object-cover"}`}
                        loading="lazy"
                        decoding="async"
                      />
                    );
                  })()}
                </AnimatePresence>



                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                {project.images.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setImgIndex(i);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          i === imgIndex
                            ? "w-6 bg-magenta shadow-glow-electric"
                            : "w-2 bg-white/30 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </m.div>
            )}
          </AnimatePresence>
        )}

        {/* BODY */}
        <div className="p-5 md:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-magenta/40 bg-magenta/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-magenta">
              {project.position}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {project.startDate} — {project.endDate}
            </span>
            {project.platforms && project.platforms.length > 0 ? (
              project.platforms.map((p, idx) => {
                const isObj = typeof p === "object";
                const name = isObj ? p.name : p;
                const isComingSoon = isObj && Boolean(p.isComingSoon);
                const isPwa = name.toLowerCase().includes("pwa");
                const isWeb = name.toLowerCase().includes("web");

                return (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] uppercase tracking-widest ${
                      isComingSoon
                        ? "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-slate-500 dark:text-slate-400 opacity-75"
                        : "border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/10 text-foreground"
                    }`}
                  >
                    {isPwa || isWeb ? (
                      <Globe className="h-3 w-3 text-cyan-500 dark:text-cyan-400" />
                    ) : (
                      <Smartphone className={`h-3 w-3 ${isComingSoon ? "text-slate-400" : "text-blue-500 dark:text-blue-400"}`} />
                    )}
                    <span>{name}</span>
                    {isComingSoon && (
                      <span className="rounded-full bg-amber-500/20 px-1.5 py-0.2 text-[8px] font-bold text-amber-600 dark:text-amber-300">
                        Coming Soon
                      </span>
                    )}
                  </span>
                );
              })
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-2.5 py-0.5 text-[9px] uppercase tracking-widest text-muted-foreground">
                {isMobile ? (
                  <Smartphone className="h-3 w-3" />
                ) : (
                  <Globe className="h-3 w-3" />
                )}
                {project.platform}
              </span>
            )}
          </div>

          <h3 className="mt-2.5 font-display text-2xl tracking-wide text-foreground md:text-3xl">
            {project.title}
          </h3>
          {project.appIdea ? (
            <p className="mt-0.5 text-xs uppercase tracking-wider text-violet-glow">
              {project.appIdea}
            </p>
          ) : null}

          {firstPoint ? (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {firstPoint}
            </p>
          ) : null}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOpen((o) => !o)}
                className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-medium text-magenta transition hover:text-foreground"
                aria-expanded={open}
              >
                {open ? "Show less" : "Show more"}
                <m.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </m.span>
              </button>
              {hasImages && !showGallery ? (
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <ImageIcon className="h-3 w-3" />
                  {project.images.length} screens
                </span>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {project.hasCatalog && (
                <>
                  <div className="inline-flex items-center rounded-full border border-blue-500/40 bg-gradient-to-r from-blue-600/15 via-violet-600/15 to-magenta/15 p-0.5 shadow-glow-electric backdrop-blur">
                    <button
                      type="button"
                      onClick={() => {
                        setCatalogInitialTab("catalog");
                        setCatalogModalOpen(true);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-sm transition-all hover:bg-blue-500 hover:shadow-glow-electric active:scale-95"
                    >
                      <BookOpen className="h-3 w-3" />
                      <span>Case Study</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCatalogInlineOpen((v) => !v)}
                      title={catalogInlineOpen ? "Hide inline preview" : "Expand inline preview"}
                      className="px-2 py-1 text-[10px] font-semibold text-blue-300 transition-colors hover:text-white"
                    >
                      {catalogInlineOpen ? "Collapse" : "Preview"}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setCatalogInitialTab("evolution");
                      setCatalogModalOpen(true);
                    }}
                    className="group/btn inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-300 shadow-sm backdrop-blur transition-all duration-200 hover:border-cyan-400/80 hover:bg-gradient-to-r hover:from-cyan-500/25 hover:to-blue-600/25 hover:text-white hover:shadow-[0_0_14px_rgba(6,182,212,0.25)] active:scale-95"
                  >
                    <SlidersHorizontal className="h-3 w-3 text-cyan-400 transition-transform duration-200 group-hover/btn:rotate-90 group-hover/btn:text-cyan-200" />
                    <span>UI/UX Evolution</span>
                  </button>
                </>
              )}

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-wider text-foreground transition-colors hover:border-magenta hover:text-magenta"
                >
                  <Github className="h-3 w-3" />
                  Source
                </a>
              ) : null}
            </div>
          </div>

          <AnimatePresence initial={false}>
            {project.hasCatalog && catalogInlineOpen && (
              <m.div
                key="catalog-inline"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <WhatsunityCatalogInline onOpenFullscreen={() => setCatalogModalOpen(true)} />
              </m.div>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {open && (
              <m.div
                key="details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-4 border-t border-black/10 dark:border-white/10 pt-4">
                  {restPoints.length > 0 && (
                    <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {restPoints.map((point, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-magenta" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div>
                    <h4 className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                      Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </m.article>

      <Dialog open={lightboxIndex !== null} onOpenChange={(o) => !o && setLightboxIndex(null)}>
        <DialogContent
          className="max-w-[95vw] border-white/10 bg-background/95 p-0 backdrop-blur-xl sm:max-w-5xl [&>button]:hidden"
        >

          {lightboxIndex !== null && (() => {
            const media = project.images[lightboxIndex];
            const isVideo = typeof media !== "string";
            return (
            <div className="relative flex h-[85vh] w-full items-center justify-center overflow-auto">
              {isVideo ? (
                <iframe
                  src={media.url}
                  title={`${project.title} video`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
              <img
                src={media}
                alt={`${project.title} full preview ${lightboxIndex + 1}`}
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />
              )}
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close"
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground transition hover:border-magenta hover:text-magenta"
              >
                <X className="h-4 w-4" />
              </button>
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + project.images.length) %
                          project.images.length,
                      )
                    }
                    aria-label="Previous"
                    className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground transition hover:border-magenta hover:text-magenta"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() =>
                      setLightboxIndex((lightboxIndex + 1) % project.images.length)
                    }
                    aria-label="Next"
                    className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground transition hover:border-magenta hover:text-magenta"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {lightboxIndex + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>
            );
          })()}
        </DialogContent>
      </Dialog>

      {project.hasCatalog && (
        <WhatsunityCatalogModal
          open={catalogModalOpen}
          onClose={() => setCatalogModalOpen(false)}
          initialTab={catalogInitialTab}
        />
      )}
    </m.li>
  );
}


