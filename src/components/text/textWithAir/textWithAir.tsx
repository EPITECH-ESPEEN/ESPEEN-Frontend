/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import css from "./textWithAir.module.css";


/* ----- PROPS ----- */
interface TextWithAirProps {
    left?: boolean;
    children?: React.ReactNode;
}


/* ----- COMPONENT ----- */
const TextWithAir: React.FC<TextWithAirProps> = ({ left = true, children }) => {
    return (
        <div className={`${css.container} ${left ? css.left : css.right}`}>
            <div className={`${css.text} ${left ? css.text_left : css.text_right}`}>{children}</div>
            <div className={css.air}></div>
        </div>
    );
};

export default TextWithAir;
