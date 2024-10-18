/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import css from "./withIcon.module.css"


/* ----- PROPS ----- */
interface InputWithIconProps {
    icon: React.ReactNode;
    type: "text" | "password" | "email" | "number" | "phone" | "textarea";
    value: string;
    setValue: (e: string) => void;
    placeholder: string;
};


/* ----- COMPONENT ----- */
const InputWithIcon: React.FC<InputWithIconProps> = ({ icon, type, value, setValue, placeholder }) => {
    return (
        <div className={css.container}>
            {icon}
            <input type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={css.input}
            />
        </div>
    );
};

export default InputWithIcon;
