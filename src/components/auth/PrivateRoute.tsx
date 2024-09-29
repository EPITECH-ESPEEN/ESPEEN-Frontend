import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// import Loader from "../layout/Loader";
import { RootState } from "../../redux/store";

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    // if (loading) {
    //     return <Loader />;
    // }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
