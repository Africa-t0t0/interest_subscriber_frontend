"use client";

import { createContext, useState, useEffect, useContext, Dispatch, SetStateAction, } from "react";


type Interest = {
    id: number;
    name: string;
    description: string;
  };


type InterestContextType = {
    interests: Interest[];
    setInterests: Dispatch<SetStateAction<Interest[]>>;
};

const InterestContext = createContext<InterestContextType | undefined>(undefined);


export function InterestProvider({ children }: { children: React.ReactNode}) {
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/interests-api/interests")
            .then(res => res.json())
            .then(data => setInterests(data))
            .catch(console.error);
    }, []);

    const content = (
        <InterestContext.Provider
            value={{ interests, setInterests }}
        >
            {children}
        </InterestContext.Provider>
    );

    return content;
}

export const useInterests = () => useContext(InterestContext);
