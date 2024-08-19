export default function WeekdayHeader() {
  return (
    <>
      <div className="flex flex-col justify-center p-2">
        <span className="uppercase font-bold text-sm sm:text-xl text-red-500">
          Sun
        </span>
      </div>
      <div className="flex flex-col justify-center p-2">
        <span className="uppercase font-bold text-sm sm:text-xl">Mon</span>
      </div>
      <div className="flex flex-col justify-center p-2">
        <span className="uppercase font-bold text-sm sm:text-xl">Tue</span>
      </div>
      <div className="flex flex-col justify-center p-2">
        <span className="uppercase font-bold text-sm sm:text-xl">Wed</span>
      </div>
      <div className="flex flex-col justify-center p-2">
        <span className="uppercase font-bold text-sm sm:text-xl">Thu</span>
      </div>
      <div className="flex flex-col justify-center p-2">
        <span className="uppercase font-bold text-sm sm:text-xl">Fri</span>
      </div>
      <div className="flex flex-col justify-center p-2">
        <span className="uppercase font-bold text-sm sm:text-xl text-blue-500">
          Sat
        </span>
      </div>
    </>
  );
}
