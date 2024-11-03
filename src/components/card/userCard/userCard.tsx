/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from 'react';
import css from './userCard.module.css';
import { IUser } from 'src/types/User';
import IconButton from 'src/components/buttons/icon/icon';
import { CircleChevronDown, CircleChevronUp, LogIn, Trash2 } from 'lucide-react';
import { fetchDelete, fetchPost } from 'src/services/fetch';
import { fetchUsers } from 'src/store/Users';
import { setToken } from 'src/services/authServices';
import { useTranslation } from 'react-i18next';


/* ----- PROPS ----- */
interface UserCardProps {
    user: IUser;
    setLoading: (loading: boolean) => void;
}


/* ----- COMPONENT ----- */
const UserCard: React.FC<UserCardProps> = ({ user, setLoading }) => {
    const { t } = useTranslation();

    const getFormattedDate = (date: string) => {
        const dateObject = new Date(date);
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const handleDelete = async () => {
        setLoading(true);
        const response = await fetchDelete(`users/${user.uid}`);
        if (response.status === 200) {
            await fetchUsers();
            window.location.reload();
        }
        setLoading(false);
    }

    const handleLogin = () => {
        setLoading(true);
        setToken(user.user_token);
        setLoading(false);
    }

    const handlePromote = async () => {
        setLoading(true);
        user.role = user.role === 'admin' ? 'user' : 'admin';
        const response = await fetchPost(`users/${user.uid}`, user);
        if (response.status === 200) {
            await fetchUsers();
            window.location.reload();
        }
        setLoading(false);
    }

    return (
        <div className={css.userCardContainer}>
            <div className={css.infoContainer}>
                <div>
                    <div className="textStyle-cardTitle color-dark">{t('dico.username')}</div>
                    <div className="textStyle-cardText color-dark">{user.username}</div>
                </div>
                <div>
                    <div className="textStyle-cardTitle color-dark">{t('dico.email')}</div>
                    <div className="textStyle-cardText color-dark">{user.email}</div>
                </div>
                <div>
                    <div className="textStyle-cardTitle color-dark">{t('dico.created_at')}</div>
                    <div className="textStyle-cardText color-dark">{getFormattedDate(user.createdAt)}</div>
                </div>
                <div>
                    <div className="textStyle-cardTitle color-dark">{t('dico.role')}</div>
                    <div className="textStyle-cardText color-dark">{t(`dico.${user.role}`)}</div>
                </div>
            </div>
            <div className={css.infoContainer}>
                <IconButton icon={Trash2} onClick={handleDelete} buttonColor='light' iconColor='dark' size={24} />
                <IconButton icon={LogIn} onClick={handleLogin} buttonColor='light' iconColor='dark' size={24} />
                <IconButton icon={user.role === 'admin' ? CircleChevronDown : CircleChevronUp} onClick={handlePromote} buttonColor='light' iconColor='dark' size={24} />
            </div>
        </div>
    );
};

export default UserCard;
