"use client";
import dayjs from "dayjs";
import React, { useEffect, useRef, useState } from "react";
import Calendar from "./components/Calendar";
import Header from "./components/Header";

export default function Home() {
  const [date, setDate] = useState(dayjs());

  const containerRef = useRef<HTMLDivElement | null>(null);

  const onChangeYear = (newDate: dayjs.Dayjs) => {
    setDate(newDate);
  };

  const onChangeMonth = (newDate: dayjs.Dayjs) => {
    setDate(newDate);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll<HTMLDivElement>(".item");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
          }
        });
      },
      {
        root: container,
        rootMargin: "0px",
        threshold: 0.5
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div id="scroll-container" ref={containerRef}>
      <main className="item flex flex-col w-full gap-6">
        <section className="w-full flex gap-4 flex-1">
          <Calendar
            className="w-full mx-auto flex-1"
            year={date.year()}
            month={date.month() + 1}
            onChangeYear={onChangeYear}
            onChangeMonth={onChangeMonth}
          />
        </section>
      </main>
      <section className="item bg-slate-300">1</section>
      <section className="item bg-red-300">2</section>
      <section className="item bg-yellow-300">3</section>
    </div>
  );
}
