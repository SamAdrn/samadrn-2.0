'use client';

import { Chip, SectionContainer, Subheader } from '../../shared';

interface ExperienceItem {
    title: string;
    place: string;
    start: string;
    end: string;
    location: string;
    points: string[];
    categories: string[];
    link: string;
}

export default function ExperienceContainer() {
    const items: ExperienceItem[] = [
        {
            title: 'Software Engineer L2',
            place: 'Inovalon',
            start: 'June 2024',
            end: '',
            location: 'Bowie, MD',
            points: [
                'Leveraged Angular to design and develop a wizard-style data-entry application to streamline customer onboarding processes from multiple weeks to a few hours',
                'Developed a script to map metadata properties from Swagger documentation using schemas from various REST endpoints',
                'Created schematics that output various types of Angular pages of an internal admin tool managing enterprise customer accounts',
            ],
            categories: [
                'Angular',
                'TypeScript',
                'HTML + SCSS',
                'PrimeNG',
                'Python',
            ],
            link: 'https://www.inovalon.com/',
        },
        {
            title: 'Web Developer Intern',
            place: 'Indonesia Infrastructure Guarantee Fund (IIGF) Institute',
            start: 'June 2023',
            end: 'August 2023',
            location: 'Jakarta, IDN (Remote)',
            points: [
                'Designed and developed an executive dashboard to facilitate infrastructure project investments for Indonesian stakeholders within a notable government institution',
                'Collaborated with the Project Division to comprehend dashboard requirements, showcasing adaptability to project‑specific demands',
            ],
            categories: [
                'Next.js',
                'React',
                'Tailwind',
                'JavaScript',
                'HTML + CSS',
            ],
            link: 'https://www.ptpii.co.id/',
        },
        {
            title: 'Student Lead',
            place: 'UMD Division of IT | Terrapin Tech',
            start: 'November 2021',
            end: 'May 2024',
            location: 'College Park, MD',
            points: [
                'Assist members of the University of Maryland community in troubleshooting various software issues',
                'Mentored team members on store procedures, prioritizing their well‑being and safety in a customer‑facing role',
            ],
            categories: ['Technical Support', 'Communication', 'Leadership'],
            link: 'https://it.umd.edu/',
        },
        {
            title: "Pursuing my Bachelor's",
            place: 'University of Maryland, College Park',
            start: 'August 2021',
            end: 'May 2024',
            location: 'College Park, MD',
            points: [
                "Earned my Bachelor's of Science (A.S.) in Computer Science",
                "Part of the Dean's List: Fall 2022, Spring 2023, Fall 2023, Spring 2024",
            ],
            categories: ['Academic', 'University'],
            link: 'https://umd.edu/',
        },
        {
            title: "Pursuing my Associate's",
            place: 'Edmonds College',
            start: 'September 2019',
            end: 'June 2021',
            location: 'Lynnwood, WA',
            points: [
                "Earned my Associate's of Science (B.S.) in Computer Science",
                'Earned a High School Diploma while taking college courses',
            ],
            categories: ['Academic', 'Community College'],
            link: 'https://www.edmonds.edu/',
        },
    ];

    return (
        <SectionContainer id='experiences'>
            <Subheader text="Experiences" />

            {/* Experiences List */}
            <ul className="group/menu flex flex-col gap-y-12">
                {items.map((item, i) => (
                    <li
                        key={i}
                        className={
                            'group/item relative transition-all duration-300 ' +
                            'group-hover/menu:opacity-50 hover:!opacity-100'
                        }
                    >
                        {/* Hover Effect */}
                        <div
                            className={
                                'bg-transparent absolute lg:-inset-y-4 lg:-inset-x-6 z-0 transition-colors rounded-lg  ' +
                                'group-hover/item:shadow-sm group-hover/item:backdrop-blur-sm group-hover/item:bg-white/40 dark:group-hover/item:bg-gray-800/40'
                            }
                        ></div>

                        {/* Overlay for link */}
                        <a
                            className="bg-transparent absolute inset-0 z-10 cursor-pointer"
                            href={item.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={item.place + ' (opens in a new tab)'}
                        />

                        {/* Content */}
                        <div className="z-5 relative flex flex-col gap-3">
                            {/* Start - End | location */}
                            <div className="uppercase text-xs flex items-center gap-2 text-surface-half-light dark:text-surface-half-dark">
                                <span>{item.start}</span>
                                <span>—</span>
                                <span>
                                    {item.end === '' ? 'present' : item.end}
                                </span>
                                <span>|</span>
                                <span>{item.location}</span>
                            </div>

                            {/* Title - Place */}
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
                                    {item.place} {/* TR Arrow */}
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
                            <ul className="list-disc ps-5 lg:ps-8 pe-5 flex flex-col gap-2 text-surface-half-light dark:text-surface-half-dark">
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                            {/* Category chips */}
                            <div className="flex flex-wrap gap-2 mt-1">
                                {item.categories.map((category, i) => (
                                    <Chip key={i} text={category} />
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </SectionContainer>
    );
}
