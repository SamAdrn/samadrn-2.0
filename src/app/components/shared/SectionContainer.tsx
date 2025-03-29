'use client';

interface SectionContainerProps {
    children: React.ReactNode;
    id: string;
    styleClass?: string;
}

/** Creates a section within the page */
export default function SectionContainer({
    children,
    id,
    styleClass = '',
}: SectionContainerProps) {
    return (
        <section
            id={id}
            className={'w-full pt-24 lg:pt-35 flex flex-col ' + styleClass}
        >
            {children}
        </section>
    );
}
