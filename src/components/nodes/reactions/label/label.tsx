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
interface LabelReactionNodeProps {
    data: ILabelNodeData
};


/* ----- COMPONENT ----- */
const LabelReactionNode: React.FC<LabelReactionNodeProps> = ({ data }) => {
    return (
        <div className={css.card}>
            <p>Card title</p>
            <p>Here are the details of the card</p>
            <Handle type="target" position={Position.Left} id="a" />
        </div>
    );
};

export default LabelReactionNode;

