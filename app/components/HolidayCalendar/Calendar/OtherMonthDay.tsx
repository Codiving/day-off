interface OtherMonthDayProps {
  day: number;
}

export default function OtherMonthDay(props: OtherMonthDayProps) {
  const { day } = props;
  return (
    <div className="justify-center items-center relative p-4 text-2xl flex flex-col gap-2">
      <span className={`text-gray-400`}>{String(day).padStart(2, "0")}</span>
    </div>
  );
}
