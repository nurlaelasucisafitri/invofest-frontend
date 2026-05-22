import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useEventStore, type EventItem } from "../../../store/useEventStore";
import { useCategoryStore } from "../../../store/useCategoryStore";

export default function EventIndex() {
  const { events, loading, error, fetchEvents, updateEvent, deleteEvent } = useEventStore();
  const { categories, fetchCategories } = useCategoryStore();
  const [editId, setEditId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({ name: "", categoryId: 0, location: "", dateEvent: "", description: "" });

  useEffect(() => {
    fetchEvents();
    fetchCategories();
  }, []);

  const handleSaveEdit = async () => {
    if (!editForm.name || !editForm.location) return alert("Nama dan Lokasi harus diisi");
    await updateEvent(editId!, editForm);
    setEditId(null);
  };

  const handleStartEdit = (ev: EventItem) => {
    setEditId(ev.id);
    setEditForm({
      name: ev.name,
      categoryId: ev.categoryId,
      location: ev.location,
      dateEvent: ev.dateEvent.substring(0, 10),
      description: ev.description,
    });
  };

  const formatTanggal = (iso: string) =>
    new Date(iso).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });

  const getCategoryName = (id: number) => categories.find((c) => c.id === id)?.name || "-";

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-red-900">Data Event</h1>
        <Link to="/dashboard/event/create"
          className="bg-pink-100 border border-red-900 px-4 py-2 rounded text-sm text-red-900 font-bold hover:bg-red-900 hover:text-white transition-all">
          + Add New
        </Link>
      </div>

      {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">{error}</div>}

      {loading ? (
        <p className="text-gray-400 text-sm">Memuat data...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left font-semibold text-gray-700">Nama Event</th>
                <th className="p-3 text-left font-semibold text-gray-700">Kategori</th>
                <th className="p-3 text-left font-semibold text-gray-700">Lokasi</th>
                <th className="p-3 text-left font-semibold text-gray-700">Tanggal</th>
                <th className="p-3 text-center font-semibold text-gray-700 w-36">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {events.length === 0 ? (
                <tr><td colSpan={5} className="p-6 text-center text-gray-400">Belum ada data event</td></tr>
              ) : (
                events.map((ev: EventItem) => (
                  <tr key={ev.id} className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                    <td className="p-3 font-medium">
                      {editId === ev.id ? (
                        <input className="border rounded px-2 py-1 w-full text-sm outline-none focus:border-red-800"
                          value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
                      ) : ev.name}
                    </td>
                    <td className="p-3">
                      {editId === ev.id ? (
                        <select className="border rounded px-2 py-1 text-sm outline-none focus:border-red-800 bg-white"
                          value={editForm.categoryId} onChange={(e) => setEditForm({ ...editForm, categoryId: Number(e.target.value) })}>
                          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                      ) : getCategoryName(ev.categoryId)}
                    </td>
                    <td className="p-3 text-gray-600">
                      {editId === ev.id ? (
                        <input className="border rounded px-2 py-1 w-full text-sm outline-none focus:border-red-800"
                          value={editForm.location} onChange={(e) => setEditForm({ ...editForm, location: e.target.value })} />
                      ) : ev.location}
                    </td>
                    <td className="p-3 text-gray-600">{formatTanggal(ev.dateEvent)}</td>
                    <td className="p-3 text-center">
                      {editId === ev.id ? (
                        <div className="flex justify-center gap-2">
                          <button onClick={handleSaveEdit} className="text-green-600 font-bold hover:text-green-800 text-sm">Simpan</button>
                          <button onClick={() => setEditId(null)} className="text-gray-400 font-bold hover:text-gray-600 text-sm">Batal</button>
                        </div>
                      ) : (
                        <div className="flex justify-center gap-3">
                          <button onClick={() => handleStartEdit(ev)} className="text-blue-600 font-bold hover:text-blue-800 text-sm">Edit</button>
                          <button onClick={() => { if (confirm("Hapus event ini?")) deleteEvent(ev.id); }}
                            className="text-red-600 font-bold hover:text-red-800 text-sm">Hapus</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
