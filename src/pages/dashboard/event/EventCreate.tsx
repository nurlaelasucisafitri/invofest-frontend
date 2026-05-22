import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEventStore } from "../../../store/useEventStore";
import { useCategoryStore } from "../../../store/useCategoryStore";
import { usePembicaraStore } from "../../../store/usePembicaraStore"; // ← IMPORT STORE PEMBICARA

export default function EventCreate() {
  const navigate = useNavigate();
  const { addEvent, loading, error } = useEventStore();
  const { categories, fetchCategories } = useCategoryStore();
  const { speakers, fetchPembicara } = usePembicaraStore(); // ← AMBIL DATA PEMBICARA

  const [form, setForm] = useState({
    name: "", categoryId: 0, pembicaraId: 0, // ← TAMBAH pembicaraId
    location: "", dateEvent: "", description: "",
  });

  useEffect(() => {
    fetchCategories();
    fetchPembicara(); // ← FETCH DATA PEMBICARA SAAT HALAMAN DIBUKA
  }, []);

  const handleSimpan = async () => {
    // ← TAMBAH pembicaraId di validasi
    if (!form.name || !form.categoryId || !form.pembicaraId || !form.location || !form.dateEvent) {
      return alert("Nama, Kategori, Pembicara, Lokasi, dan Tanggal harus diisi");
    }
    await addEvent(form);
    navigate("/dashboard/event");
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/dashboard/event" className="text-gray-400 hover:text-gray-600 text-sm">← Kembali</Link>
        <h1 className="text-xl font-bold text-gray-800">Tambah Event</h1>
      </div>
      <div className="border border-gray-200 p-6 rounded-xl max-w-lg bg-white shadow-sm space-y-4 text-sm">
        {error && <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg">{error}</div>}

        <div>
          <label className="block font-semibold mb-1.5 text-gray-700">Nama Event</label>
          <input type="text"
            className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>

        <div>
          <label className="block font-semibold mb-1.5 text-gray-700">Kategori</label>
          <select className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-red-800 bg-white"
            defaultValue="" onChange={(e) => setForm({ ...form, categoryId: Number(e.target.value) })}>
            <option value="" disabled>-- Pilih Kategori --</option>
            {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>

        {/* ↓ DROPDOWN PEMBICARA — BAGIAN YANG DITAMBAHKAN */}
        <div>
          <label className="block font-semibold mb-1.5 text-gray-700">Pembicara</label>
          <select
            className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-red-800 bg-white"
            defaultValue=""
            onChange={(e) => setForm({ ...form, pembicaraId: Number(e.target.value) })}
          >
            <option value="" disabled>-- Pilih Pembicara --</option>
            {speakers.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} — {s.role}
              </option>
            ))}
          </select>
        </div>
        {/* ↑ SAMPAI SINI */}

        <div>
          <label className="block font-semibold mb-1.5 text-gray-700">Lokasi</label>
          <input type="text"
            className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
            onChange={(e) => setForm({ ...form, location: e.target.value })} />
        </div>

        <div>
          <label className="block font-semibold mb-1.5 text-gray-700">Tanggal Event</label>
          <input type="date"
            className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
            onChange={(e) => setForm({ ...form, dateEvent: e.target.value })} />
        </div>

        <div>
          <label className="block font-semibold mb-1.5 text-gray-700">Deskripsi</label>
          <textarea rows={3}
            className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
            onChange={(e) => setForm({ ...form, description: e.target.value })} />
        </div>

        <button onClick={handleSimpan} disabled={loading}
          className="w-full py-2.5 bg-[#801B30] text-white rounded-lg font-bold hover:bg-red-900 transition-colors disabled:opacity-50">
          {loading ? "Menyimpan..." : "Simpan Event"}
        </button>
      </div>
    </div>
  );
}