/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MetaData from "src/components/layout/metaData";
import AdminPanelPageContent from "src/components/layout/pages/adminPanelPage/adminPanelPageContent";
import LoaderPage from "src/components/loading/loaderPage";
import Modal from "src/components/modal/default/modal";
import { getUsers } from "src/store/Users";
import { IUser } from "src/types/User";


/* ----- COMPONENT ----- */
const AdminPanelPage: React.FC = () => {
    const [users, setUsers] = useState<IUser[] | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getUsers();
            setUsers(response);
        }
        fetchData();
    }, []);

    if (users === null)
        return <LoaderPage />

    if (users.length === 0)
        return <Modal onClose={() => { }}>
            <div className="textStyle-title color-red">{t('admin.not_admin')}</div>
        </Modal>

    return (
        <div>
            <MetaData title="Admin" />
            <div className="h-[80px]"></div>
            <AdminPanelPageContent users={users} />
            <div className="h-[80px]"></div>
        </div>
    );
};

export default AdminPanelPage;
