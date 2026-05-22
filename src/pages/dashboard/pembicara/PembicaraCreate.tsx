import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { usePembicaraStore } from "../../../store/usePembicaraStore";

export default function PembicaraCreate() {
  const navigate = useNavigate();
  const { addSpeaker, loading, error } = usePembicaraStore();
  const [form, setForm] = useState({ name: "", role: "", image: "" });

  const handleSimpan = async () => {
    if (!form.name.trim() || !form.role.trim()) return alert("Nama dan Role harus diisi");
    await addSpeaker(form);
    navigate("/dashboard/pembicara");
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/dashboard/pembicara" className="text-gray-400 hover:text-gray-600 text-sm">← Kembali</Link>
        <h1 className="text-xl font-bold text-gray-800">Tambah Pembicara</h1>
      </div>
      <div className="border border-gray-200 p-6 rounded-xl max-w-md bg-white shadow-sm space-y-4">
        {error && <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">{error}</div>}
        <div>
          <label className="block text-sm font-semibold mb-1.5 text-gray-700">Nama</label>
          <input type="text"
            className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5 text-gray-700">Role / Jabatan</label>
          <input type="text"
            className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
            placeholder="Contoh: AI Engineer, CEO..."
            onChange={(e) => setForm({ ...form, role: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5 text-gray-700">Foto (URL)</label>
          <input type="text"
            className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
            placeholder="https://..."
            onChange={(e) => setForm({ ...form, image: e.target.value })} />
        </div>
        <button onClick={handleSimpan} disabled={loading}
          className="w-full py-2.5 bg-[#801B30] text-white rounded-lg font-bold hover:bg-red-900 transition-colors disabled:opacity-50">
          {loading ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </div>
  );
}
