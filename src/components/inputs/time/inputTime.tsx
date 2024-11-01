/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import css from "./inputTime.module.css"


/* ----- PROPS ----- */
interface InputTimeProps {
    value: string;
    setValue: (e: string) => void;
    placeholder: string;
};


/* ----- COMPONENT ----- */
const InputTime: React.FC<InputTimeProps> = ({ value, setValue, placeholder }) => {
    return (
        <div className={css.container}>
            <input type="time"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={css.input}
                placeholder={placeholder}
                min={"00:00"}
                max={"23:59"}
                step={"60"}
            />
        </div>
    );
};

export default InputTime;
