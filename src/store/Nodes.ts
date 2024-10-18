/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import LabelReactionNode from "src/components/nodes/reactions/label/label";
import LabelActionNode from "src/components/nodes/actions/label/label";
import { INodeTypes } from "src/types/Node";

/* ----- DATAS ----- */
export const nodeTypes: INodeTypes = {
    labelAction: LabelActionNode,
    labelReaction: LabelReactionNode,
};
