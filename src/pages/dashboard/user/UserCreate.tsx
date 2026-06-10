import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserStore } from "../../../store/useUserStore";

export default function UserCreate() {
    const navigate = useNavigate();
    const { addUser, loading, error } = useUserStore();
    const [form, setForm] = useState({ name: "", email: "", password: "", foto: "" });

    const handleSimpan = async () => {
        if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
            return alert("Nama, Email, dan Password harus diisi");
        }
        await addUser(form);
        navigate("/dashboard/user");
    };

    return (
        <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
                <Link to="/dashboard/user" className="text-gray-400 hover:text-gray-600 text-sm">← Kembali</Link>
                <h1 className="text-xl font-bold text-gray-800">Tambah User</h1>
            </div>
            <div className="border border-gray-200 p-6 rounded-xl max-w-md bg-white shadow-sm space-y-4 text-sm">
                {error && <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg">{error}</div>}
                <div>
                    <label className="block font-semibold mb-1.5 text-gray-700">Nama</label>
                    <input type="text"
                        className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                    <label className="block font-semibold mb-1.5 text-gray-700">Email</label>
                    <input type="email"
                        className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                    <label className="block font-semibold mb-1.5 text-gray-700">Password</label>
                    <input type="password"
                        className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        onChange={(e) => setForm({ ...form, password: e.target.value })} />
                </div>
                <div>
                    <label className="block font-semibold mb-1.5 text-gray-700">Foto (URL)</label>
                    <input type="text"
                        className="w-full border border-gray-300 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        placeholder="https://..."
                        onChange={(e) => setForm({ ...form, foto: e.target.value })} />
                </div>
                <button onClick={handleSimpan} disabled={loading}
                    className="w-full py-2.5 bg-[#801B30] text-white rounded-lg font-bold hover:bg-red-900 transition-colors disabled:opacity-50">
                    {loading ? "Menyimpan..." : "Simpan"}
                </button>
            </div>
        </div>
    );
}
