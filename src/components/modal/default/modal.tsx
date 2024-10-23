/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from 'react';
import css from './modal.module.css';


/* ----- PROPS ----- */
interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}


/* ----- COMPONENT ----- */
const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    return (
        <div className={css.modalOverlay} onClick={onClose}>
            <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
