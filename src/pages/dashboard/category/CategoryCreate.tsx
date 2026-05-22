import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCategoryStore } from "../../../store/useCategoryStore";

export default function CategoryCreate() {
  const [name, setName] = useState("");
  const { addCategory, loading, error } = useCategoryStore();
  const navigate = useNavigate();

  const handleSimpan = async () => {
    if (!name.trim()) return alert("Nama harus diisi");
    await addCategory(name.trim());
    navigate("/dashboard/category");
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/dashboard/category" className="text-gray-400 hover:text-gray-600 text-sm">← Kembali</Link>
        <h1 className="text-xl font-bold text-gray-800">Tambah Kategori</h1>
      </div>
      <div className="border border-gray-200 p-6 rounded-xl max-w-md bg-white shadow-sm">
        {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">{error}</div>}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-sm text-gray-700">Nama Kategori</label>
          <input type="text"
            className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
            placeholder="Contoh: Seminar, Workshop..."
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <button onClick={handleSimpan} disabled={loading}
          className="w-full py-2.5 bg-[#801B30] text-white rounded-lg font-bold hover:bg-red-900 transition-colors disabled:opacity-50">
          {loading ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </div>
  );
}
