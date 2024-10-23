/*
    Author:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';
import lang from "src/i18n/lang";
import { changeLanguage } from "src/i18n/i18n";
import css from "./langSelecter.module.css";


/* ----- COMPONENT ----- */
const LangSelecter: React.FC = () => {
    const { t } = useTranslation();

    const currentFlag = lang.find((language) => language.code === i18n.language);

    return (
        <div className={css.container}>
            <div className="textStyle-title color-light">{t('languages.select_lang')}</div>
            <div className={css.buttonContainer}>
                {lang.map((language) => (
                    <button
                        onClick={() => changeLanguage(language.code)}
                        className={`${css.button} ${currentFlag?.code === language.code ? css.activeButton : css.inactiveButton}`}
                        key={language.code}
                    >
                        <img src={`https://flagsapi.com/${language.code.toLocaleUpperCase()}/flat/64.png`} className={css.img} alt={language.name} />
                        <div className="textStyle-text color-light">{t(language.name)}</div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LangSelecter;
