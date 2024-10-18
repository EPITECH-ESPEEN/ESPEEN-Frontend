/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useCallback, useRef, useState } from "react";
import {
    ReactFlow,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { IEdge, INode } from "src/types/Node";
import { nodeTypes } from "src/store/Nodes";
import Sidebar from "./sidebar";

/* ----- MAIN COMPONENT ----- */
const AreaPageContent: React.FC = () => {
    const [nodeId, setNodeId] = useState(5)

    const initialNodes: INode[] = [
        {
            id: '1',
            type: 'labelAction',
            position: { x: -100, y: 0 },
            data: { label: 'Node 1' },
        },
        {
            id: '2',
            type: 'labelReaction',
            position: { x: 400, y: -100 },
            data: { label: 'Node 2' },
        },
        {
            id: '3',
            type: 'labelReaction',
            position: { x: 400, y: 100 },
            data: { label: 'Node 3' },
        },
        {
            id: '4',
            type: 'labelMiddle',
            position: { x: 200, y: 50 },
            data: { label: 'Node 4' },
        },
    ];

    const initialEdges: IEdge[] = [
        {
            id: 'e1-2',
            source: '1',
            target: '2',
            type: 'smoothstep',
        },
        {
            id: 'e1-4',
            source: '1',
            target: '4',
            type: 'smoothstep',
        },
        {
            id: 'e4-3',
            source: '4',
            target: '3',
            type: 'smoothstep',
        },
    ];

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const { screenToFlowPosition } = useReactFlow();

    const onConnect = useCallback(
        (params: any) => {
            const newEdge = { ...params, type: 'smoothstep' };
            setEdges((eds) => addEdge(newEdge, eds));
        },
        [setEdges],
    );

    const onDragOver = (event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const onDrop = (event: React.DragEvent) => {
        console.log(`id: ${nodeId}`)
        event.preventDefault();
        const type = event.dataTransfer.getData('application/reactflow');
        const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        });
        const newNode = {
            id: nodeId.toString(),
            type,
            position,
            data: { label: `Node ${nodeId.toString()}` },
        };
        setNodeId(nodeId + 1);
        setNodes((nds) => nds.concat(newNode));
    };

    return (
        <>
            <Sidebar />
            <div style={{ width: '100vw', height: '100vh' }} onDragOver={onDragOver} onDrop={onDrop}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    fitView={true}
                >
                    <Background gap={12} size={1} />
                </ReactFlow>
            </div>
        </>
    );
};

export default AreaPageContent;
