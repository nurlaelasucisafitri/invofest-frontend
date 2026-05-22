import { create } from "zustand";
import { api } from "../lib/api";

export interface EventItem {
  id: number;
  name: string;
  categoryId: number;
  location: string;
  dateEvent: string;
  description: string;
  createdAt: string;
}

export interface NewEvent {
  name: string;
  categoryId: number;
  location: string;
  dateEvent: string;
  description: string;
}

interface EventState {
  events: EventItem[];
  loading: boolean;
  error: string | null;
  fetchEvents: () => Promise<void>;
  addEvent: (event: NewEvent) => Promise<void>;
  updateEvent: (id: number, event: Partial<NewEvent>) => Promise<void>;
  deleteEvent: (id: number) => Promise<void>;
}

export interface EventItem {
  id: number;
  name: string;
  categoryId: number;
  pembicaraId: number;   // ← TAMBAH INI
  location: string;
  dateEvent: string;
  description: string;
  createdAt: string;
}

export interface NewEvent {
  name: string;
  categoryId: number;
  pembicaraId: number;   // ← TAMBAH INI
  location: string;
  dateEvent: string;
  description: string;
}

export const useEventStore = create<EventState>((set) => ({
  events: [],
  loading: false,
  error: null,

  fetchEvents: async () => {
    set({ loading: true, error: null });
    try {
      const data = await api.get("/events");
      set({ events: data });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  addEvent: async (event) => {
    set({ loading: true, error: null });
    try {
      await api.post("/events", event);
      const data = await api.get("/events");
      set({ events: data });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  updateEvent: async (id, event) => {
    set({ loading: true, error: null });
    try {
      await api.put(`/events/${id}`, event);
      const data = await api.get("/events");
      set({ events: data });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  deleteEvent: async (id) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/events/${id}`);
      set((state) => ({ events: state.events.filter((e) => e.id !== id) }));
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },
}));
