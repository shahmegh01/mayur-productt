import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-DjOZMqFS.mjs";
import { v as verifyToken, g as getCategories, a as getProducts, d as deleteCategory, c as addCategory, e as addProduct, f as deleteProduct } from "./api-Bgwb7ZPx.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { L as LoaderCircle, f as Trash2, g as Plus } from "../_libs/lucide-react.mjs";
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
function AdminDashboard() {
  const navigate = useNavigate();
  const fileInputRef = reactExports.useRef(null);
  const [isVerified, setIsVerified] = reactExports.useState(false);
  const [categories, setCategories] = reactExports.useState([]);
  const [products, setProducts] = reactExports.useState([]);
  const [newCat, setNewCat] = reactExports.useState("");
  const [newProd, setNewProd] = reactExports.useState({
    name: "",
    category: "",
    image: "",
    description: "",
    features: "",
    packs: "",
    gradient: "from-blue-400 to-indigo-600"
  });
  const loadData = async () => {
    try {
      await verifyToken();
      setIsVerified(true);
      const [cats, prods] = await Promise.all([getCategories(), getProducts()]);
      setCategories(cats);
      setProducts(prods);
      if (cats.length > 0 && !newProd.category) {
        setNewProd((p) => ({
          ...p,
          category: cats[0].name
        }));
      }
    } catch (e) {
      localStorage.removeItem("admin_token");
      navigate({
        to: "/admin/login"
      });
      if (e.message !== "Unauthorized") {
        toast.error("Failed to verify authentication");
      }
    }
  };
  reactExports.useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) navigate({
      to: "/admin/login"
    });
    else loadData();
  }, [navigate]);
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCat.trim()) return;
    try {
      await addCategory(newCat);
      toast.success("Category added");
      setNewCat("");
      loadData();
    } catch (e2) {
      if (e2.message === "Unauthorized") {
        localStorage.removeItem("admin_token");
        navigate({
          to: "/admin/login"
        });
      } else {
        toast.error(e2.message);
      }
    }
  };
  const handleDeleteCategory = async (id) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    try {
      await deleteCategory(id);
      toast.success("Category deleted");
      loadData();
    } catch (e) {
      if (e.message === "Unauthorized") {
        localStorage.removeItem("admin_token");
        navigate({
          to: "/admin/login"
        });
      } else {
        toast.error(e.message);
      }
    }
  };
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!newProd.name || !newProd.category || !newProd.image || !newProd.packs || !newProd.description || !newProd.features) {
      toast.error("Please fill all required fields");
      return;
    }
    const features = newProd.features.split("\n").filter((x) => x.trim());
    const packs = newProd.packs.split(",").map((x) => ({
      size: x.trim()
    })).filter((x) => x.size);
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
      setNewProd({
        name: "",
        category: categories[0]?.name || "",
        image: "",
        description: "",
        features: "",
        packs: "",
        gradient: "from-blue-400 to-indigo-600"
      });
      if (fileInputRef.current) fileInputRef.current.value = "";
      loadData();
    } catch (e2) {
      if (e2.message === "Unauthorized") {
        localStorage.removeItem("admin_token");
        navigate({
          to: "/admin/login"
        });
      } else {
        toast.error(e2.message);
      }
    }
  };
  const handleDeleteProduct = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteProduct(id);
      toast.success("Product deleted");
      loadData();
    } catch (e) {
      if (e.message === "Unauthorized") {
        localStorage.removeItem("admin_token");
        navigate({
          to: "/admin/login"
        });
      } else {
        toast.error(e.message);
      }
    }
  };
  const logout = () => {
    localStorage.removeItem("admin_token");
    navigate({
      to: "/admin/login"
    });
  };
  if (!isVerified) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 animate-spin" }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 min-h-screen py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-navy", children: "Admin Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: logout, variant: "outline", className: "border-border text-navy", children: "Logout" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-1 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-border p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-navy mb-4", children: "Categories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-6", children: [
          categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-navy text-sm", children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDeleteCategory(c.id), className: "text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
          ] }, c.id)),
          categories.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No categories" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddCategory, className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: newCat, onChange: (e) => setNewCat(e.target.value), placeholder: "New category...", className: "flex-1 px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:border-orange" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "bg-navy hover:bg-navy/90 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-border p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-navy mb-4", children: "Add Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddProduct, className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-navy mb-1 block", children: "Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: newProd.name, onChange: (e) => setNewProd({
                ...newProd,
                name: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-border text-sm" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-navy mb-1 block", children: "Category *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, value: newProd.category, onChange: (e) => setNewProd({
                ...newProd,
                category: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-border text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Category" }),
                categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.name, children: c.name }, c.id))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-navy mb-1 block", children: "Image *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", required: true, ref: fileInputRef, onChange: (e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setNewProd({
                      ...newProd,
                      image: reader.result
                    });
                  };
                  reader.readAsDataURL(file);
                } else {
                  setNewProd({
                    ...newProd,
                    image: ""
                  });
                }
              }, className: "w-full px-3 py-2 rounded-lg border border-border text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange/10 file:text-orange hover:file:bg-orange/20" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-navy mb-1 block", children: "Pack Sizes (comma separated) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: newProd.packs, onChange: (e) => setNewProd({
                ...newProd,
                packs: e.target.value
              }), placeholder: "500ml, 1L, 5L", className: "w-full px-3 py-2 rounded-lg border border-border text-sm" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-navy mb-1 block", children: "Description *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 2, value: newProd.description, onChange: (e) => setNewProd({
                ...newProd,
                description: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-border text-sm resize-none" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-navy mb-1 block", children: "Features (One per line) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 3, value: newProd.features, onChange: (e) => setNewProd({
                ...newProd,
                features: e.target.value
              }), className: "w-full px-3 py-2 rounded-lg border border-border text-sm resize-none" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "bg-orange hover:bg-orange/90 text-white px-6", children: "Add Product" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-border p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-bold text-navy mb-4", children: [
            "Existing Products (",
            products.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-3 rounded-xl border border-border bg-gray-50", children: [
              p.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, className: "w-12 h-12 rounded-lg object-cover bg-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-gray-200" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-navy text-sm truncate", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  p.category,
                  " • ",
                  p.packs?.map((x) => x.size).join(", ")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDeleteProduct(p.id), className: "text-red-500 hover:bg-red-50 p-2 rounded-md transition-colors shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
            ] }, p.id)),
            products.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-4", children: "No products found." })
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
}
export {
  AdminDashboard as component
};
