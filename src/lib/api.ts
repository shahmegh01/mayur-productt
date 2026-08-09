const BASE = import.meta.env.VITE_API_URL || "https://hilarious-kulfi-722916.netlify.app";

function getAuthHeader() {
  const token = localStorage.getItem("admin_token");
  return token ? { "Authorization": `Bearer ${token}` } : {};
}

async function req<T>(path: string, options?: RequestInit): Promise<T> {
  const finalOptions = { ...options };
  
  const isFormData = finalOptions.body instanceof FormData;
  const headers: Record<string, string> = {
    ...getAuthHeader(),
    ...(options?.headers as Record<string, string> || {})
  };

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  finalOptions.headers = headers;
  
  const res = await fetch(`${BASE}${path}`, finalOptions);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data as T;
}

export type Query = {
  name: string;
  phone: string;
  product_name?: string;
  message: string;
};

export type ContactMsg = {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
};

export type Category = {
  id: number;
  name: string;
  created_at: string;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  gradient: string;
  image: string;
  description: string;
  features: string[];
  packs: { size: string }[];
  created_at?: string;
};

export async function saveQuery(q: Query) {
  return req<{ success: boolean; message: string }>("/api/queries", {
    method: "POST",
    body: JSON.stringify(q),
  });
}

export async function saveContact(m: ContactMsg) {
  return req<{ success: boolean; message: string }>("/api/contact", {
    method: "POST",
    body: JSON.stringify(m),
  });
}

export async function login(username: string, password: string) {
  return req<{ token: string }>("/api/login", {
    method: "POST",
    body: JSON.stringify({ username, password })
  });
}

export async function getCategories() {
  return req<Category[]>("/api/categories");
}

export async function verifyToken() {
  return req<{ success: boolean }>("/api/verify");
}

export async function addCategory(name: string) {
  return req<{ success: boolean }>("/api/categories", {
    method: "POST",
    body: JSON.stringify({ name })
  });
}

export async function deleteCategory(id: number) {
  return req<{ success: boolean }>(`/api/categories/${id}`, { method: "DELETE" });
}

export async function getProducts() {
  return req<Product[]>("/api/products");
}

export async function addProduct(data: FormData) {
  return req<{ success: boolean }>("/api/products", {
    method: "POST",
    body: data
  });
}

export async function deleteProduct(id: number) {
  return req<{ success: boolean }>(`/api/products/${id}`, { method: "DELETE" });
}
