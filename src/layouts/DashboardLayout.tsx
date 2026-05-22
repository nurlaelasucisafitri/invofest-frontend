import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuClass = (path: string) => {
  const base = "block w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 text-center text-sm";
  
  const active = path === "/dashboard"
    ? location.pathname === "/dashboard"
    : location.pathname.startsWith(path);

  return active
    ? `${base} bg-[#801B30] text-white shadow-md`
    : `${base} bg-pink-100 text-[#801B30] hover:bg-pink-300`;
};

  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="bg-pink-200 w-64 flex flex-col justify-between p-4 shadow-xl shrink-0">
        <div>
          <div className="py-6">
            <h1 className="text-3xl font-bold text-center text-[#801B30] tracking-wider">Invofest</h1>
            <p className="text-center text-xs text-pink-500 mt-1">Management System</p>
          </div>
          <ul className="flex flex-col gap-2 mt-2">
            {[
              { to: "/dashboard", label: "Dashboard" },
              { to: "/dashboard/category", label: "Kategori" },
              { to: "/dashboard/pembicara", label: "Pembicara" },
              { to: "/dashboard/event", label: "Event" },
              { to: "/dashboard/biodata", label: "Biodata" },
            ].map((m) => (
              <li key={m.to}>
                <Link to={m.to} className={menuClass(m.to)}>{m.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4 border-t border-pink-300">
          <button onClick={handleLogout}
            className="w-full p-3 bg-red-600 text-white rounded-lg font-bold cursor-pointer hover:bg-red-800 transition-colors text-sm">
            Logout
          </button>
        </div>
      </div>

      {/* Konten */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white p-6 rounded-xl shadow-sm min-h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
