import dayjs from "dayjs";

interface CalendarDayProps {
  day: number;
  currentDate: dayjs.Dayjs;
  dateInfo: any;
}

export default function CalendarDay({
  day,
  currentDate,
  dateInfo
}: CalendarDayProps) {
  const year = currentDate.year();
  const month = currentDate.month() + 1;
  const dayDate = currentDate.set("date", day);
  const dayOfWeek = dayDate.day();
  const isSunday = dayOfWeek === 0;
  const isSaturday = dayOfWeek === 6;
  const dateNumber = Number(
    `${year}${month.toString().padStart(2, "0")}${String(day).padStart(2, "0")}`
  );
  const today = dayjs();
  const isToday = today.isSame(dayDate, "day");

  const dayOff = dateInfo.dayOff;
  const isDayOff = dayOff.includes(dateNumber);

  const holiday = dateInfo.holiday.find(
    ({ date }: { date: string }) =>
      Number(dayjs(date).format("YYYYMMDD")) === dateNumber
  );

  const dayClasses = [
    holiday
      ? "rounded-full bg-red-500 text-white py-1 px-2 flex items-center justify-center w-full"
      : "",
    isSunday
      ? "text-red-500"
      : isSaturday
      ? "text-blue-500"
      : isDayOff
      ? "rounded-full bg-green-700 text-white py-1 px-2 flex items-center justify-center w-full"
      : ""
  ].join(" ");

  return (
    <div className="justify-center items-center relative p-2 text-2xl flex flex-col gap-2">
      <span className={dayClasses}>{String(day).padStart(2, "0")}</span>
      {!!holiday && (
        <span
          style={{ bottom: -4 }}
          className="absolute text-sm left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        >
          {holiday.name}
        </span>
      )}
      {isDayOff && (
        <span
          style={{ bottom: -4 }}
          className="absolute text-sm left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        >
          {"연차"}
        </span>
      )}
      {!holiday && isToday && (
        <span
          style={{ bottom: -4 }}
          className="absolute text-sm text-green-800 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        >
          오늘
        </span>
      )}
    </div>
  );
}
