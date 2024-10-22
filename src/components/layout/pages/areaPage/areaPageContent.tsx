/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useCallback, useEffect } from "react";
import {
    ReactFlow,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { initialEdges, initialNodes, nodesIds, nodeTypes, setInitialEdges, setInitialNodes } from "src/store/Nodes";
import Sidebar from "./sidebar";
import { IEdge, INode } from "src/types/Node";
import { getNodeGraph, stringifyGraph } from "src/services/nodes";
import Modal from "src/components/modal/default/modal";
import { useTranslation } from "react-i18next";
import { fetchPost } from "src/services/fetch";
import LoaderPage from "src/components/loading/loaderPage";


/* ----- MAIN COMPONENT ----- */
const AreaPageContent: React.FC = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [error, setError] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);
    const { screenToFlowPosition } = useReactFlow();
    const { t } = useTranslation();








    const MIN_DISTANCE = 600;

    const getClosestEdge = (node: INode, nodes: INode[]): IEdge | null => {
        let closestNode: INode | null = null;
        let closestDistance = Number.MAX_VALUE;

        for (const n of nodes) {
            if (n.id === node.id) continue;

            const dx = n.position.x - node.position.x;
            const dy = n.position.y - node.position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < closestDistance && distance < MIN_DISTANCE) {
                closestDistance = distance;
                closestNode = n;
            }
        }
        if (!closestNode)
            return null;
        const isSource = closestNode.position.x < node.position.x;
        return {
            id: isSource
                ? `${closestNode.id}-${node.id}`
                : `${node.id}-${closestNode.id}`,
            type: 'default',
            source: isSource ? closestNode.id : node.id,
            target: isSource ? node.id : closestNode.id,
        };
    };

    const onNodeDrag = useCallback(
        (_: any, node: INode) => {
            const closeEdge = getClosestEdge(node, nodes);
            setEdges((existingEdges) => {
                const updatedEdges = existingEdges.filter((e) => e.type !== 'default');
                if (closeEdge && !updatedEdges.some((e) => e.source === closeEdge.source && e.target === closeEdge.target)) {
                    closeEdge.type = 'default';
                    updatedEdges.push(closeEdge);
                }
                return updatedEdges;
            });
        },
        [nodes, setEdges],
    );

    const onNodeDragStop = useCallback(
        (_: any, node: INode) => {
            const closeEdge = getClosestEdge(node, nodes);
            setEdges((existingEdges) => {
                const updatedEdges = existingEdges.filter((e) => e.type !== 'default');
                if (closeEdge && !updatedEdges.some((e) => e.source === closeEdge.source && e.target === closeEdge.target)) {
                    updatedEdges.push({
                        ...closeEdge,
                        type: 'simplebezier',
                    });
                }
                return updatedEdges;
            });
        },
        [nodes, setEdges],
    );










    const onConnect = useCallback(
        (params: any) => {
            for (const edge of edges)
                if (edge.target === params.target)
                    return;
            const newEdge = { ...params, type: 'simplebezier' };
            setEdges((eds) => addEdge(newEdge, eds));
        },
        [edges, setEdges],
    );

    const onDragOver = (event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const onDrop = (event: React.DragEvent) => {
        event.preventDefault();
        const type = event.dataTransfer.getData('application/reactflow');
        const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        });
        const nodeId = `${type}-${nodesIds[type]}`;
        const newNode: INode = {
            id: nodeId,
            type,
            position,
            data: {},
        };
        nodesIds[type] += 1;
        setNodes((nds) => nds.concat(newNode));
    };

    const handleSave = async () => {
        const graph = getNodeGraph(nodes, edges);
        if (typeof graph === "boolean") {
            setError(t("error.link_all_actions_reactions"));
            return;
        }
        const stringifyedGraph = stringifyGraph(graph);
        if (typeof stringifyedGraph === "boolean") {
            setError(t("error.fill_all_actions_reactions"));
            return;
        }
        setLoading(true);
        await fetchPost("/user/area", { area: stringifyedGraph });
        setLoading(false);
    }

    useEffect(() => {
        setInitialNodes(nodes);
        setInitialEdges(edges);
    }, [nodes, edges]);

    return (
        <>
            {loading && <LoaderPage /> }
            <Sidebar handleSave={handleSave} />
            <div style={{ width: '100vw', height: '100vh' }} onDragOver={onDragOver} onDrop={onDrop}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    onNodeDrag={onNodeDrag}
                    onNodeDragStop={onNodeDragStop}
                >
                    <Background gap={12} size={1} />
                </ReactFlow>
            </div>
            {error &&
                <Modal onClose={() => setError("")}>
                    <div className="color-red textStyle-cardTitle">
                        {error}
                    </div>
                </Modal>
            }
        </>
    );
};

export default AreaPageContent;
