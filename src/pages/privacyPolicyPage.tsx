/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import MetaData from "src/components/layout/metaData";
import PrivacyPolicyPageContent from "src/components/layout/pages/privacyPolicyPage/privacyPolicyPageContent";


/* ----- COMPONENT ----- */
const PrivacyPolicyPage: React.FC = () => {
    return (
        <div>
            <MetaData title="Privacy Policy" />
            <div className="h-[80px]"></div>
            <PrivacyPolicyPageContent />
            <div className="h-[80px]"></div>
        </div>
    );
};

export default PrivacyPolicyPage;

