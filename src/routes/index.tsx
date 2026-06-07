import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/features/portfolio/presentation/theme/ThemeProvider";
import { Navbar } from "@/features/portfolio/presentation/components/Navbar";
import { HeroSection } from "@/features/portfolio/presentation/sections/HeroSection";
import { PortfolioSummarySection } from "@/features/portfolio/presentation/sections/PortfolioSummarySection";
import { PaymentShowcaseSection } from "@/features/portfolio/presentation/sections/PaymentShowcaseSection";
import { ProjectsTimelineSection } from "@/features/portfolio/presentation/sections/ProjectsTimelineSection";
import { ContactSection } from "@/features/portfolio/presentation/sections/ContactSection";
import { FooterSection } from "@/features/portfolio/presentation/sections/FooterSection";
import { CinematicCursor } from "@/features/portfolio/presentation/components/CinematicCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Noureldin — Full-Stack Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Noureldin Adawy — a full-stack software engineer building polished products with Flutter, Spring Boot, and React.",
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
  return (
    <ThemeProvider>
      <CinematicCursor />
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <HeroSection />
        <PortfolioSummarySection />
        <PaymentShowcaseSection />
        <ProjectsTimelineSection />
        <ContactSection />
        <FooterSection />
        <Toaster />
      </main>
    </ThemeProvider>
  );
}
