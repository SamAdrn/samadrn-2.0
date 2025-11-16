'use client';

interface SubheaderProps {
    text: string;
}

/** A formatted text prefixed with a horizontal line as a Subheader */
export default function Subheader({ text }: SubheaderProps) {
    return (
        <div className="flex items-center mb-7">
            <span className="hidden lg:inline h-[2px] w-6 ms-1 bg-surface-half-light/70 dark:bg-surface-half-dark"></span>
            <h2
                className={'select-none font-bold lg:ps-3 tracking-wider m-0'}
            >
                {text.toUpperCase()}
            </h2>
        </div>
    );
}
