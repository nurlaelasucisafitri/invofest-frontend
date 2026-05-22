import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function LoginForm() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!nim.trim() || !password.trim()) {
      setError("NIM dan Password harus diisi");
      return;
    }

    setLoading(true);
    // Login manual menggunakan NIM dan Password (sesuai soal UTS)
    if (nim === "24090097" && password === "admin123") {
      login(nim);
      navigate("/dashboard");
    } else {
      setError("NIM atau password salah!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 border-b pb-4 text-center">
          Login
        </h2>
        <p className="text-xs text-gray-400 text-center mt-2 mb-6">Invofest Management System</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">NIM</label>
            <input
              type="text"
              className="border border-gray-300 px-3 py-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
              placeholder="Masukkan NIM anda"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              className="border border-gray-300 px-3 py-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-[#801B30] text-white rounded-lg font-bold hover:bg-red-900 transition-colors disabled:opacity-50 mt-2"
          >
            {loading ? "Memproses..." : "Login"}
          </button>

          <p className="text-sm text-center text-gray-500">
            Belum punya akun?{" "}
            <Link to="/register" className="text-[#801B30] font-semibold hover:underline">
              Daftar Disini
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
