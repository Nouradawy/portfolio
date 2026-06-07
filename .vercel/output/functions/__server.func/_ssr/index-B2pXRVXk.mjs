import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { m, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { X, M as Menu, D as Download, a as MessageCircle, A as ArrowDown, b as Moon, S as Sun } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const ThemeContext = reactExports.createContext(void 0);
const STORAGE_KEY = "portfolio-theme";
function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ThemeProvider({ children }) {
  const [theme, setThemeState] = reactExports.useState("dark");
  reactExports.useEffect(() => {
    setThemeState(getInitialTheme());
  }, []);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);
  const value = {
    theme,
    setTheme: setThemeState,
    toggleTheme: () => setThemeState((t) => t === "dark" ? "light" : "dark")
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value, children });
}
function useTheme() {
  const ctx = reactExports.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
function Signature({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 300 80",
      className,
      fill: "none",
      "aria-label": "Noureldin signature",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          m.path,
          {
            d: "M 10 55 Q 25 10, 40 55 T 70 55 Q 85 20, 100 50 Q 115 70, 130 40 Q 145 15, 160 55 Q 175 65, 190 35 Q 205 10, 220 50 T 260 50 Q 275 60, 290 30",
            stroke: "url(#sigGrad)",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { pathLength: 0, opacity: 0 },
            whileInView: { pathLength: 1, opacity: 1 },
            viewport: { once: true },
            transition: { duration: 2.4, ease: "easeInOut" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "sigGrad", x1: "0", x2: "1", y1: "0", y2: "0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.72 0.21 255)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "oklch(0.62 0.27 295)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.68 0.31 340)" })
        ] }) })
      ]
    }
  );
}
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: toggleTheme,
      "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
      className: "relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 text-foreground backdrop-blur-md transition-colors hover:border-magenta hover:text-magenta",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        m.span,
        {
          initial: { y: -16, opacity: 0, rotate: -90 },
          animate: { y: 0, opacity: 1, rotate: 0 },
          exit: { y: 16, opacity: 0, rotate: 90 },
          transition: { duration: 0.25 },
          className: "absolute",
          children: isDark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" })
        },
        theme
      ) })
    }
  );
}
const links = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#summary", id: "summary", label: "About" },
  { href: "#payment-showcase", id: "payment-showcase", label: "Showcase" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#contact", id: "contact", label: "Contact" }
];
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
function useFocusTrap(containerRef, active) {
  const previouslyFocused = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!active) return;
    previouslyFocused.current = document.activeElement;
    const container = containerRef.current;
    if (!container) return;
    const focusables = Array.from(
      container.querySelectorAll(FOCUSABLE)
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();
    function onKeyDown(e) {
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
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [active, setActive] = reactExports.useState("home");
  const [open, setOpen] = reactExports.useState(false);
  const menuRef = reactExports.useRef(null);
  useFocusTrap(menuRef, open);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter((el) => !!el);
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
  reactExports.useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    m.header,
    {
      initial: { y: -30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      className: "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          m.nav,
          {
            initial: {
              maxWidth: 960,
              paddingTop: 10,
              paddingBottom: 10
            },
            animate: {
              maxWidth: scrolled ? 720 : 960,
              paddingTop: scrolled ? 6 : 10,
              paddingBottom: scrolled ? 6 : 10
            },
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            className: "glass-card flex w-full items-center justify-between rounded-full px-4 shadow-lg shadow-black/5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#home",
                  onClick: (e) => handleClick(e, "#home"),
                  className: "flex items-center gap-2 shrink-0",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Signature, { className: "h-7 w-20" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden gap-1 md:flex", children: links.map((l) => {
                const isActive = active === l.id;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: l.href,
                      onClick: (e) => handleClick(e, l.href),
                      className: `relative z-10 inline-block rounded-full px-3 py-1.5 text-xs uppercase tracking-widest transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
                      children: l.label
                    }
                  ),
                  isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    m.span,
                    {
                      layoutId: "nav-active-pill",
                      transition: { type: "spring", stiffness: 380, damping: 30 },
                      className: "absolute inset-0 rounded-full",
                      style: {
                        background: "color-mix(in oklab, var(--foreground) 8%, transparent)",
                        border: "1px solid color-mix(in oklab, var(--foreground) 10%, transparent)"
                      }
                    }
                  )
                ] }, l.href);
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#contact",
                    onClick: (e) => handleClick(e, "#contact"),
                    className: "hidden sm:inline-block rounded-full px-4 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-105",
                    style: { background: "var(--gradient-aurora)" },
                    children: "Let's Talk"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setOpen((v) => !v),
                    "aria-label": "Toggle menu",
                    "aria-expanded": open,
                    className: "md:hidden rounded-full p-2 text-foreground hover:bg-white/5",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      m.span,
                      {
                        initial: { rotate: -90, opacity: 0 },
                        animate: { rotate: 0, opacity: 1 },
                        exit: { rotate: 90, opacity: 0 },
                        transition: { duration: 0.15 },
                        className: "block",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                      },
                      "close"
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      m.span,
                      {
                        initial: { rotate: 90, opacity: 0 },
                        animate: { rotate: 0, opacity: 1 },
                        exit: { rotate: -90, opacity: 0 },
                        transition: { duration: 0.15 },
                        className: "block",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
                      },
                      "open"
                    ) })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            m.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.25 },
              className: "fixed inset-0 z-[-1] bg-black/20 backdrop-blur-[2px] md:hidden",
              onClick: () => setOpen(false),
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            m.div,
            {
              ref: menuRef,
              initial: { opacity: 0, y: -20, scale: 0.95 },
              animate: { opacity: 1, y: 0, scale: 1 },
              exit: { opacity: 0, y: -20, scale: 0.95 },
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              className: "glass-card absolute left-4 right-4 top-20 z-10 rounded-2xl p-4 md:hidden",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": "Site navigation",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-1", children: links.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                m.li,
                {
                  initial: { opacity: 0, x: -16 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: -16 },
                  transition: {
                    duration: 0.25,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: l.href,
                      onClick: (e) => handleClick(e, l.href),
                      className: `block rounded-xl px-3 py-2.5 text-sm uppercase tracking-widest transition-colors ${active === l.id ? "bg-white/5 text-foreground" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"}`,
                      children: l.label
                    }
                  )
                },
                l.href
              )) })
            }
          )
        ] }) })
      ]
    }
  );
}
function PaperAirplane() {
  const isMobile = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  const baseDuration = isMobile ? 24 : 18;
  const showParallax = !isMobile;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "aria-hidden": true,
      className: "pointer-events-none absolute inset-0 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          m.div,
          {
            className: "absolute h-72 w-72 rounded-full blur-3xl",
            style: {
              background: "radial-gradient(circle, color-mix(in oklab, var(--electric) 60%, transparent), transparent 70%)",
              top: "30%"
            },
            animate: {
              x: ["-15%", "25%", "55%", "85%", "115%"],
              y: ["0%", "-6%", "4%", "-8%", "2%"]
            },
            transition: {
              duration: baseDuration,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          m.svg,
          {
            viewBox: "0 0 120 80",
            className: "absolute h-20 w-32 md:h-28 md:w-44",
            style: { top: "28%", left: 0 },
            initial: { x: "-20%", y: 0, rotate: -4 },
            animate: {
              x: ["-20%", "20%", "50%", "80%", "115%"],
              y: [0, -28, 18, -22, 14],
              rotate: [-4, 6, -3, 8, -2]
            },
            transition: {
              duration: baseDuration,
              repeat: Infinity,
              ease: "easeInOut"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "planeBody", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.98 0.005 250)", stopOpacity: "0.95" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.72 0.21 255)", stopOpacity: "0.85" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "planeFold", x1: "0", x2: "1", y1: "0", y2: "0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.62 0.27 295)", stopOpacity: "0.7" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.72 0.21 255)", stopOpacity: "0.5" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "trailGrad", x1: "0", x2: "1", y1: "0", y2: "0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.72 0.21 255)", stopOpacity: "0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.72 0.21 255)", stopOpacity: "0.7" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M -300 50 Q -150 30 0 45",
                  fill: "none",
                  stroke: "url(#trailGrad)",
                  strokeWidth: "1.5",
                  strokeDasharray: "6 8",
                  style: { animation: "trail-dash 1.6s linear infinite" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M 10 40 L 110 20 L 60 50 Z",
                  fill: "url(#planeBody)",
                  stroke: "oklch(0.98 0.005 250)",
                  strokeWidth: "0.6",
                  strokeOpacity: "0.7"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M 10 40 L 110 20 L 65 65 Z",
                  fill: "url(#planeFold)",
                  stroke: "oklch(0.98 0.005 250)",
                  strokeWidth: "0.6",
                  strokeOpacity: "0.5"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M 10 40 L 110 20",
                  stroke: "oklch(0.98 0.005 250)",
                  strokeWidth: "0.8",
                  strokeOpacity: "0.9"
                }
              )
            ]
          }
        ),
        showParallax && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            m.div,
            {
              className: "absolute h-1.5 w-1.5 rounded-full bg-white/40",
              style: { top: "18%" },
              animate: { x: ["-5%", "110%"] },
              transition: { duration: 26, repeat: Infinity, ease: "linear", delay: 4 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            m.div,
            {
              className: "absolute h-1 w-1 rounded-full bg-white/30",
              style: { top: "62%" },
              animate: { x: ["-5%", "110%"] },
              transition: { duration: 32, repeat: Infinity, ease: "linear", delay: 10 }
            }
          )
        ] })
      ]
    }
  );
}
function MatrixRain() {
  const canvasRef = reactExports.useRef(null);
  const { theme } = useTheme();
  reactExports.useEffect(() => {
    if (theme !== "dark") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const dprCapped = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
    const dpr = dprCapped;
    let width = 0;
    let height = 0;
    let columns = 0;
    let drops = [];
    const fontSize = 14;
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789<>/{}[]=+*アABCDEF";
    const resize = () => {
      const parent = canvas.parentElement;
      width = parent?.clientWidth ?? window.innerWidth;
      height = parent?.clientHeight ?? window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.floor(width / fontSize);
      drops = Array.from(
        { length: columns },
        () => Math.random() * (height / fontSize)
      );
    };
    resize();
    window.addEventListener("resize", resize);
    let raf = 0;
    let last = 0;
    const fpsInterval = isMobile ? 1e3 / 20 : 1e3 / 30;
    const draw = (now) => {
      raf = requestAnimationFrame(draw);
      if (now - last < fpsInterval) return;
      last = now;
      ctx.fillStyle = "rgba(2, 6, 23, 0.08)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px "JetBrains Mono", ui-monospace, monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle = "rgba(125, 211, 252, 0.55)";
        ctx.shadowColor = "rgba(125, 211, 252, 0.4)";
        ctx.shadowBlur = 4;
        ctx.fillText(text, x, y);
        ctx.shadowBlur = 0;
        ctx.fillStyle = "rgba(99, 102, 241, 0.12)";
        ctx.fillText(text, x, y - fontSize);
        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);
  if (theme !== "dark") return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      "aria-hidden": true,
      className: "pointer-events-none absolute inset-0 z-0 opacity-15 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_45%,black,transparent_90%)]"
    }
  );
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};
const url = "/__l5e/assets-v1/816e554b-484e-466c-bfe8-56bd747208cb/Resume.pdf";
const resumeAsset = {
  url
};
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "home",
      className: "relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-24",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MatrixRain, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PaperAirplane, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 -z-0",
            style: {
              background: "radial-gradient(ellipse 60% 40% at 50% 40%, color-mix(in oklab, var(--electric) 14%, transparent), transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          m.div,
          {
            variants: staggerContainer,
            initial: "hidden",
            animate: "visible",
            className: "relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                m.span,
                {
                  variants: fadeUp,
                  className: "mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur-md",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-electric shadow-glow-electric" }),
                    "Full-Stack Software Engineer"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                m.h1,
                {
                  variants: fadeUp,
                  className: "font-display text-6xl leading-[0.95] tracking-tight md:text-8xl lg:text-9xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-foreground/90", children: "From paper ball" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "my-2 block text-sm font-sans uppercase tracking-[0.4em] text-muted-foreground md:text-base", children: "↓ to ↓" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-aurora", children: "To paper plane" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                m.p,
                {
                  variants: fadeUp,
                  className: "mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
                  children: [
                    "Hi, I'm ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Noureldin" }),
                    " — a full-stack software engineer crafting polished products across",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-electric", children: "Flutter" }),
                    ",",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-violet-glow", children: "Spring Boot" }),
                    ", and",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-magenta", children: "React" }),
                    ", with Clean Architecture from mobile to web."
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                m.div,
                {
                  variants: fadeUp,
                  className: "mt-10 flex flex-wrap items-center justify-center gap-4",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: resumeAsset.url,
                        target: "_blank",
                        rel: "noreferrer",
                        download: "Noureldin-Resume.pdf",
                        className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]",
                        style: { background: "var(--gradient-aurora)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              "aria-hidden": true,
                              className: "absolute inset-0 -z-10 opacity-60 blur-2xl transition-opacity group-hover:opacity-90",
                              style: { background: "var(--gradient-aurora)" }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                          "Resume"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: "#contact",
                        className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:border-electric/60 hover:bg-white/10",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                          "Let's Talk"
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(m.div, { variants: fadeUp, className: "mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Signature, { className: "h-16 w-56 opacity-90" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          m.div,
          {
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground",
            animate: { y: [0, 8, 0] },
            transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-5 w-5" })
          }
        )
      ]
    }
  );
}
const PortfolioSummarySection = reactExports.lazy(() => import("./PortfolioSummarySection-C10hpqBO.mjs").then((m2) => ({
  default: m2.PortfolioSummarySection
})));
const PaymentShowcaseSection = reactExports.lazy(() => import("./PaymentShowcaseSection-B2lt04Gy.mjs").then((m2) => ({
  default: m2.PaymentShowcaseSection
})));
const ProjectsTimelineSection = reactExports.lazy(() => import("./ProjectsTimelineSection-BpYnJjgU.mjs").then((m2) => ({
  default: m2.ProjectsTimelineSection
})));
const ContactSection = reactExports.lazy(() => import("./ContactSection-DNjyT9jX.mjs").then((m2) => ({
  default: m2.ContactSection
})));
const FooterSection = reactExports.lazy(() => import("./FooterSection-Ce-HeJBD.mjs").then((m2) => ({
  default: m2.FooterSection
})));
function SectionSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative px-6 pt-12 pb-12", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl animate-pulse space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-1/3 rounded bg-white/5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 w-full rounded-2xl bg-white/5" })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionSkeleton, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioSummarySection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionSkeleton, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentShowcaseSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionSkeleton, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsTimelineSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionSkeleton, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionSkeleton, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(FooterSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] }) });
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: Index
}, Symbol.toStringTag, { value: "Module" }));
export {
  fadeUp as f,
  index as i,
  staggerContainer as s
};
