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
import { Loader } from "lucide-react";
import { getAreaServices } from "src/services/services";
import NodeContent from "./nodeContent";
import { useTranslation } from "react-i18next";
import { IServiceSelecterItem } from "src/types/Selecter";

/* ----- PROPS ----- */
interface ReactionNodeProps {
    data: INodeDatas
};


/* ----- COMPONENT ----- */
const ReactionNode: React.FC<ReactionNodeProps> = ({ data }) => {
    const [servicesReaction, setServicesReaction] = useState<IServiceSelecterItem[] | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (servicesReaction) return;
        const fetchData = async () => {
            const tmp = await getAreaServices();
            setServicesReaction(tmp.reactions);
        };
        fetchData();
    }, [servicesReaction]);

    if (!servicesReaction)
        return <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh"
        }}><Loader /></div>

    return (
        <div className={css.card}>
            <div className="color-dark textStyle-cardTitle">{t("dico.reaction")}</div>
            <NodeContent data={data} services={servicesReaction} />
            <Handle type="target" position={Position.Left} id="a" />
        </div>
    );
};

export default ReactionNode;

