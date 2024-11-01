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

    const handleSelectedOptionChange = (item: ISelecterItem | null) => {
        if (!item) {
            setSelectedOption(null);
            data.option = null;
            return;
        }
        setSelectedOption(item);
        data.option = item.label;
    }

    return (
        <>
            <select value={selectedOption?.value} onChange={(e) => {
                const selected = options?.find((option) => option.value === e.target.value) || null;
                handleSelectedOptionChange(selected);
            }} className={css.select}>
                <option value="">{t("area.select_action")}</option>
                {options?.map((option) => <option key={option.value} value={option.value}>{t(`area.${option.label}`)}</option>)}
            </select>
        </>
    );
};

export default NodeContentOption;
