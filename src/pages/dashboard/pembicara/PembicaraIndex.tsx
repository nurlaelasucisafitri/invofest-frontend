import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePembicaraStore, type Pembicara } from "../../../store/usePembicaraStore";

export default function PembicaraIndex() {
  const { speakers, loading, error, fetchPembicara, updateSpeaker, deleteSpeaker } = usePembicaraStore();
  const [editId, setEditId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({ name: "", role: "", image: "" });

  useEffect(() => { fetchPembicara(); }, []);

  const handleSaveEdit = async () => {
    if (!editForm.name.trim() || !editForm.role.trim()) return alert("Nama dan Role harus diisi");
    await updateSpeaker(editId!, editForm);
    setEditId(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-red-900">Data Pembicara</h1>
        <Link to="/dashboard/pembicara/create"
          className="bg-pink-100 border border-red-900 px-4 py-2 rounded text-sm text-red-900 font-bold hover:bg-red-900 hover:text-white transition-all">
          + Add New
        </Link>
      </div>

      {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">{error}</div>}

      {loading ? (
        <p className="text-gray-400 text-sm">Memuat data...</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left font-semibold text-gray-700 w-16">Foto</th>
              <th className="p-3 text-left font-semibold text-gray-700">Nama</th>
              <th className="p-3 text-left font-semibold text-gray-700">Role</th>
              <th className="p-3 text-center font-semibold text-gray-700 w-40">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {speakers.length === 0 ? (
              <tr><td colSpan={4} className="p-6 text-center text-gray-400 text-sm">Belum ada data pembicara</td></tr>
            ) : (
              speakers.map((s: Pembicara) => (
                <tr key={s.id} className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                  <td className="p-3">
                    {s.image ? (
                      <img src={s.image} alt={s.name}
                        className="w-12 h-12 rounded-full object-cover border border-gray-200"
                        onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/48x48?text=?"; }} />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-400">No Pic</div>
                    )}
                  </td>
                  <td className="p-3">
                    {editId === s.id ? (
                      <input className="border border-gray-300 rounded px-2 py-1 text-sm w-full outline-none focus:border-red-800"
                        value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
                    ) : <span className="font-medium">{s.name}</span>}
                  </td>
                  <td className="p-3">
                    {editId === s.id ? (
                      <input className="border border-gray-300 rounded px-2 py-1 text-sm w-full outline-none focus:border-red-800"
                        value={editForm.role} onChange={(e) => setEditForm({ ...editForm, role: e.target.value })} />
                    ) : <span className="text-gray-600 text-sm">{s.role}</span>}
                  </td>
                  <td className="p-3 text-center">
                    {editId === s.id ? (
                      <div className="flex justify-center gap-2">
                        <button onClick={handleSaveEdit} className="text-green-600 font-bold hover:text-green-800 text-sm">Simpan</button>
                        <button onClick={() => setEditId(null)} className="text-gray-400 font-bold hover:text-gray-600 text-sm">Batal</button>
                      </div>
                    ) : (
                      <div className="flex justify-center gap-3">
                        <button onClick={() => { setEditId(s.id); setEditForm({ name: s.name, role: s.role, image: s.image }); }}
                          className="text-blue-600 font-bold hover:text-blue-800 text-sm">Edit</button>
                        <button onClick={() => { if (confirm("Hapus pembicara ini?")) deleteSpeaker(s.id); }}
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
