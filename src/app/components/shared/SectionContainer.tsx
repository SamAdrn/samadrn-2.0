interface SectionContainerProps {
    children: React.ReactNode;
    styleClass?: string;
}

export default function SectionContainer({
    children,
    styleClass = '',
}: SectionContainerProps) {
    return (
        <div className={'w-full pt-24 lg:pt-35 flex flex-col ' + styleClass}>
            {children}
        </div>
    );
}
