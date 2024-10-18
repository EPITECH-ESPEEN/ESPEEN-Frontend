/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { ILabelNodeData } from "src/types/Node";
import css from "./label.module.css";

/* ----- PROPS ----- */
interface LabelActionNodeProps {
    data: ILabelNodeData
};


/* ----- COMPONENT ----- */
const LabelActionNode: React.FC<LabelActionNodeProps> = ({ data }) => {
    return (
        <div className={css.card}>
            <p>Input</p>
            {data.label ? <p>{data.label}</p> : null}
            <Handle type="source" position={Position.Right} id="a" />
        </div>
    );
};

export default LabelActionNode;

