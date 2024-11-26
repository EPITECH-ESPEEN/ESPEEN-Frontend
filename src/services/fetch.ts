/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- DATAS ----- */
const API_URL = "http://localhost:8080/api";
// const API_URL = "https://certain-catfish-splendid.ngrok-free.app/backend/api";

/* ----- PRIVATE FUNCTIONS ----- */
const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("authToken") || "",
    "Ngrok-Skip-Browser-Warning": "true",
  };
};

/* ----- PUBLIC FUNCTIONS ----- */
export function fetchGet(url: string) {
  const completeUrl = `${API_URL}/${url}`;
  return fetch(completeUrl, {
    method: "GET",
    headers: getHeaders(),
  });
}

export function fetchPut(url: string, body: unknown) {
  const completeUrl = `${API_URL}/${url}`;
  return fetch(completeUrl, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(body),
  });
}

export function fetchPost(url: string, body: unknown) {
  const completeUrl = `${API_URL}/${url}`;
  return fetch(completeUrl, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(body),
  });
}

export function fetchDelete(url: string) {
  const completeUrl = `${API_URL}/${url}`;
  return fetch(completeUrl, {
    method: "DELETE",
    headers: getHeaders(),
  });
}

export function getBaseUrl() {
  return API_URL;
}
