import { Home, Info, Users, HelpCircle } from "lucide-react";
import { NavLink } from "./ui/NavLink";

export const Header: React.FC = () => {
  const currentPath = "#hero"; // Default ke hero
  
  const menuItems = [
    { label: "Beranda", href: "#hero", icon: <Home size={18} /> },
    { label: "Tentang", href: "#cards", icon: <Info size={18} /> }, // Mengarah ke section id="cards"
    { label: "Narasumber", href: "#speaker", icon: <Users size={18} /> }, // Mengarah ke section id="speaker"
    { label: "FAQ", href: "#collapse", icon: <HelpCircle size={18} /> }, // Mengarah ke section id="collapse"
  ];

  return (
    <header className="bg-white shadow-sm px-6 py-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <div className="logo">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-16"
          />
        </div>
        <div className="nav flex gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              icon={item.icon}
              isActive={item.href === currentPath}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
