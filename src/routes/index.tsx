import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Factory, Package, Truck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedCounter } from "@/components/AnimatedSection";
import { fadeUp, fadeUpSmall, fadeIn, scaleIn, slideInLeft, slideInRight, staggerContainer, viewportOnce, EASE } from "@/lib/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Care By Mayur — Premium Home Cleaning Products" },
      { name: "description", content: "Premium home cleaning products by Navkar Chemicals, Gujarat." },
    ],
  }),
  component: Home,
});


const allCategories = [
  { name: "Glass", desc: "Premium streak-free cleaners", gradient: "from-cyan-400 to-sky-600", img: "/categories/glass.png" },
  { name: "Bathroom", desc: "Heavy-duty descaler", gradient: "from-sky-500 to-blue-700", img: "/categories/bathroom.png" },
  { name: "Personal Care", desc: "Organic & moisturizing", gradient: "from-rose-400 to-pink-600", img: "/categories/personal.png" },
  { name: "Laundry", desc: "Top & front load detergents", gradient: "from-blue-500 to-indigo-700", img: "/categories/laundry.png" },
  { name: "Floor Care", desc: "Disinfectant + fragrance", gradient: "from-emerald-500 to-teal-700", img: "/categories/floor.png" },
  { name: "Kitchen", desc: "Power of lemon", gradient: "from-yellow-400 to-orange-500", img: "/categories/kitchen.png" },
];

const heroWords = ["Trusted", "Cleaning", "Solutions,"];

function Home() {
  return (
    <SiteLayout>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section 
        className="relative overflow-hidden bg-navy text-white"
        style={{
          backgroundImage: "url('/OIP (4).webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-navy/75 pointer-events-none" />
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange/20 rounded-full blur-3xl pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, x: ["0%", "3%", "0%"], y: ["0%", "-2%", "0%"] }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 1 }, x: { duration: 14, repeat: Infinity, ease: "easeInOut" }, y: { duration: 14, repeat: Infinity, ease: "easeInOut" } }}
          style={{ translateY: "-33%", translateX: "25%" }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/10 rounded-full blur-3xl translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32 min-h-[70vh] flex items-center">
          {/* LEFT — text */}
          <div className="max-w-2xl text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium mb-6 border border-white/20"
            >
              🏭 Manufacturing Since 2017 · Gujarat
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              <motion.span
                className="block"
                initial="hidden"
                animate="show"
                variants={staggerContainer(0.12, 0.15)}
              >
                {heroWords.map((w, i) => (
                  <motion.span
                    key={w}
                    className="inline-block mr-3"
                    variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}
                  >
                    {w}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                className="text-orange block"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5, ease: EASE }}
              >
                Factory to You.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5, ease: EASE }}
              className="text-lg text-white/75 mb-8 max-w-lg leading-relaxed"
            >
              Care By Mayur manufactures premium home cleaning products — trusted by customers
              across India for quality, reliability and everyday value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5, ease: EASE }}
              className="flex flex-wrap gap-3"
            >
              <Link to="/products">
                <Button size="lg" className="bg-orange hover:bg-orange-light text-white font-semibold px-7 relative overflow-hidden group">
                  <span className="relative z-10">View Our Products →</span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/60 text-white bg-transparent hover:bg-white hover:text-navy font-semibold px-7">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────────── */}
      <AnimatedSection className="border-y border-border bg-secondary" variants={fadeIn}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-navy font-medium">
            <Factory className="w-5 h-5 text-orange shrink-0" />
            Gujarat-based manufacturer. Quality cleaning products for every home.
          </div>
          <Link to="/about" className="text-sm font-semibold text-orange hover:underline">
            Read our story →
          </Link>
        </div>
      </AnimatedSection>

      {/* ── PRODUCT CATEGORIES ───────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">Our Product Range</h2>
            <p className="text-muted-foreground">Manufactured with care, trusted in every home</p>
          </AnimatedSection>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.08)}
          >
            {allCategories.map((c) => (
              <motion.div key={c.name} variants={fadeUpSmall}>
                <Link
                  to="/products"
                  search={{ category: c.name }}
                  className="group block rounded-2xl border border-border bg-white hover:shadow-xl hover:border-orange/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="w-full h-48 relative overflow-hidden bg-muted">
                    <motion.img 
                      src={c.img} 
                      alt={c.name} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-navy mb-1">{c.name}</h3>
                    <p className="text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection className="text-center mt-8" variants={fadeUp} delay={0.1}>
            <Link to="/products">
              <Button className="bg-orange hover:bg-orange-light text-white px-8">View All Products →</Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY CHOOSE (alternating slide-in) ────────────────── */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">Why Choose Mayur</h2>
            <p className="text-muted-foreground">Quality you can trust, service you can rely on</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Factory, title: "Factory Direct", desc: "Manufactured with care and consistent quality control", img: "/why/factory.jpg" },
              { icon: Package, title: "Trusted Formulas", desc: "Proven formulations used in homes across India", img: "/why/formulas.jpg" },
              { icon: Truck, title: "Reliable Supply", desc: "Consistent availability, every single time", img: "/why/supply.jpg" },
              { icon: ShieldCheck, title: "Quality Assured", desc: "Every batch tested before it reaches you", img: "/why/quality.jpg" },
            ].map((f, i) => (
              <AnimatedSection
                key={f.title}
                variants={i % 2 === 0 ? slideInLeft : slideInRight}
                delay={i * 0.08}
              >
                <div className="bg-white rounded-2xl border border-border hover:shadow-lg transition-shadow h-full overflow-hidden flex flex-col">
                  <div className="h-40 w-full relative">
                    <img src={f.img} alt={f.title} className="w-full h-full object-cover" />
                    <div className="absolute -bottom-5 left-6 w-12 h-12 rounded-xl bg-orange flex items-center justify-center shadow-md border-4 border-white">
                      <f.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6 pt-8 flex-1">
                    <h3 className="font-bold text-navy mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS COUNTER ────────────────────────────────────── */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
          >
            {[
              { value: 6, suffix: "+", label: "Products" },
              { value: 2017, suffix: "", label: "Established" },
              { value: 100, suffix: "%", label: "Quality Checked" },
              { value: 24, suffix: "hr", label: "Response Time" },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUpSmall}>
                <div className="text-3xl md:text-4xl font-bold text-orange mb-1">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-white/70">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">What Our Customers Say</h2>
          </AnimatedSection>

          <motion.div
            className="grid md:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
          >
            {[
              { name: "Rakesh Patel", role: "Customer · Ahmedabad", quote: "Mayur products have been a consistent choice for us. Great quality and always available." },
              { name: "Suresh Reddy", role: "Customer · Hyderabad", quote: "Very good range of cleaning products. The floor cleaner and dishwash gel are excellent." },
              { name: "Anita Sharma", role: "Customer · Jaipur", quote: "Reliable brand. Great value for money and the team is always responsive to queries." },
            ].map((t) => (
              <motion.div key={t.name} variants={fadeUpSmall}>
                <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow h-full">
                  <div className="text-orange text-lg mb-3">★★★★★</div>
                  <p className="text-sm text-navy/80 italic leading-relaxed mb-5">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange/20 flex items-center justify-center font-bold text-orange">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <AnimatedSection variants={scaleIn}>
            <div className="bg-gradient-to-br from-navy to-navy/90 rounded-3xl p-10 text-white text-center shadow-2xl">
              <h2 className="text-3xl font-bold mb-3">Interested in our products?</h2>
              <p className="text-white/70 mb-6">Browse our full range or get in touch with us directly.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/products">
                  <Button size="lg" className="bg-orange hover:bg-orange-light text-white font-semibold">
                    Browse Products
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white/60 text-white bg-transparent hover:bg-white hover:text-navy font-semibold">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </SiteLayout>
  );
}
