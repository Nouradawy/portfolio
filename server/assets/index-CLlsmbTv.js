import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Toaster as Toaster$1, toast } from "sonner";
import * as React from "react";
import { useState, useEffect, createContext, useContext, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, X, Menu, Download, MessageCircle, ArrowDown, Plus, GitBranch, Layers, Atom, Server, Code2, Smartphone, CreditCard, EyeOff, Eye, Copy, Wallet, ChevronDown, ShieldCheck, Sparkles, Zap, Lightbulb, Globe, ImageIcon, Github, ChevronLeft, ChevronRight, Mail, Send } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { createClient } from "@supabase/supabase-js";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FaLinkedinIn, FaBehance, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
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
const ThemeContext = createContext(void 0);
const STORAGE_KEY = "portfolio-theme";
function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("dark");
  useEffect(() => {
    setThemeState(getInitialTheme());
  }, []);
  useEffect(() => {
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
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value, children });
}
function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
function Signature({ className }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 300 80",
      className,
      fill: "none",
      "aria-label": "Noureldin signature",
      children: [
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "sigGrad", x1: "0", x2: "1", y1: "0", y2: "0", children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.72 0.21 255)" }),
          /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "oklch(0.62 0.27 295)" }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.68 0.31 340)" })
        ] }) })
      ]
    }
  );
}
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: toggleTheme,
      "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
      className: "relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 text-foreground backdrop-blur-md transition-colors hover:border-magenta hover:text-magenta",
      children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsx(
        motion.span,
        {
          initial: { y: -16, opacity: 0, rotate: -90 },
          animate: { y: 0, opacity: 1, rotate: 0 },
          exit: { y: 16, opacity: 0, rotate: 90 },
          transition: { duration: 0.25 },
          className: "absolute",
          children: isDark ? /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" })
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
  const previouslyFocused = useRef(null);
  useEffect(() => {
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
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  useFocusTrap(menuRef, open);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
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
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.header,
    {
      initial: { y: -30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      className: "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4",
      children: [
        /* @__PURE__ */ jsxs(
          motion.nav,
          {
            animate: {
              maxWidth: scrolled ? 720 : 960,
              paddingTop: scrolled ? 6 : 10,
              paddingBottom: scrolled ? 6 : 10
            },
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            className: "glass-card flex w-full items-center justify-between rounded-full px-4 shadow-lg shadow-black/5",
            children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#home",
                  onClick: (e) => handleClick(e, "#home"),
                  className: "flex items-center gap-2 shrink-0",
                  children: /* @__PURE__ */ jsx(Signature, { className: "h-7 w-20" })
                }
              ),
              /* @__PURE__ */ jsx("ul", { className: "hidden gap-1 md:flex", children: links.map((l) => {
                const isActive = active === l.id;
                return /* @__PURE__ */ jsxs("li", { className: "relative", children: [
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: l.href,
                      onClick: (e) => handleClick(e, l.href),
                      className: `relative z-10 inline-block rounded-full px-3 py-1.5 text-xs uppercase tracking-widest transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
                      children: l.label
                    }
                  ),
                  isActive && /* @__PURE__ */ jsx(
                    motion.span,
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
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ThemeToggle, {}),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#contact",
                    onClick: (e) => handleClick(e, "#contact"),
                    className: "hidden sm:inline-block rounded-full px-4 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-105",
                    style: { background: "var(--gradient-aurora)" },
                    children: "Let's Talk"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setOpen((v) => !v),
                    "aria-label": "Toggle menu",
                    "aria-expanded": open,
                    className: "md:hidden rounded-full p-2 text-foreground hover:bg-white/5",
                    children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", initial: false, children: open ? /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        initial: { rotate: -90, opacity: 0 },
                        animate: { rotate: 0, opacity: 1 },
                        exit: { rotate: 90, opacity: 0 },
                        transition: { duration: 0.15 },
                        className: "block",
                        children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
                      },
                      "close"
                    ) : /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        initial: { rotate: 90, opacity: 0 },
                        animate: { rotate: 0, opacity: 1 },
                        exit: { rotate: -90, opacity: 0 },
                        transition: { duration: 0.15 },
                        className: "block",
                        children: /* @__PURE__ */ jsx(Menu, { className: "h-4 w-4" })
                      },
                      "open"
                    ) })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            motion.div,
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
          /* @__PURE__ */ jsx(
            motion.div,
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
              children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-1", children: links.map((l, i) => /* @__PURE__ */ jsx(
                motion.li,
                {
                  initial: { opacity: 0, x: -16 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: -16 },
                  transition: {
                    duration: 0.25,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  },
                  children: /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "aria-hidden": true,
      className: "pointer-events-none absolute inset-0 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
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
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.svg,
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
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            },
            children: [
              /* @__PURE__ */ jsxs("defs", { children: [
                /* @__PURE__ */ jsxs("linearGradient", { id: "planeBody", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.98 0.005 250)", stopOpacity: "0.95" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.72 0.21 255)", stopOpacity: "0.85" })
                ] }),
                /* @__PURE__ */ jsxs("linearGradient", { id: "planeFold", x1: "0", x2: "1", y1: "0", y2: "0", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.62 0.27 295)", stopOpacity: "0.7" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.72 0.21 255)", stopOpacity: "0.5" })
                ] }),
                /* @__PURE__ */ jsxs("linearGradient", { id: "trailGrad", x1: "0", x2: "1", y1: "0", y2: "0", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.72 0.21 255)", stopOpacity: "0" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.72 0.21 255)", stopOpacity: "0.7" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
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
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M 10 40 L 110 20 L 60 50 Z",
                  fill: "url(#planeBody)",
                  stroke: "oklch(0.98 0.005 250)",
                  strokeWidth: "0.6",
                  strokeOpacity: "0.7"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M 10 40 L 110 20 L 65 65 Z",
                  fill: "url(#planeFold)",
                  stroke: "oklch(0.98 0.005 250)",
                  strokeWidth: "0.6",
                  strokeOpacity: "0.5"
                }
              ),
              /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute h-1.5 w-1.5 rounded-full bg-white/40",
            style: { top: "18%" },
            animate: { x: ["-5%", "110%"] },
            transition: { duration: 26, repeat: Infinity, ease: "linear", delay: 4 }
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute h-1 w-1 rounded-full bg-white/30",
            style: { top: "62%" },
            animate: { x: ["-5%", "110%"] },
            transition: { duration: 32, repeat: Infinity, ease: "linear", delay: 10 }
          }
        )
      ]
    }
  );
}
function MatrixRain() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  useEffect(() => {
    if (theme !== "dark") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
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
    const fpsInterval = 1e3 / 30;
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
  return /* @__PURE__ */ jsx(
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
const url$1 = "/__l5e/assets-v1/816e554b-484e-466c-bfe8-56bd747208cb/Resume.pdf";
const resumeAsset = {
  url: url$1
};
function HeroSection() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-24",
      children: [
        /* @__PURE__ */ jsx(MatrixRain, {}),
        /* @__PURE__ */ jsx(PaperAirplane, {}),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 -z-0",
            style: {
              background: "radial-gradient(ellipse 60% 40% at 50% 40%, color-mix(in oklab, var(--electric) 14%, transparent), transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            variants: staggerContainer,
            initial: "hidden",
            animate: "visible",
            className: "relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center",
            children: [
              /* @__PURE__ */ jsxs(
                motion.span,
                {
                  variants: fadeUp,
                  className: "mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur-md",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-electric shadow-glow-electric" }),
                    "Full-Stack Software Engineer"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.h1,
                {
                  variants: fadeUp,
                  className: "font-display text-6xl leading-[0.95] tracking-tight md:text-8xl lg:text-9xl",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "block text-foreground/90", children: "From paper ball" }),
                    /* @__PURE__ */ jsx("span", { className: "my-2 block text-sm font-sans uppercase tracking-[0.4em] text-muted-foreground md:text-base", children: "↓ to ↓" }),
                    /* @__PURE__ */ jsx("span", { className: "block text-aurora", children: "To paper plane" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.p,
                {
                  variants: fadeUp,
                  className: "mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
                  children: [
                    "Hi, I'm ",
                    /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Noureldin" }),
                    " — a full-stack software engineer crafting polished products across",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "text-electric", children: "Flutter" }),
                    ",",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "text-violet-glow", children: "Spring Boot" }),
                    ", and",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "text-magenta", children: "React" }),
                    ", with Clean Architecture from mobile to web."
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  variants: fadeUp,
                  className: "mt-10 flex flex-wrap items-center justify-center gap-4",
                  children: [
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: resumeAsset.url,
                        target: "_blank",
                        rel: "noreferrer",
                        download: "Noureldin-Resume.pdf",
                        className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]",
                        style: { background: "var(--gradient-aurora)" },
                        children: [
                          /* @__PURE__ */ jsx(
                            "span",
                            {
                              "aria-hidden": true,
                              className: "absolute inset-0 -z-10 opacity-60 blur-2xl transition-opacity group-hover:opacity-90",
                              style: { background: "var(--gradient-aurora)" }
                            }
                          ),
                          /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
                          "Resume"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: "#contact",
                        className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:border-electric/60 hover:bg-white/10",
                        children: [
                          /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
                          "Let's Talk"
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "mt-16", children: /* @__PURE__ */ jsx(Signature, { className: "h-16 w-56 opacity-90" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground",
            animate: { y: [0, 8, 0] },
            transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
            children: /* @__PURE__ */ jsx(ArrowDown, { className: "h-5 w-5" })
          }
        )
      ]
    }
  );
}
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
const flutterLogo = "public/assets/icons/flutter.png";
const dartLogo = "public/assets/icons/dart.png";
const springLogo = "public/assets/icons/spring.png";
const reactViteLogo = "public/assets/icons/vite.png";
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
  Flutter: /* @__PURE__ */ jsx(Smartphone, { size: 22, strokeWidth: 1.5 }),
  Dart: /* @__PURE__ */ jsx(Code2, { size: 22, strokeWidth: 1.5 }),
  "Spring Boot": /* @__PURE__ */ jsx(Server, { size: 22, strokeWidth: 1.5 }),
  React: /* @__PURE__ */ jsx(Atom, { size: 22, strokeWidth: 1.5 }),
  "Clean Architecture": /* @__PURE__ */ jsx(Layers, { size: 22, strokeWidth: 1.5 }),
  "BLoC / Cubit": /* @__PURE__ */ jsx(GitBranch, { size: 22, strokeWidth: 1.5 })
};
const watermarkByName = {
  Flutter: { kind: "img", src: flutterLogo },
  Dart: { kind: "img", src: dartLogo },
  "Spring Boot": { kind: "img", src: springLogo },
  React: { kind: "img", src: reactViteLogo },
  "Clean Architecture": {
    kind: "icon",
    node: /* @__PURE__ */ jsx(Layers, { size: 140, strokeWidth: 1 })
  },
  "BLoC / Cubit": {
    kind: "icon",
    node: /* @__PURE__ */ jsx(GitBranch, { size: 140, strokeWidth: 1 })
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
  const [openIndex, setOpenIndex] = useState(null);
  return /* @__PURE__ */ jsx("section", { id: "summary", className: "relative px-6 pt-32 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.4 },
        className: "mb-16 max-w-3xl",
        children: [
          /* @__PURE__ */ jsxs(
            motion.h2,
            {
              variants: fadeUp,
              className: "mt-6 font-display text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl",
              children: [
                /* @__PURE__ */ jsx("span", { className: "block text-foreground", children: "Engineering the stack —" }),
                /* @__PURE__ */ jsx("span", { className: "mt-2 block text-aurora", children: "End to end." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.p,
            {
              variants: fadeUp,
              className: "mt-6 max-w-2xl text-base text-muted-foreground md:text-lg",
              children: [
                "From the first paper sketch to a polished production build. I write Flutter for mobile, Spring Boot for the API, and React for the web — all glued together with",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Clean Architecture" }),
                " so each layer can evolve on its own. Tap any card to dive deeper."
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
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
          return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4", children: row.map((i) => {
              const skill = skills[i];
              const accent = accentByCategory[skill.category];
              const isOpen = openIndex === i;
              return /* @__PURE__ */ jsxs(
                motion.button,
                {
                  type: "button",
                  variants: fadeUp,
                  onClick: () => setOpenIndex(isOpen ? null : i),
                  "aria-expanded": isOpen,
                  "aria-controls": `stack-detail-${rowIdx}`,
                  className: `group relative overflow-hidden rounded-3xl border bg-white/[0.02] p-5 text-left transition-all duration-500 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-electric/60 md:p-8 ${isOpen ? "border-white/30" : "border-white/10"} ${accent.border} ${spans[i] ?? "md:col-span-2"}`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        "aria-hidden": true,
                        className: `pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-[80px] transition-all duration-700 ${accent.glow}`
                      }
                    ),
                    (() => {
                      const wm = watermarkByName[skill.name];
                      if (!wm) return null;
                      return /* @__PURE__ */ jsx(
                        "div",
                        {
                          "aria-hidden": true,
                          className: "pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 opacity-25 mix-blend-multiply transition-all duration-700 group-hover:-translate-y-1 group-hover:opacity-40 dark:opacity-[0.10] dark:mix-blend-screen dark:group-hover:opacity-[0.22]",
                          style: { filter: "saturate(1.1)" },
                          children: wm.kind === "img" ? /* @__PURE__ */ jsx(
                            "img",
                            {
                              src: wm.src,
                              alt: "",
                              loading: "lazy",
                              width: 144,
                              height: 144,
                              className: "h-full w-full object-contain"
                            }
                          ) : /* @__PURE__ */ jsx("div", { className: `flex h-full w-full items-center justify-center ${accent.iconColor}`, children: wm.node })
                        }
                      );
                    })(),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        "aria-hidden": true,
                        className: `absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition-all duration-300 ${accent.iconColor} ${isOpen ? "rotate-45 bg-white/10" : "group-hover:scale-110"}`,
                        children: /* @__PURE__ */ jsx(Plus, { size: 14, strokeWidth: 2 })
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "relative flex h-full flex-col justify-between gap-8", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: `flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition-all duration-500 ${accent.iconBg} ${accent.iconColor}`,
                            children: iconByName[skill.name]
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: `font-mono text-[10px] uppercase tracking-[0.3em] ${accent.label}`,
                            children: skill.category
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl uppercase tracking-tight text-foreground md:text-4xl", children: skill.name }),
                        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground md:text-base", children: skill.blurb })
                      ] })
                    ] })
                  ]
                },
                skill.name
              );
            }) }),
            /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: activeSkill && activeAccent ? /* @__PURE__ */ jsx(
              motion.div,
              {
                id: `stack-detail-${rowIdx}`,
                initial: { opacity: 0, height: 0, y: -8 },
                animate: { opacity: 1, height: "auto", y: 0 },
                exit: { opacity: 0, height: 0, y: -8 },
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 ${activeAccent.border}`,
                    children: [
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          "aria-hidden": true,
                          className: `pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-[100px] ${activeAccent.glow}`
                        }
                      ),
                      /* @__PURE__ */ jsxs("div", { className: "relative grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsxs(
                            "span",
                            {
                              className: `font-mono text-[10px] uppercase tracking-[0.3em] ${activeAccent.label}`,
                              children: [
                                activeSkill.category,
                                " — Deep dive"
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsx("h4", { className: "mt-3 font-display text-3xl uppercase tracking-tight text-foreground md:text-5xl", children: activeSkill.name }),
                          /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base", children: activeSkill.detail ?? activeSkill.blurb })
                        ] }),
                        activeSkill.highlights?.length ? /* @__PURE__ */ jsx("ul", { className: "grid content-start gap-3", children: activeSkill.highlights.map((h) => /* @__PURE__ */ jsxs(
                          "li",
                          {
                            className: "flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-foreground/90",
                            children: [
                              /* @__PURE__ */ jsx(
                                "span",
                                {
                                  className: `mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${activeAccent.iconBg}`
                                }
                              ),
                              /* @__PURE__ */ jsx("span", { children: h })
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
const cameraLens = "_7kCtYG_cameraLens";
const dynamicIsland = "_7kCtYG_dynamicIsland";
const homeIndicator = "_7kCtYG_homeIndicator";
const iframeWrapper = "_7kCtYG_iframeWrapper";
const phoneCase = "_7kCtYG_phoneCase";
const phoneContainer = "_7kCtYG_phoneContainer";
const phoneScreen = "_7kCtYG_phoneScreen";
const powerButton = "_7kCtYG_powerButton";
const screenGlare = "_7kCtYG_screenGlare";
const volumeDown = "_7kCtYG_volumeDown";
const volumeUp = "_7kCtYG_volumeUp";
const styles = {
  cameraLens,
  dynamicIsland,
  homeIndicator,
  iframeWrapper,
  phoneCase,
  phoneContainer,
  phoneScreen,
  powerButton,
  screenGlare,
  volumeDown,
  volumeUp
};
function PhoneMockup({ flutterAppUrl, children }) {
  return /* @__PURE__ */ jsx("div", { className: styles.phoneContainer, children: /* @__PURE__ */ jsxs("div", { className: styles.phoneCase, children: [
    /* @__PURE__ */ jsx("div", { className: styles.phoneScreen, children: flutterAppUrl ? /* @__PURE__ */ jsx("div", { className: styles.iframeWrapper, children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: flutterAppUrl,
        title: "Flutter Payment Demo",
        allow: "payment"
      }
    ) }) : /* @__PURE__ */ jsx("div", { className: "h-full w-full", children }) }),
    /* @__PURE__ */ jsx("div", { className: styles.dynamicIsland, children: /* @__PURE__ */ jsx("div", { className: styles.cameraLens }) }),
    /* @__PURE__ */ jsx("div", { className: styles.homeIndicator }),
    /* @__PURE__ */ jsx("div", { className: styles.screenGlare }),
    /* @__PURE__ */ jsx("div", { className: styles.volumeUp }),
    /* @__PURE__ */ jsx("div", { className: styles.volumeDown }),
    /* @__PURE__ */ jsx("div", { className: styles.powerButton })
  ] }) });
}
function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      variants: staggerContainer,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.4 },
      className: `mb-14 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`,
      children: [
        /* @__PURE__ */ jsxs(
          motion.span,
          {
            variants: fadeUp,
            className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
            children: [
              /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-electric shadow-glow-electric" }),
              eyebrow
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.h2,
          {
            variants: fadeUp,
            className: "mt-5 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl",
            children: title
          }
        ),
        subtitle ? /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "mt-5 text-base text-muted-foreground md:text-lg", children: subtitle }) : null
      ]
    }
  );
}
const url = "https://qpawevncpffpwzilztel.supabase.co";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwYXdldm5jcGZmcHd6aWx6dGVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxODY3ODEsImV4cCI6MjA5MDc2Mjc4MX0.2Ov_pqi35diwfVVs4D1VxF4Uk631nFf2GM1CNkRt7JA";
const paymentsSupabase = createClient(url, anonKey, {
  auth: { persistSession: false, autoRefreshToken: false }
});
class SupabasePaymentRepository {
  async createStripePaymentIntent(amount, currency, name) {
    const { data, error } = await paymentsSupabase.functions.invoke("stripe", {
      body: { amount, currency, name, platform: "mobile" }
    });
    if (error) throw new Error(error.message);
    return data;
  }
  async createPayPalOrder(amount) {
    const { data, error } = await paymentsSupabase.functions.invoke("react-paypal", {
      body: { amount: amount.toFixed(2), action: "CREATE" }
    });
    if (error) throw new Error(error.message);
    return data;
  }
  async capturePayPalOrder(orderId) {
    const { data, error } = await paymentsSupabase.functions.invoke("react-paypal", {
      body: { action: "CAPTURE", orderId }
    });
    if (error) throw new Error(error.message);
    return data;
  }
}
class ProcessStripePayment {
  constructor(repo) {
    this.repo = repo;
  }
  repo;
  execute(amount, currency, name) {
    return this.repo.createStripePaymentIntent(amount, currency, name);
  }
}
class CreatePayPalOrder {
  constructor(repo) {
    this.repo = repo;
  }
  repo;
  execute(amount) {
    return this.repo.createPayPalOrder(amount);
  }
}
class CapturePayPalOrder {
  constructor(repo) {
    this.repo = repo;
  }
  repo;
  execute(orderId) {
    return this.repo.capturePayPalOrder(orderId);
  }
}
const usePayment = () => {
  const repository = useMemo(() => new SupabasePaymentRepository(), []);
  const processStripePayment = useMemo(() => new ProcessStripePayment(repository), [repository]);
  const createPayPalOrder = useMemo(() => new CreatePayPalOrder(repository), [repository]);
  const capturePayPalOrder = useMemo(() => new CapturePayPalOrder(repository), [repository]);
  return { processStripePayment, createPayPalOrder, capturePayPalOrder };
};
const stripePromise = loadStripe("pk_test_51TI1hY4R2UKOmmfL4XqWrVK3vCDSA4oIAuo4eDscsLqw92MqUGFOAKH4HgOvRF2lcXSt9Boc1uxVSimRs5zjwbbM002yeWuUVO");
const paypalClientId = "AddQYK0-96mM14ZXa02SC6hNMCVTBVVi7s5UiJD7g-Nwjait56xCQFUcMkMXvdkH_xfiUbw4l9Im6P5H";
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#ffffff",
      fontFamily: "Inter, system-ui, sans-serif",
      fontSize: "15px",
      "::placeholder": { color: "rgba(255,255,255,0.4)" },
      iconColor: "#ff2d95"
    },
    invalid: { color: "#f87171", iconColor: "#f87171" }
  }
};
const STRIPE_CARDS = [
  { label: "Success", value: "4242424242424242", tone: "text-emerald-400" },
  { label: "Decline", value: "4000000000009995", tone: "text-rose-400" }
];
const PAYPAL_CREDS = [
  { label: "Email", value: "sb-c3jdb50318792@personal.example.com" },
  { label: "Password", value: "M|C7Ko*=" }
];
function PaymentShowcaseSection() {
  return /* @__PURE__ */ jsx(Elements, { stripe: stripePromise, children: /* @__PURE__ */ jsx(PayPalScriptProvider, { options: { clientId: paypalClientId, currency: "USD", intent: "capture" }, children: /* @__PURE__ */ jsx(PaymentShowcaseInner, {}) }) });
}
function PaymentShowcaseInner() {
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [showTestCredentials, setShowTestCredentials] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [amount, setAmount] = useState(5);
  const [name, setName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { processStripePayment, createPayPalOrder, capturePayPalOrder } = usePayment();
  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied ${label}`);
  };
  const handleStripeSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || isProcessing) return;
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    setIsProcessing(true);
    const toastId = toast.loading("Processing payment…");
    try {
      const { clientSecret } = await processStripePayment.execute(amount * 100, "usd", name);
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error("Card element not ready");
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement, billing_details: { name } }
      });
      if (stripeError) {
        toast.error(stripeError.message ?? "Payment failed", { id: toastId });
      } else if (paymentIntent?.status === "succeeded") {
        toast.success(`Payment succeeded — $${amount}`, { id: toastId });
        cardElement.clear();
        setName("");
      } else {
        toast.message(`Status: ${paymentIntent?.status ?? "unknown"}`, { id: toastId });
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Payment failed", { id: toastId });
    } finally {
      setIsProcessing(false);
    }
  };
  return /* @__PURE__ */ jsx("section", { id: "payment-showcase", className: "relative px-6 pt-12 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Interactive Showcase",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Interactive ",
          /* @__PURE__ */ jsx("span", { className: "text-aurora", children: "Showcase" })
        ] }),
        subtitle: "Test driving a live Flutter web build. Interact with the UI and experience the performance directly in your browser. Explore the mechanics behind a seamless payment gateway."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          variants: staggerContainer,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.2 },
          className: "space-y-8",
          children: [
            /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(CreditCard, { className: "h-4 w-4 text-magenta" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground", children: "Web Integration" })
            ] }),
            /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "glass-card rounded-2xl p-8 shadow-2xl", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-start justify-between", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl tracking-wide", children: "Make a Donation" }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowTestCredentials((v) => !v),
                    className: "flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-tighter transition-all hover:bg-white/10",
                    children: [
                      showTestCredentials ? /* @__PURE__ */ jsx(EyeOff, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx(Eye, { className: "h-3 w-3" }),
                      showTestCredentials ? "Hide Test Cards" : "Show Test Cards"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(AnimatePresence, { children: showTestCredentials && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  transition: { duration: 0.3 },
                  className: "mb-6 overflow-hidden",
                  children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 rounded-lg border border-white/10 bg-white/5 p-4 sm:grid-cols-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-magenta", children: [
                        /* @__PURE__ */ jsx(CreditCard, { className: "h-3 w-3" }),
                        /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-wider text-foreground", children: "Stripe Test Cards" })
                      ] }),
                      STRIPE_CARDS.map((c) => /* @__PURE__ */ jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => handleCopy(c.value, c.label),
                          className: "flex w-full items-center justify-between rounded surface-soft p-1.5 text-[10px] transition-colors hover:border-white/10",
                          children: [
                            /* @__PURE__ */ jsx("code", { className: `font-mono ${c.tone}`, children: c.value }),
                            /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3 text-muted-foreground" })
                          ]
                        },
                        c.value
                      )),
                      /* @__PURE__ */ jsxs("p", { className: "flex justify-between pt-1 text-[9px] text-muted-foreground", children: [
                        /* @__PURE__ */ jsx("span", { children: "CVC: Any 3 digits" }),
                        /* @__PURE__ */ jsx("span", { children: "Exp: Any future date" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-violet-glow", children: [
                        /* @__PURE__ */ jsx(Wallet, { className: "h-3 w-3" }),
                        /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-wider text-foreground", children: "PayPal Sandbox" })
                      ] }),
                      PAYPAL_CREDS.map((c) => /* @__PURE__ */ jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => handleCopy(c.value, c.label),
                          className: "flex w-full flex-col rounded surface-soft p-1.5 text-left text-[10px] transition-colors hover:border-white/10",
                          children: [
                            /* @__PURE__ */ jsxs("span", { className: "opacity-60", children: [
                              c.label,
                              ":"
                            ] }),
                            /* @__PURE__ */ jsx("code", { className: "break-all font-mono text-sky-400", children: c.value })
                          ]
                        },
                        c.label
                      ))
                    ] })
                  ] })
                }
              ) }),
              /* @__PURE__ */ jsxs("form", { onSubmit: handleStripeSubmit, className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Contributor Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      value: name,
                      onChange: (e) => setName(e.target.value),
                      required: true,
                      placeholder: "Enter your name",
                      className: "w-full rounded-lg surface-input px-4 py-3 text-foreground outline-none transition-all focus:border-magenta focus:ring-1 focus:ring-magenta/40"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Contribution Amount" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-3", children: [
                    [5, 10, 25].map((val) => /* @__PURE__ */ jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setAmount(val),
                        className: `rounded-lg border py-2 font-bold transition-all ${amount === val ? "border-magenta bg-magenta/10 text-magenta" : "border-white/10 text-muted-foreground hover:border-magenta/40"}`,
                        children: [
                          "$",
                          val
                        ]
                      },
                      val
                    )),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const custom = window.prompt("Enter amount:");
                          if (custom && !Number.isNaN(Number(custom))) setAmount(Number(custom));
                        },
                        className: `rounded-lg border py-2 transition-all ${![5, 10, 25].includes(amount) ? "border-magenta bg-magenta/10 text-magenta" : "border-white/10 text-muted-foreground hover:border-magenta/40"}`,
                        children: ![5, 10, 25].includes(amount) ? `$${amount}` : "Custom"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Payment Method" }),
                  /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: [
                    { id: "card", icon: CreditCard, label: "Card" },
                    { id: "paypal", icon: Wallet, label: "PayPal" }
                  ].map(({ id, icon: Icon, label }) => /* @__PURE__ */ jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setPaymentMethod(id),
                      className: `flex flex-1 items-center justify-center gap-2 rounded-lg border-2 p-4 transition-all ${paymentMethod === id ? "border-magenta bg-magenta/5" : "border-white/10 hover:bg-white/5"}`,
                      children: [
                        /* @__PURE__ */ jsx(
                          Icon,
                          {
                            className: `h-4 w-4 ${paymentMethod === id ? "text-magenta" : "text-muted-foreground"}`
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: paymentMethod === id ? "text-magenta" : "text-muted-foreground",
                            children: label
                          }
                        )
                      ]
                    },
                    id
                  )) })
                ] }),
                paymentMethod === "card" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("div", { className: "rounded-lg surface-input px-4 py-3.5", children: /* @__PURE__ */ jsx(CardElement, { options: CARD_ELEMENT_OPTIONS }) }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: !stripe || isProcessing,
                      className: "w-full rounded-xl py-4 font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60",
                      style: { background: "var(--gradient-aurora)" },
                      children: isProcessing ? "Processing…" : `Support $${amount}`
                    }
                  )
                ] }) : /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-white p-2", children: /* @__PURE__ */ jsx(
                  PayPalButtons,
                  {
                    style: { layout: "vertical", color: "gold", shape: "rect", label: "paypal" },
                    forceReRender: [amount],
                    disabled: isProcessing,
                    createOrder: async () => {
                      try {
                        const order = await createPayPalOrder.execute(amount);
                        return order.id;
                      } catch (err) {
                        toast.error(err instanceof Error ? err.message : "Could not create PayPal order");
                        throw err;
                      }
                    },
                    onApprove: async (data) => {
                      const toastId = toast.loading("Capturing PayPal payment…");
                      try {
                        const result = await capturePayPalOrder.execute(data.orderID);
                        if (result.status === "COMPLETED") {
                          toast.success(`PayPal payment completed — $${amount}`, { id: toastId });
                        } else {
                          toast.message(`PayPal status: ${result.status}`, { id: toastId });
                        }
                      } catch (err) {
                        toast.error(err instanceof Error ? err.message : "Capture failed", { id: toastId });
                      }
                    },
                    onError: (err) => {
                      toast.error(err instanceof Error ? err.message : "PayPal error");
                    }
                  }
                ) }),
                /* @__PURE__ */ jsx("p", { className: "text-center text-xs text-muted-foreground", children: "Real test-mode processing — use the sandbox credentials above." })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          className: "relative flex items-center justify-center",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute left-1/2 top-0 z-10 flex -translate-x-1/2 items-center gap-3", children: [
              /* @__PURE__ */ jsx(Smartphone, { className: "h-4 w-4 text-magenta" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground", children: "Flutter Mobile Mockup" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(PhoneMockup, { flutterAppUrl: "https://nouradawy.github.io/payment-Gateway/" }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setShowBreakdown((v) => !v),
        className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-foreground backdrop-blur-md transition-all hover:border-magenta hover:bg-magenta/10",
        children: [
          showBreakdown ? "Hide Breakdown" : "Read Architectural Breakdown",
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              className: `h-4 w-4 transition-transform ${showBreakdown ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: showBreakdown && /* @__PURE__ */ jsx(
      motion.article,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        className: "mt-10 overflow-hidden",
        children: /* @__PURE__ */ jsxs("div", { className: "glass-card mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 md:p-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "rounded-full border border-magenta/40 bg-magenta/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-magenta", children: "Engineering" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Deep dive · 6 min read" })
          ] }),
          /* @__PURE__ */ jsxs("h3", { className: "font-display text-4xl leading-tight tracking-wide text-foreground md:text-5xl", children: [
            "Architecting a ",
            /* @__PURE__ */ jsx("span", { className: "text-aurora", children: "Cross-Platform" }),
            " ",
            "Payment Gateway"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-6 text-base leading-relaxed text-muted-foreground md:text-lg", children: [
            "Implementing a payment system that lives natively on both a",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Flutter mobile app" }),
            " and a",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "React web client" }),
            " — while sharing one source of truth — required separating the channel-specific concerns from the business logic. Most developers tie their code directly to Stripe or PayPal's SDKs, so every UI requires its own rewrite. The pattern below isolates the ceremony of ",
            /* @__PURE__ */ jsx("em", { children: "how" }),
            " we charge from the certainty of ",
            /* @__PURE__ */ jsx("em", { children: "what" }),
            " we charge."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "my-10 overflow-hidden rounded-2xl surface-input p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-magenta/30 bg-magenta/5 p-5 text-center", children: [
                /* @__PURE__ */ jsx(Layers, { className: "mx-auto mb-2 h-6 w-6 text-magenta" }),
                /* @__PURE__ */ jsx("p", { className: "font-display text-lg tracking-wide", children: "Flutter Client" }),
                /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-widest text-muted-foreground", children: "Mobile UI" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-violet-glow/30 bg-violet-glow/5 p-5 text-center", children: [
                /* @__PURE__ */ jsx(Layers, { className: "mx-auto mb-2 h-6 w-6 text-violet-glow" }),
                /* @__PURE__ */ jsx("p", { className: "font-display text-lg tracking-wide", children: "React Web" }),
                /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-widest text-muted-foreground", children: "Browser UI" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "my-4 flex items-center justify-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-foreground/20" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.3em]", children: "Use case" }),
              /* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-foreground/20" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-foreground/15 bg-foreground/5 p-5 text-center", children: [
              /* @__PURE__ */ jsx(GitBranch, { className: "mx-auto mb-2 h-6 w-6 text-foreground" }),
              /* @__PURE__ */ jsx("p", { className: "font-display text-lg tracking-wide", children: "ProcessPayment · Domain" }),
              /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-widest text-muted-foreground", children: "Pure business logic" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "my-4 flex items-center justify-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-foreground/20" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.3em]", children: "Repository" }),
              /* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-foreground/20" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-5 text-center", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "mx-auto mb-2 h-6 w-6 text-emerald-400" }),
              /* @__PURE__ */ jsx("p", { className: "font-display text-lg tracking-wide", children: "Stripe · PayPal · Supabase Functions" }),
              /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-widest text-muted-foreground", children: "Swappable data layer" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "font-display text-2xl tracking-wide text-magenta", children: "The Logic Layer" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 text-base leading-relaxed text-muted-foreground", children: [
            "By isolating an ",
            /* @__PURE__ */ jsx("code", { className: "rounded bg-white/10 px-1.5 py-0.5 text-xs text-foreground", children: "Adapter" }),
            " ",
            "interface, we decouple the call site from the provider-specific SDK. The client never imports Stripe or PayPal — it depends on an abstract contract. That keeps the domain layer reusable across Flutter and React, and makes the migration story ",
            /* @__PURE__ */ jsx("em", { children: '"swap a class, not a codebase."' })
          ] }),
          /* @__PURE__ */ jsxs("pre", { className: "mt-6 overflow-x-auto rounded-2xl surface-code p-6 text-xs leading-relaxed", children: [
            /* @__PURE__ */ jsxs("span", { className: "mb-3 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-rose-500/70" }),
              /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-amber-400/70" }),
              /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-400/70" })
            ] }),
            /* @__PURE__ */ jsx("code", { className: "font-mono", children: `abstract class PaymentAdapter {
  Future<PaymentResult> charge(Money amount, Customer c);
}

class ProcessPayment {
  final PaymentAdapter adapter;
  ProcessPayment(this.adapter);

  Future<PaymentResult> call(Order order) async {
    final result = await adapter.charge(order.total, order.customer);
    if (result.isFailure) throw PaymentDeclined(result.reason);
    return result; // domain stays SDK-agnostic
  }
}` })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-5 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.03] p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center gap-2 text-magenta", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.2em]", children: "Key technical insights" })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx(Zap, { className: "mt-0.5 h-4 w-4 shrink-0 text-magenta" }),
                  "Adapters isolate vendor SDKs — switching providers touches a single file."
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx(Zap, { className: "mt-0.5 h-4 w-4 shrink-0 text-magenta" }),
                  "Domain throws typed errors; UI shows recovery flows without parsing strings."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.03] p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center gap-2 text-violet-glow", children: [
                /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.2em]", children: "Senior perspective" })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx(Zap, { className: "mt-0.5 h-4 w-4 shrink-0 text-violet-glow" }),
                  "Testing without sandboxes — fake adapters keep CI fast and deterministic."
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx(Zap, { className: "mt-0.5 h-4 w-4 shrink-0 text-violet-glow" }),
                  "Boundary-first thinking forces honest contracts before shipping integrations."
                ] })
              ] })
            ] })
          ] })
        ] })
      }
    ) })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
function TimelineItem({ project }) {
  const isMobile = project.platform === "Android";
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [galleryHovered, setGalleryHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const hasImages = project.images.length > 0;
  const showGallery = hovered || open;
  useEffect(() => {
    if (!showGallery || galleryHovered || project.images.length < 2) return;
    const id = setInterval(
      () => setImgIndex((i) => (i + 1) % project.images.length),
      2200
    );
    return () => clearInterval(id);
  }, [showGallery, galleryHovered, project.images.length]);
  useEffect(() => {
    if (!showGallery) setImgIndex(0);
  }, [showGallery]);
  const firstPoint = project.descriptionPoints[0];
  const restPoints = project.descriptionPoints.slice(1);
  return /* @__PURE__ */ jsxs(
    motion.li,
    {
      variants: fadeUp,
      className: "relative",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      children: [
        /* @__PURE__ */ jsxs("span", { className: "absolute left-3 top-6 hidden h-4 w-4 -translate-x-1/2 items-center justify-center md:flex md:left-5", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-electric/30 blur-md" }),
          /* @__PURE__ */ jsx("span", { className: "relative h-2 w-2 rounded-full bg-electric shadow-glow-electric" })
        ] }),
        /* @__PURE__ */ jsxs(
          motion.article,
          {
            layout: true,
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            className: "glass-card group overflow-hidden rounded-2xl transition-colors hover:border-magenta/40 md:ml-12 lg:ml-16",
            children: [
              hasImages && /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: showGallery && /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: isMobile ? 380 : 200, opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  className: "relative overflow-hidden",
                  onMouseEnter: () => setGalleryHovered(true),
                  onMouseLeave: () => setGalleryHovered(false),
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        "aria-hidden": true,
                        className: "absolute inset-0 opacity-50",
                        style: {
                          background: isMobile ? "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--magenta) 45%, transparent), transparent 60%), radial-gradient(circle at 70% 80%, color-mix(in oklab, var(--violet-glow) 45%, transparent), transparent 60%)" : "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--electric) 45%, transparent), transparent 60%), radial-gradient(circle at 70% 80%, color-mix(in oklab, var(--violet-glow) 40%, transparent), transparent 60%)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: (() => {
                      const media = project.images[imgIndex];
                      const isVideo = typeof media !== "string";
                      if (isVideo) {
                        return /* @__PURE__ */ jsx(
                          motion.iframe,
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
                      return /* @__PURE__ */ jsx(
                        motion.img,
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
                          loading: "lazy"
                        },
                        imgIndex
                      );
                    })() }),
                    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" }),
                    project.images.length > 1 && /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5", children: project.images.map((_, i) => /* @__PURE__ */ jsx(
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
              /* @__PURE__ */ jsxs("div", { className: "p-5 md:p-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "rounded-full border border-magenta/40 bg-magenta/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-magenta", children: project.position }),
                  /* @__PURE__ */ jsxs("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
                    project.startDate,
                    " — ",
                    project.endDate
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[9px] uppercase tracking-widest text-muted-foreground", children: [
                    isMobile ? /* @__PURE__ */ jsx(Smartphone, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx(Globe, { className: "h-3 w-3" }),
                    project.platform
                  ] })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "mt-2.5 font-display text-2xl tracking-wide text-foreground md:text-3xl", children: project.title }),
                project.appIdea ? /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-xs uppercase tracking-wider text-violet-glow", children: project.appIdea }) : null,
                firstPoint ? /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: firstPoint }) : null,
                /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => setOpen((o) => !o),
                      className: "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-medium text-magenta transition hover:text-foreground",
                      "aria-expanded": open,
                      children: [
                        open ? "Show less" : "Show more",
                        /* @__PURE__ */ jsx(
                          motion.span,
                          {
                            animate: { rotate: open ? 180 : 0 },
                            transition: { duration: 0.3 },
                            children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
                          }
                        )
                      ]
                    }
                  ),
                  hasImages && !showGallery ? /* @__PURE__ */ jsxs("span", { className: "hidden md:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: [
                    /* @__PURE__ */ jsx(ImageIcon, { className: "h-3 w-3" }),
                    project.images.length,
                    " screens"
                  ] }) : null,
                  project.github ? /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: project.github,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground transition-colors hover:border-magenta hover:text-magenta",
                      children: [
                        /* @__PURE__ */ jsx(Github, { className: "h-3 w-3" }),
                        "Source"
                      ]
                    }
                  ) : null
                ] }),
                /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: { height: 0, opacity: 0 },
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    className: "overflow-hidden",
                    children: /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-4 border-t border-white/10 pt-4", children: [
                      restPoints.length > 0 && /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm leading-relaxed text-muted-foreground", children: restPoints.map((point, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-magenta" }),
                        /* @__PURE__ */ jsx("span", { children: point })
                      ] }, i)) }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "mb-2 text-[10px] uppercase tracking-widest text-muted-foreground", children: "Stack" }),
                        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: project.stack.map((tech) => /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx(Dialog, { open: lightboxIndex !== null, onOpenChange: (o) => !o && setLightboxIndex(null), children: /* @__PURE__ */ jsx(
          DialogContent,
          {
            className: "max-w-[95vw] border-white/10 bg-background/95 p-0 backdrop-blur-xl sm:max-w-5xl [&>button]:hidden",
            children: lightboxIndex !== null && (() => {
              const media = project.images[lightboxIndex];
              const isVideo = typeof media !== "string";
              return /* @__PURE__ */ jsxs("div", { className: "relative flex h-[85vh] w-full items-center justify-center overflow-auto", children: [
                isVideo ? /* @__PURE__ */ jsx(
                  "iframe",
                  {
                    src: media.url,
                    title: `${project.title} video`,
                    className: "h-full w-full",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    allowFullScreen: true
                  }
                ) : /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: media,
                    alt: `${project.title} full preview ${lightboxIndex + 1}`,
                    className: "max-h-full max-w-full object-contain"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setLightboxIndex(null),
                    "aria-label": "Close",
                    className: "absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground transition hover:border-magenta hover:text-magenta",
                    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
                  }
                ),
                project.images.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => setLightboxIndex(
                        (lightboxIndex - 1 + project.images.length) % project.images.length
                      ),
                      "aria-label": "Previous",
                      className: "absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground transition hover:border-magenta hover:text-magenta",
                      children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5" })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => setLightboxIndex((lightboxIndex + 1) % project.images.length),
                      "aria-label": "Next",
                      className: "absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground transition hover:border-magenta hover:text-magenta",
                      children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5" })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
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
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () => filter === "All" ? projects2 : projects2.filter((p) => p.category === filter),
    [filter, projects2]
  );
  return { filter, setFilter, filtered };
}
const FILTERS = ["All", "Mobile Apps", "Web Apps"];
function ProjectsTimelineSection() {
  const { filter, setFilter, filtered } = useProjectFilter(projects);
  const years = useMemo(() => {
    const all = Array.from(new Set(projects.map((p) => p.year)));
    return all.sort((a, b) => Number(b) - Number(a));
  }, []);
  const [activeYear, setActiveYear] = useState(null);
  const visible = activeYear ? filtered.filter((p) => p.year === activeYear) : filtered;
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "bg-background px-6 pt-12 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-[280px_1fr] lg:gap-16", children: [
    /* @__PURE__ */ jsxs("aside", { className: "lg:sticky lg:top-24 lg:self-start", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-6xl leading-none tracking-tight md:text-7xl", children: [
        "TIME",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-aurora", children: "MACHINE." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xs text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground", children: "A journey through time, builds, stacks, passion, battle-tested code." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: FILTERS.map((f) => {
        const active = filter === f;
        return /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col gap-1 border-l border-white/10 pl-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveYear(null),
            className: `text-left font-mono text-xs uppercase tracking-widest transition-colors ${activeYear === null ? "text-magenta" : "text-muted-foreground hover:text-foreground"}`,
            children: "ALL YEARS"
          }
        ),
        years.map((y) => /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          "aria-hidden": true,
          className: "absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-magenta/40 via-violet-glow/30 to-transparent md:block md:left-5"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.ul,
        {
          variants: staggerContainer,
          initial: "hidden",
          animate: "visible",
          className: "max-w-3xl space-y-8",
          children: visible.map((project) => /* @__PURE__ */ jsx(TimelineItem, { project }, project.id))
        },
        `${filter}-${activeYear ?? "all"}`
      )
    ] })
  ] }) });
}
class EmailJSContactRepository {
  constructor(serviceId, templateId, publicKey) {
    this.serviceId = serviceId;
    this.templateId = templateId;
    this.publicKey = publicKey;
  }
  serviceId;
  templateId;
  publicKey;
  async sendMessage(formElement) {
    return emailjs.sendForm(this.serviceId, this.templateId, formElement, this.publicKey);
  }
}
class SendContactMessage {
  constructor(repository) {
    this.repository = repository;
  }
  repository;
  execute(formElement) {
    return this.repository.sendMessage(formElement);
  }
}
const SERVICE_ID = "service_r1ni6b5";
const TEMPLATE_ID = "template_m3rty6b";
const PUBLIC_KEY = "Ef9RY5lEbWGrgd73s";
function useContact() {
  const repository = useMemo(
    () => new EmailJSContactRepository(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY),
    []
  );
  const sendContactMessage = useMemo(() => new SendContactMessage(repository), [repository]);
  return { sendContactMessage };
}
function ContactSection() {
  const form = useRef(null);
  const [buttonText, setButtonText] = useState("Send Message");
  const [isSuccess, setIsSuccess] = useState(false);
  const { sendContactMessage } = useContact();
  const avatarAsset = "public/assets/Avatar.png";
  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;
    setButtonText("Sending...");
    sendContactMessage.execute(form.current).then(
      () => {
        setButtonText("Message Sent!");
        setIsSuccess(true);
        form.current?.reset();
        setTimeout(() => {
          setButtonText("Send Message");
          setIsSuccess(false);
        }, 3e3);
      },
      () => {
        setButtonText("Failed to send");
        setTimeout(() => setButtonText("Send Message"), 3e3);
      }
    );
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "contact",
      className: "relative flex w-full flex-col items-center overflow-hidden px-6 pt-12 pb-32",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-[120px]",
            style: {
              background: "radial-gradient(circle, color-mix(in oklab, var(--magenta) 18%, transparent), color-mix(in oklab, var(--violet-glow) 8%, transparent), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full blur-[100px]",
            style: {
              background: "radial-gradient(circle, color-mix(in oklab, var(--ember, #ec5b13) 18%, transparent), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            variants: staggerContainer,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, amount: 0.2 },
            className: "z-10 grid w-full max-w-7xl grid-cols-1 items-start gap-10 md:gap-40 lg:grid-cols-2",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-8", children: [
                /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex w-fit items-center space-x-2 rounded-full border border-violet-glow/20 bg-violet-glow/10 px-3 py-1", children: [
                    /* @__PURE__ */ jsx("span", { className: "h-2 w-2 animate-pulse rounded-full bg-violet-glow" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-violet-glow", children: "Available for Hire" })
                  ] }),
                  /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl leading-[0.95] tracking-tight text-foreground md:text-6xl", children: [
                    "Let's build the",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "text-magenta drop-shadow-[0_0_18px_color-mix(in_oklab,var(--magenta)_55%,transparent)]", children: "future" }),
                    " ",
                    "together."
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "max-w-md text-lg leading-relaxed text-muted-foreground", children: "Have a project in mind or just want to say hi? I'm always open to discussing new creative ideas or bold visions." })
                ] }),
                /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "space-y-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: "Connect Elsewhere" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        "aria-label": "LinkedIn",
                        href: "https://www.linkedin.com/in/nouradawy/",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "group glass-card flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:border-magenta/50",
                        children: /* @__PURE__ */ jsx(FaLinkedinIn, { className: "text-xl text-muted-foreground transition-colors group-hover:text-magenta" })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        "aria-label": "Behance",
                        href: "https://www.behance.net/gamerhypeee",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "group glass-card flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:border-violet-glow/50",
                        children: /* @__PURE__ */ jsx(FaBehance, { className: "text-xl text-muted-foreground transition-colors group-hover:text-violet-glow" })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        "aria-label": "GitHub",
                        href: "https://github.com/Nouradawy",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "group glass-card flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:border-electric/50",
                        children: /* @__PURE__ */ jsx(FaGithub, { className: "text-xl text-muted-foreground transition-colors group-hover:text-electric" })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "flex items-center space-x-4 pt-4", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-violet-glow/40",
                      style: { background: "var(--gradient-aurora)" },
                      children: /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: avatarAsset,
                          alt: "Nouradawy avatar",
                          className: "h-full w-full object-cover"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-foreground", children: "Nouradawy" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Full-Stack Software Engineer" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  variants: fadeUp,
                  className: "glass-card relative overflow-hidden rounded-3xl p-8 shadow-2xl md:p-10",
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        "aria-hidden": true,
                        className: "absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-magenta/30 to-transparent blur-2xl"
                      }
                    ),
                    /* @__PURE__ */ jsxs("form", { ref: form, onSubmit: sendEmail, className: "relative z-10 space-y-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsx("label", { className: "ml-1 text-sm font-medium text-muted-foreground", children: "Full Name" }),
                        /* @__PURE__ */ jsx(
                          "input",
                          {
                            name: "user_name",
                            required: true,
                            type: "text",
                            placeholder: "Enter your name",
                            className: "w-full rounded-xl surface-input px-4 py-4 text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-magenta focus:ring-1 focus:ring-magenta/30"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsx("label", { className: "ml-1 text-sm font-medium text-muted-foreground", children: "Email Address" }),
                        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                          /* @__PURE__ */ jsx(
                            "input",
                            {
                              name: "user_email",
                              required: true,
                              type: "email",
                              placeholder: "hello@example.com",
                              className: "w-full rounded-xl surface-input px-4 py-4 pr-12 text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-violet-glow focus:ring-1 focus:ring-violet-glow/30"
                            }
                          ),
                          /* @__PURE__ */ jsx(Mail, { className: "absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsx("label", { className: "ml-1 text-sm font-medium text-muted-foreground", children: "Your Message" }),
                        /* @__PURE__ */ jsx(
                          "textarea",
                          {
                            name: "message",
                            required: true,
                            rows: 4,
                            placeholder: "Tell me about your project...",
                            className: "w-full resize-none rounded-xl surface-input px-4 py-4 text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-magenta focus:ring-1 focus:ring-magenta/30"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs(
                        "button",
                        {
                          type: "submit",
                          disabled: buttonText === "Sending...",
                          className: `group flex w-full items-center justify-center space-x-2 rounded-xl py-4 font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${isSuccess ? "bg-emerald-500 shadow-emerald-500/20" : "shadow-magenta/30"}`,
                          style: !isSuccess ? { background: "var(--gradient-aurora)" } : void 0,
                          children: [
                            /* @__PURE__ */ jsx("span", { children: buttonText }),
                            !isSuccess && /* @__PURE__ */ jsx(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs("p", { className: "pt-2 text-center text-xs text-muted-foreground", children: [
                        "Expected response time:",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-violet-glow", children: "Under 24 hours" })
                      ] })
                    ] })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function FooterSection() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-white/10 px-6 py-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row", children: [
    /* @__PURE__ */ jsx("p", { children: "© 2026 Nouradawy. All rights reserved." }),
    /* @__PURE__ */ jsxs("div", { className: "flex space-x-6", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "transition-colors hover:text-magenta", children: "Privacy Policy" }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "transition-colors hover:text-magenta", children: "Terms of Service" })
    ] })
  ] }) });
}
function CinematicCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const spotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let rx = tx;
    let ry = ty;
    let sx = tx;
    let sy = ty;
    let raf = 0;
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      }
    };
    const onDown = () => ringRef.current?.classList.add("cc-press");
    const onUp = () => ringRef.current?.classList.remove("cc-press");
    const onOver = (e) => {
      const t = e.target;
      if (!t) return;
      const interactive = t.closest(
        'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="hover"]'
      );
      ringRef.current?.classList.toggle("cc-hover", !!interactive);
    };
    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      sx += (tx - sx) * 0.06;
      sy += (ty - sy) * 0.06;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${sx}px, ${sy}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointerover", onOver, { passive: true });
    const prevCursor = document.documentElement.style.cursor;
    document.documentElement.style.cursor = "none";
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.style.cursor = prevCursor;
    };
  }, []);
  if (!enabled) return null;
  return /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 z-[9999]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: spotRef,
        className: "absolute h-[520px] w-[520px] rounded-full opacity-[0.18] blur-3xl",
        style: {
          background: "radial-gradient(circle, color-mix(in oklab, var(--electric) 70%, transparent) 0%, transparent 60%)",
          willChange: "transform"
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: ringRef,
        className: "cc-ring absolute h-9 w-9 rounded-full border border-white/40 backdrop-blur-[2px] transition-[width,height,background-color,border-color,opacity] duration-200 ease-out",
        style: { willChange: "transform", boxShadow: "0 0 24px rgba(120,160,255,0.35)" }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: dotRef,
        className: "absolute h-1.5 w-1.5 rounded-full bg-foreground",
        style: { willChange: "transform", boxShadow: "0 0 12px rgba(255,255,255,0.6)" }
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
        .cc-ring.cc-hover {
          width: 64px;
          height: 64px;
          background: color-mix(in oklab, var(--violet-glow) 18%, transparent);
          border-color: color-mix(in oklab, var(--violet-glow) 70%, transparent);
          box-shadow: 0 0 40px color-mix(in oklab, var(--violet-glow) 60%, transparent);
        }
        .cc-ring.cc-press {
          transform-origin: center;
          transform: translate3d(var(--x,0), var(--y,0), 0) translate(-50%,-50%) scale(0.78);
        }
      ` })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsx(CinematicCursor, {}),
    /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx(PortfolioSummarySection, {}),
      /* @__PURE__ */ jsx(PaymentShowcaseSection, {}),
      /* @__PURE__ */ jsx(ProjectsTimelineSection, {}),
      /* @__PURE__ */ jsx(ContactSection, {}),
      /* @__PURE__ */ jsx(FooterSection, {}),
      /* @__PURE__ */ jsx(Toaster, {})
    ] })
  ] });
}
export {
  Index as component
};
