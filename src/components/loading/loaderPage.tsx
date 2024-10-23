/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import css from "./loader.module.css"


/* ----- COMPONENT ----- */
const LoaderPage: React.FC = () => {
    return (
        <div className={css.containerPage}>
            <div className={css.container}>
                <div className={css.loader}></div>
            </div>
        </div>
    );
};

export default LoaderPage;
