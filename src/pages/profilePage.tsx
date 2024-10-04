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
import MetaData from "../components/layout/metaData";


/* ----- COMPONENT ----- */
const ProfilePage: React.FC = () => {
    return (
        <div>
            <MetaData title="Profile" />
            <div className="h-[80px]"></div>
            <div>Profile Page</div>
        </div>
    );
};

export default ProfilePage;

