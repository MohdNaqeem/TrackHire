import { RiSearchLine } from "react-icons/ri";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="relative w-full lg:max-w-md">
      {/* Search Icon */}
      <RiSearchLine
        size={20}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8A86A3]"
      />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search company or position..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="w-full rounded-2xl border border-[#E7E7EF] bg-[#F8F9FC] py-3 pl-12 pr-4 text-sm text-[#211A52] outline-none transition-all duration-300 placeholder:text-[#A4A1B8] focus:border-[#3CBFA4] focus:bg-white focus:ring-4 focus:ring-[#DDF7F2]"
      />
    </div>
  );
};

export default SearchBar;