import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  totalItems,
  itemsPerPage,
}) => {
  // Previous Button
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next Button
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Showing Records
  const startItem = (currentPage - 1) * itemsPerPage + 1;

  const endItem = Math.min(
    currentPage * itemsPerPage,
    totalItems
  );

  return (
    <section className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#E7E7EF] bg-white px-6 py-4 shadow-sm sm:flex-row">
      {/* Left */}
      <p className="text-sm text-[#8A86A3]">
        Showing{" "}
        <span className="font-semibold text-[#211A52]">
          {startItem}-{endItem}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-[#211A52]">
          {totalItems}
        </span>{" "}
        applications
      </p>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Previous */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-300 ${
            currentPage === 1
              ? "cursor-not-allowed border-[#ECECF3] text-[#C5C2D6]"
              : "border-[#E7E7EF] text-[#5F5B80] hover:border-[#3CBFA4] hover:text-[#3CBFA4]"
          }`}
        >
          <RiArrowLeftSLine size={18} />
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from(
          { length: totalPages },
          (_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentPage(index + 1)
              }
              className={`h-10 w-10 rounded-xl font-semibold transition-all duration-300 ${
                currentPage === index + 1
                  ? "bg-[#3CBFA4] text-white"
                  : "border border-[#E7E7EF] text-[#5F5B80] hover:border-[#3CBFA4] hover:text-[#3CBFA4]"
              }`}
            >
              {index + 1}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-1 rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-300 ${
            currentPage === totalPages
              ? "cursor-not-allowed border-[#ECECF3] text-[#C5C2D6]"
              : "border-[#E7E7EF] text-[#5F5B80] hover:border-[#3CBFA4] hover:text-[#3CBFA4]"
          }`}
        >
          Next
          <RiArrowRightSLine size={18} />
        </button>
      </div>
    </section>
  );
};

export default Pagination;