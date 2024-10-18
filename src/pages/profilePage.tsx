/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import MetaData from "src/components/layout/metaData";
import ProfilePageContent from "src/components/layout/pages/profilePage/profilePage";


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

