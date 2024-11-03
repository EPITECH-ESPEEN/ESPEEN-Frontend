/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { fetchGet } from "src/services/fetch";
import { IService } from "src/types/Services";


/* ----- DATAS ----- */
let oauthFetch: number = 0;
let oauth: IService | null = null;


/* ----- FETCH ----- */
export async function fetchOauth() {
    try {
        const response = await fetchGet("oauth");
        const jsonResponse = await response.json();
        oauthFetch = Date.now();
        oauth = { ...(jsonResponse.google as IService) };
    } catch (error) {
        console.error("Error fetching services: ", error);
    }
}

/* ----- GETTERS ----- */
export async function getOauth() {
    if (oauth === null || Date.now() - oauthFetch > 1000 * 60 * 60 * 24) await fetchOauth();
    return oauth;
}
