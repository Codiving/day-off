import { DATE } from "@/app/data/date";
import dayjs from "dayjs";
import HolidayInfo from "./HolidayInfo";
import NoneHoliday from "./NoneHoliday";

const getClosestHoliday = () => {
  const today = dayjs();
  const year = today.year();
  const holidays = DATE[year].holiday;

  // 오늘 이후의 공휴일 필터링 및 가장 가까운 공휴일 찾기
  const closestHoliday = holidays
    .filter(({ date }) => dayjs(date).isAfter(today))
    .sort((a, b) => dayjs(a.date).diff(today) - dayjs(b.date).diff(today))[0];

  return closestHoliday || null;
};

export default function ClosestHoliday() {
  const holiday = getClosestHoliday();

  return (
    <div className="w-30p flex items-center justify-center flex-col gap-3">
      {!!holiday ? <HolidayInfo holiday={holiday} /> : <NoneHoliday />}
    </div>
  );
}
