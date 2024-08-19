import { DATE } from "@/app/data/date";
import useDateStore from "@/app/store/useDateStore";
import dayjs from "dayjs";

export default function HolidayAbbrev() {
  const { date } = useDateStore();
  const holiday = DATE[date.year()].holiday;

  return (
    <div className="text-black max-w-4xl h-full mx-auto flex flex-col gap-8 sm:gap-16 justify-center items-center">
      <h3 className="text-2xl sm:text-4xl">{date.year()}년 공휴일 모아보기</h3>
      <div className="grid grid-cols-3 gap-6 sm:gap-12">
        {holiday.map(({ date, name }) => {
          return (
            <div key={date.toDateString()} className="flex flex-col gap-2">
              <p className="text-xs sm:text-2xl text-blue-500">
                {dayjs(date).format("YYYY-MM-DD (ddd)")}
              </p>
              <p className="text-sm sm:text-xl">{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
