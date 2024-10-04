/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import css from "./mobile.module.css";
import EspeenIcon from "../../icons/espeenIcon";
import { CircleUserRound, Ellipsis } from "lucide-react";
import { getPagesConfigs } from "../../../router/routesConfig";
import { NavLink } from "react-router-dom";


/* ----- COMPONENT ----- */
const NavBar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const pagesConfigs = getPagesConfigs();

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
                                    {pageConfig.name}
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
