import { useEffect } from "react";
import { useCategoryStore } from "../../store/useCategoryStore";
import { usePembicaraStore } from "../../store/usePembicaraStore";
import { useEventStore } from "../../store/useEventStore";
import { useAuthStore } from "../../store/useAuthStore";

export default function DashboardIndex() {
  const { categories, fetchCategories } = useCategoryStore();
  const { speakers, fetchPembicara } = usePembicaraStore();
  const { events, fetchEvents } = useEventStore();
  const nim = useAuthStore((state) => state.nim);

  useEffect(() => {
    fetchCategories();
    fetchPembicara();
    fetchEvents();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-900">Dashboard Utama</h1>
      <p className="text-gray-500 mt-1 text-sm">
        Selamat Datang, <span className="font-semibold text-gray-700">Nur Laela Suci Safitri</span>{" "}
        <span className="text-gray-400">({nim})</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-pink-100 border border-pink-200 rounded-xl shadow-sm">
          <h2 className="text-xs font-semibold text-red-900 uppercase tracking-wider">Total Kategori</h2>
          <p className="text-5xl font-bold mt-3 text-red-900">{categories.length}</p>
        </div>
        <div className="p-6 bg-pink-100 border border-pink-200 rounded-xl shadow-sm">
          <h2 className="text-xs font-semibold text-red-900 uppercase tracking-wider">Total Pembicara</h2>
          <p className="text-5xl font-bold mt-3 text-red-900">{speakers.length}</p>
        </div>
        <div className="p-6 bg-pink-100 border border-pink-200 rounded-xl shadow-sm">
          <h2 className="text-xs font-semibold text-red-900 uppercase tracking-wider">Total Event</h2>
          <p className="text-5xl font-bold mt-3 text-red-900">{events.length}</p>
        </div>
      </div>
    </div>
  );
}
