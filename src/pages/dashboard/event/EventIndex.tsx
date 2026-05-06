import { Link } from "react-router-dom";
import { useEventStore } from "../../../store/useEventStore";

export default function EventIndex() {
  const { events, deleteEvent } = useEventStore() as any;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-red-900">Data Event</h1>
        <Link to="/dashboard/event/create" className="bg-pink-100 border border-red-900 px-4 py-2 rounded text-sm text-red-900 font-bold">
          + Add New
        </Link>
      </div>
      <table className="w-full border-collapse bg-white shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Nama Event</th>
            <th className="p-3 text-left">Tanggal</th>
            <th className="p-3 text-center w-32">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {events.map((ev: any) => (
            <tr key={ev.id} className="border-b border-gray-100 hover:bg-pink-50">
              <td className="p-3 font-medium">{ev.namaEvent}</td>
              <td className="p-3 text-gray-600">{ev.tanggal}</td>
              <td className="p-3 text-center">
                <button 
                  onClick={() => deleteEvent(ev.id)} 
                  className="text-red-600 font-bold"
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