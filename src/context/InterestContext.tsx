"use client";

import { createContext, useState, useEffect, useContext, Dispatch, SetStateAction, } from "react";
import { fetchWithAuth } from "@/utils/fetchWithAuth";

type Interest = {
    id: number;
    name: string;
    description: string;
};


type InterestContextType = {
    interests: Interest[];
    setInterests: Dispatch<SetStateAction<Interest[]>>;
    userInterests: Interest[];
    setUserInterests: Dispatch<SetStateAction<Interest[]>>;
};

const InterestContext = createContext<InterestContextType | undefined>(undefined);


export function InterestProvider({ children }: { children: React.ReactNode }) {
    const [interests, setInterests] = useState([]);
    const [userInterests, setUserInterests] = useState([]);

    useEffect(() => {
        const fetchAllData = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                return;
            }

            const response = await fetchWithAuth("http://localhost:3001/interests-api/interests");
            if (!response) return;

            try {
                const data = await response.json();
                setInterests(data);
            } catch (error) {
                console.error("Error parsing JSON", error);
            }
        };

        const fetchUserData = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                return;
            }

            const response = await fetchWithAuth("http://localhost:3001/interests-api/user-interests");
            if (!response) return;
            console.log("data", response);

            try {
                const data = await response.json();
                setUserInterests(data);
            } catch (error) {
                console.error("Error parsing JSON", error);
            }
        };
        console.log("user interess", userInterests)
        fetchAllData();
        fetchUserData();
    }, []);

    const content = (
        <InterestContext.Provider
            value={{ interests, setInterests, userInterests, setUserInterests }}
        >
            {children}
        </InterestContext.Provider>
    );

    return content;
}

export const useInterests = () => useContext(InterestContext);
