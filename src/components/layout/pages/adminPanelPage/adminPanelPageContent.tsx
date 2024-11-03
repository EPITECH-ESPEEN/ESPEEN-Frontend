/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import css from "./adminPanelPageContent.module.css"
import { useTranslation } from "react-i18next";

/* ----- COMPONENT ----- */
const AdminPanelPageContent: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={css.container}>
        </div>
    );
};

export default AdminPanelPageContent;