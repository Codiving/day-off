import { DATE } from "@/app/data/date";
import dayjs from "dayjs";
import HolidayInfo from "./HolidayInfo";
import NoneHoliday from "./NoneHoliday";

const getClosestHoliday = () => {
  const today = dayjs();
  const year = today.year();
  const holidays = DATE[year].holiday;

  const closestHoliday = holidays
    .filter(({ date }) => dayjs(date).isAfter(today))
    .sort((a, b) => dayjs(a.date).diff(today) - dayjs(b.date).diff(today))[0];

  return closestHoliday || null;
};

export default function ClosestHoliday() {
  const holiday = getClosestHoliday();

  return <>{!!holiday ? <HolidayInfo holiday={holiday} /> : <NoneHoliday />}</>;
}

[];
