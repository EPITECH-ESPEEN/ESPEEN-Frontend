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
import { IServiceSelecterItem } from "src/types/Services";
import { Loader } from "lucide-react";
import { useTranslation } from "react-i18next";

/* ----- PROPS ----- */
interface NodeProps {
    type: string
    data: INodeDatas
    services: IServiceSelecterItem[]
};


/* ----- COMPONENT ----- */
const NodeContent: React.FC<NodeProps> = ({ type, data, services }) => {
    const [selectedService, setSelectedService] = useState<ISelecterItem | null>(null);
    const [options, setOptions] = useState<ISelecterItem[] | null>(null);
    const [selectedOption, setSelectedOption] = useState<ISelecterItem | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (data.service && services) {
            const service = services.find((service) => service.service.label === data.service);
            if (service) {
                setSelectedService(service.service);
                setOptions(service.options);
                if (data.option) {
                    const option = service.options.find((option) => option.label === data.option);
                    setSelectedOption(option || null);
                }
            }
        }
    }, [data.service, data.option, services]);

    if (!services)
        return <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh"
        }}><Loader /></div>

    const handleSelectedServiceChange = (item: ISelecterItem | null) => {
        if (!item) {
            setSelectedService(null);
            data.service = null;
            setOptions(null);
            setSelectedOption(null);
            return;
        }
        setSelectedService(item);
        data.service = item.label;
        setOptions(services.find((service) => service.service.value === item.value)?.options || null);
        setSelectedOption(null);
    }

    return (
        <>
            <div className="color-dark textStyle-cardTitle">{t(`dico.${type}`)}</div>
            <select value={selectedService?.value} onChange={(e) => {
                const selected = services.find((service) => service.service.value === e.target.value)?.service || null;
                handleSelectedServiceChange(selected);
            }} className={css.select}>
                <option value="">{t("area.select_service")}</option>
                {services.map((service) => <option key={service.service.value} value={service.service.value}>{service.service.label}</option>)}
            </select>
            {selectedService ?
                <select value={selectedOption?.value} onChange={(e) => {
                    const selected = options?.find((option) => option.value === e.target.value) || null;
                    setSelectedOption(selected);
                    data.option = selected?.label || "";
                }} className={css.select}>
                    <option value="">{t("area.select_action")}</option>
                    {options?.map((option) => <option key={option.value} value={option.value}>{t(`area.${option.label}`)}</option>)}
                </select>
                : null
            }
        </>
    );
};

export default NodeContent;