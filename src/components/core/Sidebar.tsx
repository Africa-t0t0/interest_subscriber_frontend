"use client";

import Link from "next/link";

export default function Sidebar() {
    const navbarContent = (
        <aside className="bg-black text-white w-60 min-h-screen p-4 space-y-4">
            <h2 className="text-2xl font-bold mb-6">Interest</h2>
            <nav className="flex flex-col space-y-2">
                <Link href="/dashboard">Dashboard</Link>
            </nav>
        </aside>
    );

    return navbarContent;
};