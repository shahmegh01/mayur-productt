import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-40 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-border"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center group">
          <img src="/logo.png" alt="Mayur Logo" className="w-35 h-28 object-contain md" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const active =
              l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative text-sm font-medium text-navy hover:text-orange transition-colors py-1"
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-orange rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/918200613891"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-green-700 hover:underline flex items-center gap-1"
          >
            💬 WhatsApp
          </a>
          <a
            href="tel:+918200613891"
            className="text-sm font-medium text-navy hover:text-orange transition-colors"
          >
            📞 +91 82006 13891
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-border bg-white"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <Link to={l.to} className="block text-base font-medium text-navy py-1.5 hover:text-orange">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 border-t space-y-2">
                <a href="https://wa.me/918200613891" className="block text-sm text-green-700 font-medium py-1">
                  💬 WhatsApp Us
                </a>
                <a href="tel:+918200613891" className="block text-sm text-navy font-medium py-1">
                  📞 +91 82006 13891
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
