import { RiNotification3Line } from "react-icons/ri";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="mb-8 flex items-center justify-between">
      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-bold text-[#211A52]">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-[#5F5B80]">
          Welcome back! Here's your job search progress today.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <SearchBar />

        {/* Notification */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E7E7EF] bg-white transition-all duration-300 hover:border-[#3CBFA4] hover:text-[#3CBFA4]">
          <RiNotification3Line size={20} />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 rounded-xl border border-[#E7E7EF] bg-white px-4 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3CBFA4] text-sm font-semibold text-white">
            NM
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#211A52]">
              Naqeem Momin
            </h3>

            <p className="text-xs text-[#5F5B80]">
              Software Engineer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;