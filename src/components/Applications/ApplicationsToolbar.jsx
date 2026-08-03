import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";
import SortDropdown from "./SortDropdown";

const ApplicationsToolbar = () => {
  return (
    <section className="mb-8 flex flex-col gap-4 rounded-2xl border border-[#E7E7EF] bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Left Side */}
      <SearchBar />

      {/* Right Side */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <StatusFilter />
        <SortDropdown />
      </div>
    </section>
  );
};

export default ApplicationsToolbar;