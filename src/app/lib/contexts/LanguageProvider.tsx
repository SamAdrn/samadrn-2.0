'use client';

import i18n from '@/app/i18n';
import { LanguageOption } from '@/app/i18n';
import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
    language: string;
    changeLanguage: (lang: LanguageOption) => void;
};

interface LanguageProviderProps {
    children: React.ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState(i18n.language || 'en');

    const changeLanguage = (lang: LanguageOption) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
    };

    // Handle language changes through i18n
    useEffect(() => {
        const handleLanguageChanged = () => {
            setLanguage(i18n.language);
        };
        i18n.on('languageChanged', handleLanguageChanged);
        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, [i18n]); // i18n is stable but included for exhaustive-deps

    // Update HTML lang attribute when language changes for accessibility
    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
