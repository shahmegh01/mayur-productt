import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, E as EASE, s as staggerContainer, A as AnimatedSection, c as fadeIn, d as fadeUp, v as viewportOnce, f as fadeUpSmall, a as slideInLeft, b as slideInRight, e as AnimatedCounter, g as scaleIn } from "./SiteLayout-uDSDpmNJ.mjs";
import { B as Button } from "./button-DjOZMqFS.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { F as Factory, e as Package, T as Truck, S as ShieldCheck } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const allCategories = [{
  name: "Glass",
  desc: "Premium streak-free cleaners",
  gradient: "from-cyan-400 to-sky-600",
  img: "/categories/glass.png"
}, {
  name: "Bathroom",
  desc: "Heavy-duty descaler",
  gradient: "from-sky-500 to-blue-700",
  img: "/categories/bathroom.png"
}, {
  name: "Personal Care",
  desc: "Organic & moisturizing",
  gradient: "from-rose-400 to-pink-600",
  img: "/categories/personal.png"
}, {
  name: "Laundry",
  desc: "Top & front load detergents",
  gradient: "from-blue-500 to-indigo-700",
  img: "/categories/laundry.png"
}, {
  name: "Floor Care",
  desc: "Disinfectant + fragrance",
  gradient: "from-emerald-500 to-teal-700",
  img: "/categories/floor.png"
}, {
  name: "Kitchen",
  desc: "Power of lemon",
  gradient: "from-yellow-400 to-orange-500",
  img: "/categories/kitchen.png"
}];
const heroWords = ["Trusted", "Cleaning", "Solutions,"];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-navy text-white", style: {
      backgroundImage: "url('/OIP (4).webp')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-navy/75 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-orange/20 rounded-full blur-3xl pointer-events-none", initial: {
        opacity: 0,
        scale: 0.8
      }, animate: {
        opacity: 1,
        scale: 1,
        x: ["0%", "3%", "0%"],
        y: ["0%", "-2%", "0%"]
      }, transition: {
        opacity: {
          duration: 1
        },
        scale: {
          duration: 1
        },
        x: {
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        },
        y: {
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }, style: {
        translateY: "-33%",
        translateX: "25%"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/10 rounded-full blur-3xl translate-y-1/3 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32 min-h-[70vh] flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.5,
          ease: EASE
        }, className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium mb-6 border border-white/20", children: "🏭 Manufacturing Since 2017 · Gujarat" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "block", initial: "hidden", animate: "show", variants: staggerContainer(0.12, 0.15), children: heroWords.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "inline-block mr-3", variants: {
            hidden: {
              opacity: 0,
              y: 18
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: EASE
              }
            }
          }, children: w }, w)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "text-orange block", initial: {
            opacity: 0,
            y: 18
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.55,
            duration: 0.5,
            ease: EASE
          }, children: "Factory to You." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 14
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.7,
          duration: 0.5,
          ease: EASE
        }, className: "text-lg text-white/75 mb-8 max-w-lg leading-relaxed", children: "Care By Mayur manufactures premium home cleaning products — trusted by customers across India for quality, reliability and everyday value." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 14
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.85,
          duration: 0.5,
          ease: EASE
        }, className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "bg-orange hover:bg-orange-light text-white font-semibold px-7 relative overflow-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "View Our Products →" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "border-white/60 text-white bg-transparent hover:bg-white hover:text-navy font-semibold px-7", children: "Contact Us" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { className: "border-y border-border bg-secondary", variants: fadeIn, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-navy font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { className: "w-5 h-5 text-orange shrink-0" }),
        "Gujarat-based manufacturer. Quality cleaning products for every home."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "text-sm font-semibold text-orange hover:underline", children: "Read our story →" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { className: "text-center mb-12", variants: fadeUp, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-navy mb-3", children: "Our Product Range" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Manufactured with care, trusted in every home" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", initial: "hidden", whileInView: "show", viewport: viewportOnce, variants: staggerContainer(0.08), children: allCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUpSmall, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", search: {
        category: c.name
      }, className: "group block rounded-2xl border border-border bg-white hover:shadow-xl hover:border-orange/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-48 relative overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: c.img, alt: c.name, className: "w-full h-full object-cover", whileHover: {
          scale: 1.05
        }, transition: {
          duration: 0.3
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-navy mb-1", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: c.desc })
        ] })
      ] }) }, c.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { className: "text-center mt-8", variants: fadeUp, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-orange hover:bg-orange-light text-white px-8", children: "View All Products →" }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { className: "text-center mb-12", variants: fadeUp, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-navy mb-3", children: "Why Choose Mayur" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Quality you can trust, service you can rely on" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: [{
        icon: Factory,
        title: "Factory Direct",
        desc: "Manufactured with care and consistent quality control",
        img: "/why/factory.jpg"
      }, {
        icon: Package,
        title: "Trusted Formulas",
        desc: "Proven formulations used in homes across India",
        img: "/why/formulas.jpg"
      }, {
        icon: Truck,
        title: "Reliable Supply",
        desc: "Consistent availability, every single time",
        img: "/why/supply.jpg"
      }, {
        icon: ShieldCheck,
        title: "Quality Assured",
        desc: "Every batch tested before it reaches you",
        img: "/why/quality.jpg"
      }].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variants: i % 2 === 0 ? slideInLeft : slideInRight, delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl border border-border hover:shadow-lg transition-shadow h-full overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-40 w-full relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: f.img, alt: f.title, className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-5 left-6 w-12 h-12 rounded-xl bg-orange flex items-center justify-center shadow-md border-4 border-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-5 h-5 text-white" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 pt-8 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-navy mb-2", children: f.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: f.desc })
        ] })
      ] }) }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-navy text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "grid grid-cols-2 lg:grid-cols-4 gap-8 text-center", initial: "hidden", whileInView: "show", viewport: viewportOnce, variants: staggerContainer(0.1), children: [{
      value: 6,
      suffix: "+",
      label: "Products"
    }, {
      value: 2017,
      suffix: "",
      label: "Established"
    }, {
      value: 100,
      suffix: "%",
      label: "Quality Checked"
    }, {
      value: 24,
      suffix: "hr",
      label: "Response Time"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUpSmall, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl font-bold text-orange mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { value: s.value, suffix: s.suffix }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white/70", children: s.label })
    ] }, s.label)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-navy text-center mb-12", children: "What Our Customers Say" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "grid md:grid-cols-3 gap-5", initial: "hidden", whileInView: "show", viewport: viewportOnce, variants: staggerContainer(0.1), children: [{
        name: "Rakesh Patel",
        role: "Customer · Ahmedabad",
        quote: "Mayur products have been a consistent choice for us. Great quality and always available."
      }, {
        name: "Suresh Reddy",
        role: "Customer · Hyderabad",
        quote: "Very good range of cleaning products. The floor cleaner and dishwash gel are excellent."
      }, {
        name: "Anita Sharma",
        role: "Customer · Jaipur",
        quote: "Reliable brand. Great value for money and the team is always responsive to queries."
      }].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUpSmall, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-orange text-lg mb-3", children: "★★★★★" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-navy/80 italic leading-relaxed mb-5", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-orange/20 flex items-center justify-center font-bold text-orange", children: t.name.charAt(0) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-navy text-sm", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
          ] })
        ] })
      ] }) }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variants: scaleIn, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-navy to-navy/90 rounded-3xl p-10 text-white text-center shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-3", children: "Interested in our products?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 mb-6", children: "Browse our full range or get in touch with us directly." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "bg-orange hover:bg-orange-light text-white font-semibold", children: "Browse Products" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "border-white/60 text-white bg-transparent hover:bg-white hover:text-navy font-semibold", children: "Contact Us" }) })
      ] })
    ] }) }) }) })
  ] });
}
export {
  Home as component
};
