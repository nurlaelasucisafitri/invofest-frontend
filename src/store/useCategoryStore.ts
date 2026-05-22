import { create } from "zustand";
import { api } from "../lib/api";

export interface Category {
  id: number;
  name: string;
  createdAt: string;
}

interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
  fetchCategories: () => Promise<void>;
  addCategory: (name: string) => Promise<void>;
  updateCategory: (id: number, name: string) => Promise<void>;
  deleteCategory: (id: number) => Promise<void>;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  loading: false,
  error: null,

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const data = await api.get("/categories");
      set({ categories: data });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  addCategory: async (name) => {
    set({ loading: true, error: null });
    try {
      await api.post("/categories", { name });
      const data = await api.get("/categories");
      set({ categories: data });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  updateCategory: async (id, name) => {
    set({ loading: true, error: null });
    try {
      await api.put(`/categories/${id}`, { name });
      const data = await api.get("/categories");
      set({ categories: data });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  deleteCategory: async (id) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/categories/${id}`);
      set((state) => ({ categories: state.categories.filter((c) => c.id !== id) }));
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },
}));
