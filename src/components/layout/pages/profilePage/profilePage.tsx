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
import { getUser, setUser as setStoredUser } from "src/store/User";
import { IUser } from "src/types/User";
import LoaderPage from "src/components/loading/loaderPage";
import Modal from "src/components/modal/default/modal";
import ModifyProfile from "./modifyProfile";
import { fetchPost } from "src/services/fetch";


/* ----- COMPONENT ----- */
const ProfilePageContent: React.FC = () => {
    const [user , setUser] = useState<IUser | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchDatas = async () => {
            const user = await getUser();
            setUser(user);
        }
        fetchDatas();
    }, [user]);

    const handleProfileChange = async (newUser: IUser) => {
        setShowModal(false);
        setLoading(true);
        const response = await fetchPost("user", newUser);
        if (!response.ok) {
            setLoading(false);
            setError(t("error.save_failed"));
            return;
        }
        setStoredUser(newUser);
        setUser(newUser);
        setLoading(false);
    }

    if (user === null)
        return <LoaderPage />

    return (
        <>
            {loading && <LoaderPage /> }
            <div className={css.container}>
                <div className="textStyle-title">{t("dico.hello")} {user.username}</div>
                <LangSelecter />
                <ColorBlindSelecter />
                <div className={css.buttonContainer}>
                    <Button
                        label={t("dico.logout")}
                        onClick={logout}
                    />
                    <Button
                        label={t("dico.modify_profile")}
                        onClick={() => setShowModal(true)}
                    />
                </div>
            </div>
            {showModal &&
                <Modal onClose={() => {}}>
                    <ModifyProfile onSave={handleProfileChange} user={user} onCancel={() => setShowModal(false)} />
                </Modal>
            }
            {error &&
                <Modal onClose={() => setError("")}>
                    <div className="color-red textStyle-cardTitle">
                        {error}
                    </div>
                </Modal>
            }
        </>
    );
};

export default ProfilePageContent;

