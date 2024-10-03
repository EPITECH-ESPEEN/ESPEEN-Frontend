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
import { useState } from "react";


/* ----- PROPS ----- */
interface TabButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
};


/* ----- COMPONENT ----- */
//TODO: Custom shadow, custom size, custom color
const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full py-1 text-white font-bold rounded-tl-3xl rounded-tr-3xl transition duration-300
            ${isActive ? "bg-[#50C878] shadow" : "bg-[#50C878]/60 shadow-bottom hover:bg-[#50C878]/90"}`}
        >
            {label}
        </button>
    );
};

export default TabButton;
