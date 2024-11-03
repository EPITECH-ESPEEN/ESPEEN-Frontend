/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import css from "./adminPanelPageContent.module.css"
import { IUser } from "src/types/User";
import UserCard from "src/components/card/userCard/userCard";


/* ----- PROPS ----- */
interface AdminPanelPageContentProps {
    users: IUser[];
}


/* ----- COMPONENT ----- */
const AdminPanelPageContent: React.FC<AdminPanelPageContentProps> = ({ users }) => {
    return (
        <div className={css.container}>
            {users.map((user, index) => (
                <UserCard key={index} user={user} />
            ))}
        </div>
    );
};

export default AdminPanelPageContent;