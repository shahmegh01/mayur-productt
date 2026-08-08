import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle, Loader2, Clock } from "lucide-react";
import { saveContact } from "@/lib/api";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { slideInLeft, slideInRight, fadeUpSmall, staggerContainer, viewportOnce, EASE } from "@/lib/motion";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Care By Mayur" }] }),
  component: Contact,
});

function Contact() {
  const [f, setF] = useState({ name: "", email: "", phone: "", subject: "Product Enquiry", message: "" });
  const [err, setErr] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const er: Record<string, string> = {};
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
      arr.unshift({ ...f, at: new Date().toISOString() });
      localStorage.setItem("mayur_contact_messages", JSON.stringify(arr));
    } finally { setLoading(false); }
    toast.success("Message sent! We'll reply within 24 hours.");
    setDone(true);
    setF({ name: "", email: "", phone: "", subject: "Product Enquiry", message: "" });
  };

  const inp = "w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all";
  const field = (key: keyof typeof f) => err[key] ? `${inp} border-red-400` : inp;

  const contactInfo = [
    { icon: MapPin, label: "Address", value: "22-23, Shreji Estate, Nr. Ambavpura Road, G.I.D.C Chhatral, Chhatral", href: undefined },
    { icon: Phone, label: "Phone", value: "+91 82006 13891", href: "tel:+918200613891" },
    { icon: Mail, label: "Email", value: "navkarchemicals.info@gmail.com", href: "mailto:navkarchemicals.info@gmail.com" },
    { icon: MessageCircle, label: "WhatsApp", value: "+91 82006 13891", href: "https://wa.me/918200613891" },
  ];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-navy text-white py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-4xl md:text-5xl font-bold mb-3"
          >
            Let's Talk
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
            className="text-white/80 text-lg"
          >
            Product enquiries, bulk orders — one message away.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12">

          {/* Left — form */}
          <AnimatedSection variants={slideInLeft}>
            <div className="bg-white rounded-3xl border border-border p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="text-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
                      className="text-5xl mb-4"
                    >
                      ✅
                    </motion.div>
                    <p className="font-bold text-navy text-xl">Message Sent!</p>
                    <p className="text-muted-foreground mt-2">We'll get back to you within 24 hours.</p>
                    <button onClick={() => setDone(false)} className="mt-4 text-orange hover:underline text-sm">
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={submit}
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-navy block mb-1">Name *</label>
                        <input value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} placeholder="Your full name" className={field("name")} />
                        {err.name && <p className="text-red-500 text-xs mt-1">{err.name}</p>}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-navy block mb-1">Phone *</label>
                        <input value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} placeholder="10-digit mobile" maxLength={10} className={field("phone")} />
                        {err.phone && <p className="text-red-500 text-xs mt-1">{err.phone}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-navy block mb-1">Email *</label>
                      <input value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} placeholder="your@email.com" type="email" className={field("email")} />
                      {err.email && <p className="text-red-500 text-xs mt-1">{err.email}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-navy block mb-1">Subject</label>
                      <select value={f.subject} onChange={(e) => setF({ ...f, subject: e.target.value })} className={inp}>
                        <option>Product Enquiry</option>
                        <option>Bulk Order</option>
                        <option>General</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-navy block mb-1">Message *</label>
                      <textarea value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} placeholder="Tell us what you need..." rows={4} className={`${field("message")} resize-none`} />
                      {err.message && <p className="text-red-500 text-xs mt-1">{err.message}</p>}
                    </div>
                    <Button type="submit" disabled={loading} className="w-full bg-orange hover:bg-orange-light text-white h-11 font-semibold">
                      {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</> : "Send Message →"}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

          {/* Right — contact info */}
          <motion.div
            className="space-y-5"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.08)}
          >
            {contactInfo.map((c) => (
              <motion.div
                key={c.label}
                variants={fadeUpSmall}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border border-border p-5 flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5 font-medium uppercase tracking-wide">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-sm font-semibold text-navy hover:text-orange transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-navy">{c.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div variants={fadeUpSmall} className="bg-white rounded-2xl border border-border p-5 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-orange" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wide">Business Hours</p>
                <p className="text-sm font-medium text-navy">Mon–Sat: 9:00 AM – 6:00 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                <p className="text-xs text-muted-foreground mt-1">WhatsApp replies within 2 hours</p>
              </div>
            </motion.div>

            <motion.a
              variants={fadeUpSmall}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/918200613891"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-semibold transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
