import { DATE } from "@/app/data/date";
import useDateStore from "@/app/store/useDateStore";
import Calendar from "./Calendar";
import NonRecommandDesc from "./NonRecommandDesc";
import RecommandDesc from "./RecommandDesc";
import YearMonthNav from "./YearMonthNav";

interface HolidayCalendarProps {
  className: string;
}

export default function HolidayCalendar(props: HolidayCalendarProps) {
  const { className } = props;
  const { date } = useDateStore();
  const description = DATE[date.year()].description[date.month() + 1] || [];

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
          {!!description.length && <RecommandDesc description={description} />}
          {!description.length && <NonRecommandDesc />}
        </div>
      </div>
    </div>
  );
}
