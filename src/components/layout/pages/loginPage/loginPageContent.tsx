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
import React, { useState } from "react";
import css from "./loginPageContent.module.css"
import EspeenIcon from "../../../icons/espeenIcon";
import { NavLink } from "react-router-dom";
import LoginForm from "../../../auth/loginForm";
import TabButton from "../../../buttons/tabButton/tabButton";
import RegisterForm from "../../../auth/registerForm";
import { useTranslation } from "react-i18next";

/* ----- COMPONENT ----- */
const LoginPageContent: React.FC = () => {
    const [loginTab, setLoginTab] = useState<boolean>(true);
    const { t } = useTranslation();

    return (
        <div className={css.container}>
            <div className={css.left}>
                <NavLink to="/"><EspeenIcon size={64} stroke="var(--color-green" /></NavLink>
                <div className={css.texts}>
                    <div className="textStyle-huge color-green">Espeen</div>
                    <div className="textStyle-title color-green">Spin actions into reactions !</div>
                </div>
            </div>
            <div className={css.right}>
                <div className={css.formContainer}>
                    <div className={css.tabs}>
                        <TabButton
                            label={t("dico.login")}
                            isActive={loginTab}
                            onClick={() => setLoginTab(true)}
                            />
                        <TabButton
                            label={t("dico.register")}
                            isActive={!loginTab}
                            onClick={() => setLoginTab(false)}
                            />
                    </div >
                    {loginTab ? <LoginForm /> : <RegisterForm />}
                </div>
            </div>
        </div>
    );
};

export default LoginPageContent;