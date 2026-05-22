import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCategoryStore, type Category} from "../../../store/useCategoryStore";

export default function CategoryIndex() {
  const { categories, loading, error, fetchCategories, updateCategory, deleteCategory } = useCategoryStore();
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  useEffect(() => { fetchCategories(); }, []);

  const handleSaveEdit = async () => {
    if (!editName.trim()) return alert("Nama tidak boleh kosong");
    await updateCategory(editId!, editName.trim());
    setEditId(null);
    setEditName("");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-red-900">Data Kategori</h1>
        <Link to="/dashboard/category/create"
          className="bg-pink-100 border border-red-900 px-4 py-2 rounded text-sm text-red-900 font-bold hover:bg-red-900 hover:text-white transition-all">
          + Add New
        </Link>
      </div>

      {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">{error}</div>}

      {loading ? (
        <p className="text-gray-400 text-sm">Memuat data...</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="p-3 text-left font-semibold text-gray-700 w-12">No</th>
              <th className="p-3 text-left font-semibold text-gray-700">Nama Kategori</th>
              <th className="p-3 text-center font-semibold text-gray-700 w-40">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr><td colSpan={3} className="p-6 text-center text-gray-400 text-sm">Belum ada data kategori</td></tr>
            ) : (
              categories.map((cat: Category, i: number) => (
                <tr key={cat.id} className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                  <td className="p-3 text-gray-400 text-sm">{i + 1}</td>
                  <td className="p-3 text-gray-800">
                    {editId === cat.id ? (
                      <input className="border border-gray-300 rounded px-2 py-1 text-sm w-full max-w-xs outline-none focus:border-red-800"
                        value={editName} onChange={(e) => setEditName(e.target.value)} />
                    ) : cat.name}
                  </td>
                  <td className="p-3 text-center">
                    {editId === cat.id ? (
                      <div className="flex justify-center gap-3">
                        <button onClick={handleSaveEdit} className="text-green-600 font-bold hover:text-green-800 text-sm">Simpan</button>
                        <button onClick={() => setEditId(null)} className="text-gray-400 font-bold hover:text-gray-600 text-sm">Batal</button>
                      </div>
                    ) : (
                      <div className="flex justify-center gap-3">
                        <button onClick={() => { setEditId(cat.id); setEditName(cat.name); }}
                          className="text-blue-600 font-bold hover:text-blue-800 text-sm">Edit</button>
                        <button onClick={() => { if (confirm("Hapus kategori ini?")) deleteCategory(cat.id); }}
                          className="text-red-600 font-bold hover:text-red-800 text-sm">Hapus</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
