import SidebarItem from "./SidebarItem";
import { sidebarLinks, logout } from "./sidebarData";

const Sidebar = () => {
  const LogoutIcon = logout.icon;

  return (
    <aside className="flex h-screen w-72 flex-col justify-between border-r border-[#E7E7EF] bg-white p-6">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold text-[#211A52]">
          Track<span className="text-[#3CBFA4]">Hire</span>
        </h1>

        <p className="mt-2 text-sm text-[#5F5B80]">
          Job Application Tracker
        </p>

        {/* Navigation */}
        <nav className="mt-10 space-y-2">
          {sidebarLinks.map((link) => (
            <SidebarItem
              key={link.id}
              title={link.title}
              icon={link.icon}
              path={link.path}
            />
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#E7E7EF] pt-6">
        <div className="mb-6">
          <h3 className="font-semibold text-[#211A52]">Naqeem Momin</h3>

          <p className="text-sm text-[#5F5B80]">
            naqeem@example.com
          </p>
        </div>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition-all duration-300 hover:bg-red-50">
          <LogoutIcon size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;