/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";


/* ----- COMPONENT ----- */
const Footer: React.FC = () => {
    const location = useLocation();

    const navigate = useNavigate();
    const navigateToPrivacyPolicy = () => {
        window.scrollTo(0, 0);
        navigate('/privacy-policy');
    };
    const navigateToTermsOfService = () => {
        window.scrollTo(0, 0);
        navigate('/terms-of-service');
    }

    return (
        <>
        {
            location.pathname !== "/login" &&
            <div className="fixed bottom-0 w-full p-4 md:flex">
                <div className="md:max-w-screen-3xl mx-auto flex items-center w-full justify-between">
                    <p className="text-sm text-white/60">
                        © 2024 ESPEEN. All rights reserved.
                    </p>
                    <div className="space-x-14 text-sm text-white/60 md:w-auto flex items-center w-full">
                        <button onClick={navigateToPrivacyPolicy}>Privacy Policy</button>
                        <button onClick={navigateToTermsOfService}>Terms of Service</button>
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default Footer;