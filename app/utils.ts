import dayjs from "dayjs";
import { DATE } from "./data/date";

export const getClosestHoliday = () => {
  const today = dayjs();
  const year = today.year();
  const holidays = DATE[year].holiday;

  const closestHoliday = holidays
    .filter(({ date }) => dayjs(date).isAfter(today))
    .sort((a, b) => dayjs(a.date).diff(today) - dayjs(b.date).diff(today))[0];

  return closestHoliday || null;
};
