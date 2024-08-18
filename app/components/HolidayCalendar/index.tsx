import dayjs from "dayjs";
import Calendar from "./Calendar";
import ClosestHoliday from "./ClosestHoliday";
import YearMonthNav from "./YearMonthNav";

interface HolidayCalendarProps {
  year: number;
  month: number;
  className: string;
  onChangeYear: (year: dayjs.Dayjs) => void;
  onChangeMonth: (month: dayjs.Dayjs) => void;
}

export default function HolidayCalendar(props: HolidayCalendarProps) {
  const { className, year, month, onChangeYear, onChangeMonth } = props;

  const currentDate = dayjs(`${year}-${month}-01`);

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
          <div className="w-30p flex items-center justify-center flex-col gap-3">
            <ClosestHoliday />
          </div>
          <Calendar year={year} month={month} />
        </div>
      </div>
    </div>
  );
}
