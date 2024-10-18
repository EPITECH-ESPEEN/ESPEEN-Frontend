/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import LabelReactionNode from "src/components/nodes/reaction";
import LabelActionNode from "src/components/nodes/action";
import LabelMiddleNode from "src/components/nodes/middle";
import { INodeTypes } from "src/types/Node";

/* ----- DATAS ----- */
export const nodeTypes: INodeTypes = {
    labelAction: LabelActionNode,
    labelMiddle: LabelMiddleNode,
    labelReaction: LabelReactionNode,
};
