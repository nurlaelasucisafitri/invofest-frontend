import { useCategoryStore } from "../../store/useCategoryStore";
import { usePembicaraStore } from "../../store/usePembicaraStore";
import { useEventStore } from "../../store/useEventStore";

export default function DashboardIndex() {
  // Mengambil data array dari masing-masing store
  const categories = useCategoryStore((state) => state.categories);
  const speakers = usePembicaraStore((state) => state.speakers);
  const events = useEventStore((state) => state.events);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-900">Dashboard Utama</h1>
      <p className="text-gray-600 mt-1">Selamat Datang, Nur Laela Suci Safitri</p>
      
      {/* Container untuk kartu statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        {/* Card Kategori - Otomatis update via .length */}
        <div className="p-6 bg-pink-200 border border-pink-300 rounded-lg shadow-sm">
          <h2 className="text-xs font-semibold text-red-900 uppercase tracking-wider">Total Kategori</h2>
          <p className="text-4xl font-bold mt-2 text-red-900">{categories.length}</p>
        </div>

        {/* Card Pembicara - Otomatis update via .length */}
        <div className="p-6 bg-pink-200 border border-pink-300 rounded-lg shadow-sm">
          <h2 className="text-xs font-semibold opacity-80 uppercase tracking-wider">Total Pembicara</h2>
          <p className="text-4xl font-bold mt-2">{speakers.length}</p>
        </div>

        {/* Card Event - Otomatis update via .length */}
        <div className="p-6 bg-pink-200 border border-pink-300 rounded-lg shadow-sm">
          <h2 className="text-xs font-semibold text-red-900 uppercase tracking-wider">Total Event</h2>
          <p className="text-4xl font-bold mt-2 text-red-900">{events.length}</p>
        </div>

      </div>

      <div className="mt-10 p-4 bg-gray-50 border border-dashed border-gray-300 rounded-md">
        <p className="text-sm text-gray-500 italic">
          * Data di atas diambil secara real-time dari sistem manajemen Invofest.
        </p>
      </div>
    </div>
  );
}