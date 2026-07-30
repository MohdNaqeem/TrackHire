import { NavLink } from "react-router-dom";

const SidebarItem = ({ title, icon: Icon, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
          isActive
            ? "bg-[#3CBFA4] text-white shadow-md"
            : "text-[#5F5B80] hover:bg-[#ECFBF8] hover:text-[#3CBFA4]"
        }`
      }
    >
      <Icon size={20} />
      <span>{title}</span>
    </NavLink>
  );
};

export default SidebarItem;