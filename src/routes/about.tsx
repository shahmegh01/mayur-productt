import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Factory, ShieldCheck, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { fadeUp, slideInLeft, slideInRight, scaleIn, staggerContainer, viewportOnce, EASE } from "@/lib/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Care By Mayur" },
      { name: "description", content: "Building trusted home cleaning products in Gujarat since 2017." },
    ],
  }),
  component: About,
});

const whyDifferent = [
  { icon: Factory, title: "Made in Gujarat", desc: "Manufactured in our dedicated facility in Chhatral with strict quality controls" },
  { icon: ShieldCheck, title: "Quality Assured", desc: "Every batch tested before it reaches our customers" },
  { icon: Handshake, title: "Customer First", desc: "We grow only when our customers are genuinely satisfied" },
];

const gradients = ["from-emerald-500 to-teal-700", "from-yellow-400 to-orange-500", "from-sky-500 to-blue-700", "from-fuchsia-500 to-pink-600"];

function About() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-4xl md:text-5xl font-bold mb-3"
          >
            About Care By Mayur
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
            className="text-white/80"
          >
            Building trusted home cleaning products since 2017
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 min-h-[75vh] flex items-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <AnimatedSection variants={slideInLeft} className="text-left lg:col-span-7">
            <div className="w-16 h-1.5 bg-orange mb-6 rounded-full"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-8">Our Story</h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-5">
              Founded in 2017 in Chhatral, Gujarat, Care By Mayur (manufactured by Navkar Chemicals)
              started with a simple vision — to manufacture high-quality, affordable home cleaning
              products that families across India can rely on every day. 
            </p>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              What began as a focused manufacturing effort has grown into a trusted range of products covering floor care,
              kitchen, bathroom, laundry and personal care — all made with consistent quality and
              care for the customer.
            </p>
          </AnimatedSection>

          <AnimatedSection variants={slideInRight} className="lg:col-span-5 flex flex-col items-center justify-center text-center p-8 lg:p-10 bg-white rounded-3xl border border-border shadow-xl relative z-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange/10 rounded-full -translate-y-1/2 translate-x-1/4 -z-10 blur-3xl"></div>
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg mb-6 border-4 border-orange/20 bg-muted">
              <img src="/raja_cropped.png" alt="Founder of Mayur" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-12 h-1 bg-border rounded-full mb-5"></div>
            <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-3">Founder of Mayur</h3>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed italic">
              "Our goal has always been to provide families with high-quality, reliable, and affordable cleaning solutions. We believe in building trust through consistent quality and a true customer-first approach."
            </p>
          </AnimatedSection>
        </div>
      </section>
    </SiteLayout>
  );
}
