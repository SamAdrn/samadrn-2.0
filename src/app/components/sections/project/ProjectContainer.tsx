'use client';

import {
    pathToProjectThumbnail,
    projects,
    socials,
} from '@/app/lib/utils/Constants';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Chip, SectionContainer, Subheader } from '../../shared';

/** The About Section Component.*/
export default function ProjectContainer() {
    const { t } = useTranslation();

    return (
        <SectionContainer id="projects">
            <Subheader text={t('STR_PROJECT.TITLE')} />

            {/* Projects List */}
            <ul className="group/menu flex flex-col gap-y-12">
                {projects.map((item, i) => {
                    const [title, folder, date, description, categories, link] =
                        [
                            item.title,
                            item.folder,
                            t(item.dateKey),
                            t(item.descriptionKey),
                            item.categories,
                            item.link,
                        ];

                    return (
                        <li
                            id={`project-item-${folder}`}
                            key={i}
                            className="group/item relative transition-all duration-300 group-hover/menu:opacity-50 hover:!opacity-100"
                        >
                            {/* Hover Effect */}
                            <div
                                className={
                                    'bg-transparent absolute lg:-inset-y-4 lg:-inset-x-6 z-0 transition-colors rounded-lg  ' +
                                    'group-hover/item:shadow-sm group-hover/item:backdrop-blur-sm group-hover/item:bg-white/40 dark:group-hover/item:bg-gray-700/50'
                                }
                            ></div>

                            {/* Content */}
                            <div className="flex flex-col md:flex-row items-start gap-5 z-5 relative">
                                {/* Project Thumbnail */}
                                <div className="w-full md:w-5/10 lg:w-2/5 h-45 md:h-45 lg:h-35 xl:h-40 dark:opacity-75 transition-opacity">
                                    <motion.img
                                        id={`project-item-${folder}-thumbnail`}
                                        className="object-cover w-full h-full rounded-md shadow-sm"
                                        src={`${pathToProjectThumbnail}/${folder}/thumb.png`}
                                        alt={t(
                                            'STR_PROJECT.ITEM.ARIA.THUMB_ALT',
                                            {
                                                projectName: title,
                                            },
                                        )}
                                        aria-describedby={`project-item-${folder}-thumbnail-description`}
                                    />
                                </div>

                                {/* SR for Project Thumbnail */}
                                <span
                                    id={`project-item-${folder}-thumbnail-description`}
                                    className="sr-only"
                                >
                                    {t('STR_PROJECT.ITEM.ARIA.THUMB_SR', {
                                        projectName: title,
                                    })}
                                </span>

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
                                        <span>{title}</span>
                                    </div>

                                    {/* Date */}
                                    <div className="uppercase mt-1 text-xs text-surface-half-light dark:text-surface-half-dark">
                                        <span>{date}</span>
                                    </div>

                                    {/* Description */}
                                    <div className="mt-2 pe-5 flex flex-col gap-2 text-surface-half-light dark:text-surface-half-dark">
                                        <span>{description}</span>
                                    </div>

                                    {/* Category chips */}
                                    <div className="flex gap-2 mt-3 items-center">
                                        {/* Chips */}
                                        {categories.map((category, i) => (
                                            <Chip key={i} text={category} />
                                        ))}

                                        {/* Link Icon */}
                                        {link && (
                                            <a
                                                id={`project-item-${folder}-link`}
                                                className="group ps-3"
                                                href={link.href}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                aria-label={t(
                                                    'STR_MISC.NAVIGATION.ARIA.OPENS_NEW_TAB',
                                                    {
                                                        target: `${title} ${link.type}`,
                                                    },
                                                )}
                                                title={`${title} ${link.type}`}
                                            >
                                                <span className="sr-only">{`${title} ${link.type}`}</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={
                                                        'fill-surface-half-light dark:fill-surface-half-dark cursor-pointer transition-all h-5 ' +
                                                        'group-hover:fill-accent-light/80 group-hover:dark:fill-accent-dark/80 group-hover:scale-105'
                                                    }
                                                    aria-hidden="true"
                                                    fill="currentColor"
                                                    viewBox={
                                                        link.type === 'Github'
                                                            ? '0 0 16 16'
                                                            : '0 0 24 24'
                                                    }
                                                >
                                                    {/* Devpost logo */}
                                                    {link.type ===
                                                        'Devpost' && (
                                                        <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" />
                                                    )}
                                                    {/* GitHub logo */}
                                                    {link.type === 'Github' && (
                                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                                    )}
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>

            <div className="mt-10 lg:mt-14">
                {/* View GitHub Link */}
                <a
                    id="view-github-link"
                    href={socials.github.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={t('STR_MISC.NAVIGATION.ARIA.OPENS_NEW_TAB', {
                        target: socials.github.label,
                    })}
                    className="select-none cursor-pointer flex items-center group opacity-70 hover:opacity-100"
                >
                    {/* Horizontal Line */}
                    <span
                        className={
                            'hidden lg:inline h-[2px] w-20 ms-1 me-4 bg-surface-half-light/70 dark:bg-surface-half-dark ' +
                            'transition-colors group-hover:bg-accent-light/80 dark:group-hover:bg-accent-dark'
                        }
                    ></span>

                    {/* Button Label */}
                    <span
                        className={
                            'transition-colors text-surface-half-light dark:text-surface-half-dark ' +
                            'group-hover:text-accent-light group-hover:dark:text-accent-dark'
                        }
                    >
                        {t('STR_MISC.ACTION.VIEW_GITHUB')}
                    </span>

                    {/* TR Arrow */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.7}
                        stroke="currentColor"
                        className={
                            'size-4 inline mb-0.5 ms-2 transition-all transform ' +
                            'text-surface-half-light dark:text-surface-half-dark ' +
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
                </a>
            </div>
        </SectionContainer>
    );
}
