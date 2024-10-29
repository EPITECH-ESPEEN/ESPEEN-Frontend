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
import ServicesPageContent from "src/components/layout/pages/servicesPage/servicesPageContent";


/* ----- COMPONENT ----- */
const ServicesPage: React.FC = () => {
    return (
        <div>
            <MetaData title="Services" />
            <div className="h-[80px]"></div>
            <ServicesPageContent />
            <div className="h-[80px]"></div>
        </div>
    );
};

export default ServicesPage;

