/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { INodeDatas } from "src/types/Node";
import css from "./label.module.css";
import { ISelecterItem } from "src/types/Selecter";
import { IServiceSelecterItem } from "src/types/Services";
import { Loader } from "lucide-react";
import { getAreaServicesActions } from "src/services/services";
import { useTranslation } from "react-i18next";

/* ----- PROPS ----- */
interface ActionNodeProps {
    data: INodeDatas
};


/* ----- COMPONENT ----- */
const ActionNode: React.FC<ActionNodeProps> = ({ data }) => {
    const [servicesAction, setServicesAction] = useState<IServiceSelecterItem[] | null>(null);
    const [selectedService, setSelectedService] = useState<ISelecterItem | null>(null);
    const [actionOptions, setActionOptions] = useState<ISelecterItem[] | null>(null);
    const [selectedOption, setSelectedOption] = useState<ISelecterItem | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (servicesAction) return;
        const fetchData = async () => {
            const tmp = await getAreaServicesActions();
            setServicesAction(tmp);
        };
        fetchData();
    }, [servicesAction]);

    useEffect(() => {
        if (data.service && servicesAction) {
            const service = servicesAction.find((service) => service.item.label === data.service);
            if (service) {
                setSelectedService(service.item);
                setActionOptions(service.actions);
                if (data.option) {
                    const option = service.actions.find((option) => option.label === data.option);
                    setSelectedOption(option || null);
                }
            }
        }
    }, [data.service, data.option, servicesAction]);

    if (!servicesAction)
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
            setActionOptions(null);
            setSelectedOption(null);
            return;
        }
        setSelectedService(item);
        data.service = item.label;
        setActionOptions(servicesAction.find((service) => service.item.value === item.value)?.actions || null);
        setSelectedOption(null);
    }

    return (
        <div className={css.card}>
            <div className="color-dark textStyle-cardTitle">Action</div>
            <select value={selectedService?.value} onChange={(e) => {
                const selected = servicesAction.find((service) => service.item.value === e.target.value)?.item || null;
                handleSelectedServiceChange(selected);
            }} className={css.select}>
                <option value="">{t("area.select_service")}</option>
                {servicesAction.map((service) => <option key={service.item.value} value={service.item.value}>{service.item.label}</option>)}
            </select>
            {selectedService ?
                <select value={selectedOption?.value} onChange={(e) => {
                    const selected = actionOptions?.find((option) => option.value === e.target.value) || null;
                    setSelectedOption(selected);
                    data.option = selected?.label || "";
                }} className={css.select}>
                    <option value="">{t("area.select_action")}</option>
                    {actionOptions?.map((option) => <option key={option.value} value={option.value}>{t(`area.${option.label}`)}</option>)}
                </select>
                : null
            }
            <Handle type="source" position={Position.Right} id="a" />
        </div>
    );
};

export default ActionNode;
