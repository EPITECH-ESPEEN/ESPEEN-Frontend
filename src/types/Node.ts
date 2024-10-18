/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
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
