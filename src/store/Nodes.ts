/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import actionNode from "src/components/nodes/action";
import reactionNode from "src/components/nodes/reaction";
import { IEdge, INode, INodesIds, INodeTypes } from "src/types/Node";


/* ----- DATAS ----- */
export const nodeTypes: INodeTypes = {
    action: actionNode,
    reaction: reactionNode,
};

export let initialNodes: INode[] = [];

export let initialEdges: IEdge[] = [];

export const nodesIds: INodesIds = {
    action: 1,
    reaction: 1,
}


/* ----- DATAS ----- */
export function setInitialNodes(nodes: INode[]): void {
    initialNodes = nodes;
}

export function setInitialEdges(edges: IEdge[]): void {
    initialEdges = edges;
}

export function setNodesIds(ids: INodesIds): void {
    nodesIds.action = ids.action;
    nodesIds.reaction = ids.reaction;
}

export function clearNodes(): void {
    initialNodes = [];
    initialEdges = [];
    nodesIds.action = 1;
    nodesIds.reaction = 1;
}
