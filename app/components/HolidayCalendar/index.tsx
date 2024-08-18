import useDateStore from "@/app/store/useDateStore";
import Calendar from "./Calendar";
import ClosestHoliday from "./ClosestHoliday";
import YearMonthNav from "./YearMonthNav";

interface HolidayCalendarProps {
  className: string;
}

export default function HolidayCalendar(props: HolidayCalendarProps) {
  const { className } = props;
  const { date } = useDateStore();

  return (
    <div className={`${className} flex flex-col`}>
      <div className="w-full py-6">
        <YearMonthNav />
      </div>

      <div className="w-full bg-gray-100 py-4 px-4 flex-1">
        <div className="flex flex-col max-w-6xl mx-auto">
          <div className="flex" style={{ height: 600 }}>
            <div className="w-30p flex items-center justify-center flex-col gap-3">
              <ClosestHoliday />
            </div>
            <Calendar />
          </div>
          <div>
            {date.format("YYYY년 MM월")}에 연차쓰기 좋은 날은 16일입니다.
          </div>
        </div>
      </div>
    </div>
  );
}
