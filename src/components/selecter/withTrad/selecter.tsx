/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React, { useState } from 'react';
import css from './selecter.module.css';
import { ISelecterItem } from '../../../types/Selecter';
import Modal from '../../modal/default/modal';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';


/* ----- PROPS ----- */
interface SelectorProps {
    options: ISelecterItem[];
    selectedValue: ISelecterItem | null;
    onItemChange: (item: ISelecterItem) => void;
    placeholder: string;
}


/* ----- COMPONENT ----- */
const SelecterWithTraduction: React.FC<SelectorProps> = ({ options, selectedValue, onItemChange, placeholder }) => {
    const { t } = useTranslation();
    const [isModalVisible, setModalVisible] = useState(false);

    const handleSelect = (value: ISelecterItem) => {
        onItemChange(value);
        setModalVisible(false);
    };

    return (
        <div className={css.container}>
            <div className={css.selector} onClick={() => setModalVisible(true)}>
                <span className={css.text}>
                    {selectedValue ? t(`area.label.${selectedValue.label}`) : placeholder}
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
                                    <span className={css.optionText}>{t(`area.label.${item.label}`)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default SelecterWithTraduction;
