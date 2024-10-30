/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { UserRound, Mail, Lock } from "lucide-react";
import React, { useState } from "react";
import css from "src/components/auth/authForm.module.css";
import Button from "src/components/buttons/default/button";
import InputWithIcon from "src/components/inputs/withIcon/withIcon";
import ModalError from "src/components/modal/error/modalError";
import { useTranslation } from "react-i18next";
import { register } from "src/services/authServices";
import InputPassword from "../inputs/password/inputPassword";


/* ----- COMPONENT ----- */
const RegisterForm: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const { t } = useTranslation();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (await register(username, email, password))
            window.location.reload();
        else
            setIsError(true);
    };

    return (
        <>
            <div className={css.container}>
                <form className={css.form} onSubmit={submitHandler}>
                    <div className={css.inputs}>
                        <InputWithIcon icon={<Mail size={28} color="var(--color-light)" />} type="text" value={email} setValue={setEmail} placeholder={t('dico.email')} />
                        <InputWithIcon icon={<UserRound size={28} color="var(--color-light)" />} type="text" value={username} setValue={setUsername} placeholder={t('dico.username')} />
                        <InputPassword value={password} setValue={setPassword} placeholder={t('dico.password')} />
                    </div>
                    <div className={css.buttons}>
                        <Button type="reset" label={t('dico.clear')} disabled={false} onClick={() => {
                            setUsername("");
                            setPassword("");
                        }} />
                        <Button type="submit" label={t('dico.register')} disabled={username.length === 0 || password.length === 0} onClick={() => {}} />
                    </div>
                    </form>
            </div>
            {isError && <ModalError message={t('error.invalid_register')} onClose={() => {
                setUsername("");
                setEmail("");
                setPassword("");
                setIsError(false);
            }} />}
        </>
    )
};

export default RegisterForm;