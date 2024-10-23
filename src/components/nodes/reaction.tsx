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
import { getAreaServicesReactions } from "src/services/services";
import { useTranslation } from "react-i18next";

/* ----- PROPS ----- */
interface ReactionNodeProps {
    data: INodeDatas
};


/* ----- COMPONENT ----- */
const ReactionNode: React.FC<ReactionNodeProps> = ({ data }) => {
    const [servicesReaction, setServicesReaction] = useState<IServiceSelecterItem[] | null>(null);
    const [selectedService, setSelectedService] = useState<ISelecterItem | null>(null);
    const [reactionOptions, setReactionOptions] = useState<ISelecterItem[] | null>(null);
    const [selectedOption, setSelectedOption] = useState<ISelecterItem | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (servicesReaction) return;
        const fetchData = async () => {
            const tmp = await getAreaServicesReactions();
            setServicesReaction(tmp);
        };
        fetchData();
    }, [servicesReaction]);

    useEffect(() => {
        if (data.service && servicesReaction) {
            const service = servicesReaction.find((service) => service.item.label === data.service);
            if (service) {
                setSelectedService(service.item);
                setReactionOptions(service.reactions);
                if (data.option) {
                    const option = service.reactions.find((option) => option.label === data.option);
                    setSelectedOption(option || null);
                }
            }
        }
    }, [data.service, data.option, servicesReaction]);

    if (!servicesReaction)
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
            setReactionOptions(null);
            setSelectedOption(null);
            return;
        }
        setSelectedService(item);
        data.service = item.label;
        setReactionOptions(servicesReaction.find((service) => service.item.value === item.value)?.reactions || null);
        setSelectedOption(null);
    }

    return (
        <div className={css.card}>
            <div className="color-dark textStyle-cardTitle">Reaction</div>
            <select value={selectedService?.value} onChange={(e) => {
                const selected = servicesReaction.find((service) => service.item.value === e.target.value)?.item || null;
                handleSelectedServiceChange(selected);
            }} className={css.select}>
                <option value="">{t("area.select_service")}</option>
                {servicesReaction.map((service) => <option key={service.item.value} value={service.item.value}>{service.item.label}</option>)}
            </select>
            {selectedService ?
                <select value={selectedOption?.value} onChange={(e) => {
                    const selected = reactionOptions?.find((option) => option.value === e.target.value) || null;
                    setSelectedOption(selected);
                    data.option = selected?.label || "";
                }} className={css.select}>
                    <option value="">{t("area.select_reaction")}</option>
                    {reactionOptions?.map((option) => <option key={option.value} value={option.value}>{t(`area.${option.label}`)}</option>)}
                </select>
                : null
            }
            <Handle type="target" position={Position.Left} id="a" />
        </div>
    );
};

export default ReactionNode;

