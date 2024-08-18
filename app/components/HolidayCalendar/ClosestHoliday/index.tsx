import { getClosestHoliday } from "@/app/utils";
import HolidayInfo from "./HolidayInfo";
import NoneHoliday from "./NoneHoliday";

export default function ClosestHoliday() {
  const holiday = getClosestHoliday();

  return <>{!!holiday ? <HolidayInfo holiday={holiday} /> : <NoneHoliday />}</>;
}
