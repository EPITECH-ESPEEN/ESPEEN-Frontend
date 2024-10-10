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
import React, { useEffect } from "react";
import MetaData from "../components/layout/metaData";
import LoginPageContent from "../components/layout/pages/loginPage/loginPageContent";


/* ----- COMPONENT ----- */
const LoginPage: React.FC = () => {
    return (
        <>
            <MetaData title="Sign in" />
            <LoginPageContent />
        </>
    );
};

export default LoginPage;