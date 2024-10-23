/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import css from "./coloredButton.module.css"


/* ----- PROPS ----- */
interface ButtonProps {
    label: string;
    onClick: () => void;
    color: "green" | "red" | "dark" | "light";
};


/* ----- COMPONENT ----- */
const ColoredButton: React.FC<ButtonProps> = ({ label, onClick, color }) => {
    return (
        <button
            onClick={onClick}
            className={`${css.button} textStyle-cardText color-light`}
            style={{ backgroundColor: `var(--color-${color})` }}
        >
            {label}
        </button>
    );
};

export default ColoredButton;
