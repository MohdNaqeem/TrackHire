import { RiMenuLine } from "react-icons/ri";

import SearchBar from "./SearchBar";
import NotificationButton from "./NotificationButton";
import UserProfile from "./UserProfile";
import Divider from "./Divider";


const Header = ({ onMenuClick }) => {
  return (
    <header className="mb-6 sm:mb-8">
      <div className="flex h-16 items-center rounded-2xl border border-[#E7E7EF] bg-white shadow-sm">

        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          className="ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#211A52] transition hover:bg-[#F5F6FA] lg:hidden"
          aria-label="Open navigation"
        >
          <RiMenuLine size={22} />
        </button>


        {/* Search */}
        <div className="min-w-0 flex-1">
          <SearchBar />
        </div>


        {/* Divider */}
        <Divider />


        {/* Notification */}
        <NotificationButton />


        {/* Divider */}
        <div className="hidden sm:block">
          <Divider />
        </div>


        {/* Profile */}
        <UserProfile />
      </div>
    </header>
  );
};


export default Header;