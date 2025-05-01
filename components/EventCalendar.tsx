"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface SchoolEvent {
  id: number;
  time: string; // ISO format date-time string
  title: string;
  description: string;
}
// Sample data for school events

const schoolEvents: SchoolEvent[] = [
  {
    id: 1,
    time: "2025-04-25T08:00:00",
    title: "Staff Meeting",
    description:
      "Monthly staff meeting to discuss curriculum updates and upcoming events.",
  },
  {
    id: 2,
    time: "2025-04-26T09:30:00",
    title: "Parent-Teacher Conference",
    description:
      "Spring semester parent-teacher conferences for grade 10 students.",
  },
  {
    id: 3,
    time: "2025-04-27T12:00:00",
    title: "Science Fair",
    description:
      "Annual science fair showcasing student projects from grades 6-8 in the gymnasium.",
  },
  {
    id: 4,
    time: "2025-04-28T15:30:00",
    title: "Basketball Tournament",
    description:
      "Inter-school basketball tournament finals. Our school vs. Lincoln High.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="p-4 bg-white text-iconPrimary rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h2 className="text-iconAccent text-xl font-semibold mt-4">Events</h2>
        <Image
          src="/moreDark.png"
          alt="more"
          width={20}
          height={20}
          className="cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-12"
        />
      </div>
      <div className="flex gap-4 flex-col">
        {schoolEvents.map((event) => (
          <div
            key={event.id}
            className="bg-gray-100 p-4 rounded-md shadow-md mt-1  "
          >
            <h3 className="text-lg text-iconSecondary font-semibold">
              {event.title}
            </h3>
            <p className="text-sm text-iconAccent">{event.description}</p>
            <div className="flex justify-between items-center pt-1">
              <p className="text-xs rounded-md text-iconPrimary/40 bg-paragraph p-2">
                {new Date(event.time).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
