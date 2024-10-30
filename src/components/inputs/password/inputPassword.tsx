/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { Eye, EyeOff, Lock } from "lucide-react";
import css from "./inputPassword.module.css"
import { useState } from "react";


/* ----- PROPS ----- */
interface InputWithIconProps {
    value: string;
    setValue: (e: string) => void;
    placeholder: string;
};


/* ----- COMPONENT ----- */
const InputPassword: React.FC<InputWithIconProps> = ({ value, setValue, placeholder }) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);

    return (
        <div className={css.container}>
            <Lock size={28} color="var(--color-light)" />
            <input type={isHidden ? "password" : "text"}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={css.input}
            />
            <div className={css.icon} onClick={() => setIsHidden(!isHidden)}>
                {isHidden ? <Eye size={28} color="var(--color-light)" /> : <EyeOff size={28} color="var(--color-light)" />}
            </div>
        </div>
    );
};

export default InputPassword;
