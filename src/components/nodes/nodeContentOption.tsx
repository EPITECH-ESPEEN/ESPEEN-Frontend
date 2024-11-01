/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import { INodeDatas } from "src/types/Node";
import css from "./label.module.css";
import { ISelecterItem } from "src/types/Selecter";
import { useTranslation } from "react-i18next";

/* ----- PROPS ----- */
interface NodeContentOptionProps {
    data: INodeDatas
    options: ISelecterItem[]
};


/* ----- COMPONENT ----- */
const NodeContentOption: React.FC<NodeContentOptionProps> = ({ data, options }) => {
    const [selectedOption, setSelectedOption] = useState<ISelecterItem | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (data.option) {
            const option = options.find((option) => option.label === data.option);
            setSelectedOption(option || null);
        }
    }, [data.option, options]);

    return (
        <select value={selectedOption?.value} onChange={(e) => {
            const selected = options?.find((option) => option.value === e.target.value) || null;
            setSelectedOption(selected);
            data.option = selected?.label || "";
        }} className={css.select}>
            <option value="">{t("area.select_action")}</option>
            {options?.map((option) => <option key={option.value} value={option.value}>{t(`area.${option.label}`)}</option>)}
        </select>
    );
};

export default NodeContentOption;
