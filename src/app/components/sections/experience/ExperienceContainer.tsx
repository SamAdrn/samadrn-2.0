'use client';

import { experiences } from '@/app/lib/utils/Constants';
import { useTranslation } from 'react-i18next';
import { Chip, SectionContainer, Subheader } from '../../shared';

/** The Experience Section Component.*/
export default function ExperienceContainer() {
    const { t } = useTranslation();

    return (
        <SectionContainer id="experiences">
            <Subheader text={t('STR_EXPERIENCE.TITLE')} />

            {/* Experiences List */}
            <ul className="group/menu flex flex-col gap-y-12">
                {experiences.map((item, i) => {
                    const [
                        slug,
                        title,
                        place,
                        start,
                        end,
                        location,
                        points,
                        categories,
                        link,
                    ] = [
                        item.slug,
                        t(item.titleKey),
                        t(item.placeKey),
                        t(item.startKey),
                        t(item.endKey),
                        t(item.locationKey),
                        item.pointKeys.map((pointKey) => t(pointKey)),
                        item.categories,
                        item.link,
                    ];

                    return (
                        <li
                            id={`experience-item-${slug}`}
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
                                id={`experience-item-${slug}-link`}
                                className="bg-transparent absolute inset-0 z-10 cursor-pointer"
                                href={link}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={t(
                                    'STR_MISC.NAVIGATION.ARIA.OPENS_NEW_TAB',
                                    {
                                        target: place,
                                    },
                                )}
                                title={place}
                            />

                            {/* Content */}
                            <div className="z-5 relative flex flex-col gap-3">
                                {/* Start - End | location */}
                                <div className="uppercase text-xs flex items-center gap-2 text-surface-half-light dark:text-surface-half-dark">
                                    <span>{start}</span>
                                    <span>—</span>
                                    <span
                                        className={
                                            end === ''
                                                ? 'rounded-md px-2 py-0.5 bg-accent-half-light/20 dark:bg-accent-half-dark/30 text-accent-light dark:text-accent-dark'
                                                : ''
                                        }
                                    >
                                        {end || t('STR_EXPERIENCE.PRESENT')}
                                    </span>
                                    <span>|</span>
                                    <span>{location}</span>
                                </div>

                                {/* Title - Place */}
                                <div
                                    className={
                                        'text-surface-light dark:text-surface-dark ' +
                                        'group-hover/item:text-accent-light dark:group-hover/item:text-accent-dark ' +
                                        'text-lg font-medium flex flex-wrap gap-x-2 items-center'
                                    }
                                >
                                    <span>{title}</span>
                                    <span>—</span>
                                    <span>
                                        {place} {/* TR Arrow */}
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
                                    {points.map((point, i) => (
                                        <li key={i}>{t(point)}</li>
                                    ))}
                                </ul>

                                {/* Category chips */}
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {categories.map((category, i) => (
                                        <Chip key={i} text={category} />
                                    ))}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </SectionContainer>
    );
}
