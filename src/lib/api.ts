const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const api = {
  get: async (path: string) => {
    const res = await fetch(`${BASE_URL}${path}`);
    if (!res.ok) throw new Error(`GET ${path} gagal: ${res.status}`);
    return res.json();
  },
  post: async (path: string, body: unknown) => {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`POST ${path} gagal: ${res.status}`);
    return res.json();
  },
  put: async (path: string, body: unknown) => {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`PUT ${path} gagal: ${res.status}`);
    return res.json();
  },
  delete: async (path: string) => {
    const res = await fetch(`${BASE_URL}${path}`, { method: "DELETE" });
    if (!res.ok) throw new Error(`DELETE ${path} gagal: ${res.status}`);
    return res.json();
  },
};
