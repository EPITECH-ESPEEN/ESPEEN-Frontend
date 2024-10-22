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
import { INode } from "src/types/Node";
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

    const onConnect = useCallback(
        (params: any) => {
            for (const edge of edges)
                if (edge.target === params.target)
                    return;
            const newEdge = { ...params, type: 'smoothstep' };
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
