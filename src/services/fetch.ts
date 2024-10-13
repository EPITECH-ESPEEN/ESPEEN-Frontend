/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import axios from "axios";


/* ----- DATAS ----- */
const API_URL = "http://localhost:8080/api";


/* ----- FUNCTIONS ----- */
export function fetchGet(url: string) {
    const completeUrl = `${API_URL}/${url}`;
    return fetch(completeUrl, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken") || "",
        },
    });
}

export function axiosGet(url: string) {
    const completeUrl = `${API_URL}/${url}`;
    axios.get(completeUrl, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken") || "",
        },
    });
}

export function fetchPut(url: string, body: unknown) {
    const completeUrl = `${API_URL}/${url}`;
    return fetch(completeUrl, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("authToken") || "",
        },
        body: JSON.stringify(body),
    });
}

export function fetchPost(url: string, body: unknown) {
    const completeUrl = `${API_URL}/${url}`;
    return fetch(completeUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("authToken") || "",
        },
        body: JSON.stringify(body),
    });
}

export function fetchDelete(url: string) {
    const completeUrl = `${API_URL}/${url}`;
    return fetch(completeUrl, {
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken") || "",
        },
    });
}
