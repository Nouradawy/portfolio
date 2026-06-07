import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Copy, CreditCard, Eye, EyeOff, Wallet, ChevronDown, GitBranch, Layers, Lightbulb, Sparkles, ShieldCheck, Zap, Smartphone, Zap as ZapIcon, CheckCircle2, Circle } from "lucide-react";
import { toast } from "sonner";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PhoneMockup } from "../components/PhoneMockup";
import { SectionHeading } from "../components/SectionHeading";
import { fadeUp, staggerContainer } from "../animations/variants";
import { usePayment } from "../../usecases/usePayment";

type PaymentMethod = "card" | "paypal";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string);
const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID as string;

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#ffffff",
      fontFamily: "Inter, system-ui, sans-serif",
      fontSize: "15px",
      "::placeholder": { color: "rgba(255,255,255,0.4)" },
      iconColor: "#ff2d95",
    },
    invalid: { color: "#f87171", iconColor: "#f87171" },
  },
} as const;

const STRIPE_CARDS = [
  { label: "Success", value: "4242424242424242", tone: "text-emerald-400" },
  { label: "Decline", value: "4000000000009995", tone: "text-rose-400" },
];

const PAYPAL_CREDS = [
  { label: "Email", value: "sb-c3jdb50318792@personal.example.com" },
  { label: "Password", value: "M|C7Ko*=" },
];

export function PaymentShowcaseSection() {
  return (
    <Elements stripe={stripePromise}>
      <PayPalScriptProvider options={{ clientId: paypalClientId, currency: "USD", intent: "capture" }}>
        <PaymentShowcaseInner />
      </PayPalScriptProvider>
    </Elements>
  );
}

function PaymentShowcaseInner() {
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [showTestCredentials, setShowTestCredentials] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [amount, setAmount] = useState(5);
  const [name, setName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const { processStripePayment, createPayPalOrder, capturePayPalOrder } = usePayment();

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied ${label}`);
  };

  const handleStripeSubmit = async (event: React.FormEvent) => {
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
        payment_method: { card: cardElement, billing_details: { name } },
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


  return (
    <section id="payment-showcase" className="relative px-6 pt-12 pb-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Interactive Showcase"
          title={
            <>
              Interactive <span className="text-aurora">Showcase</span>
            </>
          }
          subtitle="Test driving a live Flutter web build. Interact with the UI and experience the performance directly in your browser. Explore the mechanics behind a seamless payment gateway."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* LEFT: Web Integration */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <m.div variants={fadeUp} className="flex items-center gap-3">
              <CreditCard className="h-4 w-4 text-magenta" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                Web Integration
              </span>
            </m.div>

            <m.div variants={fadeUp} className="glass-card rounded-2xl p-8 shadow-2xl">
              <div className="mb-6 flex items-start justify-between">
                <h3 className="font-display text-3xl tracking-wide">Make a Donation</h3>
                <button
                  type="button"
                  onClick={() => setShowTestCredentials((v) => !v)}
                  className="flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-tighter transition-all hover:bg-white/10"
                >
                  {showTestCredentials ? (
                    <EyeOff className="h-3 w-3" />
                  ) : (
                    <Eye className="h-3 w-3" />
                  )}
                  {showTestCredentials ? "Hide Test Cards" : "Show Test Cards"}
                </button>
              </div>

              <AnimatePresence>
                {showTestCredentials && (
                  <m.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-4 rounded-lg border border-white/10 bg-white/5 p-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-magenta">
                          <CreditCard className="h-3 w-3" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                            Stripe Test Cards
                          </span>
                        </div>
                        {STRIPE_CARDS.map((c) => (
                          <button
                            key={c.value}
                            type="button"
                            onClick={() => handleCopy(c.value, c.label)}
                            className="flex w-full items-center justify-between rounded surface-soft p-1.5 text-[10px] transition-colors hover:border-white/10"
                          >
                            <code className={`font-mono ${c.tone}`}>{c.value}</code>
                            <Copy className="h-3 w-3 text-muted-foreground" />
                          </button>
                        ))}
                        <p className="flex justify-between pt-1 text-[9px] text-muted-foreground">
                          <span>CVC: Any 3 digits</span>
                          <span>Exp: Any future date</span>
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-violet-glow">
                          <Wallet className="h-3 w-3" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                            PayPal Sandbox
                          </span>
                        </div>
                        {PAYPAL_CREDS.map((c) => (
                          <button
                            key={c.label}
                            type="button"
                            onClick={() => handleCopy(c.value, c.label)}
                            className="flex w-full flex-col rounded surface-soft p-1.5 text-left text-[10px] transition-colors hover:border-white/10"
                          >
                            <span className="opacity-60">{c.label}:</span>
                            <code className="break-all font-mono text-sky-400">{c.value}</code>
                          </button>
                        ))}
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleStripeSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Contributor Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-lg surface-input px-4 py-3 text-foreground outline-none transition-all focus:border-magenta focus:ring-1 focus:ring-magenta/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Contribution Amount
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {[5, 10, 25].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setAmount(val)}
                        className={`rounded-lg border py-2 font-bold transition-all ${
                          amount === val
                            ? "border-magenta bg-magenta/10 text-magenta"
                            : "border-white/10 text-muted-foreground hover:border-magenta/40"
                        }`}
                      >
                        ${val}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        const custom = window.prompt("Enter amount:");
                        if (custom && !Number.isNaN(Number(custom))) setAmount(Number(custom));
                      }}
                      className={`rounded-lg border py-2 transition-all ${
                        ![5, 10, 25].includes(amount)
                          ? "border-magenta bg-magenta/10 text-magenta"
                          : "border-white/10 text-muted-foreground hover:border-magenta/40"
                      }`}
                    >
                      {![5, 10, 25].includes(amount) ? `$${amount}` : "Custom"}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Payment Method
                  </label>
                  <div className="flex gap-4">
                    {([
                      { id: "card", icon: CreditCard, label: "Card" },
                      { id: "paypal", icon: Wallet, label: "PayPal" },
                    ] as const).map(({ id, icon: Icon, label }) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setPaymentMethod(id)}
                        className={`flex flex-1 items-center justify-center gap-2 rounded-lg border-2 p-4 transition-all ${
                          paymentMethod === id
                            ? "border-magenta bg-magenta/5"
                            : "border-white/10 hover:bg-white/5"
                        }`}
                      >
                        <Icon
                          className={`h-4 w-4 ${paymentMethod === id ? "text-magenta" : "text-muted-foreground"}`}
                        />
                        <span
                          className={paymentMethod === id ? "text-magenta" : "text-muted-foreground"}
                        >
                          {label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {paymentMethod === "card" ? (
                  <>
                    <div className="rounded-lg surface-input px-4 py-3.5">
                      <CardElement options={CARD_ELEMENT_OPTIONS} />
                    </div>
                    <button
                      type="submit"
                      disabled={!stripe || isProcessing}
                      className="w-full rounded-xl py-4 font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                      style={{ background: "var(--gradient-aurora)" }}
                    >
                      {isProcessing ? "Processing…" : `Support $${amount}`}
                    </button>
                  </>
                ) : (
                  <div className="rounded-lg bg-white p-2">
                    <PayPalButtons
                      style={{ layout: "vertical", color: "gold", shape: "rect", label: "paypal" }}
                      forceReRender={[amount]}
                      disabled={isProcessing}
                      createOrder={async () => {
                        try {
                          const order = await createPayPalOrder.execute(amount);
                          return order.id;
                        } catch (err) {
                          toast.error(err instanceof Error ? err.message : "Could not create PayPal order");
                          throw err;
                        }
                      }}
                      onApprove={async (data) => {
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
                      }}
                      onError={(err) => {
                        toast.error(err instanceof Error ? err.message : "PayPal error");
                      }}
                    />
                  </div>
                )}

                <p className="text-center text-xs text-muted-foreground">
                  Real test-mode processing — use the sandbox credentials above.
                </p>
              </form>

            </m.div>
          </m.div>

          {/* RIGHT: Phone mockup */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="pointer-events-none absolute left-1/2 top-0 z-10 flex -translate-x-1/2 items-center gap-3">
              <Smartphone className="h-4 w-4 text-magenta" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                Flutter Mobile Mockup
              </span>
            </div>

            <div className="flex items-center justify-center">
              <PhoneMockup flutterAppUrl="https://nouradawy.github.io/payment-Gateway/" />
            </div>
          </m.div>
        </div>

        {/* Architectural breakdown — full-width article */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowBreakdown((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-foreground backdrop-blur-md transition-all hover:border-magenta hover:bg-magenta/10"
          >
            {showBreakdown ? "Hide Breakdown" : "Read Architectural Breakdown"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${showBreakdown ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        <AnimatePresence>
          {showBreakdown && (
            <m.article
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 overflow-hidden"
            >
              <div className="glass-card mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 md:p-12">
                {/* Eyebrow */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="rounded-full border border-magenta/40 bg-magenta/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-magenta">
                    Engineering
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Deep dive · 6 min read
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-4xl leading-tight tracking-wide text-foreground md:text-5xl">
                  Architecting a <span className="text-aurora">Cross-Platform</span>{" "}
                  Payment Gateway
                </h3>

                {/* Intro */}
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Implementing a payment system that lives natively on both a{" "}
                  <span className="text-foreground">Flutter mobile app</span> and a{" "}
                  <span className="text-foreground">React web client</span> — while sharing one
                  source of truth — required separating the channel-specific concerns from the
                  business logic. Most developers tie their code directly to Stripe or PayPal's
                  SDKs, so every UI requires its own rewrite. The pattern below isolates the
                  ceremony of <em>how</em> we charge from the certainty of <em>what</em> we
                  charge.
                </p>

                {/* Diagram */}
                <div className="my-10 overflow-hidden rounded-2xl surface-input p-8">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-magenta/30 bg-magenta/5 p-5 text-center">
                      <Layers className="mx-auto mb-2 h-6 w-6 text-magenta" />
                      <p className="font-display text-lg tracking-wide">Flutter Client</p>
                      <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                        Mobile UI
                      </p>
                    </div>
                    <div className="rounded-xl border border-violet-glow/30 bg-violet-glow/5 p-5 text-center">
                      <Layers className="mx-auto mb-2 h-6 w-6 text-violet-glow" />
                      <p className="font-display text-lg tracking-wide">React Web</p>
                      <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                        Browser UI
                      </p>
                    </div>
                  </div>

                  <div className="my-4 flex items-center justify-center gap-2 text-muted-foreground">
                    <span className="h-px w-12 bg-foreground/20" />
                    <span className="text-[10px] uppercase tracking-[0.3em]">Use case</span>
                    <span className="h-px w-12 bg-foreground/20" />
                  </div>

                  <div className="rounded-xl border border-foreground/15 bg-foreground/5 p-5 text-center">
                    <GitBranch className="mx-auto mb-2 h-6 w-6 text-foreground" />
                    <p className="font-display text-lg tracking-wide">ProcessPayment · Domain</p>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      Pure business logic
                    </p>
                  </div>

                  <div className="my-4 flex items-center justify-center gap-2 text-muted-foreground">
                    <span className="h-px w-12 bg-foreground/20" />
                    <span className="text-[10px] uppercase tracking-[0.3em]">Repository</span>
                    <span className="h-px w-12 bg-foreground/20" />
                  </div>

                  <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-5 text-center">
                    <ShieldCheck className="mx-auto mb-2 h-6 w-6 text-emerald-400" />
                    <p className="font-display text-lg tracking-wide">
                      Stripe · PayPal · Supabase Functions
                    </p>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      Swappable data layer
                    </p>
                  </div>
                </div>

                {/* Section: Logic Layer */}
                <h4 className="font-display text-2xl tracking-wide text-magenta">
                  The Logic Layer
                </h4>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  By isolating an <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-foreground">Adapter</code>{" "}
                  interface, we decouple the call site from the provider-specific SDK. The
                  client never imports Stripe or PayPal — it depends on an abstract
                  contract. That keeps the domain layer reusable across Flutter and React,
                  and makes the migration story <em>"swap a class, not a codebase."</em>
                </p>

                {/* Code block */}
                <pre className="mt-6 overflow-x-auto rounded-2xl surface-code p-6 text-xs leading-relaxed">
                  <span className="mb-3 flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  </span>
                  <code className="font-mono">
{`abstract class PaymentAdapter {
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
}`}
                  </code>
                </pre>

                {/* Two-column footer cards */}
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="mb-3 flex items-center gap-2 text-magenta">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                        Key technical insights
                      </span>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-magenta" />
                        Adapters isolate vendor SDKs — switching providers touches a single file.
                      </li>
                      <li className="flex gap-2">
                        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-magenta" />
                        Domain throws typed errors; UI shows recovery flows without parsing strings.
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="mb-3 flex items-center gap-2 text-violet-glow">
                      <Lightbulb className="h-4 w-4" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                        Senior perspective
                      </span>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-violet-glow" />
                        Testing without sandboxes — fake adapters keep CI fast and deterministic.
                      </li>
                      <li className="flex gap-2">
                        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-violet-glow" />
                        Boundary-first thinking forces honest contracts before shipping integrations.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </m.article>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
