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


/* ----- COMPONENT ----- */
function App() {
    const pagesConfigs = getPagesConfigs();

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
