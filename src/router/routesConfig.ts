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
import EspeenPage from "../pages/espeenPage";
import ServicesPage from "../pages/servicesPage";
import AreaPage from "../pages/areaPage";
import ProfilePage from "../pages/profilePage";
import LoginPage from "../pages/loginPage";
import { PageConfig } from "../types/routeConfig";

/* ----- DATAS ----- */
const PagesConfigs: PageConfig[] = [
    { name: 'Espeen', content: EspeenPage, logged: false, accessible: true, path: "/" },
    { name: 'services', content: ServicesPage, logged: true, accessible: true, path: "/services" },
    { name: 'AREA', content: AreaPage, logged: false, accessible: true, path: "/area" },
    { name: 'profile', content: ProfilePage, logged: true, accessible: false, path: "/profile" },
    { name: 'login', content: LoginPage, logged: false, accessible: false, path: "/login" },
]

/* ----- FUNCTIONS ----- */
export function getPagesConfigs(): PageConfig[] {
    return PagesConfigs;
}
