import { DAY_OFF_2024 } from "./2024/dayOff";
import { HOLIDAY_2024 } from "./2024/holiday";

type IDate = {
  [key in number]: {
    holiday: Holiday[];
    dayOff: number[];
  };
};

export const DATE: IDate = {
  2024: {
    holiday: HOLIDAY_2024,
    dayOff: DAY_OFF_2024
  }
};
