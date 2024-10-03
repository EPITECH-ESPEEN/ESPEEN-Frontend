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
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MetaData from "../components/layout/MetaData";
import TabButton from "../components/auth/TabButton";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";


/* ----- COMPONENT ----- */
const Login: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("");
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    const handleTabClick = (label: string) => {
        setActiveTab(label);
    }

    useEffect(() => {
        if (isAuthenticated)
            navigate("/home");
    }, [isAuthenticated, navigate]);

// TODO: grid responsive
    return (
        <>
            <MetaData title="Sign in" />
            <div className="grid grid-cols-2 w-full mt-40 items-start justify-center min-h-screen">
                <div className="flex flex-col col-start-1">
                    <div className="homepage-h1 text-8xl font-black">
                        Espeen
                    </div>
                    <div className="homepage-h2 font-bold">
                        Spin actions into reactions !
                    </div>
                </div>

{/* TODO: Fix TabButton mb */}
                <div className="flex flex-col col-start-2 items-center">
                    <div className="flex w-[500px]">
                        <TabButton
                            label="Login"
                            isActive={activeTab === "Login"}
                            onClick={() => handleTabClick("Login")}
                        />
                        <TabButton
                            label="Sign Up"
                            isActive={activeTab === "Sign Up"}
                            onClick={() => handleTabClick("Sign Up")}
                        />
                    </div >
                    {activeTab === "Login" ? <LoginForm /> : <RegisterForm />}
                </div>
            </div>
        </>
    );
};

export default Login;