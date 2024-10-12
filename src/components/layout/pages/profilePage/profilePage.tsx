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
import { useLazyLogoutQuery } from "../../../../redux/api/authApi";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


/* ----- COMPONENT ----- */
const ProfilePageContent: React.FC = () => {
    const { user } = useSelector((state: any) => state.auth);
    const username = user.username;
    const { t } = useTranslation();

    const navigate = useNavigate();

    const [logout] = useLazyLogoutQuery();

    const logoutHandler = () => {
        logout();
        navigate('/', { replace: true });
    
        setTimeout(() => {
            window.location.reload();
        }, 50);
    };

    return (
        <div className={css.container}>
            <div className="textStyle-title">Hello {username}</div>
            <LangSelecter />
            <ColorBlindSelecter />
            <Button
                label={t("dico.logout")}
                onClick={ logoutHandler}
            />
        </div>
    );
};

export default ProfilePageContent;

