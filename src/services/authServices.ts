/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { getUser, setUser } from 'src/store/User';
import { fetchPost } from './fetch';
import { clearNodes } from 'src/store/Nodes';
import { clearServices } from 'src/store/Services';
import { clearUsers } from 'src/store/Users';


/* ----- FUNCTIONS ----- */

const setTokenCookie = (token: string): void => {
    const expires = new Date();
    expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);
    document.cookie = `authToken=${token};expires=${expires.toUTCString()};path=/`;
};

const deleteTokenCookie = (): void => {
    document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

export const login = async (username: string, password: string): Promise<boolean> => {
    let responseJson;

    try {
        const response = await fetchPost("login", { username, password });
        if (!response.ok)
            return false;
        responseJson = await response.json();
    } catch (error) {
        console.error("Error login:", error);
        return false;
    }
    if (responseJson.access_token) {
        localStorage.setItem('authToken', responseJson.access_token);
        setTokenCookie(responseJson.access_token);
        await getUser();
        return true;
    } else {
        return false;
    }
};

export const register = async (username: string, email: string, password: string): Promise<boolean> => {
    let responseJson;

    try {
        const response = await fetchPost("register", { username, email, password });
        if (!response.ok)
            return false;
        responseJson = await response.json();
    } catch (error) {
        console.error("Error register:", error);
        return false;
    }
    if (responseJson.access_token) {
        localStorage.setItem('authToken', responseJson.access_token);
        setTokenCookie(responseJson.access_token);
        return true;
    } else {
        return false;
    }
};

export const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('authToken');
    return !!token;
};

export const logout = (): void => {
    localStorage.removeItem('authToken');
    deleteTokenCookie();
    setUser(null);
    window.location.href = "/";
};

export async function defaultLogin() {
    if (isAuthenticated())
        await getUser();
}

export const setToken = (token: string): void => {
    localStorage.setItem('authToken', token);
    setTokenCookie(token);
    clearNodes();
    clearServices();
    setUser(null);
    clearUsers();
    window.location.href = "/";
}
