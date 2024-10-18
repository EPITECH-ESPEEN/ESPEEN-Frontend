/*
    Author:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from 'react';
import css from "./modalError.module.css";
import { useTranslation } from 'react-i18next';


/* ----- PROPS ----- */
interface ModalErrorProps {
    message: string;
    onClose: () => void;
}


/* ----- COMPONENT ----- */
const ModalError: React.FC<ModalErrorProps> = ({ message, onClose }) => {
    const { t } = useTranslation();

    return (
        <div className={css.modalerrorOverlay}>
            <div className={css.card} onClick={e => e.stopPropagation()}>
                { onClose && (
                    <div>
                        <button className={css.dismiss} type="button" onClick={onClose}>x</button>
                    </div>
                )}
                <div className={css.content}>
                    <div className="textStyle-title color-dark">{t('dico.error')}</div>
                    <div className="textStyle-text color-dark">{message}</div>
                </div>
            </div>
        </div>
    );
};

export default ModalError;
