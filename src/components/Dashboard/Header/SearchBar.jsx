import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="relative w-80">
      {/* Search Icon */}
      <RiSearchLine
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5F5B80]"
        size={18}
      />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search applications..."
        className="w-full rounded-xl border border-[#E7E7EF] bg-white py-3 pl-11 pr-4 text-sm text-[#211A52] outline-none transition-all duration-300 placeholder:text-[#9A97B5] focus:border-[#3CBFA4] focus:ring-2 focus:ring-[#3CBFA4]/20"
      />
    </div>
  );
};

export default SearchBar;