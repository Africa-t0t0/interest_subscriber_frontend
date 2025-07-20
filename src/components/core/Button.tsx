type ButtonProps = {
    label: string;
    size: string;
    buttonType: "button" | "submit" | "reset";
    onClick?: () => void;
};

export default function Button({ label, size, buttonType="button", onClick }: ButtonProps) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={size === "small" ? "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" : "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"}
            type={buttonType}
        >
            {label}
        </button>
    );
};