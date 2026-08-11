import { RiBriefcaseLine } from "react-icons/ri";

const CalendarDay = ({
  date,
  isCurrentMonth,
  isToday,
  events,
}) => {
  return (
    <div
      className={`min-h-[110px] border-b border-r border-[#ECECF3] bg-white p-3 ${
        !isCurrentMonth ? "bg-[#FAFAFC]" : ""
      }`}
    >
      {/* Date Number */}
      <div className="mb-2 flex items-center justify-between">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold ${
            isToday
              ? "bg-[#3CBFA4] text-white"
              : isCurrentMonth
                ? "text-[#211A52]"
                : "text-[#B5B2C7]"
          }`}
        >
          {date.getDate()}
        </span>
      </div>

      {/* Events */}
      <div className="space-y-1">
        {events.slice(0, 2).map((event) => (
          <div
            key={event.id}
            className="rounded-lg bg-[#ECFBF8] px-2 py-1.5"
          >
            <div className="flex items-center gap-1.5">
              <RiBriefcaseLine
                size={13}
                className="shrink-0 text-[#3CBFA4]"
              />

              <p className="truncate text-xs font-semibold text-[#211A52]">
                {event.company}
              </p>
            </div>

            <p className="mt-0.5 truncate text-[11px] text-[#8A86A3]">
              {event.time}
            </p>
          </div>
        ))}

        {events.length > 2 && (
          <p className="px-1 text-xs font-semibold text-[#3CBFA4]">
            +{events.length - 2} more
          </p>
        )}
      </div>
    </div>
  );
};

export default CalendarDay;