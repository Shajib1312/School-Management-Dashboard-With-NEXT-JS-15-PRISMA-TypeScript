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

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-iconAccent text-xl font-semibold mt-1">
          Announcements
        </h2>
        <span className="text-sm hover:text-iconSecondary transition-transform duration-300 ease-in-out hover:rotate-12 cursor-pointer  font-semibold text-iconPrimary/60">
          view all
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        {schoolEvents.map((event) => (
          <div
            key={event.id}
            className="even:bg-paragraph odd:bg-iconPrimary p-4 rounded-md shadow-md mt-1  "
          >
            <h3 className="text-lg text-iconSecondary font-semibold">
              {event.title}
            </h3>
            <p className="text-sm text-iconAccent">{event.description}</p>
            <div className="flex justify-between items-center pt-2 ">
              <p className="text-xs odd:bg-paragraph even:bg-iconPrimary rounded-md text-iconPrimary/40 p-2">
                {new Date(event.time).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
