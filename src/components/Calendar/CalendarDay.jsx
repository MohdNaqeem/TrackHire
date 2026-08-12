import { RiBriefcaseLine } from "react-icons/ri";

const CalendarDay = ({
  date,
  isCurrentMonth,
  isToday,
  events,
  onEventClick,
}) => {
  return (
    <div
      className={`
        min-w-0
        min-h-[72px]
        border-b border-r border-[#ECECF3]
        bg-white
        p-1.5
        sm:min-h-[95px]
        sm:p-2
        lg:min-h-[110px]
        lg:p-3
        ${!isCurrentMonth ? "bg-[#FAFAFC]" : ""}
      `}
    >
      {/* Date Number */}
      <div className="mb-1 flex items-center justify-between sm:mb-2">
        <span
          className={`
            flex h-6 w-6 items-center justify-center
            rounded-full text-[11px] font-semibold
            sm:h-7 sm:w-7 sm:text-sm
            ${
              isToday
                ? "bg-[#3CBFA4] text-white"
                : isCurrentMonth
                  ? "text-[#211A52]"
                  : "text-[#B5B2C7]"
            }
          `}
        >
          {date.getDate()}
        </span>

        {/* Event count on mobile */}
        {events.length > 0 && (
          <span className="text-[9px] font-semibold text-[#3CBFA4] sm:hidden">
            {events.length}
          </span>
        )}
      </div>

      {/* Events */}
      <div className="space-y-1">
        {events.slice(0, 2).map((event) => (
          <button
            key={event.id}
            type="button"
            onClick={() =>
              onEventClick(event)
            }
            title={`${event.company} · ${event.time}`}
            className="
              w-full
              cursor-pointer
              overflow-hidden
              rounded-md
              bg-[#ECFBF8]
              px-1
              py-1
              text-left
              transition-all
              duration-200
              hover:bg-[#DDF7F1]
              hover:shadow-sm
              sm:rounded-lg
              sm:px-2
              sm:py-1.5
            "
          >
            {/* Mobile */}
            <div className="flex items-center gap-1 sm:hidden">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3CBFA4]" />

              <p className="truncate text-[9px] font-semibold text-[#211A52]">
                {event.company}
              </p>
            </div>

            {/* Desktop / Tablet */}
            <div className="hidden items-center gap-1.5 sm:flex">
              <RiBriefcaseLine
                size={13}
                className="shrink-0 text-[#3CBFA4]"
              />

              <p className="truncate text-xs font-semibold text-[#211A52]">
                {event.company}
              </p>
            </div>

            <p className="mt-0.5 hidden truncate text-[11px] text-[#8A86A3] sm:block">
              {event.time}
            </p>
          </button>
        ))}

        {/* More Events */}
        {events.length > 2 && (
          <button
            type="button"
            onClick={() =>
              onEventClick(events[2])
            }
            className="px-1 text-[9px] font-semibold text-[#3CBFA4] hover:underline sm:text-xs"
          >
            +{events.length - 2} more
          </button>
        )}
      </div>
    </div>
  );
};

export default CalendarDay;