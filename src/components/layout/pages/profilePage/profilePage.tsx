/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React from "react";
import Button from "../../../buttons/default/button";
import css from "./profilePage.module.css";
import LangSelecter from "./langSelecter";
import { useTranslation } from "react-i18next";
import ColorBlindSelecter from "./colorBlindSelecter";
import { logout } from "../../../../services/authServices";


/* ----- COMPONENT ----- */
const ProfilePageContent: React.FC = () => {
    const username = localStorage.getItem("username");
    const { t } = useTranslation();

    const navigate = useNavigate();

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

