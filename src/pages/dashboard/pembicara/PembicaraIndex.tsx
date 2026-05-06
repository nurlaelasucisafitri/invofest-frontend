import { Link } from "react-router-dom";
import { usePembicaraStore } from "../../../store/usePembicaraStore";

export default function PembicaraIndex() {
  const { speakers, deleteSpeaker } = usePembicaraStore() as any;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-red-900">Data Pembicara</h1>
        <Link to="/dashboard/pembicara/create" className="bg-pink-100 border border-red-900 px-4 py-2 rounded text-sm text-red-900 font-bold">
          + Add New
        </Link>
      </div>
      
      <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            {/* Tambah kolom Foto */}
            <th className="p-3 text-left font-semibold text-gray-700 w-24">Foto</th>
            <th className="p-3 text-left font-semibold text-gray-700">Nama</th>
            <th className="p-3 text-left font-semibold text-gray-700">Role</th>
            <th className="p-3 text-center font-semibold text-gray-700 w-32">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {speakers.map((s: any) => (
            <tr key={s.id} className="border-b border-gray-100 hover:bg-pink-50">
              <td className="p-3">
                {/* Bagian untuk memunculkan foto dari URL */}
                {s.foto ? (
                  <img 
                    src={s.foto} 
                    alt={s.nama} 
                    className="w-12 h-12 rounded-full object-cover border border-gray-200"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/150";
                    }}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-400">
                    No Pic
                  </div>
                )}
              </td>
              <td className="p-3 font-medium">{s.nama}</td>
              <td className="p-3 text-gray-600 text-sm">{s.role}</td>
              <td className="p-3 text-center">
                <button 
                  onClick={() => {
                    if(confirm("Hapus pembicara ini?")) deleteSpeaker(s.id);
                  }} 
                  className="text-red-600 font-bold hover:underline"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}