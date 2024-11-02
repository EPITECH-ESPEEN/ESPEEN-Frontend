/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactFlowProvider } from "@xyflow/react";

import NavBar from "src/components/layout/navbar/navbar";
import Footer from "src/components/layout/footer";
import Loader from "src/components/loading/loader";
import PrivateRoute from "src/components/auth/privateRoute";
import { getPagesConfigs } from "src/router/routesConfig";
import { setDefaultColorBlind } from "src/services/colorBlind";
import { setDefaultLanguage } from "src/i18n/i18n";
import { defaultLogin } from "./services/authServices";


/* ----- COMPONENT ----- */
function App() {
    const pagesConfigs = getPagesConfigs();
    const [loadingressources, setLoadingRessources] = useState<boolean>(true);

    useEffect(() => {
        const loadRessources = async () => {
            defaultLogin();
            setDefaultColorBlind();
            setDefaultLanguage();
            setLoadingRessources(false);
        }
        loadRessources();
    }, []);

    if (loadingressources) {
        return (
            <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Loader />
            </div>
        );
    }

    return (
        <ReactFlowProvider>
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
        </ReactFlowProvider>
    );
}

export default App;
