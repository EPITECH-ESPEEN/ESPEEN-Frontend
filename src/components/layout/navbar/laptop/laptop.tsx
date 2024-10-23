/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import css from "./laptop.module.css";
import EspeenIcon from "src/components/icons/espeenIcon";
import { CircleUserRound } from "lucide-react";
import { getPagesConfigs } from "src/router/routesConfig";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


/* ----- COMPONENT ----- */
const NavBar: React.FC = () => {
    const pagesConfigs = getPagesConfigs();
    const { t } = useTranslation();

    function getPageName(pageName: string): string {
        if (pageName[0] === pageName[0].toUpperCase()) {
            return pageName;
        }
        return t(`dico.${pageName}`);
    }

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
                            {getPageName(pageConfig.name)}
                        </NavLink>
                    )
                })}
            </div>
            <NavLink to="/profile">
                <CircleUserRound size={48} stroke="var(--color-light)"/>
            </NavLink>
        </div>
    );
};

export default NavBar;
