import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { whatsunityContent, type Locale } from "@/features/whatsunity-landing/data/whatsunityContent";
import { WhatsunityHeader } from "@/features/whatsunity-landing/components/WhatsunityHeader";
import { WhatsunityHero } from "@/features/whatsunity-landing/components/WhatsunityHero";
import { WhatsunityCaseStudy } from "@/features/whatsunity-landing/components/WhatsunityCaseStudy";
import { WhatsunityInteractiveHub } from "@/features/whatsunity-landing/components/WhatsunityInteractiveHub";
import { WhatsunityAeoSection } from "@/features/whatsunity-landing/components/WhatsunityAeoSection";
import { WhatsunityFaqSection } from "@/features/whatsunity-landing/components/WhatsunityFaqSection";
import { WhatsunityCtaFooter } from "@/features/whatsunity-landing/components/WhatsunityCtaFooter";
import { WhatsunityCatalogModal } from "@/features/whatsunity-catalog/components/WhatsunityCatalogModal";
import { WhatsunityPresentationModal } from "@/features/whatsunity-landing/components/WhatsunityPresentationModal";

export const Route = createFileRoute("/whatsunity")({
  head: () => ({
    meta: [
      {
        title:
          "WhatsUnity — One Home. One Subscription. Your Entire Household Included | Compound OS",
      },
      {
        name: "description",
        content:
          "WhatsUnity turns your compound into a connected, secure, digitally managed community. One home. One subscription. Your entire household included — with 100% offline QR gate security, unit-verified resident directories, and automated 9-role maintenance workflows.",
      },
      {
        name: "keywords",
        content:
          "WhatsUnity, one home one subscription, connected secure digitally managed community, gated community operating system, verified resident directory, offline gate pass QR, Clean Architecture Flutter, SQLite local master, Appwrite realtime, Telegram integration, Cloudflare R2, Nouradawy",
      },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { name: "theme-color", content: "#05070a" },
      // OpenGraph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "WhatsUnity Compound OS" },
      {
        property: "og:title",
        content: "WhatsUnity — One Home. One Subscription. Your Entire Household Included",
      },
      {
        property: "og:description",
        content:
          "WhatsUnity turns your compound into a connected, secure, digitally managed community. 100% offline QR gate passes, dual-engine messaging, and household-inclusive licensing.",
      },
      { property: "og:url", content: "https://www.nouradawy.tech/whatsunity" },
      {
        property: "og:image",
        content: "https://www.nouradawy.tech/assets/projects/Whatsunity/catalog/Home_screen_community.png",
      },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "WhatsUnity — One Home. One Subscription. Your Entire Household Included",
      },
      {
        name: "twitter:description",
        content:
          "WhatsUnity turns your compound into a connected, secure, digitally managed community. Built with Flutter Clean Architecture.",
      },
      {
        name: "twitter:image",
        content: "https://www.nouradawy.tech/assets/projects/Whatsunity/catalog/Home_screen_community.png",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.nouradawy.tech/whatsunity" },
      { rel: "alternate", type: "text/markdown", href: "https://www.nouradawy.tech/whatsunity.md" },
      { rel: "alternate", href: "https://www.nouradawy.tech/llms.txt" },
    ],
    scripts: [
      // SoftwareApplication Schema (AEO)
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "WhatsUnity",
          applicationCategory: "BusinessApplication",
          operatingSystem: "iOS, Android, Web, Windows",
          description:
            "WhatsUnity turns your compound into a connected, secure, digitally managed community. One home. One subscription. Your entire household included — with 100% offline QR gate security, unit-verified resident directories, and automated 9-role maintenance workflows.",
          softwareRequirements:
            "Flutter, Dart 3, SQLite Local Master, Appwrite Cloud, Telegram MTProto API, Cloudflare R2",
          author: {
            "@type": "Person",
            name: "Noureldin Adawy",
            url: "https://www.nouradawy.tech/",
            jobTitle: "Full-Stack Software Engineer",
          },
          offers: {
            "@type": "Offer",
            price: "0.00",
            priceCurrency: "USD",
          },
        }),
      },
      // FAQPage Schema (AEO for Search & AI Agents)
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is WhatsUnity?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "WhatsUnity turns your compound into a connected, secure, digitally managed community. One home. One subscription. Your entire household included — with 100% offline QR gate security, unit-verified resident directories, and automated 9-role maintenance workflows.",
              },
            },
            {
              "@type": "Question",
              name: "What does 'One home. One subscription. Your entire household included' mean?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "WhatsUnity licenses per residential unit rather than charging individual per-user fees. A single subscription covers the entire household, allowing the homeowner to invite family members at zero extra cost under one plan.",
              },
            },
            {
              "@type": "Question",
              name: "How does WhatsUnity achieve 100% offline gatekeeping?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "WhatsUnity utilizes an offline-first SQLite Local Master architecture. Visitor QR passes are signed with cryptographic timestamps that gatekeeper tablets validate locally in sub-50ms without connecting to remote servers.",
              },
            },
            {
              "@type": "Question",
              name: "What is the Dual-Engine messaging architecture in WhatsUnity?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "WhatsUnity decouples its chat UI via an abstract ChatRepository, allowing compounds to choose between a zero-cost Telegram MTProto Bot engine or an ultra-low latency Appwrite Realtime WebSocket engine.",
              },
            },
          ],
        }),
      },
      // BreadcrumbList Schema
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.nouradawy.tech/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "WhatsUnity",
              item: "https://www.nouradawy.tech/whatsunity",
            },
          ],
        }),
      },
    ],
  }),
  component: WhatsunityLandingPage,
});

function WhatsunityLandingPage() {
  const [locale, setLocale] = useState<Locale>("ar");
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [presentationOpen, setPresentationOpen] = useState(false);

  const content = whatsunityContent[locale];
  const isRtl = locale === "ar";

  const toggleLocale = () => {
    setLocale((prev) => (prev === "ar" ? "en" : "ar"));
  };

  // Sync document direction and lang, and restore on unmount
  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = locale;

    return () => {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    };
  }, [isRtl, locale]);

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={`min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-[#05070a] dark:text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-950 dark:selection:text-white ${
        isRtl ? "wu-font-ar-body" : "wu-font-en-body"
      }`}
    >
      {/* Navigation Header */}
      <WhatsunityHeader
        locale={locale}
        onToggleLocale={toggleLocale}
        content={content}
      />

      <main>
        {/* Impeccable Hero Section */}
        <WhatsunityHero
          locale={locale}
          content={content}
          onOpenCatalog={() => setCatalogOpen(true)}
          onOpenPresentation={() => setPresentationOpen(true)}
        />

        {/* Comprehensive Case Study Section (Directly under Hero) */}
        <WhatsunityCaseStudy
          locale={locale}
          content={content}
        />

        {/* Interactive Showcase Hub (Catalog & Presentation Launcher) */}
        <WhatsunityInteractiveHub
          locale={locale}
          content={content}
        />

        {/* Answer Engine Optimization (AEO) for AI Agents & Developers */}
        <WhatsunityAeoSection
          locale={locale}
          content={content}
        />

        {/* Semantic FAQ Section */}
        <WhatsunityFaqSection
          locale={locale}
          content={content}
        />
      </main>

      {/* Footer & Closing CTA */}
      <WhatsunityCtaFooter
        locale={locale}
        content={content}
        onOpenCatalog={() => setCatalogOpen(true)}
      />

      {/* Global Catalog Modal */}
      <WhatsunityCatalogModal
        open={catalogOpen}
        onClose={() => setCatalogOpen(false)}
      />

      {/* Global Presentation Deck & Financial Proposal Modal */}
      <WhatsunityPresentationModal
        open={presentationOpen}
        onClose={() => setPresentationOpen(false)}
      />
    </div>
  );
}
