'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import idTranslations from './locales/id.json';

export type LanguageOption = 'en' | 'id';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations,
            },
            id: {
                translation: idTranslations,
            },
        },
        fallbackLng: 'en', // Default language
        interpolation: {
            escapeValue: false, // React already escapes by default
        },
    });

export default i18n;
