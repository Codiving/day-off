import { DAY_OFF_2024 } from "./2024/dayOff";
import { DESCRIPTION_2024 } from "./2024/description";
import { HOLIDAY_2024 } from "./2024/holiday";

export type Description = {
  [key in number]: string[][];
};

type IDate = {
  [key in number]: {
    holiday: Holiday[];
    dayOff: number[];
    description: Description;
  };
};

export const DATE: IDate = {
  2024: {
    holiday: HOLIDAY_2024,
    dayOff: DAY_OFF_2024,
    description: DESCRIPTION_2024
  }
};
