import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { l as loadStripe } from "../_libs/stripe__stripe-js.mjs";
import { E as Elements, u as useStripe, a as useElements, C as CardElement } from "../_libs/stripe__react-stripe-js.mjs";
import { P as PayPalScriptProvider, a as PayPalButtons } from "../_libs/paypal__react-paypal-js.mjs";
import { s as staggerContainer, f as fadeUp } from "./index-C_kqASHK.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { m, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { f as CreditCard, E as EyeOff, g as Eye, h as Copy, W as Wallet, e as Smartphone, i as ChevronDown, L as Layers, G as GitBranch, j as ShieldCheck, k as Sparkles, Z as Zap, l as Lightbulb } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/prop-types.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.phoneContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.phoneCase, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.phoneScreen, children: flutterAppUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.iframeWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        src: flutterAppUrl,
        title: "Flutter Payment Demo",
        allow: "payment"
      }
    ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full", children }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.dynamicIsland, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.cameraLens }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.homeIndicator }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.screenGlare }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.volumeUp }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.volumeDown }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.powerButton })
  ] }) });
}
function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    m.div,
    {
      variants: staggerContainer,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.4 },
      className: `mb-14 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          m.span,
          {
            variants: fadeUp,
            className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-electric shadow-glow-electric" }),
              eyebrow
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          m.h2,
          {
            variants: fadeUp,
            className: "mt-5 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl",
            children: title
          }
        ),
        subtitle ? /* @__PURE__ */ jsxRuntimeExports.jsx(m.p, { variants: fadeUp, className: "mt-5 text-base text-muted-foreground md:text-lg", children: subtitle }) : null
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
  const repository = reactExports.useMemo(() => new SupabasePaymentRepository(), []);
  const processStripePayment = reactExports.useMemo(() => new ProcessStripePayment(repository), [repository]);
  const createPayPalOrder = reactExports.useMemo(() => new CreatePayPalOrder(repository), [repository]);
  const capturePayPalOrder = reactExports.useMemo(() => new CapturePayPalOrder(repository), [repository]);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Elements, { stripe: stripePromise, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PayPalScriptProvider, { options: { clientId: paypalClientId, currency: "USD", intent: "capture" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentShowcaseInner, {}) }) });
}
function PaymentShowcaseInner() {
  const [showBreakdown, setShowBreakdown] = reactExports.useState(false);
  const [showTestCredentials, setShowTestCredentials] = reactExports.useState(false);
  const [paymentMethod, setPaymentMethod] = reactExports.useState("card");
  const [amount, setAmount] = reactExports.useState(5);
  const [name, setName] = reactExports.useState("");
  const [isProcessing, setIsProcessing] = reactExports.useState(false);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "payment-showcase", className: "relative px-6 pt-12 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Interactive Showcase",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Interactive ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-aurora", children: "Showcase" })
        ] }),
        subtitle: "Test driving a live Flutter web build. Interact with the UI and experience the performance directly in your browser. Explore the mechanics behind a seamless payment gateway."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        m.div,
        {
          variants: staggerContainer,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.2 },
          className: "space-y-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(m.div, { variants: fadeUp, className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-4 w-4 text-magenta" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground", children: "Web Integration" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(m.div, { variants: fadeUp, className: "glass-card rounded-2xl p-8 shadow-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-start justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl tracking-wide", children: "Make a Donation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowTestCredentials((v) => !v),
                    className: "flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-tighter transition-all hover:bg-white/10",
                    children: [
                      showTestCredentials ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3" }),
                      showTestCredentials ? "Hide Test Cards" : "Show Test Cards"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showTestCredentials && /* @__PURE__ */ jsxRuntimeExports.jsx(
                m.div,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  transition: { duration: 0.3 },
                  className: "mb-6 overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 rounded-lg border border-white/10 bg-white/5 p-4 sm:grid-cols-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-magenta", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-3 w-3" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-wider text-foreground", children: "Stripe Test Cards" })
                      ] }),
                      STRIPE_CARDS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => handleCopy(c.value, c.label),
                          className: "flex w-full items-center justify-between rounded surface-soft p-1.5 text-[10px] transition-colors hover:border-white/10",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: `font-mono ${c.tone}`, children: c.value }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3 text-muted-foreground" })
                          ]
                        },
                        c.value
                      )),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex justify-between pt-1 text-[9px] text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CVC: Any 3 digits" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Exp: Any future date" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-violet-glow", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3 w-3" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-wider text-foreground", children: "PayPal Sandbox" })
                      ] }),
                      PAYPAL_CREDS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => handleCopy(c.value, c.label),
                          className: "flex w-full flex-col rounded surface-soft p-1.5 text-left text-[10px] transition-colors hover:border-white/10",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-60", children: [
                              c.label,
                              ":"
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "break-all font-mono text-sky-400", children: c.value })
                          ]
                        },
                        c.label
                      ))
                    ] })
                  ] })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleStripeSubmit, className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Contributor Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Contribution Amount" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-3", children: [
                    [5, 10, 25].map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Payment Method" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4", children: [
                    { id: "card", icon: CreditCard, label: "Card" },
                    { id: "paypal", icon: Wallet, label: "PayPal" }
                  ].map(({ id, icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setPaymentMethod(id),
                      className: `flex flex-1 items-center justify-center gap-2 rounded-lg border-2 p-4 transition-all ${paymentMethod === id ? "border-magenta bg-magenta/5" : "border-white/10 hover:bg-white/5"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Icon,
                          {
                            className: `h-4 w-4 ${paymentMethod === id ? "text-magenta" : "text-muted-foreground"}`
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                paymentMethod === "card" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg surface-input px-4 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardElement, { options: CARD_ELEMENT_OPTIONS }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: !stripe || isProcessing,
                      className: "w-full rounded-xl py-4 font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60",
                      style: { background: "var(--gradient-aurora)" },
                      children: isProcessing ? "Processing…" : `Support $${amount}`
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-white p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "Real test-mode processing — use the sandbox credentials above." })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        m.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          className: "relative flex items-center justify-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute left-1/2 top-0 z-10 flex -translate-x-1/2 items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-4 w-4 text-magenta" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground", children: "Flutter Mobile Mockup" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneMockup, { flutterAppUrl: "https://nouradawy.github.io/payment-Gateway/" }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setShowBreakdown((v) => !v),
        className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-foreground backdrop-blur-md transition-all hover:border-magenta hover:bg-magenta/10",
        children: [
          showBreakdown ? "Hide Breakdown" : "Read Architectural Breakdown",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              className: `h-4 w-4 transition-transform ${showBreakdown ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showBreakdown && /* @__PURE__ */ jsxRuntimeExports.jsx(
      m.article,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        className: "mt-10 overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 md:p-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-magenta/40 bg-magenta/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-magenta", children: "Engineering" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Deep dive · 6 min read" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-4xl leading-tight tracking-wide text-foreground md:text-5xl", children: [
            "Architecting a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-aurora", children: "Cross-Platform" }),
            " ",
            "Payment Gateway"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-base leading-relaxed text-muted-foreground md:text-lg", children: [
            "Implementing a payment system that lives natively on both a",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Flutter mobile app" }),
            " and a",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "React web client" }),
            " — while sharing one source of truth — required separating the channel-specific concerns from the business logic. Most developers tie their code directly to Stripe or PayPal's SDKs, so every UI requires its own rewrite. The pattern below isolates the ceremony of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "how" }),
            " we charge from the certainty of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "what" }),
            " we charge."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-10 overflow-hidden rounded-2xl surface-input p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-magenta/30 bg-magenta/5 p-5 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "mx-auto mb-2 h-6 w-6 text-magenta" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg tracking-wide", children: "Flutter Client" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-widest text-muted-foreground", children: "Mobile UI" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-violet-glow/30 bg-violet-glow/5 p-5 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "mx-auto mb-2 h-6 w-6 text-violet-glow" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg tracking-wide", children: "React Web" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-widest text-muted-foreground", children: "Browser UI" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4 flex items-center justify-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-foreground/20" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em]", children: "Use case" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-foreground/20" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-foreground/15 bg-foreground/5 p-5 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "mx-auto mb-2 h-6 w-6 text-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg tracking-wide", children: "ProcessPayment · Domain" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-widest text-muted-foreground", children: "Pure business logic" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4 flex items-center justify-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-foreground/20" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em]", children: "Repository" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-foreground/20" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-5 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "mx-auto mb-2 h-6 w-6 text-emerald-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg tracking-wide", children: "Stripe · PayPal · Supabase Functions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-widest text-muted-foreground", children: "Swappable data layer" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-2xl tracking-wide text-magenta", children: "The Logic Layer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-base leading-relaxed text-muted-foreground", children: [
            "By isolating an ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "rounded bg-white/10 px-1.5 py-0.5 text-xs text-foreground", children: "Adapter" }),
            " ",
            "interface, we decouple the call site from the provider-specific SDK. The client never imports Stripe or PayPal — it depends on an abstract contract. That keeps the domain layer reusable across Flutter and React, and makes the migration story ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: '"swap a class, not a codebase."' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "mt-6 overflow-x-auto rounded-2xl surface-code p-6 text-xs leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-3 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-rose-500/70" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-amber-400/70" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-400/70" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono", children: `abstract class PaymentAdapter {
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-5 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.03] p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-magenta", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.2em]", children: "Key technical insights" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "mt-0.5 h-4 w-4 shrink-0 text-magenta" }),
                  "Adapters isolate vendor SDKs — switching providers touches a single file."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "mt-0.5 h-4 w-4 shrink-0 text-magenta" }),
                  "Domain throws typed errors; UI shows recovery flows without parsing strings."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.03] p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-violet-glow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.2em]", children: "Senior perspective" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "mt-0.5 h-4 w-4 shrink-0 text-violet-glow" }),
                  "Testing without sandboxes — fake adapters keep CI fast and deterministic."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "mt-0.5 h-4 w-4 shrink-0 text-violet-glow" }),
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
export {
  PaymentShowcaseSection
};
