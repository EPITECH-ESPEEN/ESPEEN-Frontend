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
import React from "react";
import css from "./laptop.module.css";
import EspeenIcon from "../../icons/espeenIcon";
import { UserRound } from "lucide-react";
import { getPagesConfigs } from "../../../router/routesConfig";
import { NavLink } from "react-router-dom";


/* ----- COMPONENT ----- */
const NavBar: React.FC = () => {
    const pagesConfigs = getPagesConfigs();

    return (
        <div className={css.navbar}>
            <NavLink to="/">
                <EspeenIcon size={48} stroke="var(--color-light)"/>
            </NavLink>
            <div className={css.navbarLinksContainer}>
                {pagesConfigs.map((pageConfig) => {
                    if (!pageConfig.accessible) {
                        return null;
                    }
                    return (
                        <NavLink key={pageConfig.name} to={pageConfig.path} className={({ isActive }) => `${isActive ? css.activeLink : ''} textStyle-navbarLink color-light ${css.navbarLink}`}>
                            {pageConfig.name}
                        </NavLink>
                    )
                })}
            </div>
            <NavLink to="/profile">
                <UserRound size={48} stroke="var(--color-light)"/>
            </NavLink>
        </div>
    );
};

export default NavBar;
