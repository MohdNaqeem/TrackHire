import { useState } from "react";

import CalendarHeader from "../../components/Calendar/CalendarHeader";
import CalendarGrid from "../../components/Calendar/CalendarGrid";
import UpcomingEvents from "../../components/Calendar/UpcomingEvents";
import EventDetailsModal from "../../components/Calendar/EventDetailsModal";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(
    new Date(2026, 7, 1),
  );

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handlePreviousMonth = () => {
    setCurrentDate(
      (previousDate) =>
        new Date(
          previousDate.getFullYear(),
          previousDate.getMonth() - 1,
          1,
        ),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (previousDate) =>
        new Date(
          previousDate.getFullYear(),
          previousDate.getMonth() + 1,
          1,
        ),
    );
  };

  const handleToday = () => {
    const today = new Date();

    setCurrentDate(
      new Date(
        today.getFullYear(),
        today.getMonth(),
        1,
      ),
    );
  };

  return (
    <section className="p-4 sm:p-6">
      {/* Page Header */}
      <div className="mb-6 text-center sm:mb-8">
        <h1 className="text-2xl font-bold text-[#211A52] sm:text-3xl">
          Calendar
        </h1>

        <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-[#8A86A3] sm:text-sm sm:leading-6">
          Keep track of your interviews and important job search events.
        </p>
      </div>

      {/* Calendar Content */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_330px] xl:gap-6">
        {/* Calendar */}
        <section className="min-w-0 rounded-2xl border border-[#E7E7EF] bg-white p-3 shadow-sm sm:p-5 lg:p-6">
          <CalendarHeader
            currentDate={currentDate}
            onPreviousMonth={handlePreviousMonth}
            onNextMonth={handleNextMonth}
            onToday={handleToday}
          />

          <CalendarGrid
            currentDate={currentDate}
            onEventClick={setSelectedEvent}
          />
        </section>

        {/* Upcoming Events */}
        <UpcomingEvents
          onEventClick={setSelectedEvent}
        />
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  );
};

export default Calendar;