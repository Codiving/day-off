export default function WeekdayHeader() {
  return (
    <>
      <div className="flex flex-col justify-center p-4">
        <span className="uppercase font-bold text-xl text-red-500">Sun</span>
      </div>
      <div className="flex flex-col justify-center p-4">
        <span className="uppercase font-bold text-xl">Mon</span>
      </div>
      <div className="flex flex-col justify-center p-4">
        <span className="uppercase font-bold text-xl">Tue</span>
      </div>
      <div className="flex flex-col justify-center p-4">
        <span className="uppercase font-bold text-xl">Wed</span>
      </div>
      <div className="flex flex-col justify-center p-4">
        <span className="uppercase font-bold text-xl">Thu</span>
      </div>
      <div className="flex flex-col justify-center p-4">
        <span className="uppercase font-bold text-xl">Fri</span>
      </div>
      <div className="flex flex-col justify-center p-4">
        <span className="uppercase font-bold text-xl text-blue-500">Sat</span>
      </div>
    </>
  );
}
