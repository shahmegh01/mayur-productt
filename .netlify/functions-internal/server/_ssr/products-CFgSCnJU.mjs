import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, E as EASE, f as fadeUpSmall, s as staggerContainer } from "./SiteLayout-uDSDpmNJ.mjs";
import { B as Button, c as cn } from "./button-DjOZMqFS.mjs";
import { D as Dialog$1, a as DialogPortal$1, b as DialogContent$1, c as DialogClose, d as DialogOverlay$1, e as DialogTitle$1, f as DialogDescription$1 } from "../_libs/radix-ui__react-dialog.mjs";
import { g as getCategories, a as getProducts, s as saveQuery } from "./api-Bgwb7ZPx.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as Route$5 } from "./router-Cx8_nUks.mjs";
import { L as LoaderCircle, X, C as CircleCheck } from "../_libs/lucide-react.mjs";
import { m as motion, L as LayoutGroup, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const Dialog = Dialog$1;
const DialogPortal = DialogPortal$1;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogOverlay$1,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogOverlay$1.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, hideClose, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent$1,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        !hideClose && /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogContent$1.displayName;
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogTitle$1,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogTitle$1.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogDescription$1,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogDescription$1.displayName;
function QueryForm({
  productName,
  onClose
}) {
  const [f, setF] = reactExports.useState({
    name: "",
    phone: "",
    message: productName ? `I am interested in ${productName}` : ""
  });
  const [loading, setLoading] = reactExports.useState(false);
  const [done, setDone] = reactExports.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    if (!f.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(f.phone)) {
      toast.error("Enter valid 10-digit mobile number");
      return;
    }
    if (!f.message.trim()) {
      toast.error("Please enter your query");
      return;
    }
    setLoading(true);
    try {
      await saveQuery({
        name: f.name,
        phone: f.phone,
        product_name: productName,
        message: f.message
      });
    } catch {
      const q = JSON.parse(localStorage.getItem("mayur_queries") || "[]");
      q.unshift({
        ...f,
        product_name: productName,
        at: (/* @__PURE__ */ new Date()).toISOString()
      });
      localStorage.setItem("mayur_queries", JSON.stringify(q));
    } finally {
      setLoading(false);
    }
    setDone(true);
    toast.success("Query sent! We'll call you soon.");
    setTimeout(() => onClose?.(), 2e3);
  };
  if (done) return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    scale: 0.9
  }, animate: {
    opacity: 1,
    scale: 1
  }, transition: {
    duration: 0.35,
    ease: EASE
  }, className: "text-center py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      scale: 0
    }, animate: {
      scale: 1
    }, transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 260,
      damping: 18
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-14 h-14 text-green-500 mx-auto mb-3" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-navy text-lg", children: "Query Sent!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Our team will call you within 2 hours." })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-3 mt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy block mb-1", children: "Your Name *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: f.name, onChange: (e) => setF({
        ...f,
        name: e.target.value
      }), placeholder: "Full name", className: "w-full px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy block mb-1", children: "Phone Number *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: f.phone, onChange: (e) => setF({
        ...f,
        phone: e.target.value
      }), placeholder: "10-digit mobile number", maxLength: 10, className: "w-full px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy block mb-1", children: "Your Query *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: f.message, onChange: (e) => setF({
        ...f,
        message: e.target.value
      }), rows: 3, placeholder: "What would you like to know?", className: "w-full px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all resize-none" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: loading, className: "w-full bg-orange hover:bg-orange-light text-white", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
      "Sending..."
    ] }) : "Send Query →" })
  ] });
}
function ProductModal({
  product,
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { hideClose: true, className: "max-w-2xl max-h-[90vh] overflow-y-auto p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-64 overflow-hidden bg-gray-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.name, className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-navy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-3 left-3 text-xs bg-white/95 text-navy font-semibold px-3 py-1 rounded-full shadow", children: product.category })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-navy mb-2", children: product.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-5", children: product.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-navy mb-3", children: "Key Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5", children: product.features.map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-navy/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-orange shrink-0 mt-0.5" }),
        feat
      ] }, feat)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-navy mb-3", children: "Available Pack Sizes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: product.packs.map((pk) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-1.5 rounded-lg border-2 border-orange/30 text-sm font-medium text-navy bg-orange/5", children: pk.size }, pk.size)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-navy text-lg mb-1", children: "Send a Query" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Interested? Leave your details and we'll call you back." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(QueryForm, { productName: product.name, onClose })
      ] })
    ] })
  ] });
}
function Products() {
  const search = Route$5.useSearch();
  const [activeCat, setActiveCat] = reactExports.useState(search.category || "All");
  const [selected, setSelected] = reactExports.useState(null);
  const [products, setProducts] = reactExports.useState([]);
  const [categories, setCategories] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    Promise.all([getCategories(), getProducts()]).then(([cats, prods]) => {
      setCategories(["All", ...cats.map((c) => c.name)]);
      setProducts(prods);
      setLoading(false);
    }).catch((e) => {
      toast.error("Failed to load products");
      setLoading(false);
    });
  }, []);
  reactExports.useEffect(() => {
    if (search.category) {
      setActiveCat(search.category);
    }
  }, [search.category]);
  const filtered = activeCat === "All" ? products : products.filter((p) => p.category === activeCat);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 animate-spin" }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy text-white py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5,
        ease: EASE
      }, className: "text-4xl md:text-5xl font-bold mb-3", children: "Our Products" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.1,
        duration: 0.5,
        ease: EASE
      }, className: "text-white/80 text-lg", children: "Premium cleaning formulations in retail and bulk packs" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 lg:px-8 py-3 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGroup, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 min-w-max", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setActiveCat(c), className: `relative px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${activeCat === c ? "text-white" : "text-navy hover:text-orange"}`, children: [
      activeCat === c && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { layoutId: "cat-pill", className: "absolute inset-0 bg-orange rounded-full shadow-sm", transition: {
        type: "spring",
        stiffness: 400,
        damping: 32
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10", children: [
        c,
        c !== "All" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1.5 text-xs opacity-70", children: [
          "(",
          products.filter((p) => p.category === c).length,
          ")"
        ] })
      ] })
    ] }, c)) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, className: "text-sm text-muted-foreground mb-5", children: [
        "Showing ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-navy", children: filtered.length }),
        " product",
        filtered.length !== 1 ? "s" : "",
        activeCat !== "All" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          " in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-orange", children: activeCat })
        ] })
      ] }, activeCat + "-count"),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", initial: "hidden", animate: "show", variants: staggerContainer(0.06), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { layout: true, variants: fadeUpSmall, initial: "hidden", animate: "show", exit: {
        opacity: 0,
        scale: 0.95,
        transition: {
          duration: 0.2
        }
      }, whileHover: {
        y: -6
      }, transition: {
        duration: 0.25,
        ease: EASE
      }, className: "bg-white rounded-2xl border border-border hover:shadow-xl transition-shadow overflow-hidden group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden bg-gray-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: p.image, alt: p.name, className: "w-full h-full object-cover", whileHover: {
            scale: 1.06
          }, transition: {
            duration: 0.4,
            ease: EASE
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 text-xs bg-white/95 text-navy font-semibold px-2.5 py-1 rounded-full shadow", children: p.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-navy text-base mb-1.5", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 mb-3", children: p.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children: p.packs.map((pk) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-0.5 bg-orange/10 text-orange rounded-md font-medium", children: pk.size }, pk.size)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setSelected(p), className: "w-full bg-navy hover:bg-navy/90 text-white text-sm h-9", children: "View Details & Query" })
        ] })
      ] }, p.id)) }) }, activeCat)
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!selected, onOpenChange: (o) => !o && setSelected(null), children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx(ProductModal, { product: selected, onClose: () => setSelected(null) }) })
  ] });
}
export {
  Products as component
};
