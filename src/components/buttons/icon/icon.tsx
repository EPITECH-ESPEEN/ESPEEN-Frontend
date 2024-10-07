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
import css from "./icon.module.css"


/* ----- PROPS ----- */
interface ButtonProps {
    icon: React.ElementType;
    onClick: () => void;
    size?: number;
};


/* ----- COMPONENT ----- */
const IconButton: React.FC<ButtonProps> = ({ icon, onClick, size = 32 }) => {
    return (
        <button
            onClick={onClick}
            className={`${css.button}`}
        >
            {React.createElement(icon, { size, stroke: "var(--color-light)" })}
        </button>
    );
};

export default IconButton;
