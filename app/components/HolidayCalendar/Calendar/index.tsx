import dayjs from "dayjs";
import useDateStore from "@/app/store/useDateStore";
import { DATE } from "@/app/data/date";
import WeekdayHeader from "./WeekdayHeader";
import CalendarDay from "./CalendarDay";
import OtherMonthDay from "./OtherMonthDay";

export default function Calendar() {
  const { date, setDate } = useDateStore();
  const year = date.year();
  const month = date.month() + 1;

  const dateInfo = DATE[year];
  const currentDate = dayjs(`${year}-${month}-01`);
  const startDay = currentDate.startOf("month").day();
  const daysInMonth = currentDate.daysInMonth();
  const prevMonth = currentDate.subtract(1, "month");
  const daysInPrevMonth = prevMonth.daysInMonth();

  const totalDaysInCalendar = Math.ceil((startDay + daysInMonth) / 7) * 7;
  const daysArray = Array.from(
    { length: totalDaysInCalendar },
    (_, index) => index - startDay + 1
  );

  const prev: number[] = [];
  const current: number[] = [];
  const next: number[] = [];

  daysArray.forEach(day => {
    if (day <= 0) {
      prev.push(daysInPrevMonth + day);
    } else if (day > daysInMonth) {
      next.push(day - daysInMonth);
    } else {
      current.push(day);
    }
  });

  const handleTodayClick = () => {
    setDate(dayjs());
  };

  return (
    <div className="flex flex-col flex-1">
      <button onClick={handleTodayClick} className="text-right text-xl pr-9">
        오늘
      </button>
      <div id="calendar" className="flex-1 grid grid-cols-7 gap-2 text-center">
        <WeekdayHeader />
        {prev.map(day => (
          <OtherMonthDay key={`prev-${day}`} day={day} />
        ))}
        {current.map(day => (
          <CalendarDay
            key={`current-${day}`}
            day={day}
            currentDate={currentDate}
            dateInfo={dateInfo}
          />
        ))}
        {next.map(day => (
          <OtherMonthDay key={`next-${day}`} day={day} />
        ))}
      </div>
    </div>
  );
}
