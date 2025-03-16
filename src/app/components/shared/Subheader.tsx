interface SubheaderProps {
    text: string;
}

/** A bordered pill-shaped container for subheader text */
export default function Subheader({ text }: SubheaderProps) {
    return (
        <div className="flex items-center">
            <span className="hidden lg:inline h-[2px] w-6 ms-1 bg-surface-half-light/70 dark:bg-surface-half-dark"></span>
            <span
                className={'select-none font-bold text-xl ps-3 tracking-tight'}
            >
                {text.toUpperCase()}
            </span>
        </div>
    );
}
