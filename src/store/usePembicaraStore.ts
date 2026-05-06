import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Speaker {
  id: number;
  nama: string;
  role: string;
  foto: string;
}

interface SpeakerState {
  speakers: Speaker[];
  addSpeaker: (speaker: Omit<Speaker, "id">) => void;
  deleteSpeaker: (id: number) => void;
}

export const usePembicaraStore = create<SpeakerState>()(
  persist(
    (set) => ({
      speakers: [
        { id: 1, nama: "Dr. Eng. Ahmad", role: "AI Specialist", foto: "" },
      ],
      addSpeaker: (newSpeaker) =>
        set((state) => ({
          speakers: [...state.speakers, { id: Date.now(), ...newSpeaker }],
        })),
      deleteSpeaker: (id) =>
        set((state) => ({
          speakers: state.speakers.filter((s) => s.id !== id),
        })),
    }),
    { name: "speaker-storage" }
  )
);