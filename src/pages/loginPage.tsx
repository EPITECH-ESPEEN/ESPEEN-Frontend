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
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";


/* ----- COMPONENT ----- */
const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (isAuthenticated)
            navigate("/");
    }, [isAuthenticated, navigate]);

    return (
        <>
            <MetaData title="Sign in" />
            <LoginPageContent />
        </>
    );
};

export default LoginPage;