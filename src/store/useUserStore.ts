import { create } from "zustand";
import { api } from "../lib/api";

export interface User {
    id: number;
    name: string;
    email: string;
    foto: string;
}

interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
    fetchUsers: () => Promise<void>;
    addUser: (user: { name: string; email: string; password: string; foto: string }) => Promise<void>;
    updateUser: (id: number, user: { name: string; email: string; password?: string; foto: string }) => Promise<void>;
    deleteUser: (id: number) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
    users: [],
    loading: false,
    error: null,

    fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
            const data = await api.get("/users");
            set({ users: data });
        } catch (e: any) {
            set({ error: e.message });
        } finally {
            set({ loading: false });
        }
    },

    addUser: async (user) => {
        set({ loading: true, error: null });
        try {
            await api.post("/users", user);
            const data = await api.get("/users");
            set({ users: data });
        } catch (e: any) {
            set({ error: e.message });
        } finally {
            set({ loading: false });
        }
    },

    updateUser: async (id, user) => {
        set({ loading: true, error: null });
        try {
            await api.put(`/users/${id}`, user);
            const data = await api.get("/users");
            set({ users: data });
        } catch (e: any) {
            set({ error: e.message });
        } finally {
            set({ loading: false });
        }
    },

    deleteUser: async (id) => {
        set({ loading: true, error: null });
        try {
            await api.delete(`/users/${id}`);
            set((state) => ({ users: state.users.filter((u) => u.id !== id) }));
        } catch (e: any) {
            set({ error: e.message });
        } finally {
            set({ loading: false });
        }
    },
}));
