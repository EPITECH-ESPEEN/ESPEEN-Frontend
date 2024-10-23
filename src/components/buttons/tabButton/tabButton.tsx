/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import css from "./tabButton.module.css"


/* ----- PROPS ----- */
interface TabButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
};


/* ----- COMPONENT ----- */
const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`${css.tab} textStyle-text color-light ${isActive ? css.active : css.inactive}`}
        >
            {label}
        </button>
    );
};

export default TabButton;
