import {
  RiBriefcaseLine,
  RiCalendarLine,
  RiTimeLine,
} from "react-icons/ri";

import { calendarEvents } from "../../data/calendarData";

const UpcomingEvents = ({
  onEventClick,
}) => {
  const today = new Date();

  const todayDateString = [
    today.getFullYear(),
    String(
      today.getMonth() + 1,
    ).padStart(2, "0"),
    String(today.getDate()).padStart(
      2,
      "0",
    ),
  ].join("-");

  const upcomingEvents = calendarEvents
    .filter(
      (event) =>
        event.date >= todayDateString,
    )
    .sort(
      (a, b) =>
        new Date(a.date) -
        new Date(b.date),
    );

  return (
    <section className="min-w-0 rounded-2xl border border-[#E7E7EF] bg-white p-4 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-5 sm:mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#211A52] sm:text-2xl">
            Upcoming Events
          </h2>

          <span className="rounded-full bg-[#ECFBF8] px-2.5 py-1 text-xs font-semibold text-[#3CBFA4]">
            {upcomingEvents.length}
          </span>
        </div>

        <p className="mt-1 text-xs text-[#8A86A3] sm:text-sm">
          Your upcoming interviews and job search events.
        </p>
      </div>

      {/* Events */}
      {upcomingEvents.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-1 xl:gap-4">
          {upcomingEvents
            .slice(0, 5)
            .map((event) => (
              <button
                key={event.id}
                type="button"
                onClick={() =>
                  onEventClick(event)
                }
                className="
                  w-full
                  cursor-pointer
                  rounded-2xl
                  border border-[#ECECF3]
                  bg-[#FAFAFC]
                  p-3
                  text-left
                  transition-all
                  duration-200
                  hover:border-[#3CBFA4]
                  hover:shadow-sm
                  sm:p-4
                "
              >
                {/* Company */}
                <div className="flex min-w-0 items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ECFBF8] sm:h-10 sm:w-10">
                    <RiBriefcaseLine
                      size={17}
                      className="text-[#3CBFA4]"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-[#211A52] sm:text-base">
                      {event.title}
                    </h3>

                    <p className="truncate text-xs text-[#8A86A3] sm:text-sm">
                      {event.company}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="mt-3 flex items-center gap-2 text-xs text-[#5F5B80] sm:mt-4 sm:text-sm">
                  <RiCalendarLine
                    size={15}
                  />

                  <span className="truncate">
                    {event.date}
                  </span>
                </div>

                {/* Time */}
                <div className="mt-2 flex min-w-0 items-center gap-2 text-xs text-[#5F5B80] sm:text-sm">
                  <RiTimeLine
                    size={15}
                  />

                  <span className="truncate">
                    {event.time} ·{" "}
                    {event.mode}
                  </span>
                </div>
              </button>
            ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#DCDCE7] p-6 text-center sm:p-8">
          <p className="text-sm text-[#8A86A3]">
            No upcoming events.
          </p>
        </div>
      )}
    </section>
  );
};

export default UpcomingEvents;