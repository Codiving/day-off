import dayjs from "dayjs";
import Image from "next/image";

interface HolidayInfoProps {
  holiday: Holiday;
}

export default function HolidayInfo(props: HolidayInfoProps) {
  const {
    holiday: { name, description, date }
  } = props;

  return (
    <>
      <p className="text-xl">가까운 공휴일</p>
      <p className="text-3xl">
        {dayjs(date).format("MM월 DD일")} - {name}
      </p>
      <p className="text-xl text-slate-500">{description}</p>
      <div className="w-72 h-72 rounded-full overflow-hidden flex items-center justify-center relative">
        <Image src="/koreanFlag.jpg" alt="태극기" fill sizes="auto" priority />
      </div>
    </>
  );
}
