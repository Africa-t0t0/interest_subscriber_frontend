import { getInteresectionOfArrays } from "@/utils/utils";
import { useEffect, useState } from "react";

type Option = {
    _id: string;
    name: string;
};

type SearchableCheckboxProps = {
    options: Option[];
    onChange?: (selected: string[]) => void;
    defaultSelected?: string[];
};

export default function SearchableCheckbox({
    options,
    onChange,
    defaultSelected = [],
}: SearchableCheckboxProps) {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState<string[]>(defaultSelected ?? []);

    let filteredOptions: Option[] = options;

    if (options.length > 0 && search !== "") {
        filteredOptions = options.filter((opt) =>
            opt?.name?.toLowerCase()?.includes(search.toLowerCase())
        );
    }

    const toggleSelect = (id: string) => {
        const updated = selected.includes(id)
            ? selected.filter((item) => item !== id)
            : [...selected, id];

        setSelected(updated);
        onChange?.(updated);
    };

    console.log("selected", selected)
    useEffect(() => {
        if (selected.length === 0 && (defaultSelected?.length ?? 0) > 0) {
            setSelected(defaultSelected ?? []);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultSelected]);

    return (
        <div className="w-full max-w-md space-y-4 p-4 bg-white rounded-lg shadow">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
            />

            <div className="mt-2 max-h-48 overflow-y-auto space-y-1 border rounded p-2">
                {filteredOptions.length === 0 ? (
                    <div className="text-gray-500 text-sm">No results</div>
                ) : (
                    filteredOptions.map((option) => (
                        <label key={option._id} className="flex items-center gap-2 text-sm">
                            <input
                                type="checkbox"
                                checked={selected.includes(option._id)}
                                onChange={() => toggleSelect(option._id)}
                            />
                            {option.name}
                        </label>
                    ))
                )}
            </div>
        </div>
    );
}
