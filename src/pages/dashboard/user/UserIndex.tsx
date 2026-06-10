import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../../store/useUserStore";
import type { User } from "../../../store/useUserStore";

export default function UserIndex() {
    const { users, loading, error, fetchUsers, updateUser, deleteUser } = useUserStore();
    const [editId, setEditId] = useState<number | null>(null);
    const [editForm, setEditForm] = useState({ name: "", email: "", password: "", foto: "" });

    useEffect(() => { fetchUsers(); }, []);

    const handleSaveEdit = async () => {
        if (!editForm.name.trim() || !editForm.email.trim()) return alert("Nama dan Email harus diisi");
        const payload: any = { name: editForm.name, email: editForm.email, foto: editForm.foto };
        if (editForm.password) payload.password = editForm.password;
        await updateUser(editId!, payload);
        setEditId(null);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-red-900">Data User</h1>
                <Link to="/dashboard/user/create"
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
                                <th className="p-3 text-left font-semibold text-gray-700 w-16">Foto</th>
                                <th className="p-3 text-left font-semibold text-gray-700">Nama</th>
                                <th className="p-3 text-left font-semibold text-gray-700">Email</th>
                                <th className="p-3 text-center font-semibold text-gray-700 w-40">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length === 0 ? (
                                <tr><td colSpan={4} className="p-6 text-center text-gray-400">Belum ada data user</td></tr>
                            ) : (
                                users.map((u: User) => (
                                    <tr key={u.id} className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                                        <td className="p-3">
                                            {u.foto ? (
                                                <img src={u.foto} alt={u.name}
                                                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                                                    onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/40x40?text=?"; }} />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                                                    {u.name.charAt(0).toUpperCase()}
                                                </div>
                                            )}
                                        </td>
                                        <td className="p-3">
                                            {editId === u.id ? (
                                                <input className="border rounded px-2 py-1 w-full text-sm outline-none focus:border-red-800"
                                                    value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
                                            ) : <span className="font-medium">{u.name}</span>}
                                        </td>
                                        <td className="p-3">
                                            {editId === u.id ? (
                                                <input className="border rounded px-2 py-1 w-full text-sm outline-none focus:border-red-800"
                                                    value={editForm.email} onChange={(e) => setEditForm({ ...editForm, email: e.target.value })} />
                                            ) : <span className="text-gray-600">{u.email}</span>}
                                        </td>
                                        <td className="p-3 text-center">
                                            {editId === u.id ? (
                                                <div className="flex justify-center gap-2">
                                                    <button onClick={handleSaveEdit} className="text-green-600 font-bold hover:text-green-800 text-sm">Simpan</button>
                                                    <button onClick={() => setEditId(null)} className="text-gray-400 font-bold hover:text-gray-600 text-sm">Batal</button>
                                                </div>
                                            ) : (
                                                <div className="flex justify-center gap-3">
                                                    <button onClick={() => { setEditId(u.id); setEditForm({ name: u.name, email: u.email, password: "", foto: u.foto }); }}
                                                        className="text-blue-600 font-bold hover:text-blue-800 text-sm">Edit</button>
                                                    <button onClick={() => { if (confirm("Hapus user ini?")) deleteUser(u.id); }}
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
