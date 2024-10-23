/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import css from "./navbar.module.css";
import { useLocation } from "react-router-dom";


/* ----- COMPONENTS ----- */
import Laptop from "./laptop/laptop";
import Mobile from "./mobile/mobile";


/* ----- COMPONENT ----- */
const NavBar: React.FC = () => {
    const location = useLocation();

    return (
        <>
        {
            location.pathname !== "/login" &&
            <div className={css.navbar}>
                <div className={css.laptop}>
                    <Laptop />
                </div>
                <div className={css.mobile}>
                    <Mobile />
                </div>
            </div>
        }
        </>
    );
};

export default NavBar;
