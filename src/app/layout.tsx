import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Poppins } from 'next/font/google';

import './globals.css';
import AuroraGlowBackground from './backgrounds/aurora-glow-background';
import Navbar from './components/navbar';
import SplashScreen from './components/spash-screen';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jetbrains-mono',
});

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: '400'
});

export const metadata: Metadata = {
    title: 'Samuel Kosasih',
    description: 'Personal Website',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={
                    `${jetBrainsMono.variable} ${poppins.variable} ${inter.variable} font-sans antialiased transition-colors ` +
                    ' text-surface-light  dark:text-surface-dark'
                }
            >
                <SplashScreen />

                {/* Main Content */}
                <div className="relative min-h-screen mx-5 md:mx-20 lg:mx-30">
                    <Navbar />

                    {children}
                </div>

                <AuroraGlowBackground />
            </body>
        </html>
    );
}
