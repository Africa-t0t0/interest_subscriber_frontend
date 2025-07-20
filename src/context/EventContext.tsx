"use client";

import { createContext, useState, useEffect, useContext, Dispatch, SetStateAction } from "react";

interface IEvent {
    id: string;
    title: string;
    description?: string;
    creationDate: Date;
    startDateRange: Date;
    endDateRange: Date;
    location?: string;
    tags?: string[];
    status: "pending" | "active" | "completed" | "cancelled";
    interests: string[];
}

interface EventContextType {
    events: IEvent[];
    setEvents: Dispatch<SetStateAction<IEvent[]>>;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: React.ReactNode }) {
    const [events, setEvents] = useState<IEvent[]>([]);

    useEffect(() => {
        fetch("http://localhost:3001/events-api/events")
            .then(res => res.json())
            .then(data => setEvents(data))
            .catch(console.error);
    }, []);

    const content = (
        <EventContext.Provider
            value={{ events, setEvents }}
        >
            {children}
        </EventContext.Provider>
    );

    return content;
}

export const useEvents = () => useContext(EventContext);