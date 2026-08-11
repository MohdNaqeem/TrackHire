import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const CalendarHeader = ({
  currentDate,
  onPreviousMonth,
  onNextMonth,
  onToday,
}) => {
  const monthName = currentDate.toLocaleString("en-US", {
    month: "long",
  });

  const year = currentDate.getFullYear();

  return (
    <div className="mb-6 flex items-center justify-between">
      {/* Month */}
      <div>
        <h2 className="text-2xl font-bold text-[#211A52]">
          {monthName} {year}
        </h2>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToday}
          className="rounded-xl border border-[#E7E7EF] bg-white px-4 py-2 text-sm font-semibold text-[#211A52] transition hover:bg-[#F5F6FA]"
        >
          Today
        </button>

        <button
          onClick={onPreviousMonth}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7E7EF] bg-white text-[#211A52] transition hover:bg-[#F5F6FA]"
        >
          <RiArrowLeftLine size={18} />
        </button>

        <button
          onClick={onNextMonth}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7E7EF] bg-white text-[#211A52] transition hover:bg-[#F5F6FA]"
        >
          <RiArrowRightLine size={18} />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;