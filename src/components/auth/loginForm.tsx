/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { UserRound } from "lucide-react";
import React, { useEffect, useState } from "react";
import css from "src/components/auth/authForm.module.css";
import Button from "src/components/buttons/default/button";
import InputWithIcon from "src/components/inputs/withIcon/withIcon";
import ModalError from "src/components/modal/error/modalError";
import { useTranslation } from "react-i18next";
import { login } from "src/services/authServices";
import InputPassword from "../inputs/password/inputPassword";
import Divider from "../divider/divider";
import { IService, IServiceButton } from "src/types/Services";
import { getOauth } from "src/store/Oauth";
import { getBaseUrl } from "src/services/fetch";


/* ----- COMPONENT ----- */
const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const [oauth, setOauth] = useState<IService | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchOauth = async () => {
            const response = await getOauth();
            setOauth(response);
        };
        fetchOauth();
    }, []);

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (await login(username, password))
            window.location.reload();
        else
            setIsError(true);
    };

    const callPath = async (action: IServiceButton) => {
        window.location.href =`${getBaseUrl()}/${action.path}`;
    };

    return (
        <>
            <div className={css.container}>
                <form className={css.form} onSubmit={submitHandler}>
                    <div className={css.inputs}>
                        <InputWithIcon icon={<UserRound size={28} color="var(--color-light)" />} type="text" value={username} setValue={setUsername} placeholder={t('dico.username')} />
                        <InputPassword value={password} setValue={setPassword} placeholder={t('dico.password')} />
                    </div>
                    <div className={css.buttons}>
                        <Button type="reset" label={t('dico.clear')} disabled={false} onClick={() => {
                            setUsername("");
                            setPassword("");
                        }} />
                        <Button type="submit" label={t('dico.login')} disabled={username.length === 0 || password.length === 0} onClick={() => {}} />
                    </div>
                    {oauth !== null && oauth.buttons && oauth.buttons.length > 0 &&
                        <>
                            <Divider color="var(--color-light)" direction="horizontal" />
                            <div className={css.buttons}>
                                {
                                    oauth.buttons.map((action, index) => {
                                        if (action.name !== "not_linked") return null;
                                        return <Button key={index} label={`${t('dico.login_with')} ${oauth.name}`} onClick={() => callPath(action)} />
                                    })
                                }
                            </div>
                        </>
                    }
                </form>
            </div>
            {isError && <ModalError message={t('error.invalid_login')} onClose={() => {
                setUsername("");
                setPassword("");
                setIsError(false);
            }} />}
        </>
    )
};

export default LoginForm;