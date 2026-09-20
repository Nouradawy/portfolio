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
  validateSearch: (search: Record<string, unknown>): { lang?: "ar" | "en" } => {
    return {
      lang: search.lang === "en" ? "en" : search.lang === "ar" ? "ar" : undefined,
    };
  },
  head: ({ search }) => {
    const isAr = search?.lang !== "en"; // Default is Arabic for WhatsUnity
    const title = isAr
      ? "WhatsUnity — منزل واحد. اشتراك واحد. عائلتك بالكامل مشمولة | نظام تشغيل الكمبوندات"
      : "WhatsUnity — One Home. One Subscription. Your Entire Household Included | Compound OS";
    const description = isAr
      ? "يحوّل WhatsUnity كمبوندك السكني إلى مجتمع مترابط، آمن، ومُدار رقمياً بالكامل. منزل واحد، اشتراك واحد، وكل أفراد أسرتك مشمولون — بوابات أمنية تعمل دون إنترنت بنسبة 100%، ودليل سكني موثق، وحوكمة صيانة لـ 9 أدوار تشغيلية."
      : "WhatsUnity turns your compound into a connected, secure, digitally managed community. One home. One subscription. Your entire household included — with 100% offline QR gate security, unit-verified resident directories, and automated 9-role maintenance workflows.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content:
            "WhatsUnity, واتس يونيتي, نظام تشغيل الكمبوندات, إدارة المجمعات السكنية, بوابات إلكترونية أوفلاين, تصاريح زوار QR, منزل واحد اشتراك واحد, One home one subscription, compound operating system, gated community OS, offline QR gate pass, Clean Architecture Flutter, SQLite local master, Appwrite realtime, Telegram MTProto API, Cloudflare R2, Noureldin Adawy, نورالدين العدوي",
        },
        { name: "robots", content: "index,follow,max-image-preview:large" },
        { name: "theme-color", content: "#05070a" },
        // OpenGraph / Social
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "WhatsUnity Compound OS | واتس يونيتي" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: "https://www.nouradawy.tech/whatsunity" },
        { property: "og:locale", content: isAr ? "ar_AR" : "en_US" },
        { property: "og:locale:alternate", content: isAr ? "en_US" : "ar_AR" },
        {
          property: "og:image",
          content: "https://www.nouradawy.tech/assets/projects/Whatsunity/catalog/Home_screen_community.png",
        },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        {
          name: "twitter:image",
          content: "https://www.nouradawy.tech/assets/projects/Whatsunity/catalog/Home_screen_community.png",
        },
      ],
      links: [
        { rel: "canonical", href: "https://www.nouradawy.tech/whatsunity" },
        { rel: "alternate", hreflang: "ar", href: "https://www.nouradawy.tech/whatsunity?lang=ar" },
        { rel: "alternate", hreflang: "en", href: "https://www.nouradawy.tech/whatsunity?lang=en" },
        { rel: "alternate", hreflang: "x-default", href: "https://www.nouradawy.tech/whatsunity" },
        { rel: "alternate", type: "text/markdown", href: "https://www.nouradawy.tech/whatsunity.md", hreflang: "en" },
        { rel: "alternate", type: "text/markdown", href: "https://www.nouradawy.tech/whatsunity-ar.md", hreflang: "ar" },
        { rel: "alternate", href: "https://www.nouradawy.tech/llms.txt" },
        { rel: "alternate", href: "https://www.nouradawy.tech/llms-full.txt" },
        { rel: "sitemap", type: "application/xml", href: "https://www.nouradawy.tech/whatsunity/sitemap.xml" },
      ],
      scripts: [
        // SoftwareApplication Schema (AEO & Knowledge Graph)
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "@id": "https://www.nouradawy.tech/whatsunity#software",
            name: "WhatsUnity",
            alternateName: ["واتس يونيتي", "WhatsUnity Compound OS"],
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Residential Community Management Platform",
            operatingSystem: "iOS, Android, Web, Windows",
            description:
              "WhatsUnity turns your compound into a connected, secure, digitally managed community. One home. One subscription. Your entire household included — with 100% offline QR gate security, unit-verified resident directories, and automated 9-role maintenance workflows.",
            softwareRequirements:
              "Flutter, Dart 3, SQLite Local Master, Appwrite Cloud, Telegram MTProto API, Cloudflare R2",
            featureList: [
              "100% Offline Cryptographic QR Gate Passes",
              "Dual-Engine Messaging (Appwrite Realtime & Telegram MTProto)",
              "One Home One Subscription Household Licensing",
              "5-Role Maintenance Lifecycle with Photo Evidence & Timers",
              "Clean Architecture in Dart 3 with Zero Code Generation",
              "فحص تصاريح الزوار المشفرة أوفلاين 100%",
              "محرك مراسلة مزدوج موفر للتكاليف (تيليجرام و Appwrite)",
              "دورة صيانة خماسية وحوكمة 9 أدوار تشغيلية",
              "ترخيص سكني شامل للأسرة بالكامل بدون رسوم إضافية",
            ],
            author: {
              "@type": "Person",
              "@id": "https://www.nouradawy.tech/#person",
              name: "Noureldin Adawy",
              alternateName: "نورالدين العدوي",
              url: "https://www.nouradawy.tech/",
              jobTitle: "Full-Stack Software Engineer",
            },
            offers: {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          }),
        },
        // FAQPage Schema (AEO for Search Engines & AI Answer Boxes)
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              // Arabic High-Intent Questions
              {
                "@type": "Question",
                name: "ماذا يعني «منزل واحد. اشتراك واحد. عائلتك بالكامل مشمولة»؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "يعتمد WhatsUnity نموذج تسعير لكل وحدة سكنية (Per-Home) وليس لكل مستخدم (Per-User). يغطي الاشتراك الواحد الشقة أو الفيلا بالكامل، ويستطيع المالك دعوة جميع أفراد الأسرة مجاناً لاستخدام التطبيق، وإصدار تصاريح الزوار، والتواصل مع الجيران، وطلب خدمات الصيانة دون أي مصاريف إضافية.",
                },
              },
              {
                "@type": "Question",
                name: "كيف تحل المنظومة مشكلة ضعف شبكات 4G عند البوابات ومواقف السيارات؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "تعتمد WhatsUnity على نموذج SQLite Local Master المعماري. يتم فحص تصاريح الزوار QR والتحقق من التوقيع الرقمي وصلاحية الزيارة محلياً على جهاز الحارس في أقل من 0.05 ثانية دون الحاجة لوجود إنترنت إطلاقاً، وتتم مزامنة سجلات الدخول تلقائياً عند عودة الاتصال.",
                },
              },
              {
                "@type": "Question",
                name: "كم يستغرق نشر وتطبيق المنظومة في كمبوند جديد؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "يمكن تهيئة المنظومة بالكامل وإطلاقها لكمبوند سكني متكامل في أقل من 48 ساعة. يتم استيراد بيانات الوحدات السكنية عبر ملفات Excel/CSV، وتخصيص أسماء البوابات، وتهيئة حسابات حراس الأمن والفنيين فوراً.",
                },
              },
              {
                "@type": "Question",
                name: "هل يمكن تخصيص التطبيق بهوية وشعار الكمبوند الخاص بنا (White-Label)؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "نعم بالتأكيد. تتيح المنظومة خيار White-Labeling الكامل للمطورين العقاريين وشركات إدارة الممتلكات، بما يشمل ألوان الهوية البصرية، واسم التطبيق على متجري App Store و Google Play، والروابط السحابية المخصصة.",
                },
              },
              {
                "@type": "Question",
                name: "كيف تخفض المنظومة تكلفة اشتراكات البرامج الشهرية إلى 0$؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "بفضل محرك المراسلة المزدوج الحصري (Dual-Engine)، يمكن للمجمعات تفعيل باقة التيليجرام التي توجه إعلانات ونقاشات الكمبوند عبر واجهات Telegram MTProto المجانية دون دفع سنت واحد في خوادم قواعد البيانات السحابية.",
                },
              },
              {
                "@type": "Question",
                name: "كيف تساعد المنظومة في حوكمة أعمال الصيانة ومنع الهدر المالي؟",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "تطبق المنظومة دورة صيانة هندسية خماسية: من الساكن، ثم الفرز لدى المنسق، ثم توجيه الفني مع مؤقت زمني وصور إلزامية قبل وبعد الإصلاح، وأخيراً فحص الجودة واعتماد قطع الغيار من كبير المهندسين قبل إغلاق التذكرة.",
                },
              },
              // English High-Intent Questions
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
                name: "How fast can WhatsUnity be deployed to our residential compound?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A new compound can be fully provisioned, branded, and operational in under 48 hours. Resident unit directories can be batch-imported via CSV, gatekeeper devices provisioned with cryptographic keys, and maintenance staff onboarded instantly.",
                },
              },
              {
                "@type": "Question",
                name: "Can the application be white-labeled with our property development branding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. WhatsUnity is fully white-label ready. Property developers and management firms can deploy the application with their custom brand identity, app store listings, color palettes, and custom domain names.",
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
              {
                "@type": "Question",
                name: "How does the maintenance lifecycle eliminate contractor fraud and parts waste?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "WhatsUnity enforces a strict 5-tier state machine: tickets must include photo evidence, technicians must run an active stopwatch timer on-site, and spare parts requisitions require review and approval from the Chief Engineer before work orders can be signed off.",
                },
              },
            ],
          }),
        },
        // TechArticle / Case Study Schema
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "WhatsUnity Architectural Case Study: Offline-First Residential OS in Flutter & Dart 3",
            alternativeHeadline: "دراسة معمارية نظام WhatsUnity: نظام تشغيل سكني بدون اتصال في فلاتر",
            author: {
              "@type": "Person",
              "@id": "https://www.nouradawy.tech/#person",
              name: "Noureldin Adawy",
            },
            description:
              "Comprehensive architectural deep-dive into WhatsUnity: SQLite Local Master sync algorithms, Dual-Engine messaging with Telegram & Appwrite, and cryptographic offline gate pass verification.",
            url: "https://www.nouradawy.tech/whatsunity",
            inLanguage: ["ar", "en"],
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
    };
  },
  component: WhatsunityLandingPage,
});

function WhatsunityLandingPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [locale, setLocale] = useState<Locale>(search.lang ?? "ar");
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [presentationOpen, setPresentationOpen] = useState(false);

  // Sync if URL search parameter changes
  useEffect(() => {
    if (search.lang && (search.lang === "ar" || search.lang === "en") && search.lang !== locale) {
      setLocale(search.lang);
    }
  }, [search.lang, locale]);

  const content = whatsunityContent[locale];
  const isRtl = locale === "ar";

  const toggleLocale = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    setLocale(nextLocale);
    navigate({
      search: { lang: nextLocale },
      replace: true,
    });
  };

  // Sync document lang, title, and suppress visible scrollbars
  // Note: Keep documentElement.dir as "ltr" so mobile Blink / Android Chrome does NOT push
  // the viewport's native scrollbar / gutter to the left edge of the screen.
  // Page RTL layout is handled cleanly by the root inner container with dir={isRtl ? "rtl" : "ltr"}.
  useEffect(() => {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = locale;
    document.documentElement.classList.add("wu-no-scrollbar");
    document.body.classList.add("wu-no-scrollbar");

    // Dynamically update document title on language switch
    document.title = content.meta.title;

    return () => {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
      document.documentElement.classList.remove("wu-no-scrollbar");
      document.body.classList.remove("wu-no-scrollbar");
    };
  }, [isRtl, locale, content.meta.title]);

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={`min-h-screen wu-no-scrollbar bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-[#05070a] dark:text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-950 dark:selection:text-white ${
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

      {/* Global Presentation Deck Modal */}
      <WhatsunityPresentationModal
        open={presentationOpen}
        onClose={() => setPresentationOpen(false)}
      />
    </div>
  );
}
