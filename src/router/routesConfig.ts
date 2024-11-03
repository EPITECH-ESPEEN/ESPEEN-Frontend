/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import EspeenPage from "src/pages/espeenPage";
import ServicesPage from "src/pages/servicesPage";
import AreaPage from "src/pages/areaPage";
import ProfilePage from "src/pages/profilePage";
import LoginPage from "src/pages/loginPage";
import PrivacyPolicyPage from "src/pages/privacyPolicyPage";
import TermsOfServicePage from "src/pages/termsOfServicePage";
import { PageConfig } from "src/types/routeConfig";
import AdminPanelPage from "src/pages/adminPanel";

/* ----- DATAS ----- */
const PagesConfigs: PageConfig[] = [
    { name: 'Espeen', content: EspeenPage, logged: false, accessible: true, path: "/" },
    { name: 'services', content: ServicesPage, logged: true, accessible: true, path: "/services" },
    { name: 'AREA', content: AreaPage, logged: true, accessible: true, path: "/area" },
    { name: 'profile', content: ProfilePage, logged: true, accessible: false, path: "/profile" },
    { name: 'login', content: LoginPage, logged: false, accessible: false, path: "/login" },
    { name: 'privacyPolicy', content: PrivacyPolicyPage, logged: false, accessible: false, path: "/privacy-policy" },
    { name: 'termsOfService', content: TermsOfServicePage, logged: false, accessible: false, path: "/terms-of-service" },
    { name: 'adminPanel', content: AdminPanelPage, logged: true, accessible: false, path: "/admin" },
    { name: '404', content: EspeenPage, logged: false, accessible: false, path: "*" }
]


/* ----- FUNCTIONS ----- */
export function getPagesConfigs(): PageConfig[] {
    return PagesConfigs;
}
