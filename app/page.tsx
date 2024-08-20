"use client";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { useEffect, useRef } from "react";
import DayOffAbbrev from "./components/DayOffAbbrev";
import HolidayAbbrev from "./components/HolidayAbbrev";
import HolidayCalendar from "./components/HolidayCalendar";
import Intro from "./components/Intro";
dayjs.locale("ko");

export const metadata = {
  title: "연차쓰기 좋은 날",
  description:
    "연차 사용을 고민하는 직장인들에게 최적의 날짜를 추천해주는 사이트!",
  authors: [{ name: "Codiving", url: "https://www.dayoff.codiving.kr" }],
  creator: "Codiving",
  keywords: ["연차쓰기 좋은 날", "휴가쓰기 좋은 날", "연차", "휴가"],
  openGraph: {
    title: "연차쓰기 좋은 날",
    description:
      "연차 사용을 고민하는 직장인들에게 최적의 날짜를 추천해주는 사이트!",
    url: "https://www.dayoff.codiving.kr",
    siteName: "연차쓰기 좋은 날",
    images: [{ url: "https://www.dayoff.codiving.kr/thumb.png" }],
    locale: "ko_KR",
    type: "website"
  }
};

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
