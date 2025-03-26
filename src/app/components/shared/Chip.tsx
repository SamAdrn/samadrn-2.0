'use client'

interface ChipProps {
    text: string;
}

export default function Chip({ text }: ChipProps) {
    return (
        <div
            className={
                'rounded-md px-2 py-1 flex items-center justify-center ' +
                'bg-accent-half-light/20 dark:bg-accent-half-dark/30 ' +
                'text-xs text-accent-light dark:text-accent-dark'
            }
        >
            {text}
        </div>
    );
}
