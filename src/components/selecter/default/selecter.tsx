/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState } from 'react';
import css from './selecter.module.css';
import { ISelecterItem } from 'src/types/Selecter';
import Modal from 'src/components/modal/default/modal';
import { ChevronDown } from 'lucide-react';


/* ----- PROPS ----- */
interface SelectorProps {
    options: ISelecterItem[];
    selectedValue: ISelecterItem | null;
    onItemChange: (item: ISelecterItem) => void;
    placeholder: string;
}


/* ----- COMPONENT ----- */
const Selecter: React.FC<SelectorProps> = ({ options, selectedValue, onItemChange, placeholder }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const handleSelect = (value: ISelecterItem) => {
        onItemChange(value);
        setModalVisible(false);
    };

    return (
        <div className={css.container}>
            <div className={css.selector} onClick={() => setModalVisible(true)}>
                <span className={css.text}>
                    {selectedValue ? selectedValue.label : placeholder}
                </span>
                <ChevronDown size={24} color="var(--color-light)" />
            </div>

            {isModalVisible && (
                <Modal onClose={() => setModalVisible(false)}>
                    <div className={css.modalContainer}>
                        <span className={css.optionText}>{placeholder}</span>
                        <ul className={css.optionsList}>
                            {options.map((item) => (
                                <li key={item.value} className={css.option} onClick={() => handleSelect(item)}>
                                    <span className={css.optionText}>{item.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Selecter;
