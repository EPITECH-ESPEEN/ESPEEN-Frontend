/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import ReactDOM from "react-dom/client";
import "src/index.css";
import App from "src/App";

/* ----- RENDER ----- */
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

if (!root) {
  console.error("Root element not found");
  process.exit(1);
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
