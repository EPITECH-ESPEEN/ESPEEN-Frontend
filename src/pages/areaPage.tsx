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
import React from "react";
import MetaData from "../components/layout/metaData";
import AreaPageContent from "../components/layout/pages/areaPage/areaPageContent";


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

