import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEventStore } from "../../../store/useEventStore";

export default function EventCreate() {
    const navigate = useNavigate();
    const addEvent = useEventStore((state) => state.addEvent);
    const [form, setForm] = useState({ namaEvent: "", pembicara: "", tanggal: "", jam: "" });

    const handleSimpan = () => {
        if (form.namaEvent) {
            addEvent(form);
            navigate("/dashboard/event");
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Event</h1>
            <div className="border p-6 rounded-lg max-w-md space-y-4 text-sm">
                <div>
                    <label className="block font-semibold mb-1">Nama Event</label>
                    <input type="text" className="w-full border p-2 rounded" onChange={(e) => setForm({...form, namaEvent: e.target.value})} />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Pembicara</label>
                    <input type="text" className="w-full border p-2 rounded" onChange={(e) => setForm({...form, pembicara: e.target.value})} />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Tanggal</label>
                    <input type="date" className="w-full border p-2 rounded" onChange={(e) => setForm({...form, tanggal: e.target.value})} />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Jam</label>
                    <input type="time" className="w-full border p-2 rounded" onChange={(e) => setForm({...form, jam: e.target.value})} />
                </div>
                <button onClick={handleSimpan} className="px-6 py-1 bg-white border border-black rounded font-medium mt-2">Simpan</button>
            </div>
        </div>
    );
}