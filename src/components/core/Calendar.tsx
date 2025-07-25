import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEvents } from "@/context/EventContext";
import { useInterests } from "@/context/InterestContext";



export default function Calendar({ }) {
  const { events } = useEvents();
  const { userInterests } = useInterests();
  const crossUserInterestsEvents = events.filter((event: any) => userInterests.some((interest: any) => event.interests.includes(interest._id)));

  const eventsToCalendar = crossUserInterestsEvents.map((event: any) => ({
    title: event.title,
    start: event.startDateRange,
    end: event.endDateRange
  }));



  return (
<div className="p-4 rounded-2xl shadow-md bg-white border border-gray-200">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={eventsToCalendar}

        headerToolbar={{
          start: "prev,next today",
          center: "title",
          end: "dayGridMonth,dayGridWeek",
        }}
      />
    </div>
  );
}
