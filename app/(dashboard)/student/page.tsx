import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";

export default function StudentPage() {
  return (
    <div className="p-4 flex flex-col xl:flex-row  gap-4">
      {/* left  */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h2 className="text-cardHeading text-2xl font-bold">Schedule (4A)</h2>
          <BigCalendar />
        </div>
      </div>
      {/* right  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
}
