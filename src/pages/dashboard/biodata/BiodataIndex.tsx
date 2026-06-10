export default function BiodataIndex() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-900 mb-6">Biodata Mahasiswa</h1>

      <div className="max-w-lg bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-[#801B30] p-6 flex flex-col items-center text-white">
          <img
          src="https://res.cloudinary.com/douxlprdx/image/upload/v1779446672/saya_dpx3zw.jpg"
          alt="Nur Laela Suci Safitri"
          className="w-24 h-24 rounded-full border-4 border-white object-cover mb-3"
/>
          <h2 className="text-xl font-bold">Nur Laela Suci Safitri</h2>
          <p className="text-pink-200 text-sm mt-1">Teknik Informatika 4C</p>
        </div>

        {/* Detail */}
        <div className="p-6 space-y-3">
          {[
            { label: "NIM", value: "24090097" },
            { label: "Nama Lengkap", value: "Nur Laela Suci Safitri" },
            { label: "Program Studi", value: "Teknik Informatika" },
            { label: "Kelas", value: "4C" },
            { label: "Fakultas", value: "Sekolah Vokasi" },
            { label: "Universitas", value: "Universitas Harkat Negeri" },
            { label: "Email", value: "nurlaelasucisafitri@gmail.com" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4 py-2 border-b border-gray-100 last:border-0">
              <span className="text-sm text-gray-400 w-36 shrink-0">{item.label}</span>
              <span className="text-sm font-semibold text-gray-800">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="px-6 pb-6">
          <div className="bg-pink-50 border border-pink-100 rounded-lg p-4 text-sm text-gray-600">
            <p className="font-semibold text-red-900 mb-1">Tentang Website Ini</p>
            <p>Website ini dibuat sebagai tugas UAS Mata Kuliah Pemrograman Web 2, menggunakan React (TypeScript), Express.js, Prisma ORM, Supabase, dan Zustand.</p>
          </div>
        </div>
      </div>
    </div>
  );
}