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
import { IInput, ISelecterItem, IServiceOptionItem } from "src/types/Selecter";
import { useTranslation } from "react-i18next";
import NodeContentFields from "./nodeContentFields";

/* ----- PROPS ----- */
interface NodeContentOptionProps {
    data: INodeDatas
    options: IServiceOptionItem[]
};


/* ----- COMPONENT ----- */
const NodeContentOption: React.FC<NodeContentOptionProps> = ({ data, options }) => {
    const [selectedOption, setSelectedOption] = useState<ISelecterItem | null>(null);
    const [fields, setFields] = useState<IInput[] | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (data.option) {
            const option = options.find((option) => option.option.label === data.option);
            if (option) {
                setSelectedOption(option.option);
                setFields(option.fields);
            }
        } else {
            setSelectedOption(null);
            setFields(null);
        }
    }, [data.option, options]);

    const handleSelectedOptionChange = (item: ISelecterItem | null) => {
        if (!item) {
            setSelectedOption(null);
            setFields(null);
            data.option = null;
            data.fields = [];
            return;
        }
        setSelectedOption(item);
        data.option = item.label;
        setFields(options.find((option) => option.option.value === item.value)?.fields || null);
        data.fields = [];
    }

    return (
        <>
            <select value={selectedOption?.value} onChange={(e) => {
                const selected = options?.find((option) => option.option.value === e.target.value)?.option || null;
                handleSelectedOptionChange(selected);
            }} className={css.select}>
                <option value="">{t("area.select_action")}</option>
                {options.map((option) => <option key={option.option.value} value={option.option.value}>{t(`area.${option.option.label}`)}</option>)}
            </select>
            {selectedOption && fields && fields.length > 0 && <NodeContentFields data={data} fields={fields} />}
        </>
    );
};

export default NodeContentOption;
