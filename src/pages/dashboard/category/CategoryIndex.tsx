import { Link } from "react-router-dom";
import { useCategoryStore } from "../../../store/useCategoryStore";

export default function CategoryIndex() {
  const { categories, deleteCategory } = useCategoryStore() as any;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-red-900">Data Category</h1>
        <Link to="/dashboard/category/create" className="bg-pink-100 border border-red-900 px-4 py-2 rounded text-sm text-red-900 font-bold hover:bg-red-900 hover:text-white transition-all">
          + Add New
        </Link>
      </div>
      <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="p-3 text-left font-semibold text-gray-700">Nama</th>
            <th className="p-3 text-center font-semibold text-gray-700 w-32">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat: any) => (
            <tr key={cat.id} className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
              <td className="p-3 text-gray-800">{cat.nama}</td>
              <td className="p-3 text-center">
                <button 
                  onClick={() => deleteCategory(cat.id)} 
                  className="text-red-600 font-bold hover:text-red-800 transition-colors"
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