import { m, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Signature } from "./Signature";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#summary", id: "summary", label: "About" },
  { href: "#payment-showcase", id: "payment-showcase", label: "Showcase" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#contact", id: "contact", label: "Contact" },
];

/* ─── Focus-trap helpers ─── */
const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function useFocusTrap(
  containerRef: React.RefObject<HTMLElement | null>,
  active: boolean
) {
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;
    previouslyFocused.current = document.activeElement as HTMLElement;

    const container = containerRef.current;
    if (!container) return;

    const focusables = Array.from(
      container.querySelectorAll<HTMLElement>(FOCUSABLE)
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (focusables.length === 0) {
        e.preventDefault();
        return;
      }
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [active, containerRef]);
}

/* ─── Component ─── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useFocusTrap(menuRef, open);

  /* Scroll spy */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  /* Lock body scroll + Escape to close */
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <m.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <m.nav
        initial={{
          maxWidth: 960,
          paddingTop: 10,
          paddingBottom: 10,
        }}
        animate={{
          maxWidth: scrolled ? 720 : 960,
          paddingTop: scrolled ? 6 : 10,
          paddingBottom: scrolled ? 6 : 10,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card flex w-full items-center justify-between rounded-full px-4 shadow-lg shadow-black/5"
      >
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="flex items-center gap-2 shrink-0"
        >
          <Signature className="h-7 w-20" />
        </a>

        <ul className="hidden gap-1 md:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                  className={`relative z-10 inline-block rounded-full px-3 py-1.5 text-xs uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
                {isActive && (
                  <m.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "color-mix(in oklab, var(--foreground) 8%, transparent)",
                      border:
                        "1px solid color-mix(in oklab, var(--foreground) 10%, transparent)",
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="hidden sm:inline-block rounded-full px-4 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-105"
            style={{ background: "var(--gradient-aurora)" }}
          >
            Let's Talk
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden rounded-full p-2 text-foreground hover:bg-white/5"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <m.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <X className="h-4 w-4" />
                </m.span>
              ) : (
                <m.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <Menu className="h-4 w-4" />
                </m.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </m.nav>

      {/* ─── Mobile menu ─── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[-1] bg-black/20 backdrop-blur-[2px] md:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <m.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card absolute left-4 right-4 top-20 z-10 rounded-2xl p-4 md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <m.li
                    key={l.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{
                      duration: 0.25,
                      delay: i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={l.href}
                      onClick={(e) => handleClick(e, l.href)}
                      className={`block rounded-xl px-3 py-2.5 text-sm uppercase tracking-widest transition-colors ${
                        active === l.id
                          ? "bg-white/5 text-foreground"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                      }`}
                    >
                      {l.label}
                    </a>
                  </m.li>
                ))}
              </ul>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </m.header>
  );
}

