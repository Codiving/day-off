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
        <div className="flex flex-col max-w-4xl mx-auto gap-6">
          <div className="flex" style={{ height: 500 }}>
            <Calendar />
          </div>
          <div className="px-4">
            <p className="text-xl">8월 15일(목) - 8월 18일(일) / 4일 휴가</p>
            <p className="text-xl">* 16일 연차 추천</p>
          </div>
        </div>
      </div>
    </div>
  );
}
