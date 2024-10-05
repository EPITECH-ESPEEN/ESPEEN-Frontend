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
import ServicesPageContent from "../components/layout/pages/servicesPage/servicesPageContent";


/* ----- COMPONENT ----- */
const ServicesPage: React.FC = () => {
    return (
        <div>
            <MetaData title="Services" />
            <div className="h-[80px]"></div>
            <ServicesPageContent />
        </div>
    );
};

export default ServicesPage;

