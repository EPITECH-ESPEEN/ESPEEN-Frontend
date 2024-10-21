/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

import { IEdge, IGraphNode, INode } from "src/types/Node";

export function getNodeGraph(nodes: INode[], edges: IEdge[]): IGraphNode[] | boolean
{
    const graph: IGraphNode[] = [];
    const linkedTargets: string[] = [];

    nodes.forEach(node => {
        if (node.type !== "action")
            return;

        const targets: string[] = [];

        edges.forEach(edge => {
            if (edge.source === node.id) {
                targets.push(edge.target);
                linkedTargets.push(edge.target);
            }
        });

        graph.push({
            source: node.id,
            targets: targets
        });
    });

    for (let i = 0; i < graph.length; i++) {
        if (graph[i].targets.length === 0)
            return false;
    }
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].type === "reaction" && !linkedTargets.includes(nodes[i].id))
            return false;
    }

    return graph;
}
