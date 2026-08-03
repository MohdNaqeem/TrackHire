import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";
import SortDropdown from "./SortDropdown";

const ApplicationsToolbar = ({
  searchTerm,
  setSearchTerm,
  selectedStatus,
  setSelectedStatus,
  sortBy,
  setSortBy,
}) => {
  return (
    <section className="mb-8 flex flex-col gap-4 rounded-2xl border border-[#E7E7EF] bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <StatusFilter
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />

        <SortDropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
    </section>
  );
};

export default ApplicationsToolbar;