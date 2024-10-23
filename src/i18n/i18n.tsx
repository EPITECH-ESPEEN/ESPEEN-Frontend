/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import gbTranslation from "./locales/gb-translation.json";
import frTranslation from "./locales/fr-translation.json";
import ruTranslation from "./locales/ru-translation.json";
import esTranslation from "./locales/es-translation.json";
import deTranslation from "./locales/de-translation.json";
//NEW1


/* ----- I18N ----- */
i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources: {
            gb: { translation: gbTranslation, },
            fr: { translation: frTranslation, },
            ru: { translation: ruTranslation, },
            es: { translation: esTranslation, },
            de: { translation: deTranslation, },
            //NEW2
        },
        lng: "gb",
        fallbackLng: "gb",
        interpolation: {
            escapeValue: false,
        },
    })



/* ----- DATAS ----- */
let defaultLanguagesSet = false;

/* ----- FUNCTIONS ----- */
export function setDefaultLanguage() {
    if (defaultLanguagesSet)
        return;
    const language = localStorage.getItem("language");
    if (language && i18n.language !== language)
        i18n.changeLanguage(language);
    else
        localStorage.setItem("language", "gb");
    defaultLanguagesSet = true;
}

export function changeLanguage(language: string) {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
}

export default i18n;
