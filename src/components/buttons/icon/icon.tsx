/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import css from "./icon.module.css"


/* ----- PROPS ----- */
interface ButtonProps {
    icon: React.ElementType;
    onClick: () => void;
    size?: number;
    buttonColor?: string;
    iconColor?: string;
};


/* ----- COMPONENT ----- */
const IconButton: React.FC<ButtonProps> = ({ icon, onClick, size = 32, buttonColor = "green", iconColor = "light" }) => {
    return (
        <button
            onClick={onClick}
            className={`${css.button}`}
            style={{ backgroundColor: `var(--color-${buttonColor})` }}
        >
            {React.createElement(icon, { size, stroke: `var(--color-${iconColor})` })}
        </button>
    );
};

export default IconButton;
