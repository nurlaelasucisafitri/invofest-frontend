import { create } from "zustand";
import { persist } from "zustand/middleware";

interface EventItem {
  id: number;
  namaEvent: string;
  pembicara: string;
  tanggal: string;
  jam: string;
}

interface EventState {
  events: EventItem[];
  addEvent: (event: Omit<EventItem, "id">) => void;
  deleteEvent: (id: number) => void;
}

export const useEventStore = create<EventState>()(
  persist(
    (set) => ({
      events: [
        { id: 1, namaEvent: "Web Seminar", pembicara: "Dr. Eng. Ahmad", tanggal: "2026-05-20", jam: "09:00" },
      ],
      addEvent: (newEvent) =>
        set((state) => ({
          events: [...state.events, { id: Date.now(), ...newEvent }],
        })),
      deleteEvent: (id) =>
        set((state) => ({
          events: state.events.filter((e) => e.id !== id),
        })),
    }),
    { name: "event-storage" }
  )
);