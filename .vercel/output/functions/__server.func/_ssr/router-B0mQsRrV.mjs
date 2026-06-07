import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as LazyMotion, d as domAnimation } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-BinBJPmq.css";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  console.error("RootErrorBoundary caught:", error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  let details = "";
  try {
    const e = error;
    const name = String(e?.name ?? "Error");
    const message = String(e?.message ?? "");
    const stack = String(e?.stack ?? "").split("\n").slice(0, 12).join("\n");
    const comp = String(e?.componentStack ?? "").split("\n").slice(0, 8).join("\n");
    details = `${name}: ${message}

${stack}${comp ? "\n\nComponent Stack:\n" + comp : ""}`;
  } catch {
    details = "Unknown error (could not stringify)";
  }
  const saneMessage = typeof error?.message === "string" ? error.message : typeof error?.toString === "function" ? error.toString() : "Unknown error type";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm font-bold text-red-400 bg-red-950/60 rounded-lg px-3 py-2", children: saneMessage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-2 text-left text-xs text-red-300 bg-yellow-950/80 rounded-lg p-3 overflow-auto max-h-80 whitespace-pre-wrap border border-red-500/30", children: details }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      // Primary SEO
      { title: "Nouradawy | Full-Stack Engineer" },
      {
        name: "description",
        content: "Portfolio of Nouradawy — Full-Stack Engineer building high-performance web and mobile experiences with React, Flutter, Supabase and Spring."
      },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { name: "theme-color", content: "#0e0e0e" },
      // OpenGraph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nouradawy" },
      { property: "og:title", content: "Nouradawy | Full-Stack Engineer" },
      {
        property: "og:description",
        content: "Building high-performance web and mobile experiences with React, Flutter, Supabase and Spring."
      },
      { property: "og:url", content: "https://www.nouradawy.tech/" },
      { property: "og:image", content: "https://nouradawy.tech/assets/icons/og_image.png" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nouradawy | Full-Stack Engineer" },
      {
        name: "twitter:description",
        content: "Building high-performance web and mobile experiences with React, Flutter, Supabase and Spring."
      },
      { name: "twitter:image", content: "https://nouradawy.tech/assets/icons/og_image.png" }
    ],
    links: [
      { rel: "canonical", href: "https://www.nouradawy.tech/" },
      { rel: "icon", type: "image/png", href: "/assets/favicon-rounded.png" },
      { rel: "stylesheet", href: appCss }
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
          sameAs: []
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
}
const $$splitComponentImporter = () => import("./index-C_kqASHK.mjs").then((n) => n.i);
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
