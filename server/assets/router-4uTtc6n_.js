import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-0EzT5uwK.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      {
        httpEquiv: "Content-Security-Policy",
        content: "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval' blob:; style-src * 'unsafe-inline'; connect-src * 'unsafe-inline' ws:; frame-src *; img-src * data: blob:; font-src * data:;"
      },
      // Primary SEO
      { title: "Nouradawy | Full-Stack Engineer" },
      {
        name: "description",
        content: "Portfolio of Nouradawy — Full-Stack Engineer building high-performance web and mobile experiences with React, Flutter, Supabase and Spring."
      },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { name: "theme-color", content: "#0e0e0e" },
      // Social sharing (Open Graph)
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nouradawy" },
      { property: "og:title", content: "Nouradawy | Full-Stack Engineer" },
      {
        property: "og:description",
        content: "Building high-performance web and mobile experiences with React, Flutter, Supabase and Spring."
      },
      { property: "og:url", content: "https://www.nouradawy.tech/" },
      { property: "og:image", content: "https://nouradawy.tech/assets/icons/og_image.png" },
      // Twitter tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nouradawy | Full-Stack Engineer" },
      {
        name: "twitter:description",
        content: "Building high-performance web and mobile experiences with React, Flutter, Supabase and Spring."
      },
      { name: "twitter:image", content: "https://nouradawy.tech/assets/icons/og_image.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://www.nouradawy.tech/" },
      { rel: "icon", type: "image/png", href: "/assets/projects/favicon-rounded.png" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(HeadContent, {}),
      /* @__PURE__ */ jsx(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: {
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nouradawy",
              jobTitle: "Full-Stack Engineer",
              url: "https://www.nouradawy.tech/",
              image: "https://www.nouradawy.tech/assets/icons/og_image.png",
              sameAs: []
            })
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter = () => import("./index-CLlsmbTv.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Noureldin — Full-Stack Software Engineer"
    }, {
      name: "description",
      content: "Portfolio of Noureldin Adawy — a full-stack software engineer building polished products with Flutter, Spring Boot, and React."
    }, {
      property: "og:title",
      content: "Noureldin — Full-Stack Software Engineer"
    }, {
      property: "og:description",
      content: "From paper ball to paper plane — engineering polished mobile and web experiences."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
