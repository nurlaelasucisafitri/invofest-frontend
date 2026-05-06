import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCategoryStore } from "../../../store/useCategoryStore";

export default function CategoryCreate() {
    const [nama, setNama] = useState("");
    const { addCategory } = useCategoryStore() as any;
    const navigate = useNavigate();

    const handleSimpan = () => {
        if (nama.trim() !== "") {
            addCategory(nama);
            navigate("/dashboard/category");
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">ADD New Category</h1>
            <div className="border border-black p-6 rounded-lg max-w-md bg-white">
                <div className="mb-4">
                    <label className="block mb-2 font-bold text-sm text-gray-700">Nama</label>
                    <input 
                        type="text" 
                        className="w-full border border-gray-400 p-2 rounded outline-none focus:border-red-900" 
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                    />
                </div>
                <button 
                    onClick={handleSimpan}
                    className="px-6 py-1 bg-white border border-black rounded text-sm font-bold hover:bg-gray-100"
                >
                    Simpan
                </button>
            </div>
        </div>
    );
}