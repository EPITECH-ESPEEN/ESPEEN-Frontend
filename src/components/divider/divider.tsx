/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";


/* ----- PROPS ----- */
interface DividerProps {
    color?: string;
    direction?: "horizontal" | "vertical";
    size?: number;
    className?: string;
}


/* ----- COMPONENT ----- */
const Divider: React.FC<DividerProps> = ({ color = "var(--color-gray)", direction = "horizontal", size = 3, className = "" }) => {
    return (
        <div
            className={className}
            style={{
                backgroundColor: color,
                height: direction === "horizontal" ? size : "100%",
                width: direction === "vertical" ? size : "100%",
                borderRadius: "9999px",
            }}
        />
    );
};

export default Divider;

