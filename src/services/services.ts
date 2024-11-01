/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { getLinkedServices, getServices } from 'src/store/Services';
import { IServiceSelecterItem } from 'src/types/Services';


/* ----- FUNCTIONS ----- */
async function getAreaServices(): Promise<IServiceSelecterItem[]> {
    const tmp = await getServices();
    const services: IServiceSelecterItem[] = [];
    tmp.forEach((service) => {
        services.push({
            item: {
                label: service.name,
                value: service.uid.toString(),
            },
            actions: service.actions.map((action) => {
                return {
                    label: action.name,
                    value: action.action_id.toString(),
                };
            }),
            reactions: service.reactions.map((reaction) => {
                return {
                    label: reaction.name,
                    value: reaction.reaction_id.toString(),
                };
            }),
        });
    });
    return services;
}

export async function getAreaServicesActions(): Promise<IServiceSelecterItem[]> {
    const services = await getAreaServices();
    const filteredServices = services.filter((service) => service.actions.length > 0);
    return filteredServices;
}

export async function getAreaServicesReactions(): Promise<IServiceSelecterItem[]> {

    const services = await getAreaServices();
    const filteredServices = services.filter((service) => service.reactions.length > 0);
    return filteredServices;
}

export async function atLeastOneActionReaction(): Promise<boolean> {
    const services = await getAreaServices();
    for (let i = 0; i < services.length; i++) {
        if (services[i].actions.length > 0 || services[i].reactions.length > 0)
            return true;
    }
    return false;
}

export async function isServiceLinked(serviceName: string): Promise<boolean> {
    const tmp = await getLinkedServices();
    for (let i = 0; i < tmp.length; i++)
        if (tmp[i].toLowerCase() === serviceName.toLowerCase())
            return true;
    return false;
}
