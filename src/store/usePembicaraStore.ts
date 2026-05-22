import { create } from "zustand";
import { api } from "../lib/api";

export interface Pembicara {
  id: number;
  name: string;
  role: string;
  image: string;
  createdAt: string;
}

interface PembicaraState {
  speakers: Pembicara[];
  loading: boolean;
  error: string | null;
  fetchPembicara: () => Promise<void>;
  addSpeaker: (speaker: { name: string; role: string; image: string }) => Promise<void>;
  updateSpeaker: (id: number, speaker: { name: string; role: string; image: string }) => Promise<void>;
  deleteSpeaker: (id: number) => Promise<void>;
}

export const usePembicaraStore = create<PembicaraState>((set) => ({
  speakers: [],
  loading: false,
  error: null,

  fetchPembicara: async () => {
    set({ loading: true, error: null });
    try {
      const data = await api.get("/pembicara");
      set({ speakers: data });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  addSpeaker: async (speaker) => {
    set({ loading: true, error: null });
    try {
      await api.post("/pembicara", speaker);
      const data = await api.get("/pembicara");
      set({ speakers: data });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  updateSpeaker: async (id, speaker) => {
    set({ loading: true, error: null });
    try {
      await api.put(`/pembicara/${id}`, speaker);
      const data = await api.get("/pembicara");
      set({ speakers: data });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  deleteSpeaker: async (id) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/pembicara/${id}`);
      set((state) => ({ speakers: state.speakers.filter((s) => s.id !== id) }));
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },
}));
