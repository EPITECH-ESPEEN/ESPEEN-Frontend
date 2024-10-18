/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useCallback } from "react";
import {
    ReactFlow,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { IEdge, INode } from "src/types/Node";
import { nodeTypes } from "src/store/Nodes";


/* ----- COMPONENT ----- */
const AreaPageContent: React.FC = () => {
    const initialNodes: INode[] = [
        {
            id: '1',
            type: 'labelAction',
            position: { x: 100, y: 100 },
            data: { label: 'Node 1' },
        },
        {
            id: '2',
            type: 'labelReaction',
            position: { x: 200, y: 200 },
            data: { label: 'Node 2' },
        },
    ];
    const initialEdges: IEdge[] = [];

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
        (params: any) => {
            const newEdge = { ...params, type: 'smoothstep' };
            setEdges((eds) => addEdge(newEdge, eds));
        },
        [setEdges],
    );

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
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
    );
};

export default AreaPageContent;

