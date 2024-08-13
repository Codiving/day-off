"use client";
import { useState } from "react";
import Calendar from "./components/Calendar";

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (offset: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  return (
    <div>
      <section className="">연차쓰기 좋은 날</section>
      <main className="bg-gray-100">
        <section className="flex max-w-6xl mx-auto p-4">
          <div className="flex-1">구현 중</div>
          <Calendar
            className="w-3/4"
            year={currentDate.getFullYear()}
            month={currentDate.getMonth() + 1}
          />
        </section>
      </main>
    </div>
  );
}
