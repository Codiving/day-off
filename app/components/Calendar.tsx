"use client";
import dayjs from "dayjs";
import WeekdayHeader from "./WeekdayHeader";

interface CalendarProps {
  year: number;
  month: number;
  className: string;
}

export default function Calendar(props: CalendarProps) {
  const { year, month, className } = props;

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

  const getDayProps = (day: number) => {
    const dayDate = currentDate.set("date", day);
    const dayOfWeek = dayDate.day();

    if (day <= 0) {
      return {
        dayString: String(daysInPrevMonth + day).padStart(2, "0"),
        className: `text-gray-400`
      };
    }
    if (day > daysInMonth) {
      return {
        dayString: String(day - daysInMonth).padStart(2, "0"),
        className: `text-gray-400`
      };
    }

    const weekDayClassName =
      day > 0 && day <= daysInMonth
        ? dayOfWeek === 0
          ? "text-red-500"
          : dayOfWeek === 6
          ? "text-blue-500"
          : ""
        : "";

    return {
      dayString: String(day).padStart(2, "0"),
      className: `${weekDayClassName}`
    };
  };

  return (
    <div className={`${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="pl-8 text-3xl font-bold mb-7">
          {currentDate.format("YYYY년 MM월")}
        </h2>
      </div>
      <div className="grid grid-cols-7 gap-2">
        <WeekdayHeader />
        {daysArray.map((day, index) => {
          const { dayString, className } = getDayProps(day);
          const keyPrefix =
            day <= 0 ? "prev" : day > daysInMonth ? "next" : "current";
          return (
            <div
              key={`${keyPrefix}-${index}`}
              className="relative p-3 text-2xl text-center flex flex-col items-center gap-2"
            >
              <span className={`${className} p-2`}>{dayString}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
