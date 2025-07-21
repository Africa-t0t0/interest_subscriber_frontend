import { useState } from "react";

import Button from "../core/Button";
import SearchableCheckbox from "../core/SearchableCheckbox";
import { useInterests } from "@/context/InterestContext";
import { fetchWithAuth } from "@/utils/fetchWithAuth";

import { differenceById } from "@/utils/utils";

export default function UserSubscriberForm() {

    const { interests, userInterests } = useInterests();
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const handleSelectedInterestsChange = (selected: string[]) => {
        setSelectedInterests(selected);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetchWithAuth("http://localhost:3001/interests-api/user-interests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ interests: selectedInterests }),
            });
            if (!response) return;
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const cleanedSelectOptions = differenceById(interests, userInterests);
    console.log("cleaned se", cleanedSelectOptions)
    const content = (
        <form onSubmit={handleSubmit}>
            <SearchableCheckbox
                options={cleanedSelectOptions}
                onChange={handleSelectedInterestsChange}
            />
            <Button
                label="Submit"
                size="xs"
                buttonType="submit"
            />
        </form>
    );

    return content;
}