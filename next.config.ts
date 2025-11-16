import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        // Modern image formats - Next.js will serve WebP/AVIF to supporting browsers
        formats: ['image/avif', 'image/webp'],
    },
};

export default nextConfig;
