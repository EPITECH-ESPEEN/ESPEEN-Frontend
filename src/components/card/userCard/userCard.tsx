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
import { CircleChevronUp, LogIn, Trash2 } from 'lucide-react';


/* ----- PROPS ----- */
interface UserCardProps {
    user: IUser;
}


/* ----- COMPONENT ----- */
const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const getFormattedDate = (date: string) => {
        const dateObject = new Date(date);
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const handleDelete = () => {
        console.log('Delete user');
    }

    const handleLogin = () => {
        console.log('Login user');
    }

    const handlePromote = () => {
        console.log('Promote user');
    }

    return (
        <div className={css.userCardContainer}>
            <div className={css.infoContainer}>
                <div>
                    <div className="textStyle-cardTitle color-dark">Username</div>
                    <div className="textStyle-cardText color-dark">{user.username}</div>
                </div>
                <div>
                    <div className="textStyle-cardTitle color-dark">Email</div>
                    <div className="textStyle-cardText color-dark">{user.email}</div>
                </div>
                <div>
                    <div className="textStyle-cardTitle color-dark">Created At</div>
                    <div className="textStyle-cardText color-dark">{getFormattedDate(user.createdAt)}</div>
                </div>
            </div>
            <div className={css.infoContainer}>
                <IconButton icon={Trash2} onClick={handleDelete} buttonColor='light' iconColor='dark' size={24} />
                <IconButton icon={LogIn} onClick={handleLogin} buttonColor='light' iconColor='dark' size={24} />
                <IconButton icon={CircleChevronUp} onClick={handlePromote} buttonColor='light' iconColor='dark' size={24} />
            </div>
        </div>
    );
};

export default UserCard;
