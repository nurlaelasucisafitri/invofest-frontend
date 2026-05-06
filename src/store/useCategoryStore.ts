import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Category {
  id: number;
  nama: string;
}

interface CategoryState {
  categories: Category[];
  addCategory: (nama: string) => void;
  deleteCategory: (id: number) => void;
}

export const useCategoryStore = create<CategoryState>()(
  persist(
    (set) => ({
      categories: [
        { id: 1, nama: "Seminar" },
        { id: 2, nama: "Competition" },
      ],
      addCategory: (nama) =>
        set((state) => ({
          categories: [...state.categories, { id: Date.now(), nama }],
        })),
      deleteCategory: (id) =>
        set((state) => ({
          categories: state.categories.filter((cat) => cat.id !== id),
        })),
    }),
    { name: "category-storage" }
  )
);