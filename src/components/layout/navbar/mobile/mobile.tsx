/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import css from "./mobile.module.css";
import EspeenIcon from "src/components/icons/espeenIcon";
import { CircleUserRound, Ellipsis } from "lucide-react";
import { getPagesConfigs } from "src/router/routesConfig";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


/* ----- COMPONENT ----- */
const NavBar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const pagesConfigs = getPagesConfigs();
    const { t } = useTranslation();

    function getPageName(pageName: string): string {
        if (pageName[0] === pageName[0].toUpperCase()) {
            return pageName;
        }
        return t(`dico.${pageName}`);
    }


    return (
        <>
            <div className={css.navbar}>
                <NavLink to="/" onClick={() => setOpen(false)}>
                    <EspeenIcon size={48} stroke="var(--color-light)"/>
                </NavLink>
                <div onClick={() => setOpen(!open)}>
                    <Ellipsis size={32} stroke="var(--color-light)"/>
                </div>
            </div>
            <div className={`${open ? css.overlayShow : ''} ${css.overlay}`} onClick={() => setOpen(false)}>
                <div className={`${open ? css.slideIn : css.slideOut} ${css.sidebar}`}>
                    <div className={css.navbarLinksContainer}>
                        {pagesConfigs.map((pageConfig) => {
                            if (!pageConfig.accessible) {
                                return null;
                            }
                            return (
                                <NavLink key={pageConfig.name} to={pageConfig.path} className={({ isActive }) => `${isActive ? css.activeLink : ''} textStyle-navbarLink color-light ${css.navbarLink}`} onClick={() => setOpen(false)}>
                                    {getPageName(pageConfig.name)}
                                </NavLink>
                            )
                        })}
                    </div>
                    <div className={css.bottom}>
                        <NavLink to="/profile" onClick={() => setOpen(false)}>
                            <CircleUserRound size={42} stroke="var(--color-light)"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
