"use client";
import dayjs from "dayjs";
import { useState } from "react";
import Calendar from "./components/Calendar";
import Header from "./components/Header";

export default function Home() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const changeMonth = (offset: number) => {
    const newDate = currentDate.add(offset, "month");
    setCurrentDate(newDate);
  };

  console.log("currentDate.month() : ", currentDate.month());

  return (
    <>
      <Header />
      <main className="bg-gray-100">
        <section className="flex gap-4 max-w-6xl mx-auto px-4 py-8">
          {/* <div className="flex-1">
            <p>{MONTH_DESCRIPTION[currentDate.month()].description}</p>
          </div> */}
          <div className="flex-1 flex justify-between items-center mb-4">
            <h2 className="pl-8 text-3xl font-bold mb-7">
              {currentDate.format("YYYY년 MM월")}
            </h2>
          </div>
          <Calendar
            className="w-3/4"
            year={currentDate.year()}
            month={currentDate.month() + 1}
          />
        </section>
      </main>
    </>
  );
}
