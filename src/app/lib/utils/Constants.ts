type Social = 'github' | 'linkedin' | 'spotify';

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
