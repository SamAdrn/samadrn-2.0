export type Social = 'github' | 'linkedin' | 'spotify';
export type Lang = { name: string; iconFile: string };

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

/** A constant that holds the relative path to the folder that contains all icons */
export const pathToIcon = '/icons';

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
