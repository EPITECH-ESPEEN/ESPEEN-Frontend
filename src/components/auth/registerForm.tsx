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
import { UserRound, Mail, Lock } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRegisterMutation } from "../../redux/api/authApi";
import css from "./authForm.module.css";
import Button from "../buttons/default/button";
import InputWithIcon from "../inputs/withIcon/withIcon";
import ModalError from "../modal/error/modalError";
import { useTranslation } from "react-i18next";


/* ----- COMPONENT ----- */
const RegisterForm: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const [register, { error }] = useRegisterMutation();
    const { t } = useTranslation();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const registerData = {
            username,
            email,
            password,
        };
        register(registerData);
        if (!error) {
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("token", password);
        }
    };

    useEffect(() => {
        if (error) {
            setIsError(true);
        }
    }, [error]);

    return (
        <>
            <div className={css.container}>
                <form className={css.form} onSubmit={submitHandler}>
                    <div className={css.inputs}>
                        <InputWithIcon icon={<Mail size={28} color="var(--color-light)" />} type="text" value={email} setValue={setEmail} placeholder={t('dico.email')} />
                        <InputWithIcon icon={<UserRound size={28} color="var(--color-light)" />} type="text" value={username} setValue={setUsername} placeholder={t('dico.username')} />
                        <InputWithIcon icon={<Lock size={28} color="var(--color-light)" />} type="password" value={password} setValue={setPassword} placeholder={t('dico.password')} />
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
            {isError && error && <ModalError message={t('error.invalid_register')} onClose={() => {
                setUsername("");
                setPassword("");
                setIsError(false);
            }} />}
        </>
    )
};

export default RegisterForm;