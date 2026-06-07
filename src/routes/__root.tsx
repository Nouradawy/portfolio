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
    const stack = String(e?.stack ?? "").split("\n").slice(0, 8).join("\n");
    const comp = String(e?.componentStack ?? "").split("\n").slice(0, 6).join("\n");
    details = `${name}: ${message}\n\n${stack}${comp ? "\n\n" + comp : ""}`;
  } catch {
    details = "Unknown error (could not stringify)";
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <pre className="mt-4 text-left text-xs text-red-400 bg-neutral-900/50 rounded-lg p-3 overflow-auto max-h-72 whitespace-pre-wrap border border-red-500/20">
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
      { title: "Nouradawy | Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Nouradawy — Full-Stack Engineer building high-performance web and mobile experiences with React, Flutter, Supabase and Spring.",
      },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { name: "theme-color", content: "#0e0e0e" },
      // OpenGraph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nouradawy" },
      { property: "og:title", content: "Nouradawy | Full-Stack Engineer" },
      {
        property: "og:description",
        content:
          "Building high-performance web and mobile experiences with React, Flutter, Supabase and Spring.",
      },
      { property: "og:url", content: "https://www.nouradawy.tech/" },
      { property: "og:image", content: "https://nouradawy.tech/assets/icons/og_image.png" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nouradawy | Full-Stack Engineer" },
      {
        name: "twitter:description",
        content:
          "Building high-performance web and mobile experiences with React, Flutter, Supabase and Spring.",
      },
      { name: "twitter:image", content: "https://nouradawy.tech/assets/icons/og_image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nouradawy.tech/" },
      { rel: "icon", type: "image/png", href: "/assets/favicon-rounded.png" },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nouradawy",
          jobTitle: "Full-Stack Engineer",
          url: "https://www.nouradawy.tech/",
          image: "https://nouradawy.tech/assets/icons/og_image.png",
          sameAs: [],
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
      <LazyMotion features={domAnimation}>
        <Outlet />
      </LazyMotion>
    </QueryClientProvider>
  );
}
