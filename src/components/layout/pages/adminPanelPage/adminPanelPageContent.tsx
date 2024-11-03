/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import css from "./adminPanelPageContent.module.css"
import { IUser } from "src/types/User";
import UserCard from "src/components/card/userCard/userCard";
import InputWithIcon from "src/components/inputs/withIcon/withIcon";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import LoaderPage from "src/components/loading/loaderPage";


/* ----- PROPS ----- */
interface AdminPanelPageContentProps {
    users: IUser[];
}


/* ----- COMPONENT ----- */
const AdminPanelPageContent: React.FC<AdminPanelPageContentProps> = ({ users }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const [filteredUsers, setFilteredUsers] = useState<IUser[]>(users);
    const { t } = useTranslation();

    function updateSearch(search: string) {
        setSearch(search);
        setFilteredUsers(users.filter(({ username }) => username.toLowerCase().includes(search.toLowerCase())));
    }

    return (
        <>
            <div className={css.container}>
                <div className={css.searchContainer}>
                    <InputWithIcon icon={<Search size={28} color="var(--color-light)" />} type="text" value={search} setValue={updateSearch} placeholder={t("admin.search")} />
                </div>
                <div className={css.cardContainer}>
                    {filteredUsers.map((user, index) => (
                        <UserCard key={index} user={user} setLoading={setLoading} />
                    ))}
                </div>
            </div>
            {loading && <LoaderPage />}
        </>
    );
};

export default AdminPanelPageContent;