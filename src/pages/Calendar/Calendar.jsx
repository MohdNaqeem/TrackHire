import { useState } from "react";

import CalendarHeader from "../../components/Calendar/CalendarHeader";
import CalendarGrid from "../../components/Calendar/CalendarGrid";
import UpcomingEvents from "../../components/Calendar/UpcomingEvents";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(
    new Date(2026, 7, 1),
  );

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
    <section className="p-6">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#211A52]">
          Calendar
        </h1>

        <p className="mt-2 text-sm text-[#8A86A3]">
          Keep track of your interviews and important job search events.
        </p>
      </div>

      {/* Calendar Content */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_330px]">
        {/* Calendar */}
        <section className="rounded-2xl border border-[#E7E7EF] bg-white p-6 shadow-sm">
          <CalendarHeader
            currentDate={currentDate}
            onPreviousMonth={handlePreviousMonth}
            onNextMonth={handleNextMonth}
            onToday={handleToday}
          />

          <CalendarGrid currentDate={currentDate} />
        </section>

        {/* Upcoming Events */}
        <UpcomingEvents />
      </div>
    </section>
  );
};

export default Calendar;