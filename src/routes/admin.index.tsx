import { useState, useEffect, useRef, useCallback } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  getCategories,
  getProducts,
  addCategory,
  renameCategory,
  deleteCategory,
  addProduct,
  updateProduct,
  deleteProduct,
  verifyToken,
  ApiError,
  Category,
  Product,
} from "@/lib/api";
import { toast } from "sonner";
import { Loader2, Pencil, Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

const EMPTY_PRODUCT = {
  name: "",
  category: "",
  image: "",
  description: "",
  features: "",
  packs: "",
  gradient: "from-blue-400 to-indigo-600",
};

function AdminDashboard() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [newCat, setNewCat] = useState("");
  const [newProd, setNewProd] = useState(EMPTY_PRODUCT);
  // id of the product loaded into the form for editing, or null when adding a new one
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);

  // Only a rejected login sends the admin back to the login page; a network hiccup must not log them out
  const handleError = useCallback(
    (e: unknown, fallback: string) => {
      if (e instanceof ApiError && e.status === 401) {
        localStorage.removeItem("admin_token");
        navigate({ to: "/admin/login" });
        return;
      }
      toast.error(e instanceof Error ? e.message : fallback);
    },
    [navigate],
  );

  const loadData = useCallback(async () => {
    setLoadFailed(false);
    try {
      await verifyToken();
      setIsVerified(true);
      const [cats, prods] = await Promise.all([getCategories(), getProducts()]);
      setCategories(cats);
      setProducts(prods);
      if (cats.length > 0) {
        setNewProd((p) => (p.category ? p : { ...p, category: cats[0].name }));
      }
    } catch (e) {
      setLoadFailed(true);
      handleError(e, "Failed to load the dashboard");
    }
  }, [handleError]);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) navigate({ to: "/admin/login" });
    else loadData();
  }, [navigate, loadData]);

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCat.trim()) return;
    try {
      await addCategory(newCat);
      toast.success("Category added");
      setNewCat("");
      loadData();
    } catch (e) {
      handleError(e, "Could not add the category");
    }
  };

  const handleRenameCategory = async (c: Category) => {
    const name = prompt("New name for this category", c.name)?.trim();
    if (!name || name === c.name) return;
    try {
      await renameCategory(c.id, name);
      toast.success("Category renamed");
      setNewProd((p) => (p.category === c.name ? { ...p, category: name } : p));
      loadData();
    } catch (e) {
      handleError(e, "Could not rename the category");
    }
  };

  const handleDeleteCategory = async (id: number) => {
    if (!confirm("Delete this category? All products in it will be deleted too.")) return;
    try {
      await deleteCategory(id);
      toast.success("Category deleted");
      loadData();
    } catch (e) {
      handleError(e, "Could not delete the category");
    }
  };

  const resetForm = () => {
    setNewProd({ ...EMPTY_PRODUCT, category: categories[0]?.name || "" });
    setEditingId(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const startEdit = (p: Product) => {
    setEditingId(p.id);
    setNewProd({
      name: p.name,
      category: p.category,
      image: p.image || "",
      description: p.description || "",
      features: (p.features ?? []).join("\n"),
      packs: (p.packs ?? []).map((x) => x.size).join(", "),
      gradient: p.gradient || EMPTY_PRODUCT.gradient,
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving) return;
    if (
      !newProd.name ||
      !newProd.category ||
      // a product being edited keeps its current image unless a new one is chosen
      (!editingId && !newProd.image) ||
      !newProd.packs ||
      !newProd.description ||
      !newProd.features
    ) {
      toast.error("Please fill all required fields");
      return;
    }
    const features = newProd.features.split("\n").filter((x) => x.trim());
    const packs = newProd.packs
      .split(",")
      .map((x) => ({ size: x.trim() }))
      .filter((x) => x.size);

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
    } else if (!editingId) {
      formData.append("image", newProd.image);
    }

    setSaving(true);
    try {
      if (editingId) {
        await updateProduct(editingId, formData);
        toast.success("Product updated");
      } else {
        await addProduct(formData);
        toast.success("Product added");
      }
      resetForm();
      loadData();
    } catch (e) {
      handleError(e, editingId ? "Could not update the product" : "Could not add the product");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteProduct(id);
      toast.success("Product deleted");
      if (editingId === id) resetForm();
      loadData();
    } catch (e) {
      handleError(e, "Could not delete the product");
    }
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    navigate({ to: "/admin/login" });
  };

  if (!isVerified)
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        {loadFailed ? (
          <>
            <p className="font-semibold text-navy">Could not load the dashboard.</p>
            <Button onClick={loadData} className="bg-navy hover:bg-navy/90 text-white">
              Try again
            </Button>
          </>
        ) : (
          <Loader2 className="w-8 h-8 animate-spin" />
        )}
      </div>
    );

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-navy">Admin Dashboard</h1>
            <Button onClick={logout} variant="outline" className="border-border text-navy">
              Logout
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Categories */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-border p-5">
                <h2 className="text-lg font-bold text-navy mb-4">Categories</h2>
                <div className="space-y-3 mb-6">
                  {categories.map((c) => (
                    <div
                      key={c.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-border"
                    >
                      <span className="font-medium text-navy text-sm flex-1 min-w-0 truncate">
                        {c.name}
                      </span>
                      <button
                        onClick={() => handleRenameCategory(c)}
                        aria-label={`Rename ${c.name}`}
                        className="text-navy hover:bg-gray-200 p-1.5 rounded-md transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(c.id)}
                        aria-label={`Delete ${c.name}`}
                        className="text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {categories.length === 0 && (
                    <p className="text-sm text-muted-foreground">No categories</p>
                  )}
                </div>

                <form onSubmit={handleAddCategory} className="flex gap-2">
                  <input
                    value={newCat}
                    onChange={(e) => setNewCat(e.target.value)}
                    placeholder="New category..."
                    className="flex-1 px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:border-orange"
                  />
                  <Button type="submit" className="bg-navy hover:bg-navy/90 px-3">
                    <Plus className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Products */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-border p-5">
                <h2 className="text-lg font-bold text-navy mb-4">
                  {editingId ? "Edit Product" : "Add Product"}
                </h2>
                <form
                  ref={formRef}
                  onSubmit={handleSaveProduct}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="text-xs font-semibold text-navy mb-1 block">Name *</label>
                    <input
                      required
                      value={newProd.name}
                      onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-navy mb-1 block">Category *</label>
                    <select
                      required
                      value={newProd.category}
                      onChange={(e) => setNewProd({ ...newProd, category: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm"
                    >
                      <option value="">Select Category</option>
                      {categories.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-navy mb-1 block">
                      {editingId ? "New image (leave empty to keep the current one)" : "Image *"}
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      required={!editingId}
                      ref={fileInputRef}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          // update from the latest state: the file is read in the background,
                          // and the other fields may have been typed in meanwhile
                          reader.onloadend = () => {
                            setNewProd((p) => ({ ...p, image: reader.result as string }));
                          };
                          reader.readAsDataURL(file);
                        } else {
                          setNewProd((p) => ({ ...p, image: "" }));
                        }
                      }}
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange/10 file:text-orange hover:file:bg-orange/20"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-navy mb-1 block">
                      Pack Sizes (comma separated) *
                    </label>
                    <input
                      required
                      value={newProd.packs}
                      onChange={(e) => setNewProd({ ...newProd, packs: e.target.value })}
                      placeholder="500ml, 1L, 5L"
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-navy mb-1 block">
                      Description *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={newProd.description}
                      onChange={(e) => setNewProd({ ...newProd, description: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm resize-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-navy mb-1 block">
                      Features (One per line) *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newProd.features}
                      onChange={(e) => setNewProd({ ...newProd, features: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-border text-sm resize-none"
                    />
                  </div>
                  <div className="sm:col-span-2 flex justify-end gap-2">
                    {editingId && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetForm}
                        className="border-border text-navy"
                      >
                        Cancel
                      </Button>
                    )}
                    <Button
                      type="submit"
                      disabled={saving}
                      className="bg-orange hover:bg-orange/90 text-white px-6"
                    >
                      {saving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                      {editingId ? "Save Changes" : "Add Product"}
                    </Button>
                  </div>
                </form>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-border p-5">
                <h2 className="text-lg font-bold text-navy mb-4">
                  Existing Products ({products.length})
                </h2>
                <div className="space-y-3">
                  {products.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-4 p-3 rounded-xl border border-border bg-gray-50"
                    >
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-12 h-12 rounded-lg object-cover bg-white"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-gray-200" />
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-navy text-sm truncate">{p.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {p.category} &bull; {p.packs?.map((x) => x.size).join(", ")}
                        </p>
                      </div>
                      <button
                        onClick={() => startEdit(p)}
                        aria-label={`Edit ${p.name}`}
                        className="text-navy hover:bg-gray-200 p-2 rounded-md transition-colors shrink-0"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(p.id)}
                        aria-label={`Delete ${p.name}`}
                        className="text-red-500 hover:bg-red-50 p-2 rounded-md transition-colors shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {products.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No products found.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
