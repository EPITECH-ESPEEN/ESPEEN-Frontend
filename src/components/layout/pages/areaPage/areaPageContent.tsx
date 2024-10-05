/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import css from "./areaPageContent.module.css";
import { useTranslation } from "react-i18next";
import Divider from "../../../divider/divider";
import { ISelecterItem } from "../../../../types/Selecter";
import Selecter from "../../../selecter/default/selecter";
import SelecterWithTraduction from "../../../selecter/withTrad/selecter";
import { IServiceSelecterItem } from "../../../../types/Services";
import { getAreaServicesActions, getAreaServicesReactions } from "../../../../services/services";
import { Loader } from "lucide-react";
import Button from "../../../buttons/default/button";


/* ----- COMPONENT ----- */
const AreaPageContent: React.FC = () => {
    const { t } = useTranslation();
    const [servicesAction, setServicesAction] = useState<IServiceSelecterItem[] | null>(null);
    const [selectedActionService, setSelectedActionService] = useState<ISelecterItem | null>(null);
    const [selectedaction, setSelectedAction] = useState<ISelecterItem | null>(null);
    const [actionDataOptions, setActionDataOptions] = useState<ISelecterItem[] | null>(null);

    const [servicesReaction, setServicesReaction] = useState<IServiceSelecterItem[] | null>(null);
    const [selectedReactionService, setSelectedReactionService] = useState<ISelecterItem | null>(null);
    const [selectedReaction, setSelectedReaction] = useState<ISelecterItem | null>(null);
    const [reactionDataOptions, setReactionDataOptions] = useState<ISelecterItem[] | null>(null);

    const handleSelectedActionServiceChange = (item: ISelecterItem) => {
        setSelectedActionService(item);
        setSelectedAction(null);
        setActionDataOptions(servicesAction!.find((service) => service.item.value === item.value)!.actions);
    }

    const handleReselectedActionServiceChange = (item: ISelecterItem) => {
        setSelectedReactionService(item);
        setSelectedReaction(null);
        setReactionDataOptions(servicesReaction!.find((service) => service.item.value === item.value)!.reactions);
    }

    const handleSave = () => {
        // TODO: Save the data
        console.log("Save");
    }

    const handleDelete = () => {
        // TODO: Delete the data
        console.log("Delete");
    }

    useEffect(() => {
        if (servicesAction && servicesReaction) return;
        const fetchData = async () => {
            const tmp = await getAreaServicesActions();
            setServicesAction(tmp);
            const tmp2 = await getAreaServicesReactions();
            setServicesReaction(tmp2);
            console.log("data fetched");
        }
        fetchData();
    });

    if (!servicesAction || !servicesReaction)
        return <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh"
        }}><Loader /></div>

    return (
        <div className="flex flex-col h-[100vh]">
            <div className="h-[80px]"></div>
            <div className={css.container}>
                <div className="flex flex-col w-full">
                    <div className="textStyle-title color-light">{t("dico.action")}</div>
                    <Selecter
                        options={servicesAction.map((service) => service.item)}
                        selectedValue={selectedActionService}
                        onItemChange={handleSelectedActionServiceChange}
                        placeholder={t("area.select_service")}
                    />
                    <SelecterWithTraduction
                        options={actionDataOptions || []}
                        selectedValue={selectedaction}
                        onItemChange={setSelectedAction}
                        placeholder={t("area.select_action")}
                    />
                </div>
                <Divider direction="vertical" className={css.dividerVertical} />
                <Divider className={css.dividerHorizontal} />
                <div className="flex flex-col w-full">
                    <div className="textStyle-title color-light">{t("dico.reaction")}</div>
                    <Selecter
                        options={servicesReaction.map((service) => service.item)}
                        selectedValue={selectedReactionService}
                        onItemChange={handleReselectedActionServiceChange}
                        placeholder={t("area.select_service")}
                    />
                    <SelecterWithTraduction
                        options={reactionDataOptions || []}
                        selectedValue={selectedReaction}
                        onItemChange={setSelectedReaction}
                        placeholder={t("area.select_reaction")}
                    />
                </div>
            </div>
        </div>
    );
};

export default AreaPageContent;

