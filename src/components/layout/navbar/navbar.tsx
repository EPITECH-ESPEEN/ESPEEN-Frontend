/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React from "react";
import css from "./navbar.module.css";


/* ----- COMPONENTS ----- */
import Laptop from "./laptop";
import Mobile from "./mobile";


/* ----- COMPONENT ----- */
const NavBar: React.FC = () => {
    return (
        <div className={css.navbar}>
            <div className={css.laptop}>
                <Laptop />
            </div>
            <div className={css.mobile}>
                <Mobile />
            </div>
        </div>
    );
};

export default NavBar;
