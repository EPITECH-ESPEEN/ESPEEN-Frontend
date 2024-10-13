/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


/* ----- RENDER ----- */
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

if (!root) {
    console.error("Root element not found");
    process.exit(1);
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
