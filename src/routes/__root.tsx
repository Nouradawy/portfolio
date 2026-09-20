import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LazyMotion, domAnimation } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "../features/portfolio/presentation/theme/ThemeProvider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error("RootErrorBoundary caught:", error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  // Build a clean diagnostic string that won’t itself throw
  let details = "";
  try {
    const e = error as any;
    const name = String(e?.name ?? "Error");
    const message = String(e?.message ?? "");
    const stack = String(e?.stack ?? "").split("\n").slice(0, 12).join("\n");
    const comp = String(e?.componentStack ?? "").split("\n").slice(0, 8).join("\n");
    details = `${name}: ${message}\n\n${stack}${comp ? "\n\nComponent Stack:\n" + comp : ""}`;
  } catch {
    details = "Unknown error (could not stringify)";
  }

  const saneMessage = typeof error?.message === "string" ? error.message
    : typeof error?.toString === "function" ? error.toString()
    : "Unknown error type";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <p className="mt-4 text-sm font-bold text-red-400 bg-red-950/60 rounded-lg px-3 py-2">
          {saneMessage}
        </p>
        <pre className="mt-2 text-left text-xs text-red-300 bg-yellow-950/80 rounded-lg p-3 overflow-auto max-h-80 whitespace-pre-wrap border border-red-500/30">
          {details}
        </pre>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      // Primary SEO
      { title: "Noureldin Adawy (Nouradawy) | Full-Stack Software Engineer | نورالدين العدوي" },
      {
        name: "description",
        content:
          "Portfolio of Noureldin Adawy (نورالدين العدوي) — Full-Stack Engineer building high-performance web and mobile experiences with Flutter, Appwrite, React, Spring Boot, and Supabase.",
      },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { name: "theme-color", content: "#0e0e0e" },
      // OpenGraph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Noureldin Adawy | نورالدين العدوي" },
      { property: "og:title", content: "Noureldin Adawy | Full-Stack Software Engineer" },
      {
        property: "og:description",
        content:
          "Building high-performance web and mobile experiences with Flutter, Appwrite, React, Spring Boot, and Supabase. Creator of WhatsUnity Residential OS.",
      },
      { property: "og:url", content: "https://www.nouradawy.tech/" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_AR" },
      { property: "og:image", content: "https://nouradawy.tech/assets/icons/og_image.png" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Noureldin Adawy | Full-Stack Software Engineer | نورالدين العدوي" },
      {
        name: "twitter:description",
        content:
          "Building high-performance web and mobile experiences with Flutter, Appwrite, React, Spring Boot, and Supabase.",
      },
      { name: "twitter:image", content: "https://nouradawy.tech/assets/icons/og_image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nouradawy.tech/" },
      { rel: "icon", type: "image/png", href: "/assets/favicon-rounded.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Bebas+Neue&family=Cairo:wght@400;500;600;700;800;900&family=Tajawal:wght@400;500;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap",
      },
      { rel: "alternate", hreflang: "en", href: "https://www.nouradawy.tech/" },
      { rel: "alternate", hreflang: "ar", href: "https://www.nouradawy.tech/" },
      { rel: "alternate", hreflang: "x-default", href: "https://www.nouradawy.tech/" },
      { rel: "alternate", type: "text/markdown", href: "/whatsunity.md", hreflang: "en" },
      { rel: "alternate", type: "text/markdown", href: "/whatsunity-ar.md", hreflang: "ar" },
      { rel: "alternate", href: "/llms.txt" },
      { rel: "alternate", href: "/llms-full.txt" },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
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
          sameAs: ["https://github.com/Nouradawy"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LazyMotion features={domAnimation}>
          <Outlet />
        </LazyMotion>
        <Analytics />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
