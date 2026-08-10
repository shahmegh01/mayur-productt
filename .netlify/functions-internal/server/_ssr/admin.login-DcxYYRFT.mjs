import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-DjOZMqFS.mjs";
import { l as login } from "./api-Bgwb7ZPx.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { L as LoaderCircle } from "../_libs/lucide-react.mjs";
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
function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) return toast.error("Enter username and password");
    setLoading(true);
    try {
      const res = await login(username, password);
      localStorage.setItem("admin_token", res.token);
      toast.success("Logged in successfully");
      navigate({
        to: "/admin"
      });
    } catch (error) {
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[100vh] flex items-center justify-center bg-gray-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-white rounded-3xl shadow-xl border border-border p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-navy mb-2", children: "Admin Login" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Sign in to manage products and categories" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-navy mb-1", children: "Username" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: username, onChange: (e) => setUsername(e.target.value), className: "w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all", placeholder: "Enter username" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-navy mb-1", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all", placeholder: "Enter password" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: loading, className: "w-full py-6 bg-navy hover:bg-navy/90 text-white rounded-xl mt-4", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }) : "Sign In" })
    ] })
  ] }) }) });
}
export {
  AdminLogin as component
};
