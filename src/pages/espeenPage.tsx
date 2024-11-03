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
import { logout } from "src/services/authServices";


/* ----- COMPONENT ----- */
const EspeenPage: React.FC = () => {
    return (
        <div>
            <MetaData title="" />
            <div className="h-[80px]"></div>
            <div onClick={logout}>aaa</div>
            <EspeenPageContent />
            <div className="h-[80px]"></div>
        </div>
    );
};

export default EspeenPage;

