import { getClosestHoliday } from "@/app/utils";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import ClosestHolidayCountDown from "./ClosestHolidayCountDown";
dayjs.extend(duration);

export default function Intro() {
  const holiday = getClosestHoliday();
  return (
    <div className="relative flex flex-col gap-20 items-center">
      <header>
        <h1 className="text-5xl">연차쓰기 좋은 날!</h1>
      </header>
      <div className="text-center flex flex-col gap-8">
        <div className="flex flex-col text-center">
          <p>
            힘든 일상을 보내는 직장인들을 위해, 연차를 잘 활용할 수 있는 날들을
            추천드립니다.
          </p>
          <p>효율적으로 연차를 계획하여 행복한 휴가를 즐기시길 바랍니다.</p>
        </div>
      </div>
      {!holiday && <p>이번년도 남은 공휴일이 없습니다.</p>}
      {holiday && <ClosestHolidayCountDown holiday={holiday} />}
    </div>
  );
}
