import { useState } from "react";

import Button from "../core/Button";
import SearchableCheckbox from "../core/SearchableCheckbox";
import { useInterests } from "@/context/InterestContext";
import { fetchWithAuth } from "@/utils/fetchWithAuth";


export default function UserSubscriberForm() {

    const { interests, userInterests, setUserInterests } = useInterests();
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const handleSelectedInterestsChange = (selected: string[]) => {
        setSelectedInterests(selected);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            let method = "PATCH";
            if (userInterests.length === 0) {
                method = "POST";
            }
            const response = await fetchWithAuth("http://localhost:3001/interests-api/user-interests", {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ interests: selectedInterests }),
            });

            if (!response) return;
            const data = await response.json();

            setUserInterests(data);
        } catch (error) {
            console.error(error);
        }
    };

    const cleanedUserInterests = userInterests?.length ? userInterests.map((i: any) => i._id) : [];

    const content = (
        <form onSubmit={handleSubmit}>
            <SearchableCheckbox
                options={interests}
                defaultSelected={cleanedUserInterests}
                onChange={handleSelectedInterestsChange}
            />
            <div className="flex justify-center pt-2">
                <Button
                    label="Submit"
                    size="xs"
                    buttonType="submit"
                />
            </div>
        </form>
    );

    return content;
}