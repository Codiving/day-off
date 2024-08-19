"use client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface ClosestHolidayCountDownProps {
  holiday: Holiday;
}

export default function ClosestHolidayCountDown(
  props: ClosestHolidayCountDownProps
) {
  const {
    holiday: { date, name }
  } = props;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = dayjs();
      const holiday = dayjs(date);
      const diff = holiday.diff(now);
      const remainingTime = dayjs.duration(diff);

      setTimeLeft({
        days: remainingTime.days() + 1,
        hours: remainingTime.hours(),
        minutes: remainingTime.minutes(),
        seconds: remainingTime.seconds()
      });
    };

    calculateTimeLeft();
    const intervalId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-4">
      <h2 className="text-center mb-4">
        <span className="text-5xl text-green-700">{name}</span>까지 남은 시간
      </h2>
      <div className="grid grid-flow-col gap-5 text-center grid-cols-4">
        <div className="flex flex-col gap-4 p-5 bg-gray-300 rounded-xl">
          <span className="text-sm sm:text-4xl">
            {isSmallScreen ? "일" : "Days"}
          </span>
          <span className="text-2xl sm:text-5xl">{timeLeft.days}</span>
        </div>
        <div className="flex flex-col gap-4 p-5 bg-gray-300 rounded-xl">
          <span className="text-sm sm:text-4xl">
            {isSmallScreen ? "시" : "Hours"}
          </span>
          <span className="text-2xl sm:text-5xl">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-col gap-4 p-5 bg-gray-300 rounded-xl">
          <span className="text-sm sm:text-4xl">
            {isSmallScreen ? "분" : "Min"}
          </span>
          <span className="text-2xl sm:text-5xl">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-col gap-4 p-5 bg-gray-300 rounded-xl">
          <span className="text-sm sm:text-4xl">
            {isSmallScreen ? "초" : "Sec"}
          </span>
          <span className="text-2xl sm:text-5xl">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
