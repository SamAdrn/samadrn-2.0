export type Social = 'github' | 'linkedin' | 'spotify';
export type Lang = { name: string; iconFile: string };
export type Experience = {
    slug: string;
    titleKey: string;
    placeKey: string;
    startKey: string;
    endKey: string;
    locationKey: string;
    pointKeys: string[];
    categories: string[];
    link: string;
};
export type Project = {
    title: string;
    folder: string;
    dateKey: string;
    descriptionKey: string;
    categories: string[];
    link?: { type: 'Devpost' | 'Github'; href: string };
};

/** A map of all social media links and pertinent information */
export const socials: Record<
    Social,
    { type: Social; label: string; link: string }
> = {
    github: {
        type: 'github',
        label: 'GitHub',
        link: 'https://github.com/SamAdrn',
    },
    linkedin: {
        type: 'linkedin',
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/samkosasih/',
    },
    spotify: {
        type: 'spotify',
        label: 'Spotify',
        link: 'https://open.spotify.com/user/31dzjlx5ll7imlrvwoaappx4kngu?si=e9b4f497b9a04e02',
    },
};

/** A constant that holds the relative path to the folder that contains all tech icons */
export const pathToTechIcon = '/icons';

/** A map of tech stack names and paths to their icon images */
export const stack: Record<'core' | 'exp', Lang[]> = {
    core: [
        { name: 'TypeScript', iconFile: 'typescript' },
        { name: 'Angular', iconFile: 'angular' },
        { name: 'Tailwind', iconFile: 'tailwind' },
        { name: 'Python', iconFile: 'python' },
        { name: 'HTML', iconFile: 'html' },
        { name: 'CSS', iconFile: 'css' },
        { name: 'Git', iconFile: 'git' },
        { name: 'Playwright', iconFile: 'playwright' },
    ],
    exp: [
        { name: 'Ruby', iconFile: 'ruby' },
        { name: 'Racket', iconFile: 'racket' },
        { name: 'ANSI C', iconFile: 'ansic' },
        { name: 'Java', iconFile: 'java' },
        { name: 'PostgreSQL', iconFile: 'postgresql' },
        { name: 'React', iconFile: 'react' },
        { name: 'Swift', iconFile: 'swift' },
        { name: 'Next.js', iconFile: 'nextjs' },
    ],
};

/** A prefix to access all the corresponding translation keys */
const [inovalon, iigf, terrapinTech, bachelors, associates] = [
    'INOVALON',
    'IIGF',
    'TERRAPIN_TECH',
    'BACHELORS',
    'ASSOCIATES',
].map((e) => `STR_EXPERIENCE.ITEM.${e}`);

/** A list of experiences along with the keys used for translations for some properties */
export const experiences: Experience[] = [
    {
        slug: 'inovalon',
        titleKey: `${inovalon}.TITLE`,
        placeKey: `${inovalon}.PLACE`,
        startKey: `${inovalon}.START`,
        endKey: `${inovalon}.END`,
        locationKey: `${inovalon}.LOCATION`,
        pointKeys: [
            `${inovalon}.POINT_1`,
            `${inovalon}.POINT_2`,
            `${inovalon}.POINT_3`,
        ],
        categories: [
            'Angular',
            'TypeScript',
            'HTML + SCSS',
            'PrimeNG',
            'Python',
            'Playwright'
        ],
        link: 'https://www.inovalon.com/',
    },
    {
        slug: 'iigf',
        titleKey: `${iigf}.TITLE`,
        placeKey: `${iigf}.PLACE`,
        startKey: `${iigf}.START`,
        endKey: `${iigf}.END`,
        locationKey: `${iigf}.LOCATION`,
        pointKeys: [`${iigf}.POINT_1`, `${iigf}.POINT_2`],
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
        slug: 'terrapin-tech',
        titleKey: `${terrapinTech}.TITLE`,
        placeKey: `${terrapinTech}.PLACE`,
        startKey: `${terrapinTech}.START`,
        endKey: `${terrapinTech}.END`,
        locationKey: `${terrapinTech}.LOCATION`,
        pointKeys: [`${terrapinTech}.POINT_1`, `${terrapinTech}.POINT_2`],
        categories: ['Technical Support', 'Communication', 'Leadership'],
        link: 'https://it.umd.edu/',
    },
    {
        slug: 'bachelors',
        titleKey: `${bachelors}.TITLE`,
        placeKey: `${bachelors}.PLACE`,
        startKey: `${bachelors}.START`,
        endKey: `${bachelors}.END`,
        locationKey: `${bachelors}.LOCATION`,
        pointKeys: [`${bachelors}.POINT_1`, `${bachelors}.POINT_2`],
        categories: ['Academic', 'University'],
        link: 'https://umd.edu/',
    },
    {
        slug: 'associates',
        titleKey: `${associates}.TITLE`,
        placeKey: `${associates}.PLACE`,
        startKey: `${associates}.START`,
        endKey: `${associates}.END`,
        locationKey: `${associates}.LOCATION`,
        pointKeys: [`${associates}.POINT_1`, `${associates}.POINT_2`],
        categories: ['Academic', 'Community College'],
        link: 'https://www.edmonds.edu/',
    },
];

/** A constant that holds the relative path to the folder that contains all project thumbnails */
export const pathToProjectThumbnail = '/projects';

/** A prefix to access all the corresponding translation keys */
const [pocketGarage, unity, testudoRevamped, maze, caraoke] = [
    'POCKET_GARAGE',
    'UNITY',
    'TESTUDO_REVAMPED',
    'MAZE',
    'CARAOKE',
].map((e) => `STR_PROJECT.ITEM.${e}`);

/** A list of projects along with the keys used for translations for some properties */
export const projects: Project[] = [
    {
        title: 'Pocket Garage',
        folder: 'pocket-garage',
        dateKey: `${pocketGarage}.DATE`,
        descriptionKey: `${pocketGarage}.DESCRIPTION`,
        categories: ['React Native', 'Firebase'],
        link: {
            type: 'Github',
            href: 'https://github.com/SamAdrn/PocketGarage',
        },
    },
    {
        title: 'Unity',
        folder: 'unity',
        dateKey: `${unity}.DATE`,
        descriptionKey: `${unity}.DESCRIPTION`,
        categories: ['Swift', 'Academic'],
        link: {
            type: 'Github',
            href: 'https://github.com/SamAdrn/Unity',
        },
    },
    {
        title: 'Testudo Revamped',
        folder: 'testudo-revamped',
        dateKey: `${testudoRevamped}.DATE`,
        descriptionKey: `${testudoRevamped}.DESCRIPTION`,
        categories: ['HTML + EJS', 'jQuery', 'MongoDB'],
        link: {
            type: 'Github',
            href: 'https://github.com/SamAdrn/Testudo-Revamp',
        },
    },
    {
        title: 'Maze',
        folder: 'maze',
        dateKey: `${maze}.DATE`,
        descriptionKey: `${maze}.DESCRIPTION`,
        categories: ['Ruby'],
        link: {
            type: 'Github',
            href: 'https://github.com/SamAdrn/Maze',
        },
    },
    {
        title: 'Caraoke',
        folder: 'caraoke',
        dateKey: `${caraoke}.DATE`,
        descriptionKey: `${caraoke}.DESCRIPTION`,
        categories: ['Arduino', 'Python', 'Spotify API'],
        link: {
            type: 'Devpost',
            href: 'https://devpost.com/software/caraoke-lyrics-on-the-go?',
        },
    },
];
