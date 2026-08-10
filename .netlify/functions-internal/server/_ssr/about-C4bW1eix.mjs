import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, E as EASE, A as AnimatedSection, a as slideInLeft, b as slideInRight } from "./SiteLayout-uDSDpmNJ.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy text-white py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5,
        ease: EASE
      }, className: "text-4xl md:text-5xl font-bold mb-3", children: "About Care By Mayur" }),
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
      }, className: "text-white/80", children: "Building trusted home cleaning products since 2017" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-28 min-h-[75vh] flex items-center relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variants: slideInLeft, className: "text-left lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1.5 bg-orange mb-6 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl lg:text-5xl font-bold text-navy mb-8", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg lg:text-xl text-muted-foreground leading-relaxed mb-5", children: "Founded in 2017 in Chhatral, Gujarat, Care By Mayur (manufactured by Navkar Chemicals) started with a simple vision — to manufacture high-quality, affordable home cleaning products that families across India can rely on every day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg lg:text-xl text-muted-foreground leading-relaxed", children: "What began as a focused manufacturing effort has grown into a trusted range of products covering floor care, kitchen, bathroom, laundry and personal care — all made with consistent quality and care for the customer." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variants: slideInRight, className: "lg:col-span-5 flex flex-col items-center justify-center text-center p-8 lg:p-10 bg-white rounded-3xl border border-border shadow-xl relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-40 h-40 bg-orange/10 rounded-full -translate-y-1/2 translate-x-1/4 -z-10 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg mb-6 border-4 border-orange/20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/raja_cropped.png", alt: "Founder of Mayur", className: "w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1 bg-border rounded-full mb-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl lg:text-3xl font-bold text-navy mb-3", children: "Founder of Mayur" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base lg:text-lg text-muted-foreground leading-relaxed italic", children: '"Our goal has always been to provide families with high-quality, reliable, and affordable cleaning solutions. We believe in building trust through consistent quality and a true customer-first approach."' })
      ] })
    ] }) })
  ] });
}
export {
  About as component
};
