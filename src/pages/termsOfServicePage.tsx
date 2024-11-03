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
import TermsOfServicePageContent from "src/components/layout/pages/termsOfServicePage/termsOfServicePageContent";


/* ----- COMPONENT ----- */
const TermsOfServicePage: React.FC = () => {
    return (
        <div>
            <MetaData title="Terms of service" />
            <div className="h-[80px]"></div>
                <TermsOfServicePageContent />
            <div className="h-[80px]"></div>
        </div>
    );
};

export default TermsOfServicePage;

