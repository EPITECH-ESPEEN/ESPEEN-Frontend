/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React from 'react';
import css from "./modal.module.css";


/* ----- PROPS ----- */
interface ModalProps {
    title: string;
    message: string;
    onClose?: () => void;
}


/* ----- COMPONENT ----- */
const Modal: React.FC<ModalProps> = ({ title, message, onClose }) => {
    if (!title || !message) return null;

    return (
        <div className={css.modalOverlay}>
            <div className={css.card} onClick={e => e.stopPropagation()}>
                { onClose && (
                    <div>
                        <button className={css.dismiss} type="button" onClick={onClose}>x</button>
                    </div>
                )}
                <div className={css.content}>
                    <div className="textStyle-title color-dark">{title}</div>
                    <div className="textStyle-text color-dark">{message}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
