import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, E as EASE, A as AnimatedSection, a as slideInLeft, v as viewportOnce, f as fadeUpSmall, s as staggerContainer } from "./SiteLayout-uDSDpmNJ.mjs";
import { B as Button } from "./button-DjOZMqFS.mjs";
import { b as saveContact } from "./api-Bgwb7ZPx.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { L as LoaderCircle, a as MapPin, P as Phone, b as Mail, c as MessageCircle, d as Clock } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Contact() {
  const [f, setF] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    subject: "Product Enquiry",
    message: ""
  });
  const [err, setErr] = reactExports.useState({});
  const [loading, setLoading] = reactExports.useState(false);
  const [done, setDone] = reactExports.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    const er = {};
    if (!f.name.trim()) er.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) er.email = "Invalid email";
    if (!/^[6-9]\d{9}$/.test(f.phone)) er.phone = "Invalid 10-digit mobile";
    if (!f.message.trim()) er.message = "Required";
    setErr(er);
    if (Object.keys(er).length) return;
    setLoading(true);
    try {
      await saveContact(f);
    } catch {
      const arr = JSON.parse(localStorage.getItem("mayur_contact_messages") || "[]");
      arr.unshift({
        ...f,
        at: (/* @__PURE__ */ new Date()).toISOString()
      });
      localStorage.setItem("mayur_contact_messages", JSON.stringify(arr));
    } finally {
      setLoading(false);
    }
    toast.success("Message sent! We'll reply within 24 hours.");
    setDone(true);
    setF({
      name: "",
      email: "",
      phone: "",
      subject: "Product Enquiry",
      message: ""
    });
  };
  const inp = "w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all";
  const field = (key) => err[key] ? `${inp} border-red-400` : inp;
  const contactInfo = [{
    icon: MapPin,
    label: "Address",
    value: "22-23, Shreji Estate, Nr. Ambavpura Road, G.I.D.C Chhatral, Chhatral",
    href: void 0
  }, {
    icon: Phone,
    label: "Phone",
    value: "+91 82006 13891",
    href: "tel:+918200613891"
  }, {
    icon: Mail,
    label: "Email",
    value: "navkarchemicals.info@gmail.com",
    href: "mailto:navkarchemicals.info@gmail.com"
  }, {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 82006 13891",
    href: "https://wa.me/918200613891"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy text-white py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5,
        ease: EASE
      }, className: "text-4xl md:text-5xl font-bold mb-3", children: "Let's Talk" }),
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
      }, className: "text-white/80 text-lg", children: "Product enquiries, bulk orders — one message away." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variants: slideInLeft, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl border border-border p-8 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-navy mb-6", children: "Send us a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: done ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 0.95
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          duration: 0.3,
          ease: EASE
        }, className: "text-center py-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            scale: 0
          }, animate: {
            scale: 1
          }, transition: {
            delay: 0.1,
            type: "spring",
            stiffness: 260,
            damping: 18
          }, className: "text-5xl mb-4", children: "✅" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-navy text-xl", children: "Message Sent!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "We'll get back to you within 24 hours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDone(false), className: "mt-4 text-orange hover:underline text-sm", children: "Send another message" })
        ] }, "done") : /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, exit: {
          opacity: 0
        }, onSubmit: submit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy block mb-1", children: "Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: f.name, onChange: (e) => setF({
                ...f,
                name: e.target.value
              }), placeholder: "Your full name", className: field("name") }),
              err.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: err.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy block mb-1", children: "Phone *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: f.phone, onChange: (e) => setF({
                ...f,
                phone: e.target.value
              }), placeholder: "10-digit mobile", maxLength: 10, className: field("phone") }),
              err.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: err.phone })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy block mb-1", children: "Email *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: f.email, onChange: (e) => setF({
              ...f,
              email: e.target.value
            }), placeholder: "your@email.com", type: "email", className: field("email") }),
            err.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: err.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy block mb-1", children: "Subject" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: f.subject, onChange: (e) => setF({
              ...f,
              subject: e.target.value
            }), className: inp, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Product Enquiry" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Bulk Order" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "General" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy block mb-1", children: "Message *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: f.message, onChange: (e) => setF({
              ...f,
              message: e.target.value
            }), placeholder: "Tell us what you need...", rows: 4, className: `${field("message")} resize-none` }),
            err.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: err.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: loading, className: "w-full bg-orange hover:bg-orange-light text-white h-11 font-semibold", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
            "Sending..."
          ] }) : "Send Message →" })
        ] }, "form") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "space-y-5", initial: "hidden", whileInView: "show", viewport: viewportOnce, variants: staggerContainer(0.08), children: [
        contactInfo.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUpSmall, whileHover: {
          x: 4
        }, transition: {
          duration: 0.2
        }, className: "bg-white rounded-2xl border border-border p-5 flex items-start gap-4 hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-5 h-5 text-orange" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5 font-medium uppercase tracking-wide", children: c.label }),
            c.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: c.href, target: c.href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", className: "text-sm font-semibold text-navy hover:text-orange transition-colors", children: c.value }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-navy", children: c.value })
          ] })
        ] }, c.label)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUpSmall, className: "bg-white rounded-2xl border border-border p-5 flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-orange" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wide", children: "Business Hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-navy", children: "Mon–Sat: 9:00 AM – 6:00 PM" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Sunday: Closed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "WhatsApp replies within 2 hours" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { variants: fadeUpSmall, whileHover: {
          scale: 1.02
        }, whileTap: {
          scale: 0.98
        }, href: "https://wa.me/918200613891", target: "_blank", rel: "noreferrer", className: "flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-semibold transition-colors shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" }),
          "Chat on WhatsApp Now"
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Contact as component
};
