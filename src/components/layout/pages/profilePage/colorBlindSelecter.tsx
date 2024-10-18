/*
    Author:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import css from "./langSelecter.module.css";
import { changeColorBlind, colorBlindSelecterItem, getColorBlind } from "src/services/colorBlind";
import { ISelecterItem } from "src/types/Selecter";
import SelecterWithTraduction from "src/components/selecter/withTrad/selecter";


/* ----- COMPONENT ----- */
const ColorBlindSelecter: React.FC = () => {
    const { t } = useTranslation();
    const [colorBlind, setColorBlind] = useState<ISelecterItem | null>(getColorBlind());

    const handleColorBlindChange = (item: ISelecterItem) => {
        setColorBlind(item);
        changeColorBlind(item.value);
    }

    return (
        <div className={css.container}>
            <div className="textStyle-title color-light">{t('color_blind.select_color_blind')}</div>
            <SelecterWithTraduction
                options={colorBlindSelecterItem}
                selectedValue={colorBlind}
                onItemChange={handleColorBlindChange}
                placeholder={t('color_blind.select_color_blind')}
            />
        </div>
    );
};

export default ColorBlindSelecter;
