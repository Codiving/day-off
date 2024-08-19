import { DATE } from "@/app/data/date";
import useDateStore from "@/app/store/useDateStore";

export default function DayOffAbbrev() {
  const { date } = useDateStore();
  const description = DATE[date.year()].description;

  return (
    <div className="max-w-4xl h-full mx-auto flex flex-col gap-16 justify-center items-center">
      <h3 className="text-2xl sm:text-4xl">{date.year()}년 꿀 연차 모아보기</h3>
      <div className="flex flex-col gap-6 sm:gap-12">
        {Object.entries(description).map(([month, description]) => {
          return description.map((list, index) => {
            return (
              <div key={index} className="flex flex-col gap-4 text-center">
                {list.map((desc, index) => {
                  if (index === 0) {
                    return (
                      <p
                        className="text-lg sm:text-2xl text-blue-500"
                        key={desc}
                      >
                        {desc}
                      </p>
                    );
                  }
                  return (
                    <p className="text-sm sm:text-xl" key={desc}>
                      * {desc} 연차 추천
                    </p>
                  );
                })}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
