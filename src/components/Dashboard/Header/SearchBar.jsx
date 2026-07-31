import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="flex flex-1 items-center gap-4 px-5">
      <RiSearchLine
        size={20}
        className="text-[#8A86A3]"
      />

      <input
        type="text"
        placeholder="Search applications..."
        className="w-full bg-transparent text-[15px] text-[#211A52] placeholder:text-[#8A86A3] outline-none"
      />

      <span className="rounded-md bg-[#F5F6FA] px-3 py-1 text-xs font-medium text-[#8A86A3]">
        ⌘ K
      </span>
    </div>
  );
};

export default SearchBar;