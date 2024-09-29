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

// TODO: grid responsive
    return (
        <> 
            <MetaData title="Sign in" />
            <div className="grid grid-cols-2 w-full mt-40 items-start justify-center min-h-screen">
                <div className="flex flex-col col-start-1">
                    <div className="homepage-h1 text-8xl font-black">Espeen</div>
                    <div className="homepage-h2 font-bold">Spin actions into reactions !</div>
                </div>
                <div className="flex flex-col col-start-2">
                    <AuthForm />
                </div>
            </div>
        </>
    );
};

export default Login;