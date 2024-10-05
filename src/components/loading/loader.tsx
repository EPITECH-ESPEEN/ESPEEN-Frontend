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
import css from "./loader.module.css"

/* ----- COMPONENT ----- */
const Loader: React.FC = () => {
    return (
        <div className={css.container}>
            <div className={css.loader}></div>
        </div>
    );
};

export default Loader;
