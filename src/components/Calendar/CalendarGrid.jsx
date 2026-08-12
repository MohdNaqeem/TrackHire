import CalendarDay from "./CalendarDay";
import { calendarEvents } from "../../data/calendarData";

const CalendarGrid = ({
  currentDate,
  onEventClick,
}) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // First day of current month
  const firstDayOfMonth = new Date(
    year,
    month,
    1,
  );

  // Last day of current month
  const lastDayOfMonth = new Date(
    year,
    month + 1,
    0,
  );

  // Day of week the month starts on
  // Sunday = 0
  const startingDay = firstDayOfMonth.getDay();

  // Number of days in current month
  const daysInMonth = lastDayOfMonth.getDate();

  // Previous month's last date
  const previousMonthLastDate = new Date(
    year,
    month,
    0,
  ).getDate();

  const days = [];

  /*
    Previous month's remaining days
  */
  for (
    let i = startingDay - 1;
    i >= 0;
    i--
  ) {
    days.push({
      date: new Date(
        year,
        month - 1,
        previousMonthLastDate - i,
      ),
      isCurrentMonth: false,
    });
  }

  /*
    Current month's days
  */
  for (
    let day = 1;
    day <= daysInMonth;
    day++
  ) {
    days.push({
      date: new Date(year, month, day),
      isCurrentMonth: true,
    });
  }

  /*
    Next month's starting days

    Keep calendar at
    6 rows × 7 days.
  */
  const remainingDays = 42 - days.length;

  for (
    let day = 1;
    day <= remainingDays;
    day++
  ) {
    days.push({
      date: new Date(
        year,
        month + 1,
        day,
      ),
      isCurrentMonth: false,
    });
  }

  const today = new Date();

  const isSameDate = (
    date1,
    date2,
  ) => {
    return (
      date1.getFullYear() ===
        date2.getFullYear() &&
      date1.getMonth() ===
        date2.getMonth() &&
      date1.getDate() ===
        date2.getDate()
    );
  };

  const getEventsForDate = (date) => {
    const dateString = [
      date.getFullYear(),
      String(
        date.getMonth() + 1,
      ).padStart(2, "0"),
      String(
        date.getDate(),
      ).padStart(2, "0"),
    ].join("-");

    return calendarEvents.filter(
      (event) =>
        event.date === dateString,
    );
  };

  const weekDays = [
    {
      short: "Sun",
      mobile: "S",
    },
    {
      short: "Mon",
      mobile: "M",
    },
    {
      short: "Tue",
      mobile: "T",
    },
    {
      short: "Wed",
      mobile: "W",
    },
    {
      short: "Thu",
      mobile: "T",
    },
    {
      short: "Fri",
      mobile: "F",
    },
    {
      short: "Sat",
      mobile: "S",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E7E7EF] bg-white">
      {/* Week Days */}
      <div className="grid grid-cols-7 border-b border-[#ECECF3] bg-[#FAFAFC]">
        {weekDays.map((day) => (
          <div
            key={day.short}
            className="border-r border-[#ECECF3] px-1 py-2 text-center text-[10px] font-semibold uppercase tracking-wide text-[#8A86A3] last:border-r-0 sm:px-2 sm:py-3 sm:text-xs"
          >
            {/* Mobile */}
            <span className="sm:hidden">
              {day.mobile}
            </span>

            {/* Tablet/Desktop */}
            <span className="hidden sm:inline">
              {day.short}
            </span>
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7">
        {days.map((item, index) => (
          <CalendarDay
            key={`${item.date.toISOString()}-${index}`}
            date={item.date}
            isCurrentMonth={
              item.isCurrentMonth
            }
            isToday={isSameDate(
              item.date,
              today,
            )}
            events={getEventsForDate(
              item.date,
            )}
            onEventClick={onEventClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;