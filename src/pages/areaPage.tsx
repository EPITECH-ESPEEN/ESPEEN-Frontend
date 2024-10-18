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
import AreaPageContent from "src/components/layout/pages/areaPage/areaPageContent";


/* ----- COMPONENT ----- */
const AreaPage: React.FC = () => {
    return (
        <div>
            <MetaData title="AREA" />
            <AreaPageContent />
        </div>
    );
};

export default AreaPage;

