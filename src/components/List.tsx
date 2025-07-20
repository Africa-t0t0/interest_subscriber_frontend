"use client";
import { useInterests } from "@/context/InterestContext";
import { useEvents } from "@/context/EventContext";

// Helper function to format date
const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function List() {

  const { interests } = useInterests();
  const { events } = useEvents();

  console.log("events", events);

  const listContent = (
    <div className="m2 space-y-2">
      {interests.map((interest: any, index: number) => (

        <div
          key={index}
          className="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
          tabIndex={1}
        >
          <div className="flex cursor-pointer items-center justify-between">
            <span>{interest.name}</span>
            <span>{interest.icon}</span>
          </div>
          <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            {events.filter((event: any) => event.interests.includes(interest._id)).map((event: any, index: number) => (
              <div key={index}>
                <h3>{event.title}</h3>
                <p>{event.description}: {formatDate(event.startDateRange)} - {formatDate(event.endDateRange)}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return listContent;

};