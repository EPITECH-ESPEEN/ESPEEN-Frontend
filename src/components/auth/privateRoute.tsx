/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "src/services/authServices";


/* ----- PROPS ----- */
interface PrivateRouteProps {
    children: React.ReactNode;
}


/* ----- COMPONENT ----- */
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    if (!isAuthenticated())
        return <Navigate to="/login" replace />;
    return <>{children}</>;
};

export default PrivateRoute;
