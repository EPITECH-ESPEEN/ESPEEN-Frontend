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
import Footer from "./components/layout/Footer";
import PrivateRoute from "./components/auth/PrivateRoute";
import { getPagesConfigs } from "./router/routesConfig";


/* ----- COMPONENT ----- */
function App() {
    const pagesConfigs = getPagesConfigs();

    return (
        <Router>
            <header><NavBar /></header>
            <body>
                <div className="h-[80px]"></div>
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
