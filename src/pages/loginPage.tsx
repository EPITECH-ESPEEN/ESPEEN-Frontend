/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useEffect } from "react";
import MetaData from "src/components/layout/metaData";
import LoginPageContent from "src/components/layout/pages/loginPage/loginPageContent";
import { useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated, setToken } from "src/services/authServices";


/* ----- COMPONENT ----- */
const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated())
            navigate("/");
    }, [navigate]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const getToken = () => {
        const token = queryParams.get('token');
        if (token === null) return;
        setToken(token);
        window.location.href = "/";
    };
    getToken();

    return (
        <>
            <MetaData title="Sign in" />
            <LoginPageContent />
        </>
    );
};

export default LoginPage;