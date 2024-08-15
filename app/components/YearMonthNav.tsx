import dayjs from "dayjs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface YearMonthNavProps {
  date: dayjs.Dayjs;
  onChangeYear: (year: dayjs.Dayjs) => void;
  onChangeMonth: (month: dayjs.Dayjs) => void;
}

export default function YearMonthNav(props: YearMonthNavProps) {
  const { date, onChangeYear, onChangeMonth } = props;

  return (
    <div className="max-w-6xl mx-auto flex items-center gap-4 select-none">
      <div className="flex flex-col items-center gap-1">
        <IoIosArrowUp
          onClick={() => {
            onChangeYear(date.add(1, "year"));
          }}
          size={20}
          className="cursor-pointer text-slate-500 hover:text-slate-700 hover:scale-110 transition-transform duration-300"
        />
        <span className="text-3xl">{date.format("YYYY년")}</span>
        <IoIosArrowDown
          onClick={() => {
            onChangeYear(date.subtract(1, "year"));
          }}
          size={20}
          className="mt-2 cursor-pointer text-slate-500 hover:text-slate-700 hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <IoIosArrowUp
          onClick={() => {
            onChangeMonth(date.add(1, "month"));
          }}
          size={20}
          className="cursor-pointer text-slate-500 hover:text-slate-700 hover:scale-110 transition-transform duration-300"
        />
        <span className="text-3xl">{date.format("MM월")}</span>
        <IoIosArrowDown
          onClick={() => {
            onChangeMonth(date.subtract(1, "month"));
          }}
          size={20}
          className="mt-2 cursor-pointer text-slate-500 hover:text-slate-700 hover:scale-110 transition-transform duration-300"
        />
      </div>
      <p className="mb-2">연차쓰기 좋은 날은?</p>
    </div>
  );
}
