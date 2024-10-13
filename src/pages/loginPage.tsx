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
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../services/authServices";


/* ----- COMPONENT ----- */
const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated())
            navigate("/");
    }, [navigate]);

    return (
        <>
            <MetaData title="Sign in" />
            <LoginPageContent />
        </>
    );
};

export default LoginPage;