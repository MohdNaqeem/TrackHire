import { RiSearchLine } from "react-icons/ri";


const SearchBar = () => {
  return (
    <div className="flex min-w-0 items-center gap-2 px-3 sm:gap-4 sm:px-5">
      <RiSearchLine
        size={20}
        className="shrink-0 text-[#8A86A3]"
      />


      <input
        type="text"
        placeholder="Search applications..."
        className="min-w-0 w-full bg-transparent text-sm text-[#211A52] outline-none placeholder:text-[#8A86A3] sm:text-[15px]"
      />


      {/* Keyboard Shortcut */}
      <span className="hidden shrink-0 rounded-md bg-[#F5F6FA] px-3 py-1 text-xs font-medium text-[#8A86A3] sm:block">
        ⌘ K
      </span>
    </div>
  );
};


export default SearchBar;