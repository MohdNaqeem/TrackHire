import SidebarItem from "./SidebarItem";
import { sidebarLinks, logout } from "./sidebarData";
import { RiCloseLine } from "react-icons/ri";


const Sidebar = ({ isOpen, onClose }) => {
  const LogoutIcon = logout.icon;


  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}


      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          flex w-[280px] flex-col
          border-r border-[#E7E7EF]
          bg-white px-6 py-7
          transition-transform duration-300
          lg:static lg:z-auto lg:min-h-screen lg:translate-x-0
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Logo + Close Button */}
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#211A52]">
                Track<span className="text-[#3CBFA4]">Hire</span>
              </h1>

              <p className="mt-2 text-sm text-[#5F5B80]">
                Job Application Tracker
              </p>
            </div>


            {/* Mobile Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#8A86A3] transition hover:bg-[#F5F6FA] hover:text-[#211A52] lg:hidden"
              aria-label="Close navigation"
            >
              <RiCloseLine size={22} />
            </button>
          </div>


          {/* Navigation */}
          <nav className="mt-10 space-y-2">
  {sidebarLinks.map((link) => (
    <SidebarItem
      key={link.id}
      title={link.title}
      icon={link.icon}
      path={link.path}
      onNavigate={onClose}
    />
  ))}
</nav>
        </div>


        {/* Bottom Section */}
        <div className="mt-auto border-t border-[#E7E7EF] pt-6">
          <div className="mb-6">
            <h3 className="font-semibold text-[#211A52]">
              Naqeem Momin
            </h3>

            <p className="text-sm text-[#5F5B80]">
              naqeem@example.com
            </p>
          </div>


          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition-all duration-300 hover:bg-red-50"
          >
            <LogoutIcon size={20} />

            Logout
          </button>
        </div>
      </aside>
    </>
  );
};


export default Sidebar;