/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

import { IEdge, IGraphNode, INode, INodeDatas } from "src/types/Node";

export function getNodeGraph(nodes: INode[], edges: IEdge[]): IGraphNode[] | boolean
{
    const graph: IGraphNode[] = [];
    const linkedTargets: string[] = [];

    nodes.forEach(node => {
        if (node.type !== "action")
            return;

        const targets: INode[] = [];

        edges.forEach(edge => {
            if (edge.source === node.id) {
                const tmp = nodes.find(n => n.id === edge.target);
                if (tmp) {
                    targets.push(tmp);
                    linkedTargets.push(tmp.id);
                }
            }
        });

        graph.push({
            source: node,
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

export function stringifyGraph(graph: IGraphNode[]): string[] | boolean
{
    const str: string[] = [];

    for (let i = 0; i < graph.length; i++) {
        const node = graph[i];
        const sourceData: INodeDatas = node.source.data as INodeDatas;
        if (typeof sourceData.service !== "string" || typeof sourceData.option !== "string")
            return false;
        let tmp = "";
        node.targets.forEach(target => {
            const targetData: INodeDatas = target.data as INodeDatas;
            if (typeof targetData.service !== "string" || typeof targetData.option !== "string")
                return false;
            tmp += `;${targetData.option}`;
        });
        if (tmp === "")
            return false;
        str.push(`${sourceData.option}${tmp}`);
    }

    return str;
}
