/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import css from "./areaPageContent.module.css";
import { useTranslation } from "react-i18next";
import Divider from "src/components/divider/divider";
import { ISelecterItem } from "src/types/Selecter";
import Selecter from "src/components/selecter/default/selecter";
import SelecterWithTraduction from "src/components/selecter/withTrad/selecter";
import { IServiceSelecterItem } from "src/types/Services";
import { getAreaServicesActions, getAreaServicesReactions } from "src/services/services";
import { Loader, Save } from "lucide-react";
import IconButton from "src/components/buttons/icon/icon";
import { fetchPost } from "src/services/fetch";


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

    // TODO: post area
    const handleSave = () => {
        const response = fetchPost("area", {})
        console.log(response);
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
                <div className={css.saveButton}>
                    <IconButton icon={Save} onClick={handleSave} />
                </div>
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
                        baseTraduction="area.label."
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

