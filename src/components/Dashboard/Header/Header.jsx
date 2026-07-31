import SearchBar from "./SearchBar";
import NotificationButton from "./NotificationButton";
import UserProfile from "./UserProfile";
import Divider from "./Divider";

const Header = () => {
  return (
    <header className="mb-8">
      <div className="flex h-16 items-center rounded-2xl border border-[#E7E7EF] bg-white shadow-sm">
        
        {/* Search */}
        <div className="flex-1">
          <SearchBar />
        </div>

        {/* Divider */}
        <Divider/>

        {/* Notification */}
        <NotificationButton />

        {/* Divider */}
        <Divider/>

        {/* Profile */}
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;