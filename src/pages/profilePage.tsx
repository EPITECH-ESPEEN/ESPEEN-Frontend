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
import ProfilePageContent from "../components/layout/pages/profilePage/profilePage";


/* ----- COMPONENT ----- */
const ProfilePage: React.FC = () => {
    return (
        <div>
            <MetaData title="Profile" />
            <ProfilePageContent />
        </div>
    );
};

export default ProfilePage;

