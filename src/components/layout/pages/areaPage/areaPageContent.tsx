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
import { getNodeGraph } from "src/services/nodes";
import Modal from "src/components/modal/default/modal";
import { useTranslation } from "react-i18next";


/* ----- MAIN COMPONENT ----- */
const AreaPageContent: React.FC = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [error, setError] = React.useState<string>("");
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

    const handleSave = () => {
        const result = getNodeGraph(nodes, edges);
        if (result === false) {
            setError(t("error.link_all_actions_reactions"));
            return;
        }
    }

    useEffect(() => {
        setInitialNodes(nodes);
        setInitialEdges(edges);
    }, [nodes, edges]);

    return (
        <>
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
