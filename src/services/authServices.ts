/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import { fetchPost } from './fetch';


/* ----- FUNCTIONS ----- */
export const login = async (username: string, password: string): Promise<boolean> => {
    let responseJson;

    try {
        const response = await fetchPost("login", { username, password });
        if (!response.ok)
            return false;
        responseJson = await response.json();
    } catch (error) {
        console.error("Error login:", error);
    }
    if (responseJson.access_token) {
        localStorage.setItem('authToken', responseJson.access_token);
        return true;
    } else {
        return false
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
    }
    if (responseJson.access_token) {
        localStorage.setItem('authToken', responseJson.access_token);
        return true;
    } else {
        return false
    }
};

export const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('authToken');
    return !!token;
};

export const logout = (): void => {
    localStorage.removeItem('authToken');
    window.location.reload();
};
