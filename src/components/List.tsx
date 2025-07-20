"use client";
import { useInterests } from "@/context/InterestContext";
import { useEvents } from "@/context/EventContext";

import Table from "./core/Table";


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

            <Table
              columnsHeaders={[
                "Event",
                "Description",
                "Start Date",
                "End Date"
              ]}
              columnsNames={[
                "title",
                "description",
                "startDateRange",
                "endDateRange"
              ]}
              jsonArray={events.filter((event: any) => event.interests.includes(interest._id))}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return listContent;

};