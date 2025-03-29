'use client';

import { LanguageOption } from '@/app/i18n';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language || 'en');

    const changeLanguage = (lang: LanguageOption) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
    };

    useEffect(() => {
        const handleLanguageChanged = () => {
            setLanguage(i18n.language);
        };
        i18n.on('languageChanged', handleLanguageChanged);
        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, [i18n]);

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
