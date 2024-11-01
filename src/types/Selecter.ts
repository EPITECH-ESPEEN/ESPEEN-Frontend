/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

export interface ISelecterItem {
    label: string;
    value: string;
};

export interface IServiceSelecterItem {
    service: ISelecterItem;
    options: ISelecterItem[];
}

export interface IServiceSelecter {
    actions: IServiceSelecterItem[];
    reactions: IServiceSelecterItem[];
}
