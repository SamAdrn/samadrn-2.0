'use client';

interface SubheaderProps {
    text: string;
}

/** A bordered pill-shaped container for subheader text */
export default function Subheader({ text }: SubheaderProps) {
    return (
        <div className="flex items-center mb-7">
            <span className="hidden lg:inline h-[2px] w-6 ms-1 bg-surface-half-light/70 dark:bg-surface-half-dark"></span>
            <span
                className={'select-none font-bold lg:ps-3 tracking-wider'}
            >
                {text.toUpperCase()}
            </span>
        </div>
    );
}
