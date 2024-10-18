/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import { Handle, Position } from "@xyflow/react";
import { ILabelNodeData } from "src/types/Node";
import css from "./label.module.css";

/* ----- PROPS ----- */
interface LabelMiddleNodeProps {
    data: ILabelNodeData
};


/* ----- COMPONENT ----- */
const LabelMiddleNode: React.FC<LabelMiddleNodeProps> = ({ data }) => {
    return (
        <div className={css.card}>
            <p>Middle</p>
            {data.label ? <p>{data.label}</p> : null}
            <Handle type="source" position={Position.Right} id="a" />
            <Handle type="target" position={Position.Left} id="b" />
        </div>
    );
};

export default LabelMiddleNode;

