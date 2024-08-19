"use client";
import { useEffect, useRef } from "react";
import DayOffAbbrev from "./components/DayOffAbbrev";
import HolidayCalendar from "./components/HolidayCalendar";
import Intro from "./components/Intro";
import HolidayAbbrev from "./components/HolidayAbbrev";

import "dayjs/locale/ko";
import dayjs from "dayjs";
dayjs.locale("ko");
export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

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
      <section className="item">
        <Intro />
      </section>
      <main className="item flex flex-col w-full gap-6">
        <section className="w-full flex gap-4 flex-1">
          <HolidayCalendar className="w-full mx-auto flex-1" />
        </section>
      </main>
      <section className="item">
        <DayOffAbbrev />
      </section>
      <section className="item">
        <HolidayAbbrev />
      </section>
    </div>
  );
}
