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
import css from "./default.module.css"


/* ----- PROPS ----- */
interface InputWithIconProps {
    type: "text" | "password" | "email" | "number" | "phone" | "textarea";
    value: string;
    setValue: (e: string) => void;
    placeholder: string;
};


/* ----- COMPONENT ----- */
const Input: React.FC<InputWithIconProps> = ({ type, value, setValue, placeholder }) => {
    return (
        <div className={css.container}>
            <input type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={css.input}
            />
        </div>
    );
};

export default Input;