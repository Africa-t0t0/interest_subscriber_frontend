type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ButtonProps = {
    label: string;
    size?: Size;
    buttonType?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
};

const sizeClasses: Record<Size, string> = {
    xs: 'text-xs py-1 px-2',
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-2.5 px-5',
    xl: 'text-xl py-3 px-6',
};

export default function Button({
    label,
    size = 'md',
    buttonType = 'button',
    onClick,
    className = ''
}: ButtonProps) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick();
        }
    };

    const baseClasses = 'bg-blue-500 hover:bg-blue-600 text-white font-bold rounded transition-colors duration-200';
    const sizeClass = sizeClasses[size] || sizeClasses['md'];
    const buttonClasses = `${baseClasses} ${sizeClass} ${className}`.trim();

    return (
        <button
            onClick={handleClick}
            className={buttonClasses}
            type={buttonType}
        >
            {label}
        </button>
    );
};