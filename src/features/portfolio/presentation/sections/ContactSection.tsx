import { useRef, useState, type FormEvent } from "react";
import { m } from "framer-motion";
import { FaBehance, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, Send } from "lucide-react";
import { useContact } from "../../usecases/useContact";
import { fadeUp, staggerContainer } from "../animations/variants";

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [buttonText, setButtonText] = useState("Send Message");
  const [isSuccess, setIsSuccess] = useState(false);
  const { sendContactMessage } = useContact();
  const avatarAsset = "/assets/Avatar.png";

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
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
        }, 3000);
      },
      () => {
        setButtonText("Failed to send");
        setTimeout(() => setButtonText("Send Message"), 3000);
      },
    );
  };

  return (
    <section
      id="contact"
      className="relative flex w-full flex-col items-center overflow-hidden px-6 pt-12 pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--magenta) 18%, transparent), color-mix(in oklab, var(--violet-glow) 8%, transparent), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--ember, #ec5b13) 18%, transparent), transparent)",
        }}
      />

      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="z-10 grid w-full max-w-7xl grid-cols-1 items-start gap-10 md:gap-40 lg:grid-cols-2"
      >
        <div className="flex flex-col space-y-8">
          <m.div variants={fadeUp} className="space-y-4">
            <div className="inline-flex w-fit items-center space-x-2 rounded-full border border-violet-glow/20 bg-violet-glow/10 px-3 py-1">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-glow" />
              <span className="text-xs font-bold uppercase tracking-widest text-violet-glow">
                Available for Hire
              </span>
            </div>
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-foreground md:text-6xl">
              Let's build the{" "}
              <span className="text-magenta drop-shadow-[0_0_18px_color-mix(in_oklab,var(--magenta)_55%,transparent)]">
                future
              </span>{" "}
              together.
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Have a project in mind or just want to say hi? I'm always open to discussing new
              creative ideas or bold visions.
            </p>
          </m.div>

          <m.div variants={fadeUp} className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Connect Elsewhere
            </h3>
            <div className="flex gap-4">
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/nouradawy/"
                target="_blank"
                rel="noreferrer"
                className="group glass-card flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:border-magenta/50"
              >
                <FaLinkedinIn className="text-xl text-muted-foreground transition-colors group-hover:text-magenta" />
              </a>
              <a
                aria-label="Behance"
                href="https://www.behance.net/gamerhypeee"
                target="_blank"
                rel="noreferrer"
                className="group glass-card flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:border-violet-glow/50"
              >
                <FaBehance className="text-xl text-muted-foreground transition-colors group-hover:text-violet-glow" />
              </a>
              <a
                aria-label="GitHub"
                href="https://github.com/Nouradawy"
                target="_blank"
                rel="noreferrer"
                className="group glass-card flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:border-electric/50"
              >
                <FaGithub className="text-xl text-muted-foreground transition-colors group-hover:text-electric" />
              </a>
            </div>
          </m.div>

          <m.div variants={fadeUp} className="flex items-center space-x-4 pt-4">
            <div
              className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-violet-glow/40"
              style={{ background: "var(--gradient-aurora)" }}
            >
              <img
                src={avatarAsset}
                alt="Nouradawy avatar"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">Nouradawy</p>
              <p className="text-sm text-muted-foreground">Full-Stack Software Engineer</p>
            </div>
          </m.div>
        </div>

        <m.div
          variants={fadeUp}
          className="glass-card relative overflow-hidden rounded-3xl p-8 shadow-2xl md:p-10"
        >
          <div
            aria-hidden
            className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-magenta/30 to-transparent blur-2xl"
          />
          <form ref={form} onSubmit={sendEmail} className="relative z-10 space-y-6">
            <div className="space-y-2">
              <label className="ml-1 text-sm font-medium text-muted-foreground">Full Name</label>
              <input
                name="user_name"
                required
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl surface-input px-4 py-4 text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-magenta focus:ring-1 focus:ring-magenta/30"
              />
            </div>
            <div className="space-y-2">
              <label className="ml-1 text-sm font-medium text-muted-foreground">
                Email Address
              </label>
              <div className="relative">
                <input
                  name="user_email"
                  required
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full rounded-xl surface-input px-4 py-4 pr-12 text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-violet-glow focus:ring-1 focus:ring-violet-glow/30"
                />
                <Mail className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="ml-1 text-sm font-medium text-muted-foreground">Your Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl surface-input px-4 py-4 text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-magenta focus:ring-1 focus:ring-magenta/30"
              />
            </div>
            <button
              type="submit"
              disabled={buttonText === "Sending..."}
              className={`group relative flex w-full items-center justify-center space-x-2 rounded-xl py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 ${
                isSuccess
                  ? "bg-emerald-500 shadow-[0_0_24px_rgba(16,185,129,0.4)]"
                  : "shadow-[0_0_24px_rgba(217,70,239,0.35)] hover:shadow-[0_0_36px_rgba(217,70,239,0.55)]"
              }`}
              style={!isSuccess ? { background: "var(--gradient-aurora)" } : undefined}
            >
              <span>{buttonText}</span>
              {!isSuccess && (
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              )}
            </button>
            <p className="pt-2 text-center text-xs text-muted-foreground">
              Expected response time:{" "}
              <span className="font-medium text-violet-glow">Under 24 hours</span>
            </p>
          </form>
        </m.div>
      </m.div>
    </section>
  );
}
