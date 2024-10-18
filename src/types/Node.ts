/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

export interface ILabelNodeData {
    label: string;
}

export interface INode {
    id: string;
    position: { x: number, y: number };
    data: any;
    type?: string;
};

export interface IEdge {
    id: string;
    type: string;
    source: string;
    target: string;
};

export interface INodeTypes {
    [key: string]: React.FC<any>;
};
