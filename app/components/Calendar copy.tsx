"use client";
import dayjs from "dayjs";
import { DATE } from "../data/date";
import ClosestHoliday from "./ClosestHoliday";
import WeekdayHeader from "./WeekdayHeader";
import YearMonthNav from "./YearMonthNav";

interface CalendarProps {
  year: number;
  month: number;
  className: string;
  onChangeYear: (year: dayjs.Dayjs) => void;
  onChangeMonth: (month: dayjs.Dayjs) => void;
}

export default function Calendar(props: CalendarProps) {
  const { year, month, className, onChangeYear, onChangeMonth } = props;

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
    <div className={`${className} flex flex-col`}>
      <div className="w-full py-6">
        <YearMonthNav
          date={currentDate}
          onChangeYear={onChangeYear}
          onChangeMonth={onChangeMonth}
        />
      </div>

      <div className="w-full bg-gray-100 py-4 flex-1">
        <div className="flex max-w-6xl mx-auto" style={{ height: 600 }}>
          <ClosestHoliday />

          <div
            id="calendar"
            className="flex-1 grid grid-cols-7 gap-2 text-center"
          >
            <WeekdayHeader />
            {daysArray.map((day, index) => {
              const { dayString, className } = getDayProps(day);
              const keyPrefix =
                day <= 0 ? "prev" : day > daysInMonth ? "next" : "current";
              const dateNumber = Number(
                `${year}${month.toString().padStart(2, "0")}${dayString}`
              );
              const holiday = dateInfo.holiday.find(
                ({ date }) => date === dateNumber
              );

              return (
                <div
                  key={`${keyPrefix}-${index}`}
                  className="justify-center items-center relative p-4 text-2xl flex flex-col gap-2"
                >
                  <span
                    className={`${
                      holiday
                        ? "rounded-full bg-red-500 text-white py-1 px-2"
                        : ""
                    } ${className}`}
                  >
                    {dayString}
                  </span>

                  {!!holiday && (
                    <span
                      className={`bottom-0 absolute text-sm left-1/2 transform -translate-x-1/2`}
                    >
                      {holiday.name}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
