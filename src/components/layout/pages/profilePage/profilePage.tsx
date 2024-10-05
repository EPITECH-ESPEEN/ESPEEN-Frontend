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
import Button from "../../../buttons/default/button";
import css from "./profilePage.module.css";


/* ----- COMPONENT ----- */
const ProfilePageContent: React.FC = () => {
    const username = sessionStorage.getItem("username");

    return (
        <div className={css.container}>
            <div className="textStyle-title">Hello {username}</div>
            <Button
                label="Logout"
                onClick={() => {
                    sessionStorage.removeItem("username");
                    sessionStorage.removeItem("token");
                    window.location.reload();
                }}
            />
        </div>
    );
};

export default ProfilePageContent;

