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
import { IServiceSelecterItem } from "src/types/Services";
import { Loader } from "lucide-react";
import { getAreaServices } from "src/services/services";
import NodeContent from "./nodeContent";

/* ----- PROPS ----- */
interface ActionNodeProps {
    data: INodeDatas
};


/* ----- COMPONENT ----- */
const ActionNode: React.FC<ActionNodeProps> = ({ data }) => {
    const [servicesAction, setServicesAction] = useState<IServiceSelecterItem[] | null>(null);

    useEffect(() => {
        if (servicesAction) return;
        const fetchData = async () => {
            const tmp = await getAreaServices();
            setServicesAction(tmp.actions);
        };
        fetchData();
    }, [servicesAction]);

    if (!servicesAction)
        return <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh"
        }}><Loader /></div>

    return (
        <div className={css.card}>
            <NodeContent type="action" data={data} services={servicesAction} />
            <Handle type="source" position={Position.Right} id="a" />
        </div>
    );
};

export default ActionNode;
