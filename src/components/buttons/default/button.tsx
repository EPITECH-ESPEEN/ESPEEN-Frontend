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
import css from "./button.module.css"


/* ----- PROPS ----- */
interface ButtonProps {
    label: string;
    disabled: boolean;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
};


/* ----- COMPONENT ----- */
const Button: React.FC<ButtonProps> = ({ label, disabled, onClick, type = "button" }) => {
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
