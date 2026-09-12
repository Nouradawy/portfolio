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
      { title: "Noureldin — Full-Stack Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Noureldin Adawy — a full-stack software engineer building polished products with Flutter, Appwrite, Spring Boot, and React.",
      },
      { property: "og:title", content: "Noureldin — Full-Stack Software Engineer" },
      {
        property: "og:description",
        content:
          "From paper ball to paper plane — engineering polished mobile and web experiences.",
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
