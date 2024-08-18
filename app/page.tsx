"use client";
import { useEffect, useRef } from "react";
import HolidayCalendar from "./components/HolidayCalendar";

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
      <main className="item flex flex-col w-full gap-6">
        <section className="w-full flex gap-4 flex-1">
          <HolidayCalendar className="w-full mx-auto flex-1" />
        </section>
      </main>
      <section className="item bg-slate-300">1</section>
      <section className="item bg-red-300">2</section>
      <section className="item bg-yellow-300">3</section>
    </div>
  );
}
