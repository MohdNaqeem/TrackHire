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
  setCurrentPage,
}) => {
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value) => {
    setSelectedStatus(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <section
      className="
        mb-8
        flex
        flex-col
        gap-4
        rounded-2xl
        border
        border-[#E7E7EF]
        bg-white
        p-5
        shadow-sm
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Search */}
      <div className="w-full lg:max-w-[450px]">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={handleSearchChange}
        />
      </div>

      {/* Filters */}
      <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
        <div className="w-full sm:flex-1 lg:w-auto">
          <StatusFilter
            selectedStatus={selectedStatus}
            setSelectedStatus={handleStatusChange}
          />
        </div>

        <div className="w-full sm:flex-1 lg:w-auto">
          <SortDropdown
            sortBy={sortBy}
            setSortBy={handleSortChange}
          />
        </div>
      </div>
    </section>
  );
};

export default ApplicationsToolbar;