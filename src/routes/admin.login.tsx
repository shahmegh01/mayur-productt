import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { login } from "@/lib/api";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return toast.error("Enter username and password");
    setLoading(true);
    try {
      const res = await login(username, password);
      localStorage.setItem("admin_token", res.token);
      toast.success("Logged in successfully");
      navigate({ to: "/admin" });
    } catch (error: any) {
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-[100vh] flex items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-border p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-navy mb-2">Admin Login</h1>
            <p className="text-muted-foreground text-sm">Sign in to manage products and categories</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-navy mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all"
                placeholder="Enter password"
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full py-6 bg-navy hover:bg-navy/90 text-white rounded-xl mt-4">
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
