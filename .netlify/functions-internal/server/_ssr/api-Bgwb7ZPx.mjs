const BASE = "https://jovial-sunburst-82a08c.netlify.app";
function getAuthHeader() {
  const token = localStorage.getItem("admin_token");
  return token ? { "Authorization": `Bearer ${token}` } : {};
}
async function req(path, options) {
  const finalOptions = { ...options };
  const isFormData = finalOptions.body instanceof FormData;
  const headers = {
    ...getAuthHeader(),
    ...options?.headers || {}
  };
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }
  finalOptions.headers = headers;
  const res = await fetch(`${BASE}${path}`, finalOptions);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}
async function saveQuery(q) {
  return req("/api/queries", {
    method: "POST",
    body: JSON.stringify(q)
  });
}
async function saveContact(m) {
  return req("/api/contact", {
    method: "POST",
    body: JSON.stringify(m)
  });
}
async function login(username, password) {
  return req("/api/login", {
    method: "POST",
    body: JSON.stringify({ username, password })
  });
}
async function getCategories() {
  return req("/api/categories");
}
async function verifyToken() {
  return req("/api/verify");
}
async function addCategory(name) {
  return req("/api/categories", {
    method: "POST",
    body: JSON.stringify({ name })
  });
}
async function deleteCategory(id) {
  return req(`/api/categories/${id}`, { method: "DELETE" });
}
async function getProducts() {
  return req("/api/products");
}
async function addProduct(data) {
  return req("/api/products", {
    method: "POST",
    body: data
  });
}
async function deleteProduct(id) {
  return req(`/api/products/${id}`, { method: "DELETE" });
}
export {
  getProducts as a,
  saveContact as b,
  addCategory as c,
  deleteCategory as d,
  addProduct as e,
  deleteProduct as f,
  getCategories as g,
  login as l,
  saveQuery as s,
  verifyToken as v
};
