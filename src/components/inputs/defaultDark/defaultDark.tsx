/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import css from "./defaultDark.module.css"


/* ----- PROPS ----- */
interface InputWithIconProps {
    type: "text" | "password" | "email" | "number" | "phone" | "textarea";
    value: string;
    setValue: (e: string) => void;
    placeholder: string;
};


/* ----- COMPONENT ----- */
const InputDark: React.FC<InputWithIconProps> = ({ type, value, setValue, placeholder }) => {
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

export default InputDark;
