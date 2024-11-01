/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { getLinkedServices, getServices } from 'src/store/Services';
import { IServiceSelecter } from 'src/types/Selecter';


/* ----- FUNCTIONS ----- */
async function getFormattedAreaServices(): Promise<IServiceSelecter> {
    const tmp = await getServices();
    const services: IServiceSelecter = {
        actions: [],
        reactions: [],
    }
    tmp.forEach((service) => {
        services.actions.push({
            service: {
                label: service.name,
                value: service.uid.toString(),
            },
            options: service.actions.map((action) => {
                return {
                    label: action.name,
                    value: action.action_id.toString(),
                };
            }),
        });
        services.reactions.push({
            service: {
                label: service.name,
                value: service.uid.toString(),
            },
            options: service.reactions.map((reaction) => {
                return {
                    label: reaction.name,
                    value: reaction.reaction_id.toString(),
                };
            }),
        });
    });
    return services;
}

export async function getAreaServices(): Promise<IServiceSelecter> {
    const services = await getFormattedAreaServices();
    services.actions = services.actions.filter((service) => service.options.length > 0);
    services.reactions = services.reactions.filter((service) => service.options.length > 0);
    return services;
}


export async function atLeastOneActionReaction(): Promise<boolean> {
    const services = await getAreaServices();
    for (let i = 0; i < services.actions.length; i++) {
        if (services.actions[i].options.length > 0)
            return true;
        if (services.reactions[i].options.length > 0)
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
