import { create } from "zustand";
import dayjs, { Dayjs } from "dayjs";

interface DateState {
  date: Dayjs;
  setDate: (newDate: Dayjs) => void;
}

const useDateStore = create<DateState>(set => ({
  date: dayjs(),
  setDate: (newDate: dayjs.Dayjs) => set({ date: newDate })
}));

export default useDateStore;
