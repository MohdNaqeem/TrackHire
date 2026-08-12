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
    totalItems,
  );

  return (
    <section
      className="
        mt-6
        flex
        flex-col
        items-center
        justify-between
        gap-3
        rounded-2xl
        border
        border-[#E7E7EF]
        bg-white
        px-2
        py-4
        shadow-sm
        sm:flex-row
        sm:gap-4
        sm:px-6
      "
    >
      {/* Showing Records */}
      <p className="text-center text-sm text-[#8A86A3]">
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

      {/* Pagination Controls */}
      <div className="flex w-full items-center justify-center gap-1 sm:w-auto sm:gap-2">
        {/* Previous */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-lg
            border
            text-sm
            font-medium
            transition-all
            duration-300
            sm:h-10
            sm:w-auto
            sm:gap-1
            sm:rounded-xl
            sm:px-4
            ${
              currentPage === 1
                ? "cursor-not-allowed border-[#ECECF3] text-[#C5C2D6]"
                : "border-[#E7E7EF] text-[#5F5B80] hover:border-[#3CBFA4] hover:text-[#3CBFA4]"
            }
          `}
        >
          <RiArrowLeftSLine size={16} />

          <span className="hidden sm:inline">
            Previous
          </span>
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
              className={`
                h-7
                w-7
                shrink-0
                rounded-lg
                text-xs
                font-semibold
                transition-all
                duration-300
                sm:h-10
                sm:w-10
                sm:rounded-xl
                sm:text-sm
                ${
                  currentPage === index + 1
                    ? "bg-[#3CBFA4] text-white"
                    : "border border-[#E7E7EF] text-[#5F5B80] hover:border-[#3CBFA4] hover:text-[#3CBFA4]"
                }
              `}
            >
              {index + 1}
            </button>
          ),
        )}

        {/* Next */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-lg
            border
            text-sm
            font-medium
            transition-all
            duration-300
            sm:h-10
            sm:w-auto
            sm:gap-1
            sm:rounded-xl
            sm:px-4
            ${
              currentPage === totalPages
                ? "cursor-not-allowed border-[#ECECF3] text-[#C5C2D6]"
                : "border-[#E7E7EF] text-[#5F5B80] hover:border-[#3CBFA4] hover:text-[#3CBFA4]"
            }
          `}
        >
          <span className="hidden sm:inline">
            Next
          </span>

          <RiArrowRightSLine size={16} />
        </button>
      </div>
    </section>
  );
};

export default Pagination;