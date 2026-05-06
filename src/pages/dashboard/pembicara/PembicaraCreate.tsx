import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePembicaraStore } from "../../../store/usePembicaraStore";

export default function PembicaraCreate() {
    const navigate = useNavigate();
    const addSpeaker = usePembicaraStore((state) => state.addSpeaker);
    const [form, setForm] = useState({ nama: "", role: "", foto: "" });

    const handleSimpan = () => {
        addSpeaker(form);
        navigate("/dashboard/pembicara");
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">ADD New Pembicara</h1>
            <div className="border p-6 rounded-lg max-w-md space-y-4">
                <div>
                    <label className="block text-sm font-semibold mb-1">Nama</label>
                    <input type="text" className="w-full border p-2 rounded" onChange={(e) => setForm({...form, nama: e.target.value})} />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1">Role</label>
                    <input type="text" className="w-full border p-2 rounded" onChange={(e) => setForm({...form, role: e.target.value})} />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1">Foto (URL)</label>
                    <input type="text" className="w-full border p-2 rounded" onChange={(e) => setForm({...form, foto: e.target.value})} />
                </div>
                <button onClick={handleSimpan} className="px-6 py-1 bg-white border border-black rounded text-sm font-medium">Simpan</button>
            </div>
        </div>
    );
}