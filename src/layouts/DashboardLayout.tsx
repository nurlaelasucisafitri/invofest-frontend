import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
    const Logout = useAuthStore((state) => state.logout);
    const Navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        Logout();
        Navigate("/login");
    };

    const getMenuClass = (path: string) => {
        const baseClass = "block w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 text-center";
        const isActive = location.pathname === path;
        
        return isActive 
            ? `${baseClass} bg-[#801B30] text-white shadow-md`
            : `${baseClass} bg-pink-100 text-[#801B30] hover:bg-pink-300`;
    };

    return (
        <div className="flex w-full min-h-screen bg-gray-50">

            {/* kiri (Sidebar) */}
            <div className="bg-pink-200 w-64 flex flex-col justify-between p-4 shadow-xl">

                {/* atas */}
                <div className="py-6">
                    <h1 className="text-3xl font-bold text-center text-[#801B30] tracking-wider">Invofest</h1>
                </div>

                {/* tengah (Navigasi) */}
                <div className="flex-1 mt-4">
                    <ul className="flex flex-col gap-3 w-full">
                        <li>
                            <Link to="/dashboard" className={getMenuClass("/dashboard")}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/category" className={getMenuClass("/dashboard/category")}>
                                Category
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/pembicara" className={getMenuClass("/dashboard/pembicara")}>
                                Pembicara
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/event" className={getMenuClass("/dashboard/event")}>
                                Event
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* bawah */}
                <div className="pt-4 border-t border-pink-300">
                    <button 
                        type="button" 
                        onClick={handleLogout} 
                        className="w-full p-3 bg-red-600 text-white rounded-lg font-bold cursor-pointer hover:bg-red-800 transition-colors shadow-md text-center"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* kanan (Konten) */}
            <div className="flex-1 p-8 overflow-y-auto">
                <div className="bg-white p-6 rounded-xl shadow-sm min-h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}