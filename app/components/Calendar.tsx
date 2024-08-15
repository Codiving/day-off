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
      <div className="">
        <h2 className="pl-4 text-3xl font-bold mb-7 text-center">
          {currentDate.format("YYYY년 MM월")} 연차쓰기 좋은 날은?
        </h2>
      </div>

      <div className="w-full bg-gray-100 py-4">
        <div className="max-w-6xl mx-auto grid grid-cols-7 gap-2 text-center">
          <WeekdayHeader />
          {daysArray.map((day, index) => {
            const { dayString, className } = getDayProps(day);
            const keyPrefix =
              day <= 0 ? "prev" : day > daysInMonth ? "next" : "current";
            return (
              <div
                key={`${keyPrefix}-${index}`}
                className="relative p-4 text-2xl flex flex-col gap-2"
              >
                <span className={`${className}`}>{dayString}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
