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
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/navbar/navbar";
import Footer from "./components/layout/footer";
import Loader from "./components/loading/loader";
import PrivateRoute from "./components/auth/privateRoute";
import { getPagesConfigs } from "./router/routesConfig";
import { setDefaultColorBlind } from "./services/colorBlind";


/* ----- COMPONENT ----- */
function App() {
    const pagesConfigs = getPagesConfigs();
    const [loadingressources, setLoadingRessources] = useState<boolean>(true);

//TODO @dragusheen: Check if it's correct
    useEffect(() => {
        setLoadingRessources(false);
        setDefaultColorBlind();
    });    

    if (loadingressources) {
        return (
            <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Loader />
            </div>
        );
    }

    return (
        <Router>
            <header><NavBar /></header>
            <body>
                <Routes>
                    {pagesConfigs.map((pageConfig) => {
                        const content: React.ReactElement = pageConfig.logged ?
                            <PrivateRoute><pageConfig.content /></PrivateRoute>:
                            <pageConfig.content />;
                        return (
                            <Route key={pageConfig.name} path={pageConfig.path} element={content} />
                        );
                    })}
                </Routes>
            </body>
            <footer><Footer /></footer>
        </Router>
    );
}

export default App;
