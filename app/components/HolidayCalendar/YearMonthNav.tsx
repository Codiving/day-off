import useDateStore from "@/app/store/useDateStore";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function YearMonthNav() {
  const { date, setDate } = useDateStore();

  return (
    <div className="max-w-4xl mx-auto flex items-center gap-4 select-none px-4">
      <div className="flex flex-col items-center gap-1">
        <IoIosArrowUp
          onClick={() => {
            setDate(date.add(1, "year"));
          }}
          size={20}
          className={`${
            date.year() >= 2025 ? "invisible" : "cursor-pointer"
          } text-slate-500 hover:text-slate-700 hover:scale-110 transition-transform duration-300`}
        />
        <span className="text-lg sm:text-3xl">{date.format("YYYY년")}</span>
        <IoIosArrowDown
          onClick={() => {
            setDate(date.subtract(1, "year"));
          }}
          size={20}
          className={`
            ${date.year() <= 2024 ? "invisible" : "cursor-pointer"}
            mt-2 cursor-pointer text-slate-500 hover:text-slate-700 hover:scale-110 transition-transform duration-300`}
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <IoIosArrowUp
          onClick={() => {
            setDate(date.add(1, "month"));
          }}
          size={20}
          className={`${
            date.year() >= 2025 && date.month() + 1 === 12
              ? "invisible"
              : "cursor-pointer"
          } cursor-pointer text-slate-500 hover:text-slate-700 hover:scale-110 transition-transform duration-300`}
        />
        <span className="text-lg sm:text-3xl">{date.format("MM월")}</span>
        <IoIosArrowDown
          onClick={() => {
            setDate(date.subtract(1, "month"));
          }}
          size={20}
          className={`
            ${
              date.year() <= 2024 && date.month() + 1 === 1
                ? "invisible"
                : "cursor-pointer"
            }
            mt-2 cursor-pointer text-slate-500 hover:text-slate-700 hover:scale-110 transition-transform duration-300`}
        />
      </div>
      <p className="mb-2 text-lg sm:text-3xl">연차쓰기 좋은 날은?</p>
    </div>
  );
}
