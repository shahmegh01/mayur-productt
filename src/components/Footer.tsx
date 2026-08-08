import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-14 pb-6 mt-10">
      <motion.div
        className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
      >
        {/* Brand */}
        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <ellipse cx="12" cy="7" rx="2" ry="5" fill="#1a9e5c" />
                <ellipse cx="12" cy="5" rx="1.5" ry="2.5" fill="#2ecc71" />
                <ellipse cx="12" cy="4" rx="0.7" ry="1" fill="#0A1628" />
                <path d="M12 10 Q9 12 8 16" stroke="#2ecc71" strokeWidth="0.7" fill="none" />
                <path d="M12 10 Q15 12 16 16" stroke="#2ecc71" strokeWidth="0.7" fill="none" />
                <line x1="12" y1="11" x2="12" y2="20" stroke="#FF6B2C" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="text-[8px] text-white/50 tracking-widest uppercase">Care By</div>
              <div className="font-bold text-lg tracking-widest">MAYUR</div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Premium home cleaning products manufactured with care. Trusted by customers across India since 2017.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp}>
          <h4 className="font-semibold mb-4 text-orange">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-orange transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp}>
          <h4 className="font-semibold mb-4 text-orange">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">📍</span>
              <span>22-23, Shreji Estate, Nr. Ambavpura Road, G.I.D.C Chhatral, Chhatral</span>
            </li>
            <li>📞 <a href="tel:+918200613891" className="hover:text-orange transition-colors">+91 82006 13891</a></li>
            <li>📧 <a href="mailto:navkarchemicals.info@gmail.com" className="hover:text-orange transition-colors">navkarchemicals.info@gmail.com</a></li>
            <li>💬 <a href="https://wa.me/918200613891" target="_blank" rel="noreferrer" className="hover:text-orange transition-colors">WhatsApp Us</a></li>
          </ul>
        </motion.div>
      </motion.div>

      <AnimatedSection className="max-w-7xl mx-auto px-4 lg:px-8 mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/50" variants={fadeUp}>
        © 2025 Care By Mayur — Navkar Chemicals. All rights reserved. | Made in Gujarat 🇮🇳
      </AnimatedSection>
    </footer>
  );
}
