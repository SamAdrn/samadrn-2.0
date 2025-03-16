'use client';

import { SectionContainer, Subheader } from '../../shared';

interface ExperienceItem {
    title: string;
    location: string;
    points: string[];
    start: string;
    end: string;
}

export default function ExperienceContainer() {
    const items: ExperienceItem[] = [
        {
            title: "Pursuing my Bachelor's",
            location: 'University of Maryland, College Park',
            points: [
                "Earned my Bachelor's of Science (A.S.) in Computer Science",
                "Part of the Dean's List: Fall 2022, Spring 2023, Fall 2023, Spring 2024",
                'Explored a variety of coursework, including: Web Development, iOS Development, Database Design, Advanced Data Structures, Algorithms, Computer & Network Security, Compilers',
            ],
            start: 'August 2021',
            end: '',
        },
        {
            title: "Pursuing my Associate's",
            location: 'Edmonds College',
            points: [
                "Earned my Associate's of Science (B.S.) in Computer Science",
                'Earned a High School Diploma while taking college courses',
                'Actively participated in Cultural Organizations to help manage events around campus',
                'Successfully overcame COVID-19',
            ],
            start: 'September 2019',
            end: 'June 2021',
        },
    ];

    return (
        <SectionContainer>
            <Subheader text="Experiences" />

            {/* Experiences List */}
            <ul className="group/menu mt-7 flex flex-col gap-y-10">
                {items.map((item, i) => (
                    <li
                        key={i}
                        className={
                            'group/item relative cursor-pointer transition-all duration-300 ' +
                            'group-hover/menu:shadow-sm group-hover/menu:opacity-50 hover:!opacity-100'
                        }
                    >
                        {/* Hover Effect */}
                        <div
                            className={
                                'bg-transparent absolute lg:-inset-y-4 lg:-inset-x-6 z-0 transition-colors rounded-lg  ' +
                                'group-hover/item:backdrop-blur-sm group-hover/item:bg-white/40 dark:group-hover/item:bg-gray-800/40'
                            }
                        ></div>

                        {/* Content */}
                        <div className="z-10 relative">
                            {/* Start - End */}
                            <div className="mb-2 uppercase text-xs flex items-center gap-2 text-surface-half-light dark:text-surface-half-dark">
                                <span>{item.start}</span>
                                <span>—</span>
                                <span>
                                    {item.end === '' ? 'present' : item.end}
                                </span>
                            </div>

                            {/* Title - Location */}
                            <div
                                className={
                                    'text-surface-light dark:text-surface-dark ' +
                                    'group-hover/item:text-accent-light dark:group-hover/item:text-accent-dark ' +
                                    'text-lg font-medium flex flex-wrap gap-x-2 items-center'
                                }
                            >
                                <span>{item.title}</span>
                                <span>—</span>
                                <span>
                                    {item.location} {/* TR Arrow */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.7}
                                        stroke="currentColor"
                                        className={
                                            'size-4 inline transition-all transform ' +
                                            'group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 ' +
                                            'group-hover/item:text-accent-light/80 group-hover/item:dark:text-accent-dark/80'
                                        }
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                        />
                                    </svg>
                                </span>
                            </div>

                            {/* Bullet List of Points */}
                            <ul className="list-disc ps-8 pe-5 mt-2 flex flex-col gap-2 text-justify text-surface-half-light dark:text-surface-half-dark">
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </SectionContainer>
    );
}
