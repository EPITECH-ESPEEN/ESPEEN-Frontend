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
import { fetchDelete, fetchPost } from "src/services/fetch";
import ColoredButton from "src/components/buttons/colored/coloredButton";
import { useNavigate } from "react-router-dom";

/* ----- COMPONENT ----- */
const ProfilePageContent: React.FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [askLogout, setAskLogout] = useState<boolean>(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDatas = async () => {
      const user = await getUser();
      setUser(user);
    };
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
  };

  const handleDeleteProfile = async () => {
    setLoading(true);
    const response = await fetchDelete("user");
    if (!response.ok) {
      setLoading(false);
      setError(t("error.delete_failed"));
      return;
    }
    setLoading(false);
    logout();
  };

  const navigateToAdminPanel = () => {
    navigate("/admin");
  };

  const handleDownloadApp = () => {
    window.location.href = "client.apk";
  };

  if (user === null) {
    setTimeout(() => {
      setAskLogout(true);
    }, 4000);
    if (askLogout) {
      return (
        <Modal onClose={() => {}}>
          <div className="flex flex-col gap-4">
            <div className="color-red textStyle-cardTitle">{t("error.logout")}</div>
            <div className="flex justify-center">
              <ColoredButton label={t("dico.logout")} onClick={logout} color="dark" />
            </div>
          </div>
        </Modal>
      );
    }
    return <LoaderPage />;
  }

  return (
    <>
      {loading && <LoaderPage />}
      <div className={css.container}>
        <div className="textStyle-title">
          {t("dico.hello")} {user.username}
        </div>
        <LangSelecter />
        <ColorBlindSelecter />
        <div className={css.buttonContainer}>
          <Button label={t("dico.logout")} onClick={logout} />
          <Button label={t("dico.modify_profile")} onClick={() => setShowModal(true)} />
          <Button label={t("dico.delete_profile")} onClick={handleDeleteProfile} />
          {user.role === "admin" && <Button label={t("admin.access")} onClick={navigateToAdminPanel} />}
          <Button label={t("dico.download_app")} onClick={handleDownloadApp} />
        </div>
      </div>
      {showModal && (
        <Modal onClose={() => {}}>
          <ModifyProfile onSave={handleProfileChange} user={user} onCancel={() => setShowModal(false)} />
        </Modal>
      )}
      {error && (
        <Modal onClose={() => setError("")}>
          <div className="color-red textStyle-cardTitle">{error}</div>
        </Modal>
      )}
    </>
  );
};

export default ProfilePageContent;
