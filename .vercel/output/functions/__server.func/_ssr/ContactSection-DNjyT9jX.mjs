import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { F as FaLinkedinIn, a as FaBehance, b as FaGithub } from "../_libs/react-icons.mjs";
import { e as emailjs } from "../_libs/emailjs__browser.mjs";
import { s as staggerContainer, f as fadeUp } from "./index-B2pXRVXk.mjs";
import "../_libs/sonner.mjs";
import { m } from "../_libs/framer-motion.mjs";
import { q as Mail, r as Send } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
  const repository = reactExports.useMemo(
    () => new EmailJSContactRepository(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY),
    []
  );
  const sendContactMessage = reactExports.useMemo(() => new SendContactMessage(repository), [repository]);
  return { sendContactMessage };
}
function ContactSection() {
  const form = reactExports.useRef(null);
  const [buttonText, setButtonText] = reactExports.useState("Send Message");
  const [isSuccess, setIsSuccess] = reactExports.useState(false);
  const { sendContactMessage } = useContact();
  const avatarAsset = "/assets/Avatar.png";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "contact",
      className: "relative flex w-full flex-col items-center overflow-hidden px-6 pt-12 pb-32",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-[120px]",
            style: {
              background: "radial-gradient(circle, color-mix(in oklab, var(--magenta) 18%, transparent), color-mix(in oklab, var(--violet-glow) 8%, transparent), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full blur-[100px]",
            style: {
              background: "radial-gradient(circle, color-mix(in oklab, var(--ember, #ec5b13) 18%, transparent), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          m.div,
          {
            variants: staggerContainer,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, amount: 0.2 },
            className: "z-10 grid w-full max-w-7xl grid-cols-1 items-start gap-10 md:gap-40 lg:grid-cols-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(m.div, { variants: fadeUp, className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex w-fit items-center space-x-2 rounded-full border border-violet-glow/20 bg-violet-glow/10 px-3 py-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 animate-pulse rounded-full bg-violet-glow" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-violet-glow", children: "Available for Hire" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl leading-[0.95] tracking-tight text-foreground md:text-6xl", children: [
                    "Let's build the",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-magenta drop-shadow-[0_0_18px_color-mix(in_oklab,var(--magenta)_55%,transparent)]", children: "future" }),
                    " ",
                    "together."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-lg leading-relaxed text-muted-foreground", children: "Have a project in mind or just want to say hi? I'm always open to discussing new creative ideas or bold visions." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(m.div, { variants: fadeUp, className: "space-y-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: "Connect Elsewhere" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        "aria-label": "LinkedIn",
                        href: "https://www.linkedin.com/in/nouradawy/",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "group glass-card flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:border-magenta/50",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaLinkedinIn, { className: "text-xl text-muted-foreground transition-colors group-hover:text-magenta" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        "aria-label": "Behance",
                        href: "https://www.behance.net/gamerhypeee",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "group glass-card flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:border-violet-glow/50",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaBehance, { className: "text-xl text-muted-foreground transition-colors group-hover:text-violet-glow" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        "aria-label": "GitHub",
                        href: "https://github.com/Nouradawy",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "group glass-card flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:border-electric/50",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaGithub, { className: "text-xl text-muted-foreground transition-colors group-hover:text-electric" })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(m.div, { variants: fadeUp, className: "flex items-center space-x-4 pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-violet-glow/40",
                      style: { background: "var(--gradient-aurora)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: avatarAsset,
                          alt: "Nouradawy avatar",
                          loading: "lazy",
                          decoding: "async",
                          className: "h-full w-full object-cover"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-foreground", children: "Nouradawy" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Full-Stack Software Engineer" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                m.div,
                {
                  variants: fadeUp,
                  className: "glass-card relative overflow-hidden rounded-3xl p-8 shadow-2xl md:p-10",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        "aria-hidden": true,
                        className: "absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-magenta/30 to-transparent blur-2xl"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { ref: form, onSubmit: sendEmail, className: "relative z-10 space-y-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "ml-1 text-sm font-medium text-muted-foreground", children: "Full Name" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "ml-1 text-sm font-medium text-muted-foreground", children: "Email Address" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              name: "user_email",
                              required: true,
                              type: "email",
                              placeholder: "hello@example.com",
                              className: "w-full rounded-xl surface-input px-4 py-4 pr-12 text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-violet-glow focus:ring-1 focus:ring-violet-glow/30"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "ml-1 text-sm font-medium text-muted-foreground", children: "Your Message" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "submit",
                          disabled: buttonText === "Sending...",
                          className: `group flex w-full items-center justify-center space-x-2 rounded-xl py-4 font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${isSuccess ? "bg-emerald-500 shadow-emerald-500/20" : "shadow-magenta/30"}`,
                          style: !isSuccess ? { background: "var(--gradient-aurora)" } : void 0,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: buttonText }),
                            !isSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "pt-2 text-center text-xs text-muted-foreground", children: [
                        "Expected response time:",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-violet-glow", children: "Under 24 hours" })
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
export {
  ContactSection
};
