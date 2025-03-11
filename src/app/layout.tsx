import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import './globals.css';
import AmberGlowBackground from './backgrounds/amber-glow-background';
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
                    `${jetBrainsMono.variable} ${inter.variable} antialiased transition-colors ` +
                    ' text-surface-light  dark:text-surface-dark'
                }
            >
                <SplashScreen />

                {/* Main Content */}
                <div className="relative min-h-screen">
                    <Navbar />

                    <div className="mx-20">{children}</div>
                </div>

                <AmberGlowBackground />
            </body>
        </html>
    );
}
