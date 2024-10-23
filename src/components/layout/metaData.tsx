/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import { Helmet } from "react-helmet";


/* ----- PROPS ----- */
interface MetaDataProps {
    title: string;
}


/* ----- COMPONENT ----- */
const MetaData: React.FC<MetaDataProps> = ({ title }) => {
    return (
        <Helmet>
            <title>{`ESPEEN${title !== "" ? ` | ${title}` : ""}`}</title>
        </Helmet>
    );
};

export default MetaData;
