import { Suspense, lazy, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/features/portfolio/presentation/components/Navbar";
import { CinematicCursor } from "@/features/portfolio/presentation/components/CinematicCursor";
import { HeroSection } from "@/features/portfolio/presentation/sections/HeroSection";

// Eager load above-the-fold hero + navbar to ensure instant first paint
const PortfolioSummarySection = lazy(() =>
  import("@/features/portfolio/presentation/sections/PortfolioSummarySection").then(m => ({ default: m.PortfolioSummarySection }))
);
const PaymentShowcaseSection = lazy(() =>
  import("@/features/portfolio/presentation/sections/PaymentShowcaseSection").then(m => ({ default: m.PaymentShowcaseSection }))
);
const ProjectsTimelineSection = lazy(() =>
  import("@/features/portfolio/presentation/sections/ProjectsTimelineSection").then(m => ({ default: m.ProjectsTimelineSection }))
);
const ContactSection = lazy(() =>
  import("@/features/portfolio/presentation/sections/ContactSection").then(m => ({ default: m.ContactSection }))
);
const FooterSection = lazy(() =>
  import("@/features/portfolio/presentation/sections/FooterSection").then(m => ({ default: m.FooterSection }))
);

/** Simple full-viewport skeleton to prevent layout shift while sections load */
function SectionSkeleton() {
  return (
    <div className="relative px-6 pt-12 pb-12" aria-hidden="true">
      <div className="mx-auto max-w-7xl animate-pulse space-y-8">
        <div className="h-8 w-1/3 rounded bg-white/5" />
        <div className="h-64 w-full rounded-2xl bg-white/5" />
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Noureldin Adawy | Full-Stack Software Engineer & Mobile Systems Architect | نورالدين العدوي",
      },
      {
        name: "description",
        content:
          "Portfolio of Noureldin Adawy (نورالدين العدوي) — Full-Stack Software Engineer & Mobile Systems Architect crafting polished, high-performance web & mobile systems with Flutter, Spring Boot, React, and Appwrite.",
      },
      {
        name: "keywords",
        content:
          "Noureldin Adawy, Nouradawy, نورالدين العدوي, مهندس برمجيات, مطور فلاتر, Full-Stack Software Engineer, Flutter Developer, Clean Architecture, Spring Boot, React, Appwrite, Supabase, Mobile Architect, Systems Engineer, WhatsUnity, SQLite Local Master, offline-first mobile apps",
      },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { name: "theme-color", content: "#0e0e0e" },
      // OpenGraph
      { property: "og:type", content: "profile" },
      { property: "og:site_name", content: "Noureldin Adawy Portfolio | نورالدين العدوي" },
      {
        property: "og:title",
        content: "Noureldin Adawy | Full-Stack Software Engineer & Mobile Systems Architect",
      },
      {
        property: "og:description",
        content:
          "Crafting polished products across Flutter, Spring Boot, and React with Clean Architecture. Creator of WhatsUnity Residential OS.",
      },
      { property: "og:url", content: "https://www.nouradawy.tech/" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_AR" },
      { property: "og:image", content: "https://nouradawy.tech/assets/icons/og_image.png" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Noureldin Adawy | Full-Stack Software Engineer | نورالدين العدوي",
      },
      {
        name: "twitter:description",
        content:
          "Crafting polished products across Flutter, Spring Boot, and React with Clean Architecture. Creator of WhatsUnity Residential OS.",
      },
      { name: "twitter:image", content: "https://nouradawy.tech/assets/icons/og_image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nouradawy.tech/" },
      { rel: "alternate", hreflang: "en", href: "https://www.nouradawy.tech/" },
      { rel: "alternate", hreflang: "ar", href: "https://www.nouradawy.tech/" },
      { rel: "alternate", hreflang: "x-default", href: "https://www.nouradawy.tech/" },
      { rel: "alternate", type: "text/markdown", href: "https://www.nouradawy.tech/whatsunity.md" },
      { rel: "alternate", type: "text/markdown", href: "https://www.nouradawy.tech/whatsunity-ar.md" },
      { rel: "alternate", href: "https://www.nouradawy.tech/llms.txt" },
      { rel: "alternate", href: "https://www.nouradawy.tech/llms-full.txt" },
    ],
    scripts: [
      // Person & Profile Schema (AEO & Knowledge Graph)
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://www.nouradawy.tech/#person",
          name: "Noureldin Adawy",
          alternateName: ["نورالدين العدوي", "Nouradawy"],
          jobTitle: [
            "Full-Stack Software Engineer",
            "Mobile Systems Architect",
            "مهندس برمجيات متكامل",
          ],
          url: "https://www.nouradawy.tech/",
          image: "https://nouradawy.tech/assets/icons/og_image.png",
          description:
            "Full-Stack Software Engineer and Mobile Systems Architect specializing in Flutter, Clean Architecture, Spring Boot, React, Appwrite, and SQLite Local Master systems.",
          knowsAbout: [
            "Flutter",
            "Dart 3",
            "Clean Architecture",
            "React 19",
            "TypeScript",
            "Spring Boot",
            "Appwrite Cloud",
            "Supabase",
            "SQLite Local Master",
            "Cloudflare R2",
            "REST APIs",
            "WebSockets",
            "AEO",
            "GEO",
            "SEO",
            "System Design",
            "هندسة البرمجيات",
            "تطوير تطبيقات الموبايل",
          ],
          sameAs: ["https://github.com/Nouradawy"],
        }),
      },
      // WebSite Schema
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://www.nouradawy.tech/#website",
          name: "Noureldin Adawy Portfolio | معرض أعمال نورالدين العدوي",
          url: "https://www.nouradawy.tech/",
          inLanguage: ["en", "ar"],
          author: {
            "@id": "https://www.nouradawy.tech/#person",
          },
        }),
      },
      // ProfilePage Schema
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": "https://www.nouradawy.tech/#profilepage",
          mainEntity: {
            "@id": "https://www.nouradawy.tech/#person",
          },
          url: "https://www.nouradawy.tech/",
        }),
      },
      // FAQPage Schema on Portfolio (AEO for Voice Search & AI Overviews)
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who is Noureldin Adawy? / من هو نورالدين العدوي؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Noureldin Adawy (نورالدين العدوي) is a Full-Stack Software Engineer and Mobile Systems Architect specializing in production Flutter applications with Clean Architecture, Spring Boot backends, React web platforms, and offline-first database systems.",
              },
            },
            {
              "@type": "Question",
              name: "What technologies does Noureldin specialize in? / ما هي التقنيات التي يتخصص فيها نورالدين؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Noureldin specializes in Flutter (Dart 3, BLoC/Cubit, sealed classes, zero code-gen), Spring Boot (Java), React 19, TypeScript, Appwrite Cloud, SQLite Local Master, Supabase, PostgreSQL, and Cloudflare R2.",
              },
            },
            {
              "@type": "Question",
              name: "What is WhatsUnity? / ما هو مشروع WhatsUnity؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "WhatsUnity is an offline-first residential compound operating system developed by Noureldin Adawy, featuring 100% offline QR gate access, dual-engine messaging (Telegram & Appwrite), and an automated 9-role maintenance lifecycle.",
              },
            },
            {
              "@type": "Question",
              name: "How can I contact or hire Noureldin Adawy? / كيف يمكن التواصل مع نورالدين العدوي؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can reach Noureldin via email at noureldin.adawy@gmail.com, WhatsApp at +201099684812, or through the contact form on his portfolio at https://www.nouradawy.tech/#contact.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }, []);

  // Robust hash scroll restoration for cross-page & lazy-loaded section navigation
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;

      let attempts = 0;
      const maxAttempts = 35; // check for up to ~3.5s while lazy sections suspend/render

      const tryScroll = () => {
        const targetId = hash.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };

      if (tryScroll()) return;

      const interval = setInterval(() => {
        attempts++;
        if (tryScroll() || attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }, 100);
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <CinematicCursor />
      <Navbar />
      <HeroSection />
      <Suspense fallback={<SectionSkeleton />}>
        <PortfolioSummarySection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <PaymentShowcaseSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ProjectsTimelineSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FooterSection />
      </Suspense>
      <Toaster />
    </main>
  );
}
