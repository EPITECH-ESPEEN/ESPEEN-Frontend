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
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "src/services/authServices";


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