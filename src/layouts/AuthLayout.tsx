import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen bg-gray-50">
            
            {/* kiri */}
            <div className="bg-gray-50 h-screen flex items-center justify-center">
                <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png" 
              alt="" 
              className="w-96" 
            />
            <h2>Informatika Vocational Festival</h2>
            </div>

            {/* kanan */}
            <div>
                <Outlet />
            </div>

        </div>
    )
}