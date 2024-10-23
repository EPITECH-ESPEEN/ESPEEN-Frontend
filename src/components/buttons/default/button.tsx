/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import css from "./button.module.css"


/* ----- PROPS ----- */
interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
};


/* ----- COMPONENT ----- */
const Button: React.FC<ButtonProps> = ({ label, disabled = false, onClick, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${css.button} textStyle-buttonText`}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
