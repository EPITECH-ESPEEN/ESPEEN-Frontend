/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

import { setInitialEdges, setInitialNodes, setNodesIds } from "src/store/Nodes";
import { IEdge, IGraphNode, INode, INodeDatas, INodesIds } from "src/types/Node";

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

export function checkGraph(graph: IGraphNode[]): string | boolean
{
    for (let i = 0; i < graph.length; i++) {
        const node = graph[i];
        const sourceData: INodeDatas = node.source.data as INodeDatas;
        if (sourceData.fields) {
            for (let i = 0; i < sourceData.fields.length; i++) {
                const field = sourceData.fields[i];
                if (field.length === 0)
                    return "fill_all_fields";
            }
        }
        for (let i = 0; i < node.targets.length; i++) {
            const targetData: INodeDatas = node.targets[i].data as INodeDatas;
            if (targetData.fields) {
                for (let i = 0; i < targetData.fields.length; i++) {
                    const field = targetData.fields[i];
                    if (field.length === 0)
                        return "fill_all_fields";
                }
            }
        }
    }
    return true;
}

export function graphToTable(graph: IGraphNode[]): string[][] | boolean
{
    const table: string[][] = [];

    for (let i = 0; i < graph.length; i++) {
        const line = [];
        const node = graph[i];
        const sourceData: INodeDatas = node.source.data as INodeDatas;
        if (typeof sourceData.service !== "string" || typeof sourceData.option !== "string")
            return false;
        let source = sourceData.option;
        if (sourceData.fields && sourceData.fields.length > 0) {
            sourceData.fields.forEach(field => {
                source += `|${field}`;
            });
        }
        line.push(source);
        node.targets.forEach(tmp => {
            const targetData: INodeDatas = tmp.data as INodeDatas;
            if (typeof targetData.service !== "string" || typeof targetData.option !== "string")
                return false;
            let target = targetData.option;
            if (targetData.fields && targetData.fields.length > 0) {
                targetData.fields.forEach(field => {
                    target += `|${field}`;
                });
            }
            line.push(target);
        });
        if (line.length === 0)
            return false;
        table.push(line);
    }
    return table;
}

function capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function tableToGraph(table: string[][]): {graph: IGraphNode[], actionCounter: number, reactionCounter: number} | boolean
{
    const graph: IGraphNode[] = [];
    let actionCounter = 1;
    let reactionCounter = 1;

    for (let i = 0; i < table.length; i++) {
        const line = table[i];
        if (line.length === 0)
            return false;
        const id = `action-${actionCounter}`;
        const position = { x: 1000 * i, y: 0 };

        const dataService = capitalize(line[0].split(".")[0]);
        const dataOption = line[0].split("|")[0];
        const dataFields = line[0].split("|").slice(1);
        const data = {
            service: dataService,
            option: dataOption,
            fields: dataFields
        }
        const type = "action";

        const source: INode = { id, position, data, type};
        actionCounter++;
        const targets: INode[] = [];
        for (let j = 1; j < line.length; j++) {
            const id = `reaction-${reactionCounter}`;
            const position = { x: 1000 * i + 500, y: 250 * (j - 1) };
            const dataService = capitalize(line[j].split(".")[0]);
            const dataOption = line[j].split("|")[0];
            const dataFields = line[j].split("|").slice(1);
            const data = {
                service: dataService,
                option: dataOption,
                fields: dataFields
            }
            const type = "reaction";

            const target: INode = { id, position, data, type};
            reactionCounter++;
            targets.push(target);
        }
        graph.push({
            source: source,
            targets: targets
        });
    }

    return {graph, actionCounter, reactionCounter};
}

export function setDefaultNodes(datas: {graph: IGraphNode[], actionCounter: number, reactionCounter: number}) {
    const ids: INodesIds = {
        action: datas.actionCounter,
        reaction: datas.reactionCounter
    };
    setNodesIds(ids);

    const nodes: INode[] = [];
    const edges: IEdge[] = [];

    datas.graph.forEach(node => {
        nodes.push(node.source);
        node.targets.forEach(target => {
            nodes.push(target);
            const edge: IEdge = {
                id: `${node.source.id}-${target.id}`,
                type: "simplebezier",
                source: node.source.id,
                target: target.id
            };
            edges.push(edge);
        });
    });

    setInitialNodes(nodes);
    setInitialEdges(edges);
}