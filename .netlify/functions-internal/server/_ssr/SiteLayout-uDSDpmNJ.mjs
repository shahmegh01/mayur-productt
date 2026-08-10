import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as useLocation, L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion, u as useInView, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { X, M as Menu } from "../_libs/lucide-react.mjs";
const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const location = useLocation();
  reactExports.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  reactExports.useEffect(() => setOpen(false), [location.pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      className: `sticky top-0 z-40 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-border"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "Mayur Logo", className: "w-35 h-28 object-contain md" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-8", children: links.map((l) => {
            const active = l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: l.to,
                className: "relative text-sm font-medium text-navy hover:text-orange transition-colors py-1",
                children: [
                  l.label,
                  active && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      layoutId: "nav-underline",
                      className: "absolute left-0 right-0 -bottom-1 h-[2px] bg-orange rounded-full",
                      transition: { type: "spring", stiffness: 380, damping: 30 }
                    }
                  )
                ]
              },
              l.to
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://wa.me/918200613891",
                target: "_blank",
                rel: "noreferrer",
                className: "text-sm font-medium text-green-700 hover:underline flex items-center gap-1",
                children: "💬 WhatsApp"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "tel:+918200613891",
                className: "text-sm font-medium text-navy hover:text-orange transition-colors",
                children: "📞 +91 82006 13891"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "lg:hidden p-1", onClick: () => setOpen(!open), "aria-label": "Menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: { rotate: -90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: 90, opacity: 0 }, transition: { duration: 0.2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) }, "x") : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: { rotate: 90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: -90, opacity: 0 }, transition: { duration: 0.2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6" }) }, "menu") }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            className: "lg:hidden overflow-hidden border-t border-border bg-white",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 space-y-3", children: [
              links.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: -10 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: i * 0.05, duration: 0.25 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "block text-base font-medium text-navy py-1.5 hover:text-orange", children: l.label })
                },
                l.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/918200613891", className: "block text-sm text-green-700 font-medium py-1", children: "💬 WhatsApp Us" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+918200613891", className: "block text-sm text-navy font-medium py-1", children: "📞 +91 82006 13891" })
              ] })
            ] })
          }
        ) })
      ]
    }
  );
}
const EASE = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } }
};
const fadeUpSmall = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } }
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE } }
};
const slideInLeft = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } }
};
const slideInRight = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } }
};
const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren }
  }
});
const viewportOnce = { once: true, margin: "-80px" };
function AnimatedSection({
  children,
  className,
  variants = fadeUp,
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: viewportOnce,
      variants,
      transition: { delay },
      children
    }
  );
}
function AnimatedCounter({
  value,
  suffix = "",
  duration = 1.4,
  className
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1e3), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className, children: [
    display,
    suffix
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy text-white pt-14 pb-6 mt-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-8",
        initial: "hidden",
        whileInView: "show",
        viewport: viewportOnce,
        variants: staggerContainer(0.1),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "12", cy: "7", rx: "2", ry: "5", fill: "#1a9e5c" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "12", cy: "5", rx: "1.5", ry: "2.5", fill: "#2ecc71" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "12", cy: "4", rx: "0.7", ry: "1", fill: "#0A1628" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 10 Q9 12 8 16", stroke: "#2ecc71", strokeWidth: "0.7", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 10 Q15 12 16 16", stroke: "#2ecc71", strokeWidth: "0.7", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "11", x2: "12", y2: "20", stroke: "#FF6B2C", strokeWidth: "1.2", strokeLinecap: "round" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] text-white/50 tracking-widest uppercase", children: "Care By" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg tracking-widest", children: "MAYUR" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/70 leading-relaxed", children: "Premium home cleaning products manufactured with care. Trusted by customers across India since 2017." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-4 text-orange", children: "Quick Links" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-white/80", children: [
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" }
            ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "hover:text-orange transition-colors", children: l.label }) }, l.to)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-4 text-orange", children: "Contact Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-white/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5", children: "📍" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "22-23, Shreji Estate, Nr. Ambavpura Road, G.I.D.C Chhatral, Chhatral" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "📞 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+918200613891", className: "hover:text-orange transition-colors", children: "+91 82006 13891" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "📧 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:navkarchemicals.info@gmail.com", className: "hover:text-orange transition-colors", children: "navkarchemicals.info@gmail.com" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "💬 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/918200613891", target: "_blank", rel: "noreferrer", className: "hover:text-orange transition-colors", children: "WhatsApp Us" })
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { className: "max-w-7xl mx-auto px-4 lg:px-8 mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/50", variants: fadeUp, children: "© 2025 Care By Mayur — Navkar Chemicals. All rights reserved. | Made in Gujarat 🇮🇳" })
  ] });
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.main,
      {
        className: "flex-1",
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        children
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  AnimatedSection as A,
  EASE as E,
  SiteLayout as S,
  slideInLeft as a,
  slideInRight as b,
  fadeIn as c,
  fadeUp as d,
  AnimatedCounter as e,
  fadeUpSmall as f,
  scaleIn as g,
  staggerContainer as s,
  viewportOnce as v
};
