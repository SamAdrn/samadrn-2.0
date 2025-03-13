interface LinkButtonProps {
    text: string;
}

/** A button that resembles a link */
export default function LinkButton({ text }: LinkButtonProps) {
    return (
        <button className="select-none cursor-pointer inline group">
            <span
                className={
                    'inline text-lg transition-colors ' +
                    'group-hover:text-accent-light/80 group-hover:dark:text-accent-dark/80'
                }
            >
                {text}
            </span>

            {/* TR Arrow */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className={
                    'size-4 inline ms-1 mb-0.5 transition-all transform ' +
                    'group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ' +
                    'group-hover:text-accent-light/80 group-hover:dark:text-accent-dark/80'
                }
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
            </svg>
        </button>
    );
}
