/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import { IUser } from "src/types/User";
import css from "./modifyProfile.module.css";
import { useTranslation } from "react-i18next";
import InputDark from "src/components/inputs/defaultDark/defaultDark";
import ColoredButton from "src/components/buttons/colored/coloredButton";


/* ----- PROPS ----- */
interface ModifyProfileProps {
    onSave: (newUser: IUser) => void;
    onCancel: () => void;
    user: IUser;
};


/* ----- COMPONENT ----- */
const ModifyProfile: React.FC<ModifyProfileProps> = ({ onSave, user, onCancel }) => {
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const { t } = useTranslation();

    const canSave = () => {
        if (username.length === 0 || email.length === 0)
            return false;
        if (password.length > 0 && password !== passwordConfirm)
            return false;
        return true;
    }

    const handleSave = () => {
        if (!canSave()) return;
        const newUser = { ...user};
        newUser.username = username;
        newUser.email = email;
        if (password.length > 0)
            user.password = password;
        onSave(newUser);
    }

    const handleClear = () => {
        setUsername("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
    }

    const handleCancel = () => {
        setUsername(user.username);
        setEmail(user.email);
        setPassword("");
        setPasswordConfirm("");
        onCancel();
    }

    return (
        <div className={css.container}>
            <div className="textStyle-title color-dark">{t("profile.modify")}</div>
            <InputDark type="text" placeholder={t("dico.username")} value={username} setValue={setUsername} />
            <InputDark type="email" placeholder={t("dico.email")} value={email} setValue={setEmail} />
            <div className={css.passwordContainer}>
                <InputDark type="password" placeholder={t("dico.password")} value={password} setValue={setPassword} />
                <InputDark type="password" placeholder={t("dico.password_confirm")} value={passwordConfirm} setValue={setPasswordConfirm} />
                <div className="textStyle-hint color-red">{t("profile.modify_password")}</div>
            </div>
            <div className={css.buttonContainer}>
                <ColoredButton label={t("dico.save")} onClick={handleSave} disabled={!canSave()} color="dark" />
                <ColoredButton label={t("dico.clear")} onClick={handleClear} color="dark" />
                <ColoredButton label={t("dico.cancel")} onClick={handleCancel} color="red" />
            </div>
        </div>
    );
};

export default ModifyProfile;

