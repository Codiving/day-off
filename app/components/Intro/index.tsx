import { getClosestHoliday } from "@/app/utils";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import ClosestHolidayCountDown from "./ClosestHolidayCountDown";
dayjs.extend(duration);

export default function Intro() {
  const holiday = getClosestHoliday();
  return (
    <div>
      <header>
        <h1 className="text-5xl">연차쓰기 좋은 날!</h1>
      </header>
      {!holiday && <p>이번년도 남은 공휴일이 없습니다.</p>}
      {holiday && <ClosestHolidayCountDown holiday={holiday} />}
    </div>
  );
}
