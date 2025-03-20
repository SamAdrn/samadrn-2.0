'use client';

import { motion } from 'framer-motion';
import { Chip, SectionContainer, Subheader } from '../../shared';
import { useModal } from '@/app/lib/contexts';

interface ProjectItem {
    title: string;
    folder: string;
    date: string;
    description: string;
    categories: string[];
}

export default function ProjectContainer() {
    const { openModal } = useModal();

    const items: ProjectItem[] = [
        {
            title: 'Pocket Garage',
            folder: 'pocket-garage',
            date: 'July 2023',
            description:
                'Cross-Platform Automobile Data Application to search for vehicle specifications',
            categories: ['React Native', 'Firebase'],
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
        },
        {
            title: 'The Simon Game',
            folder: 'simon-game',
            date: 'October 2022',
            description:
                'Recreation of the classic Simon Game to practice CSS and JavaScript',
            categories: ['HTML + CSS', 'jQuery'],
        },
        {
            title: 'Tic Tac Toe',
            folder: 'tic-tac-toe',
            date: 'July 2022',
            description:
                'Terminal Tic Tac Toe to learn more about Game Theory and OOP',
            categories: ['Ruby'],
        },
        {
            title: 'Maze',
            folder: 'maze',
            date: 'June 2022',
            description:
                'Terminal game to comprehend the concept of graphs and traversal algorithms',
            categories: ['Ruby'],
        },
        {
            title: 'Caraoke',
            folder: 'caraoke',
            date: 'April 2022',
            description:
                'Carpool-Karaoke-Inspired Hackathon Project utilizing Spotify API ',
            categories: ['Arduino', 'Python', 'Spotify API'],
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

                        {/* Overlay for Modal Button */}
                        {/* <button
                            className="bg-transparent absolute inset-0 z-10 cursor-pointer"
                            aria-label={'View details for ' + item.title}
                            onClick={() => handleOpenProjectModal(item)}
                        /> */}

                        {/* Content */}
                        <div className="flex flex-col md:flex-row items-start gap-5 z-5 relative">
                            {/* Project Image */}
                            <div className="w-full md:w-5/10 lg:w-2/5 h-45 md:h-45 lg:h-35 xl:h-45 dark:opacity-75 transition-opacity">
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
                                <div className="flex gap-2 mt-3">
                                    {item.categories.map((category, i) => (
                                        <Chip key={i} text={category} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </SectionContainer>
    );
}
