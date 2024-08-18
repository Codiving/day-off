import { DATE } from "@/app/data/date";
import WeekdayHeader from "./WeekdayHeader";
import dayjs from "dayjs";
import OtherMonthDay from "./OtherMonthDay";
import useDateStore from "@/app/store/useDateStore";

export default function Calendar() {
  const { date } = useDateStore();
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

  return (
    <div id="calendar" className="flex-1 grid grid-cols-7 gap-2 text-center">
      <WeekdayHeader />
      {prev.map(day => {
        return <OtherMonthDay key={`prev-${day}`} day={day} />;
      })}
      {current.map(day => {
        const dayDate = currentDate.set("date", day);
        const dayOfWeek = dayDate.day();
        const isSunday = dayOfWeek === 0;
        const isSaturday = dayOfWeek === 6;

        const dateNumber = Number(
          `${year}${month.toString().padStart(2, "0")}${String(day).padStart(
            2,
            "0"
          )}`
        );
        const holiday = dateInfo.holiday.find(
          ({ date }) => Number(dayjs(date).format("YYYYMMDD")) === dateNumber
        );

        return (
          <div
            key={`current-${day}`}
            className="justify-center items-center relative p-4 text-2xl flex flex-col gap-2"
          >
            <span
              className={`${
                holiday ? "rounded-full bg-red-500 text-white py-1 px-2" : ""
              } ${
                isSunday ? "text-red-500" : isSaturday ? "text-blue-500" : ""
              }`}
            >
              {String(day).padStart(2, "0")}
            </span>

            {!!holiday && (
              <span
                className={`bottom-0 absolute text-sm left-1/2 transform -translate-x-1/2 whitespace-nowrap`}
              >
                {holiday.name}
              </span>
            )}
          </div>
        );
      })}
      {next.map(day => {
        return <OtherMonthDay key={`next-${day}`} day={day} />;
      })}
    </div>
  );
}
