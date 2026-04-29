import React from "react";
import { NavLink } from "react-router-dom";

interface NavLinkProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

export const NavbarLink: React.FC<NavLinkProps> = ({
  label,
  href,
  icon,
  isActive: customIsActive = false,
}) => {
  const activeStyle = "text-red-900";
  const defaultStyle = "text-slate-600 hover:text-red-900";

  return (
    <NavLink
      to={href}
      className={({ isActive: navLinkActive }) => {
        const isCurrentActive = navLinkActive || customIsActive;
        
        return `flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${
          isCurrentActive ? activeStyle : defaultStyle
        }`;
      }}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{label}</span>
    </NavLink>
  );
};