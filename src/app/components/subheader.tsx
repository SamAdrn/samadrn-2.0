interface SubheaderProps {
    text: string;
}

export default function Subheader({ text }: SubheaderProps) {
    return (
        <div className="select-none border-1 rounded-md font-mono font-bold text-xl px-4 py-1">
            {text.toUpperCase()}
        </div>
    );
}
