"use client";

import List from "@/components/List";
import UserSubscriberForm from "../forms/UserSubscriberForm";
import Calendar from "../core/Calendar";

export default function Dashboard() {

    const dashboardContent = (
        <div className="p-6 space-y-6 w-full">
            <div className="flex gap-4">
                <div className="w-1/2 bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold text-center">Subscribe to Events</h2>
                    <UserSubscriberForm />
                </div>
                <div className="w-1/2 bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold text-center">Upcoming Events</h2>
                    <Calendar />
                </div>
            </div>

            <div className="w-full bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-semibold text-center">Subscribed Interests</h2>
                <List />
            </div>
        </div>
    );

    return dashboardContent;
}