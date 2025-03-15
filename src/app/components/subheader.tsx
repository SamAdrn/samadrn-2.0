interface SubheaderProps {
    text: string;
}

/** A bordered pill-shaped container for subheader text */
export default function Subheader({ text }: SubheaderProps) {
    return (
        <div className="flex items-center">
            <span className="hidden lg:inline h-[1px] w-6 ms-1 bg-surface-half-light/70 dark:bg-surface-half-dark"></span>
            <span
                className={
                    'select-none font-bold text-xl ps-3 tracking-tight '
                    // 'underline decoration-[0.3rem] underline-offset-8 decoration-amber-600/50 dark:decoration-sky-600/50'
                }
            >
                {text.toUpperCase()}
            </span>
        </div>
    );
}
