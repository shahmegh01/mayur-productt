import { useState, useEffect, useRef } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { getCategories, getProducts, addCategory, deleteCategory, addProduct, deleteProduct, verifyToken, Category, Product } from "@/lib/api";
import { toast } from "sonner";
import { Loader2, Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [newCat, setNewCat] = useState("");
  const [newProd, setNewProd] = useState({
    name: "",
    category: "",
    image: "",
    description: "",
    features: "",
    packs: "",
    gradient: "from-blue-400 to-indigo-600",
  });

  const loadData = async () => {
    try {
      await verifyToken();
      setIsVerified(true);
      const [cats, prods] = await Promise.all([getCategories(), getProducts()]);
      setCategories(cats);
      setProducts(prods);
      if (cats.length > 0 && !newProd.category) {
        setNewProd(p => ({ ...p, category: cats[0].name }));
      }
    } catch (e: any) {
      localStorage.removeItem("admin_token");
      navigate({ to: "/admin/login" });
      if (e.message !== "Unauthorized") {
        toast.error("Failed to verify authentication");
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) navigate({ to: "/admin/login" });
    else loadData();
  }, [navigate]);

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCat.trim()) return;
    try {
      await addCategory(newCat);
      toast.success("Category added");
      setNewCat("");
      loadData();
    } catch (e: any) {
      if (e.message === "Unauthorized") {
        localStorage.removeItem("admin_token");
        navigate({ to: "/admin/login" });
      } else {
        toast.error(e.message);
      }
    }
  };

  const handleDeleteCategory = async (id: number) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    try {
      await deleteCategory(id);
      toast.success("Category deleted");
      loadData();
    } catch (e: any) {
      if (e.message === "Unauthorized") {
        localStorage.removeItem("admin_token");
        navigate({ to: "/admin/login" });
      } else {
        toast.error(e.message);
      }
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProd.name || !newProd.category || !newProd.image || !newProd.packs || !newProd.description || !newProd.features) {
      toast.error("Please fill all required fields");
      return;
    }
    const features = newProd.features.split("\n").filter(x => x.trim());
    const packs = newProd.packs.split(",").map(x => ({ size: x.trim() })).filter(x => x.size);

    const formData = new FormData();
    formData.append("name", newProd.name);
    formData.append("category", newProd.category);
    formData.append("description", newProd.description);
    formData.append("gradient", newProd.gradient);
    formData.append("features", JSON.stringify(features));
    formData.append("packs", JSON.stringify(packs));
    
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      formData.append("imageFile", file);
    } else {
      formData.append("image", newProd.image);
    }

    try {
      await addProduct(formData);
      toast.success("Product added");
      setNewProd({ name: "", category: categories[0]?.name || "", image: "", description: "", features: "", packs: "", gradient: "from-blue-400 to-indigo-600" });
      if (fileInputRef.current) fileInputRef.current.value = "";
      loadData();
    } catch (e: any) {
      if (e.message === "Unauthorized") {
        localStorage.removeItem("admin_token");
        navigate({ to: "/admin/login" });
      } else {
        toast.error(e.message);
      }
    }
  };

  const handleDeleteProduct = async (id: number) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteProduct(id);
      toast.success("Product deleted");
      loadData();
    } catch (e: any) {
      if (e.message === "Unauthorized") {
        localStorage.removeItem("admin_token");
        navigate({ to: "/admin/login" });
      } else {
        toast.error(e.message);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    navigate({ to: "/admin/login" });
  };

  if (!isVerified) return <div className="flex h-screen items-center justify-center"><Loader2 className="w-8 h-8 animate-spin" /></div>;

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-navy">Admin Dashboard</h1>
            <Button onClick={logout} variant="outline" className="border-border text-navy">Logout</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Categories */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-border p-5">
                <h2 className="text-lg font-bold text-navy mb-4">Categories</h2>
                <div className="space-y-3 mb-6">
                  {categories.map(c => (
                    <div key={c.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-border">
                      <span className="font-medium text-navy text-sm">{c.name}</span>
                      <button onClick={() => handleDeleteCategory(c.id)} className="text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {categories.length === 0 && <p className="text-sm text-muted-foreground">No categories</p>}
                </div>

                <form onSubmit={handleAddCategory} className="flex gap-2">
                  <input
                    value={newCat}
                    onChange={e => setNewCat(e.target.value)}
                    placeholder="New category..."
                    className="flex-1 px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:border-orange"
                  />
                  <Button type="submit" className="bg-navy hover:bg-navy/90 px-3"><Plus className="w-4 h-4" /></Button>
                </form>
              </div>
            </div>

            {/* Products */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-border p-5">
                <h2 className="text-lg font-bold text-navy mb-4">Add Product</h2>
                <form onSubmit={handleAddProduct} className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-navy mb-1 block">Name *</label>
                    <input required value={newProd.name} onChange={e => setNewProd({ ...newProd, name: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-border text-sm" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-navy mb-1 block">Category *</label>
                    <select required value={newProd.category} onChange={e => setNewProd({ ...newProd, category: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-border text-sm">
                      <option value="">Select Category</option>
                      {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-navy mb-1 block">Image *</label>
                    <input
                      type="file"
                      accept="image/*"
                      required
                      ref={fileInputRef}
                      onChange={e => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setNewProd({ ...newProd, image: reader.result as string });
                          };
                          reader.readAsDataURL(file);
                        } else {
                          setNewProd({ ...newProd, image: "" });
                        }
                      }}
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange/10 file:text-orange hover:file:bg-orange/20"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-navy mb-1 block">Pack Sizes (comma separated) *</label>
                    <input required value={newProd.packs} onChange={e => setNewProd({ ...newProd, packs: e.target.value })} placeholder="500ml, 1L, 5L" className="w-full px-3 py-2 rounded-lg border border-border text-sm" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-navy mb-1 block">Description *</label>
                    <textarea required rows={2} value={newProd.description} onChange={e => setNewProd({ ...newProd, description: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-border text-sm resize-none" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-navy mb-1 block">Features (One per line) *</label>
                    <textarea required rows={3} value={newProd.features} onChange={e => setNewProd({ ...newProd, features: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-border text-sm resize-none" />
                  </div>
                  <div className="sm:col-span-2 flex justify-end">
                    <Button type="submit" className="bg-orange hover:bg-orange/90 text-white px-6">Add Product</Button>
                  </div>
                </form>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-border p-5">
                <h2 className="text-lg font-bold text-navy mb-4">Existing Products ({products.length})</h2>
                <div className="space-y-3">
                  {products.map(p => (
                    <div key={p.id} className="flex items-center gap-4 p-3 rounded-xl border border-border bg-gray-50">
                      {p.image ? (
                        <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-cover bg-white" />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-gray-200" />
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-navy text-sm truncate">{p.name}</h3>
                        <p className="text-xs text-muted-foreground">{p.category} &bull; {p.packs?.map(x => x.size).join(", ")}</p>
                      </div>
                      <button onClick={() => handleDeleteProduct(p.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-md transition-colors shrink-0">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {products.length === 0 && <p className="text-sm text-muted-foreground text-center py-4">No products found.</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
