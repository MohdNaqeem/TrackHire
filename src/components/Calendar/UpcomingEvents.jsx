import {
  RiBriefcaseLine,
  RiCalendarLine,
  RiTimeLine,
} from "react-icons/ri";

import { calendarEvents } from "../../data/calendarData";

const UpcomingEvents = () => {
  const today = new Date();

  const upcomingEvents = calendarEvents
    .filter((event) => {
      const eventDate = new Date(`${event.date}T00:00:00`);
      return eventDate >= today;
    })
    .sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });

  return (
    <section className="rounded-2xl border border-[#E7E7EF] bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#211A52]">
          Upcoming Events
        </h2>

        <p className="mt-1 text-sm text-[#8A86A3]">
          Your upcoming interviews and job search events.
        </p>
      </div>

      {/* Events */}
      {upcomingEvents.length > 0 ? (
        <div className="space-y-4">
          {upcomingEvents.slice(0, 5).map((event) => (
            <div
              key={event.id}
              className="rounded-2xl border border-[#ECECF3] bg-[#FAFAFC] p-4 transition hover:border-[#D9D9E5]"
            >
              {/* Company */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFBF8]">
                  <RiBriefcaseLine
                    size={18}
                    className="text-[#3CBFA4]"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-semibold text-[#211A52]">
                    {event.title}
                  </h3>

                  <p className="text-sm text-[#8A86A3]">
                    {event.company}
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="mt-4 flex items-center gap-2 text-sm text-[#5F5B80]">
                <RiCalendarLine size={16} />

                <span>{event.date}</span>
              </div>

              {/* Time */}
              <div className="mt-2 flex items-center gap-2 text-sm text-[#5F5B80]">
                <RiTimeLine size={16} />

                <span>
                  {event.time} · {event.mode}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#DCDCE7] p-8 text-center">
          <p className="text-sm text-[#8A86A3]">
            No upcoming events.
          </p>
        </div>
      )}
    </section>
  );
};

export default UpcomingEvents;