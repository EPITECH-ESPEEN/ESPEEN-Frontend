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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/navbar/navbar";
import Footer from "./components/layout/footer";
import PrivateRoute from "./components/auth/privateRoute";
import { getPagesConfigs } from "./router/routesConfig";
import { useEffect, useState } from "react";
import Loader from "./components/loading/loader";
import { useLoginMutation } from "./redux/api/authApi";


/* ----- COMPONENT ----- */
function App() {
    const pagesConfigs = getPagesConfigs();
    const [loadingressources, setLoadingRessources] = useState<boolean>(true);
    const [login, { error }] = useLoginMutation();

    useEffect(() => {
        const tryConnection = async () => {
            // TODO: REMOVE THE TOKEN FROM THE SESSION STORAGE !!!!
            const username = sessionStorage.getItem("username");
            const token = sessionStorage.getItem("token");
            if (username && token) {
                const loginData = {
                    username,
                    password: token,
                };
                await login(loginData);
            }
            setLoadingRessources(false);
        }
        tryConnection();
    }, [login]);

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
