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
import { IInput } from "src/types/Selecter";
import { useTranslation } from "react-i18next";
import InputDark from "../inputs/defaultDark/defaultDark";

/* ----- PROPS ----- */
interface NodeContentFieldsProps {
    data: INodeDatas
    fields: IInput[]
};


/* ----- COMPONENT ----- */
const NodeContentFields: React.FC<NodeContentFieldsProps> = ({ data, fields }) => {
    const [values, setValues] = useState<string[]>([]);
    const { t } = useTranslation();

    useEffect(() => {
        if (data.fields) {
            setValues(data.fields);
        }
    }, [data.fields]);

    useEffect(() => {
        if (fields)
            setValues(new Array(fields.length).fill(""));
        else
            setValues([]);
    }, [fields]);

    const handleFieldValueChange = (index: number, value: string) => {
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);
        data.fields = newValues;
    }

    return (
        <>
            <div className="h-[20px]"></div>
            <div className="textStyle-cardTitle">Fields</div>
            {fields.map((field, index) =>
                <InputDark
                    key={index}
                    type={field.type as any}
                    value={values[index]}
                    setValue={(value) => handleFieldValueChange(index, value)}
                    placeholder={t(`area.fields.${field.label}`)}
                />
            )}
        </>
    );
};

export default NodeContentFields;
