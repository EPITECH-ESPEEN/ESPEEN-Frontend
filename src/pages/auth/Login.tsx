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

    return (
        <>
        <MetaData title={'Sign in'} />
        <div className="page-container">
            <div className="ml-20">
                <h1 className="text-4xl font-bold">Espeen</h1>
                <p className="text-gray-500">Spin actions into reactions!</p>
            </div>
            <AuthForm />
            
            {/* <div className="login_card">
                <div className="flex justify-between">
                    <button className="login_card text-white font-bold py-2 px-4 rounded-tl-lg shadow-md">Log In</button>
                    <button className="login_card text-white font-bold py-2 px-4 rounded-tr-lg">Sign In</button>
                </div>

                <form className="space-y-4">
                <div className="relative">
                <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#408C60] placeholder-gray-500 text-gray-700"
                    placeholder=`{}"Enter a username..."``
                />

            </div>
            <div className="relative">
                <input type="password" className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#408C60] placeholder-gray-500 text-gray-700" placeholder="Enter a password..."/>
            </div>

            <div className="flex justify-between mt-8">
                <button type="reset" className="login_button">Reset</button>
                <button type="submit" className="login_button">Login</button>
            </div>
        </form>
        </div> */}
    </div>
    </>
    );
};

export default Login;