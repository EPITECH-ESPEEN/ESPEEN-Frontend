/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import css from "./espeenPageContent.module.css"
import { useTranslation } from "react-i18next";

/* ----- COMPONENT ----- */
const EspeenPageContent: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={css.container}>
            espeen
        </div>
    );
};

export default EspeenPageContent;