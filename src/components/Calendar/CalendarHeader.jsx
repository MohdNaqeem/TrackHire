import {
  RiArrowLeftLine,
  RiArrowRightLine,
} from "react-icons/ri";

const CalendarHeader = ({
  currentDate,
  onPreviousMonth,
  onNextMonth,
  onToday,
}) => {
  const monthName = currentDate.toLocaleString(
    "en-US",
    {
      month: "long",
    },
  );

  const year = currentDate.getFullYear();

  return (
    <div className="mb-4 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
      {/* Month */}
      <div>
        <h2 className="text-xl font-bold text-[#211A52] sm:text-2xl">
          {monthName} {year}
        </h2>

        <p className="mt-1 text-xs text-[#8A86A3] sm:text-sm">
          Manage your interview schedule.
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        {/* Today */}
        <button
          type="button"
          onClick={onToday}
          className="rounded-xl border border-[#E7E7EF] bg-white px-3 py-2 text-xs font-semibold text-[#211A52] transition hover:bg-[#F5F6FA] sm:px-4 sm:text-sm"
        >
          Today
        </button>

        {/* Previous */}
        <button
          type="button"
          onClick={onPreviousMonth}
          aria-label="Previous month"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E7E7EF] bg-white text-[#211A52] transition hover:bg-[#F5F6FA] sm:h-10 sm:w-10"
        >
          <RiArrowLeftLine size={17} />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={onNextMonth}
          aria-label="Next month"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E7E7EF] bg-white text-[#211A52] transition hover:bg-[#F5F6FA] sm:h-10 sm:w-10"
        >
          <RiArrowRightLine size={17} />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;