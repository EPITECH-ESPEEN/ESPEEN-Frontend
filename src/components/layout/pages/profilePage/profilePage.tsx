/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import Button from "src/components/buttons/default/button";
import css from "./profilePage.module.css";
import LangSelecter from "./langSelecter";
import { useTranslation } from "react-i18next";
import ColorBlindSelecter from "./colorBlindSelecter";
import { logout } from "src/services/authServices";
import { getUser } from "src/store/User";
import { IUser } from "src/types/User";
import LoaderPage from "src/components/loading/loaderPage";


/* ----- COMPONENT ----- */
const ProfilePageContent: React.FC = () => {
    const [user , setUser] = useState<IUser | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const getDatas = async () => {
            const user = await getUser();
            setUser(user);
        }
        if (user === null) {
            getDatas();
        }
        const interval = setInterval(() => {
            if (user === null) {
                getDatas();
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [user]);

    return (
        <>
            {
                user === null ? <LoaderPage /> :
                <div className={css.container}>
                    <div className="textStyle-title">Hello {user.username}</div>
                    <LangSelecter />
                    <ColorBlindSelecter />
                    <Button
                        label={t("dico.logout")}
                        onClick={logout}
                    />
                </div>
            }
        </>
    );
};

export default ProfilePageContent;

