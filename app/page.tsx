"use client";
import dayjs from "dayjs";
import React, { useEffect, useRef, useState } from "react";
import Calendar from "./components/Calendar";
import Header from "./components/Header";

export default function Home() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const containerRef = useRef<HTMLDivElement | null>(null);

  const changeMonth = (offset: number) => {
    const newDate = currentDate.add(offset, "month");
    setCurrentDate(newDate);
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
      <main className="relative item flex flex-col w-full">
        <div className="absolute top-0 w-full">
          <Header />
        </div>
        <section className="w-full flex gap-4">
          <Calendar
            className="w-full mx-auto"
            year={currentDate.year()}
            month={currentDate.month() + 1}
          />
        </section>
      </main>
      <section className="item bg-slate-300">1</section>
      <section className="item bg-red-300">2</section>
      <section className="item bg-yellow-300">3</section>
    </div>
  );
}
