"use client";

import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
    const navbarContent = (
        <aside className="bg-black text-white w-60 min-h-screen p-4 space-y-4">
            <div className="mb-6 flex justify-center">
                <Image
                    src="/icon_white.png"
                    alt="Interest Logo"
                    width={100}
                    height={30}
                    className="object-contain"
                />
            </div>
            <nav className="flex flex-col space-y-2">
                <li
                    className="flex justify-center items-center"
                >
                    <span className="text-white hover:text-gray-300 cursor-pointer">
                        <Link href="/dashboard">Dashboard</Link>
                    </span>
                </li>
            </nav>
        </aside>
    );

    return navbarContent;
};