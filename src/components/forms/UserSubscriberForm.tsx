import Button from "../core/Button";
import SearchableCheckbox from "../core/SearchableCheckbox";
import { useInterests } from "@/context/InterestContext";


export default function UserSubscriberForm() {

    const { interests } = useInterests();


    const content = (
        <div>
            <SearchableCheckbox
                options={interests}
            />
            <Button
                label="Submit"
                size="small"
                buttonType="submit"
                onClick={() => console.log("Submit")}
            />
        </div>
    );

    return content;
}