import Calendar from "./Calendar";
import ClosestHoliday from "./ClosestHoliday";
import YearMonthNav from "./YearMonthNav";

interface HolidayCalendarProps {
  className: string;
}

export default function HolidayCalendar(props: HolidayCalendarProps) {
  const { className } = props;

  return (
    <div className={`${className} flex flex-col`}>
      <div className="w-full py-6">
        <YearMonthNav />
      </div>

      <div className="w-full bg-gray-100 py-4 px-4 flex-1">
        <div className="flex max-w-6xl mx-auto" style={{ height: 600 }}>
          <div className="w-30p flex items-center justify-center flex-col gap-3">
            <ClosestHoliday />
          </div>
          <Calendar />
        </div>
      </div>
    </div>
  );
}
