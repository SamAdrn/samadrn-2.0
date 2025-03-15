interface SubheaderProps {
    text: string;
}

/** A bordered pill-shaped container for subheader text */
export default function Subheader({ text }: SubheaderProps) {
    return (
        <span
            className={
                'select-none font-bold text-2xl px-4 py-1 ' +
                'underline decoration-[0.3rem] underline-offset-8 decoration-amber-600/50 dark:decoration-sky-600/50'
            }
        >
            {text.toUpperCase()}
        </span>
    );
}
