/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import Button from "src/components/buttons/default/button";
import css from "./profilePage.module.css";
import LangSelecter from "./langSelecter";
import { useTranslation } from "react-i18next";
import ColorBlindSelecter from "./colorBlindSelecter";
import { logout } from "src/services/authServices";


/* ----- COMPONENT ----- */
const ProfilePageContent: React.FC = () => {
    const username = localStorage.getItem("username");
    const { t } = useTranslation();


    return (
        <div className={css.container}>
            <div className="textStyle-title">Hello {username}</div>
            <LangSelecter />
            <ColorBlindSelecter />
            <Button
                label={t("dico.logout")}
                onClick={logout}
            />
        </div>
    );
};

export default ProfilePageContent;

