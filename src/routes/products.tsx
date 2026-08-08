import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { saveQuery, getProducts, getCategories, Product } from "@/lib/api";
import { toast } from "sonner";
import { CheckCircle2, X, Loader2 } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { fadeUp, fadeUpSmall, staggerContainer, viewportOnce, EASE } from "@/lib/motion";

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      category: search.category as string | undefined,
    }
  },
  head: () => ({ meta: [{ title: "Products — Care By Mayur" }] }),
  component: Products,
});


function QueryForm({ productName, onClose }: { productName?: string; onClose?: () => void }) {
  const [f, setF] = useState({ name: "", phone: "", message: productName ? `I am interested in ${productName}` : "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name.trim()) { toast.error("Please enter your name"); return; }
    if (!/^[6-9]\d{9}$/.test(f.phone)) { toast.error("Enter valid 10-digit mobile number"); return; }
    if (!f.message.trim()) { toast.error("Please enter your query"); return; }
    setLoading(true);
    try {
      await saveQuery({ name: f.name, phone: f.phone, product_name: productName, message: f.message });
    } catch {
      const q = JSON.parse(localStorage.getItem("mayur_queries") || "[]");
      q.unshift({ ...f, product_name: productName, at: new Date().toISOString() });
      localStorage.setItem("mayur_queries", JSON.stringify(q));
    } finally { setLoading(false); }
    setDone(true);
    toast.success("Query sent! We'll call you soon.");
    setTimeout(() => onClose?.(), 2000);
  };

  if (done) return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="text-center py-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
      >
        <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-3" />
      </motion.div>
      <p className="font-bold text-navy text-lg">Query Sent!</p>
      <p className="text-muted-foreground text-sm mt-1">Our team will call you within 2 hours.</p>
    </motion.div>
  );

  return (
    <form onSubmit={submit} className="space-y-3 mt-4">
      <div>
        <label className="text-sm font-medium text-navy block mb-1">Your Name *</label>
        <input
          value={f.name}
          onChange={(e) => setF({ ...f, name: e.target.value })}
          placeholder="Full name"
          className="w-full px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-navy block mb-1">Phone Number *</label>
        <input
          value={f.phone}
          onChange={(e) => setF({ ...f, phone: e.target.value })}
          placeholder="10-digit mobile number"
          maxLength={10}
          className="w-full px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-navy block mb-1">Your Query *</label>
        <textarea
          value={f.message}
          onChange={(e) => setF({ ...f, message: e.target.value })}
          rows={3}
          placeholder="What would you like to know?"
          className="w-full px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all resize-none"
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full bg-orange hover:bg-orange-light text-white">
        {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</> : "Send Query →"}
      </Button>
    </form>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <DialogContent hideClose className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 text-navy" />
        </button>
        <span className="absolute bottom-3 left-3 text-xs bg-white/95 text-navy font-semibold px-3 py-1 rounded-full shadow">
          {product.category}
        </span>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-navy mb-2">{product.name}</h2>
        <p className="text-muted-foreground leading-relaxed mb-5">{product.description}</p>

        <h3 className="font-semibold text-navy mb-3">Key Features</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
          {product.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2 text-sm text-navy/80">
              <CheckCircle2 className="w-4 h-4 text-orange shrink-0 mt-0.5" />
              {feat}
            </li>
          ))}
        </ul>

        <h3 className="font-semibold text-navy mb-3">Available Pack Sizes</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {product.packs.map((pk) => (
            <span key={pk.size} className="px-4 py-1.5 rounded-lg border-2 border-orange/30 text-sm font-medium text-navy bg-orange/5">
              {pk.size}
            </span>
          ))}
        </div>

        <div className="border-t border-border pt-5">
          <h3 className="font-bold text-navy text-lg mb-1">Send a Query</h3>
          <p className="text-sm text-muted-foreground">Interested? Leave your details and we'll call you back.</p>
          <QueryForm productName={product.name} onClose={onClose} />
        </div>
      </div>
    </DialogContent>
  );
}

function Products() {
  const search = Route.useSearch();
  const [activeCat, setActiveCat] = useState(search.category || "All");
  const [selected, setSelected] = useState<Product | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getCategories(), getProducts()]).then(([cats, prods]) => {
      setCategories(["All", ...cats.map(c => c.name)]);
      setProducts(prods);
      setLoading(false);
    }).catch(e => {
      toast.error("Failed to load products");
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (search.category) {
      setActiveCat(search.category);
    }
  }, [search.category]);

  const filtered = activeCat === "All" ? products : products.filter((p) => p.category === activeCat);

  if (loading) return <div className="flex h-screen items-center justify-center"><Loader2 className="w-8 h-8 animate-spin" /></div>;

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-navy text-white py-14">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-4xl md:text-5xl font-bold mb-3"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
            className="text-white/80 text-lg"
          >
            Premium cleaning formulations in retail and bulk packs
          </motion.p>
        </div>
      </section>

      {/* Category Filter — sliding pill indicator */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 overflow-x-auto">
          <LayoutGroup>
            <div className="flex gap-2 min-w-max">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActiveCat(c)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${activeCat === c ? "text-white" : "text-navy hover:text-orange"
                    }`}
                >
                  {activeCat === c && (
                    <motion.span
                      layoutId="cat-pill"
                      className="absolute inset-0 bg-orange rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">
                    {c}
                    {c !== "All" && (
                      <span className="ml-1.5 text-xs opacity-70">
                        ({products.filter((p) => p.category === c).length})
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.p
            key={activeCat + "-count"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground mb-5"
          >
            Showing <span className="font-semibold text-navy">{filtered.length}</span> product{filtered.length !== 1 ? "s" : ""}
            {activeCat !== "All" && <> in <span className="font-semibold text-orange">{activeCat}</span></>}
          </motion.p>

          <motion.div
            key={activeCat}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.06)}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  variants={fadeUpSmall}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="bg-white rounded-2xl border border-border hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  <div className="relative h-52 overflow-hidden bg-gray-50">
                    <motion.img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.4, ease: EASE }}
                    />
                    <span className="absolute top-3 right-3 text-xs bg-white/95 text-navy font-semibold px-2.5 py-1 rounded-full shadow">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-navy text-base mb-1.5">{p.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.packs.map((pk) => (
                        <span key={pk.size} className="text-xs px-2 py-0.5 bg-orange/10 text-orange rounded-md font-medium">
                          {pk.size}
                        </span>
                      ))}
                    </div>
                    <Button onClick={() => setSelected(p)} className="w-full bg-navy hover:bg-navy/90 text-white text-sm h-9">
                      View Details & Query
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </Dialog>
    </SiteLayout>
  );
}
