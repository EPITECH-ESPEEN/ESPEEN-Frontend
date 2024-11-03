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
import EspeenPageContent from "src/components/layout/pages/espeenPage/espeenPageContent";


/* ----- COMPONENT ----- */
const EspeenPage: React.FC = () => {
    return (
        <div>
            <MetaData title="" />
            <div className="h-[80px]"></div>
            <EspeenPageContent />
            <div className="h-[80px]"></div>
        </div>
    );
};

export default EspeenPage;

