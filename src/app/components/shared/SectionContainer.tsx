interface SectionContainerProps {
    children: React.ReactNode;
    styleClass?: string;
}

export default function SectionContainer({
    children,
    styleClass = '',
}: SectionContainerProps) {
    return (
        <div
            className={
                'w-full pt-24 flex flex-col lg:pt-0 lg:h-screen lg:justify-center ' +
                styleClass
            }
        >
            {children}
        </div>
    );
}
