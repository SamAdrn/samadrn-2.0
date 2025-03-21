'use client';

import { motion } from 'framer-motion';
import { Chip, SectionContainer, Subheader } from '../../shared';

type ProjectLinkType = 'Devpost' | 'Github';

interface ProjectItem {
    title: string;
    folder: string;
    date: string;
    description: string;
    categories: string[];
    link?: { type: ProjectLinkType; href: string };
}

export default function ProjectContainer() {
    const items: ProjectItem[] = [
        {
            title: 'Pocket Garage',
            folder: 'pocket-garage',
            date: 'July 2023',
            description:
                'Cross-Platform Automobile Data Application to search for vehicle specifications',
            categories: ['React Native', 'Firebase'],
            link: {
                type: 'Github',
                href: 'https://github.com/SamAdrn/PocketGarage',
            },
        },
        {
            title: 'Unity',
            folder: 'unity',
            date: 'May 2023',
            description:
                'Gamified Lifestyle App that encourages users to explore their surroundings',
            categories: ['Swift', 'Academic'],
        },
        {
            title: 'Triples',
            folder: 'triples',
            date: 'April 2023',
            description:
                'Spin-Off of the Tile Puzzle Game Threes that covers the Core Principles of Swift',
            categories: ['Swift', 'Academic'],
        },
        {
            title: 'Testudo Revamped',
            folder: 'testudo-revamped',
            date: 'December 2022',
            description:
                'Revamped class schedule system servicing students of the University of Maryland',
            categories: ['HTML + EJS', 'jQuery', 'MongoDB'],
            link: {
                type: 'Github',
                href: 'https://github.com/SamAdrn/Testudo-Revamp',
            },
        },
        {
            title: 'The Simon Game',
            folder: 'simon-game',
            date: 'October 2022',
            description:
                'Recreation of the classic Simon Game to practice CSS and JavaScript',
            categories: ['HTML + CSS', 'jQuery'],
            link: {
                type: 'Github',
                href: 'https://github.com/SamAdrn/Simon-Game/',
            },
        },
        {
            title: 'Tic Tac Toe',
            folder: 'tic-tac-toe',
            date: 'July 2022',
            description:
                'Terminal Tic Tac Toe to learn more about Game Theory and OOP',
            categories: ['Ruby'],
            link: {
                type: 'Github',
                href: 'https://github.com/SamAdrn/TicTacToe',
            },
        },
        {
            title: 'Maze',
            folder: 'maze',
            date: 'June 2022',
            description:
                'Terminal game to comprehend the concept of graphs and traversal algorithms',
            categories: ['Ruby'],
            link: {
                type: 'Github',
                href: 'https://github.com/SamAdrn/Maze',
            },
        },
        {
            title: 'Caraoke',
            folder: 'caraoke',
            date: 'April 2022',
            description:
                'Carpool-Karaoke-Inspired Hackathon Project utilizing Spotify API ',
            categories: ['Arduino', 'Python', 'Spotify API'],
            link: {
                type: 'Devpost',
                href: 'https://devpost.com/software/caraoke-lyrics-on-the-go?',
            },
        },
    ];

    return (
        <SectionContainer>
            <Subheader text="Projects" />

            {/* Projects List */}
            <ul className="group/menu flex flex-col gap-y-12">
                {items.map((item, i) => (
                    <li
                        key={i}
                        className="group/item relative transition-all duration-300 group-hover/menu:opacity-50 hover:!opacity-100"
                    >
                        {/* Hover Effect */}
                        <div
                            className={
                                'bg-transparent absolute lg:-inset-y-4 lg:-inset-x-6 z-0 transition-colors rounded-lg  ' +
                                'group-hover/item:shadow-sm group-hover/item:backdrop-blur-sm group-hover/item:bg-white/40 dark:group-hover/item:bg-gray-800/40'
                            }
                        ></div>

                        {/* Content */}
                        <div className="flex flex-col md:flex-row items-start gap-5 z-5 relative">
                            {/* Project Image */}
                            <div className="w-full md:w-5/10 lg:w-2/5 h-45 md:h-45 lg:h-35 xl:h-40 dark:opacity-75 transition-opacity">
                                <motion.img
                                    className="object-cover w-full h-full rounded-md shadow-sm"
                                    src={`/projects/${item.folder}/thumb.png`}
                                    alt={`${item.title} Thumbnail`}
                                />
                            </div>

                            {/* Project Info */}
                            <div className="w-full md:w-5/10 lg:w-3/5">
                                {/* Title */}
                                <div
                                    className={
                                        'text-surface-light dark:text-surface-dark ' +
                                        'group-hover/item:text-accent-light dark:group-hover/item:text-accent-dark ' +
                                        'text-lg font-medium flex flex-wrap gap-x-2 items-center'
                                    }
                                >
                                    <span>{item.title}</span>
                                </div>

                                {/* Date */}
                                <div className="uppercase mt-1 text-xs text-surface-half-light dark:text-surface-half-dark">
                                    <span>{item.date}</span>
                                </div>

                                {/* Description */}
                                <div className="mt-2 pe-5 flex flex-col gap-2 text-surface-half-light dark:text-surface-half-dark">
                                    <span>{item.description}</span>
                                </div>

                                {/* Category chips */}
                                <div className="flex gap-2 mt-3 items-center">
                                    {item.categories.map((category, i) => (
                                        <Chip key={i} text={category} />
                                    ))}
                                    {item.link && (
                                        <a
                                            key={i}
                                            className="group ps-3"
                                            href={item.link.href}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            aria-label={`${item.title} ${item.link.type} (opens in a new tab)`}
                                            title={`${item.title} ${item.link.type}`}
                                        >
                                            <span className="sr-only">
                                                {item.link.type}
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={
                                                    'fill-surface-half-light dark:fill-surface-half-dark cursor-pointer transition-all h-5 ' +
                                                    'group-hover:fill-accent-light/80 group-hover:dark:fill-accent-dark/80 group-hover:scale-105'
                                                }
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox={
                                                    item.link.type === 'Github'
                                                        ? '0 0 16 16'
                                                        : '0 0 24 24'
                                                }
                                            >
                                                {/* Devpost logo */}
                                                {item.link.type ===
                                                    'Devpost' && (
                                                    <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" />
                                                )}
                                                {/* GitHub logo */}
                                                {item.link.type ===
                                                    'Github' && (
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                                )}
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </SectionContainer>
    );
}
