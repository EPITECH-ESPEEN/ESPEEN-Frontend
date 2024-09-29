import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { useLoginMutation } from "../../redux/api/authApi";

import MetaData from "../../components/layout/MetaData";
import AuthForm from "../../components/auth/AuthForm";
import { Eclipse } from "lucide-react";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();

    const [login, { isLoading, data }] = useLoginMutation();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (isAuthenticated)
// TODO: Change to /home (EPSEED profile)
            navigate("/");
    }, [isAuthenticated, navigate]);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loginData = {
            username,
            password,
        };
        login(loginData);
    };

// TODO: grid
    return (
        <> 
            <MetaData title="Sign in" />
            <div className="page-container grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col col-start-1">
                    <div className="homepage-h1 text-4xl font-bold">Espeen</div>
                    <div className="homepage-h2">Spin actions into reactions!</div>
                </div>
                <div className="flex justify-center items-center">
                    <AuthForm />
                </div>
            </div>
        </>
    );
};

export default Login;