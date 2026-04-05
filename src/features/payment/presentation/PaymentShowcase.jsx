import { useMemo, useState } from "react";
import PhoneMockup from "../../../core/components/PhoneMockup.jsx";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PayPalButtons } from "@paypal/react-paypal-js";
import toast from 'react-hot-toast';
import { usePayment } from "./hooks/usePayment.js";
import {RiSupabaseFill} from "react-icons/ri";
import {BiUnite} from "react-icons/bi";

/**
 * PaymentShowcase
 * - "Read Architectural Breakdown" uses React state
 * - form uses onSubmit to prevent refresh
 */
export default function PaymentShowcase() {
    const [showBreakdown, setShowBreakdown] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' or 'paypal'
    const [amount, setAmount] = useState(5);
    const [isProcessing, setIsProcessing] = useState(false);
    const [name, setName] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { processStripePayment, createPayPalOrder: createPayPalOrderUseCase, capturePayPalOrder: capturePayPalOrderUseCase } = usePayment();

    const toggleLabel = useMemo(
        () => (showBreakdown ? "Hide Breakdown" : "Read Architectural Breakdown"),
        [showBreakdown]
    );

   const handleSubmit = async (event) => {
           event.preventDefault();
           if (!stripe || !elements || isProcessing) return;

           setIsProcessing(true);
           const toastId = toast.loading("Processing...");

           try {
               // 1. Call your Use Case to get the Client Secret
               const data = await processStripePayment.execute(amount * 100, 'usd', name);

               // 2. Use the secret to confirm the payment
               const cardElement = elements.getElement(CardElement);
               const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(data.clientSecret, {
                   payment_method: {
                       card: cardElement,
                       billing_details: { name: name },
                   },
               });

               if (stripeError) {
                   toast.error(stripeError.message, { id: toastId });
               } else if (paymentIntent.status === "succeeded") {
                   toast.success("Payment Successful!", { id: toastId });
               }
           } catch (err) {
               toast.error(err.message, { id: toastId });
           } finally {
               setIsProcessing(false);
           }
       };
    // PAYPAL HANDLER
    const handleCreatePayPalOrder = async () => {
       try {
           const data = await createPayPalOrderUseCase.execute(amount);
           return data.id; // This matches the standard PayPal Order ID field
       } catch (err) {
           toast.error("PayPal Init Error: " + err.message);
       }
    };

    const onPayPalApprove = async (data) => {
        const toastId = toast.loading("Finalizing PayPal payment...");
        try {
            const captureData = await capturePayPalOrderUseCase.execute(data.orderID);

            if (captureData.status === "COMPLETED") {
                toast.success("PayPal Payment Success!", { id: toastId });
            } else {
                toast.error("Payment status: " + captureData.status, { id: toastId });
            }
        } catch (err) {
            toast.error("Capture failed: " + err.message, { id: toastId });
        }
    };

    return (
        <section
            className={`${showBreakdown ? "relative":"sticky top-[min(0px,calc(100vh-170%))] md:top-[min(0px,calc(100vh-130%))]"} z-20 my-20 mt-40 px-4 sm:px-6 lg:px-8 overflow-hidden`}
            id="payment-showcase"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-16">
                    <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-glow text-gray-600">
                        Interactive{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7cf5] to-[#c97cff]">
              Showcase
            </span>
                    </h2>
                    <p className="text-[#adaaaa] text-lg md:text-xl max-w-2xl leading-relaxed">
                        Test driving a live Flutter web build.
                        Interact with the UI and experience the performance directly in your browser.
                        Explore the mechanics behind a seamless payment gateway.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
                    {/* Web Integration */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-7">
              <span
                  className="material-symbols-outlined text-[#ff7cf5]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
              >
                desktop_windows
              </span>
                            <span className="font-headline font-bold uppercase tracking-widest text-xs text-[#adaaaa]">
                Web Integration
              </span>
                        </div>

                        <div className="glass-panel p-8 rounded-xl border border-[#494847]/20 shadow-2xl">
                            <h3 className="font-headline text-2xl font-bold mb-6">
                                Fuel the Alchemist
                            </h3>

                            <form
                                className="space-y-6"
                                onSubmit={handleSubmit}
                            >
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-[#adaaaa] uppercase tracking-wider">
                                        Contributor Name
                                    </label>
                                    <input
                                        className="w-full bg-[#000000] border border-[#494847]/30 rounded-lg px-4 py-3 text-[#ffffff] focus:outline-none focus:border-[#ff7cf5] focus:ring-1 focus:ring-[#ff7cf5] transition-all"
                                        placeholder="Enter your name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-[#adaaaa] uppercase tracking-wider">
                                        Contribution Amount
                                    </label>
                                    <div className="grid grid-cols-4 gap-3">
                                        {[5, 10, 25].map((val) => (
                                            <button
                                                key={val}
                                                className={`py-2 rounded-lg border transition-all font-bold ${
                                                    amount === val
                                                        ? "border-[#ff7cf5] bg-[#ff7cf5]/10 text-[#ff7cf5]"
                                                        : "border-[#494847]/30 text-[#adaaaa] hover:border-[#ff7cf5]/40"
                                                }`}
                                                type="button"
                                                onClick={() => setAmount(val)}
                                            >
                                                ${val}
                                            </button>
                                        ))}
                                        <button
                                            className={`py-2 rounded-lg border transition-all ${
                                                ![5, 10, 25].includes(amount)
                                                    ? "border-[#ff7cf5] bg-[#ff7cf5]/10 text-[#ff7cf5]"
                                                    : "border-[#494847]/30 text-[#adaaaa] hover:border-[#ff7cf5]/40"
                                            }`}
                                            type="button"
                                            onClick={() => {
                                                const custom = prompt("Enter amount:");
                                                if (custom && !isNaN(custom)) setAmount(Number(custom));
                                            }}
                                        >
                                            {![5, 10, 25].includes(amount) ? `$${amount}` : "Custom"}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-[#adaaaa] uppercase tracking-wider">
                                        Payment Method
                                    </label>

                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod('card')}
                                            className={`flex-1 p-4 rounded-lg border-2 flex items-center justify-center gap-2 cursor-pointer transition-all ${
                                                paymentMethod === 'card'
                                                    ? "border-[#ff7cf5] bg-[#ff7cf5]/5"
                                                    : "border-[#494847]/30 hover:bg-white/5"
                                            }`}
                                        >
                                            <span className={`material-symbols-outlined ${paymentMethod === 'card' ? "text-[#ff7cf5]" : "text-[#adaaaa]"}`}>
                                                credit_card
                                            </span>
                                            <span className={`font-bold text-sm ${paymentMethod === 'card' ? "text-white" : "text-[#adaaaa]"}`}>Card</span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod('paypal')}
                                            className={`flex-1 p-4 rounded-lg border-2 flex items-center justify-center gap-2 cursor-pointer transition-all ${
                                                paymentMethod === 'paypal'
                                                    ? "border-[#ff7cf5] bg-[#ff7cf5]/5"
                                                    : "border-[#494847]/30 hover:bg-white/5"
                                            }`}
                                        >
                                            <span className={`material-symbols-outlined ${paymentMethod === 'paypal' ? "text-[#ff7cf5]" : "text-[#adaaaa]"}`}>
                                                account_balance_wallet
                                            </span>
                                            <span className={`font-bold text-sm ${paymentMethod === 'paypal' ? "text-white" : "text-[#adaaaa]"}`}>
                                                PayPal
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {paymentMethod === 'card' ? (
                                    <div className="space-y-4">
                                        <div className="p-4 bg-black border border-[#494847]/30 rounded-lg">
                                            <CardElement
                                                options={{
                                                    style: {
                                                        base: {
                                                            fontSize: '16px',
                                                            color: '#ffffff',
                                                            '::placeholder': {
                                                                color: '#adaaaa',
                                                            },
                                                        },
                                                        invalid: {
                                                            color: '#ff7cf5',
                                                        },
                                                    },
                                                }}
                                            />
                                        </div>
                                        <button
                                            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff7cf5] to-[#ff5af9] text-[#580058] font-black text-lg tracking-tight uppercase transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,124,245,0.3)] disabled:opacity-50"
                                            type="submit"
                                            disabled={!stripe || isProcessing}
                                        >
                                            {isProcessing ? "Processing..." : `Support $${amount}`}
                                        </button>
                                    </div>
                                ) : (
                                    <div className="relative z-0">
                                        <PayPalButtons
                                            style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
                                            createOrder={handleCreatePayPalOrder}
                                            onApprove={onPayPalApprove}
                                        />
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Flutter Mobile Mockup (static mockup) */}
                    <div className="flex flex-col items-center justify-center lg:items-end">
                        <div className="flex items-center gap-3 mb-6 self-start lg:self-end lg:mr-22">
              <span
                  className="material-symbols-outlined text-[#c97cff]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
              >
                smartphone
              </span>
                            <span className="font-headline font-bold uppercase tracking-widest text-xs text-[#adaaaa]">
                Flutter Mobile Mockup
              </span>
                        </div>

                        <PhoneMockup flutterAppUrl={"https://nouradawy.github.io/payment-Gateway/"} />
                    </div>
                </div>

                {/* Toggle Button */}
                <div className="mt-12 text-center ">
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#ff7cf5]/30 bg-[#ff7cf5]/5 text-[#ff7cf5] font-bold hover:bg-[#ff7cf5]/10 transition-all font-headline text-lg group"
                        onClick={() => setShowBreakdown((v) => !v)}
                    >
                        {toggleLabel}
                        <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">
              expand_more
            </span>
                    </button>

                </div>

                {/* Article Section */}
                <article
                    id="architectural-breakdown"
                    className={`mt-16 bg-[#131313] rounded-3xl p-8 md:p-16 border border-[#494847]/10 ${
                        showBreakdown ? "" : "hidden"
                    }`}
                >
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 rounded-full bg-[#c97cff]/20 text-[#c97cff] text-xs font-bold uppercase tracking-widest">
                Engineering
              </span>
                            <span className="text-[#adaaaa] text-sm">8 Min Read</span>
                        </div>

                        <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-gray-400">
                            Architecting a Cross-Platform Payment Gateway
                        </h2>

                        <p className="text-[#adaaaa] text-lg leading-relaxed mb-10">
                            Implementing a payment system that feels native on both
                            high-resolution web canvases and tactile mobile interfaces requires
                            more than just API calls. we have to make sure <strong> Web (React) </strong> and <strong> Mobile (Flutter) </strong> implementations behave identically.
                            <br/> Most developers leak provider-specific logic into their UI.
                             I solved this by implementing the Adapter Pattern, creating a layer that acts
                             as a universal translator for any payment provider.
                        </p>

                        {/* Architectural Diagram */}
                        <div className="mb-12 aspect-video rounded-2xl overflow-hidden bg-black border border-[#494847]/20 relative group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,124,255,0.1),transparent)] group-hover:opacity-100 transition-opacity" />

                            <div className="flex items-center justify-center h-full flex-col gap-2">

                                {/* ROW 1: THE CLIENTS */}
                                <div className="flex gap-8 mb-2">
                                    <div className="w-24 h-24 rounded-xl border border-[#ff7cf5]/50 flex items-center justify-center flex-col gap-2 glass-panel">
                                        <span className="material-symbols-outlined text-[#ff7cf5]">language</span>
                                        <span className="text-[10px] font-bold text-white">React Web</span>
                                    </div>

                                    <div className="w-24 h-24 rounded-xl border border-[#c97cff]/50 flex items-center justify-center flex-col gap-2 glass-panel">
                                        <span className="material-symbols-outlined text-[#c97cff]">flutter</span>
                                        <span className="text-[10px] font-bold text-white">Flutter App</span>
                                    </div>
                                </div>

                                {/* STEP 1 & 2: THE HANDSHAKE LOOP */}
                                <div className="flex items-center gap-12 relative">
                                    {/* Down Arrow (Request) */}
                                    <div className="flex flex-col items-center">
                                        <span className="material-symbols-outlined text-[#ff7cf5] text-sm">south</span>
                                        <span className="text-[8px] text-[#adaaaa] font-bold uppercase tracking-tighter">1. Create Intent</span>
                                    </div>

                                    {/* Up Arrow (The "Replay" / Client Secret) */}
                                    <div className="flex flex-col items-center">
                                        <span className="material-symbols-outlined text-[#c97cff] text-sm">north</span>
                                        <span className="text-[8px] text-[#c97cff] font-bold uppercase tracking-tighter">2. Client Secret</span>
                                    </div>
                                </div>

                                {/* ROW 2: THE BACKEND (Unified Core) */}
                                <div className="flex flex-row items-center gap-4">
                                    <div className="w-48 h-14 rounded-xl border border-white/20 glass-panel flex flex-col items-center justify-center">
                                        <div className="flex items-center gap-2 text-white">
                                            <BiUnite size={16}/>
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Unified Adapter</span>
                                        </div>
                                    </div>

                                    <span className="material-symbols-outlined text-neutral-600">east</span>

                                    <div className="w-48 h-14 rounded-xl border border-white/20 glass-panel flex flex-col items-center justify-center">
                                        <div className="flex items-center gap-2 text-white">
                                            <RiSupabaseFill size={16} className="text-[#3ecf8e]"/>
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Edge Functions</span>
                                        </div>
                                    </div>
                                </div>

                                {/* STEP 3: FINAL SETTLEMENT */}
                                <div className="flex flex-col items-center mt-2">
                                    <span className="material-symbols-outlined text-neutral-600">south</span>
                                    <span className="text-[8px] text-[#adaaaa] font-bold uppercase tracking-tighter">3. Finalize Payment</span>
                                </div>

                                {/* ROW 3: THE PROVIDER SDKS */}
                                <div className="flex gap-4">
                                    <div className="px-6 py-2 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#6772e5] animate-pulse" />
                                        <span className="text-[10px] text-white font-medium">Stripe SDK</span>
                                    </div>

                                    <div className="px-6 py-2 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#003087] animate-pulse" />
                                        <span className="text-[10px] text-white font-medium">PayPal SDK</span>
                                    </div>
                                </div>

                            </div>

                            <div className="absolute bottom-4 right-4 text-[10px] text-[#adaaaa] uppercase font-bold tracking-widest opacity-50">
                                Gateway Fig. 01: Secure Intent Flow
                            </div>
                        </div>

                        <h3 className="font-headline text-2xl font-bold mb-4 text-[#ff7cf5]">
                            The Logic Layer
                        </h3>

                        <p className="text-[#adaaaa] leading-relaxed mb-6">
                            By utilizing the <strong>Adapter Pattern</strong>, we decouple the
                            UI from the provider-specific SDK. This allows our Flutter client
                            to communicate with the same backend microservices as our React
                            frontend, Whether the user selects 'Card' or 'PayPal', the UI interacts with a unified 'Use Case' object.
                            This ensures that transaction states, error handling, and loading sequences remain synced across the entire ecosystem.
                        </p>

                        {/* Code Snippet */}
                        <div className="bg-[#000000] rounded-xl p-6 font-mono text-sm border border-[#494847]/20 mb-10 overflow-x-auto">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>

                            <pre className="text-[#adaaaa] whitespace-pre-wrap">
{`Future<void> handlePayment(PaymentsGateway gateway) async {
  // 1. Unified Handshake (Fetch Intent/Secret)
  final intent = await paymentRepository.fetchPaymentIntent(amount, 'usd');

  // 2. Platform-Specific Execution via Adapter
  if(gateway == PaymentsGateway.stripe) {
    if (kIsWeb) {
      webPaymentSheet(context, intent['url']); // Web Adapter
    } else {
      await _showNativeStripeSheet(intent['clientSecret']); // Mobile Adapter
    }
  }
}`}
              </pre>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#494847]/20 pt-10">
                            <div>
                                <h4 className="font-bold mb-6 text-white text-xl flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#ff7cf5]">insights</span>
                                    Key Technical Insights
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-[#ff7cf5] text-sm mt-1">auto_awesome</span>
                                        <span className="text-[#adaaaa] italic text-sm">
                                            Seamless handoffs between desktop browsing and mobile payment confirmation via unified state.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-[#ff7cf5] text-sm mt-1">security</span>
                                        <span className="text-[#adaaaa] italic text-sm">
                                            Cryptographic signing of payloads across both TypeScript and Dart implementations for secure processing.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-6 text-white text-xl flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#ff7cf5]">psychology</span>
                                    Senior Perspective
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-[#ff7cf5] text-sm mt-1">rebase_edit</span>
                                        <span className="text-[#adaaaa] italic text-sm">
                                            <strong>Provider Agility:</strong> Adding new gateways (like Apple Pay) requires zero changes to UI code.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-[#ff7cf5] text-sm mt-1">biotech</span>
                                        <span className="text-[#adaaaa] italic text-sm">
                                            <strong>Testability:</strong> Payment logic is decoupled from React, allowing for pure logic unit testing.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
