import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
const appCss = "/assets/styles-D1eyQ-PW.css";
function WhatsAppButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.a,
    {
      href: "https://wa.me/918200613891",
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Chat on WhatsApp",
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { delay: 0.8, type: "spring", stiffness: 260, damping: 20 },
      whileHover: { scale: 1.08 },
      whileTap: { scale: 0.95 },
      className: "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl flex items-center justify-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            className: "absolute inset-0 rounded-full bg-green-500",
            animate: { scale: [1, 1.5], opacity: [0.5, 0] },
            transition: { duration: 2, repeat: Infinity, ease: "easeOut" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "white", className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.6 6.32A8.86 8.86 0 0 0 12.05 4a8.94 8.94 0 0 0-7.74 13.4L3 21l3.7-1.3a8.9 8.9 0 0 0 5.34 1.78h0a8.94 8.94 0 0 0 6.3-15.27zm-5.55 13.7h0a7.4 7.4 0 0 1-3.78-1.04l-.27-.16-2.8.98.94-2.73-.18-.28a7.43 7.43 0 0 1 11.6-9.22 7.36 7.36 0 0 1 2.17 5.25 7.43 7.43 0 0 1-7.68 7.2zm4.08-5.56c-.22-.11-1.32-.65-1.53-.73-.2-.07-.36-.11-.5.11-.15.22-.58.73-.71.88-.13.15-.26.17-.48.06a6.07 6.07 0 0 1-1.79-1.1 6.7 6.7 0 0 1-1.24-1.54c-.13-.22 0-.34.1-.45.1-.1.22-.26.33-.4.1-.13.13-.22.2-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.43a.82.82 0 0 0-.6.28 2.5 2.5 0 0 0-.78 1.86 4.34 4.34 0 0 0 .91 2.3 9.93 9.93 0 0 0 3.8 3.36c.53.23.94.36 1.27.47.53.17 1.01.14 1.4.09.43-.06 1.32-.54 1.5-1.06.19-.52.19-.96.13-1.06-.06-.1-.2-.15-.42-.26z" }) })
      ]
    }
  );
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const queryClient = new QueryClient();
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-navy", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-navy", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-6 inline-flex items-center justify-center rounded-xl bg-orange px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-light transition-colors", children: "Go Home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-navy", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: error.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          router2.invalidate();
          reset();
        },
        className: "mt-6 rounded-xl bg-orange px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-light",
        children: "Try again"
      }
    )
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Care By Mayur — Premium Home Cleaning Products" },
      { name: "description", content: "Premium home cleaning products by Navkar Chemicals, Gujarat." }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" }
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" })
  ] });
}
const BASE_URL = "";
const Route$6 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/products", priority: "0.9" },
          { path: "/partnership", priority: "0.9" },
          { path: "/about", priority: "0.7" },
          { path: "/contact", priority: "0.7" },
          { path: "/check-territory", priority: "0.8" },
          { path: "/login", priority: "0.4" }
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>weekly</changefreq><priority>${e.priority}</priority></url>`),
          `</urlset>`
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      }
    }
  }
});
const $$splitComponentImporter$5 = () => import("./products-CFgSCnJU.mjs");
const Route$5 = createFileRoute("/products")({
  validateSearch: (search) => {
    return {
      category: search.category
    };
  },
  head: () => ({
    meta: [{
      title: "Products — Care By Mayur"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-mM-jXiUn.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Care By Mayur"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-C4bW1eix.mjs");
const Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Care By Mayur"
    }, {
      name: "description",
      content: "Building trusted home cleaning products in Gujarat since 2017."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-DXxD_xGR.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Care By Mayur — Premium Home Cleaning Products"
    }, {
      name: "description",
      content: "Premium home cleaning products by Navkar Chemicals, Gujarat."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin.index-DwC6dXx2.mjs");
const Route$1 = createFileRoute("/admin/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin.login-DcxYYRFT.mjs");
const Route = createFileRoute("/admin/login")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$6.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$7
});
const ProductsRoute = Route$5.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const AdminIndexRoute = Route$1.update({
  id: "/admin/",
  path: "/admin/",
  getParentRoute: () => Route$7
});
const AdminLoginRoute = Route.update({
  id: "/admin/login",
  path: "/admin/login",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ProductsRoute,
  SitemapDotxmlRoute,
  AdminLoginRoute,
  AdminIndexRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient2 = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient: queryClient2 },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$5 as R,
  router as r
};
