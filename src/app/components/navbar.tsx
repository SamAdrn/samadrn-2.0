'use client';

import Link from 'next/link';
import ThemeSwitcher from './theme-switcher';

/** Navbar component. Handles dark mode toggle. */
export default function Navbar() {
    return (
        <nav className="sticky bg-transparent top-0 z-50 flex justify-between items-center h-[var(--navbar-height)]">
            <div className="flex items-center justify-between">
                <Link href="#" className="text-3xl font-semibold font-mono">
                    SAMUEL KOSASIH
                </Link>
            </div>

            <div>
                <ThemeSwitcher />
            </div>
        </nav>
    );
}
