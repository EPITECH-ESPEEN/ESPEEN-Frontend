import { UserRound, Mail, Lock } from "lucide-react";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { useRegisterMutation } from "../../redux/api/authApi";

const RegisterForm: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [register, { error }] = useRegisterMutation();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const registerData = {
            username,
            email,
            password,
        };
        register(registerData);
    };

    return (
        <div className="flex flex-col items-center">
            <form className="login_card flex items-center flex-col  w-[500px] space-y-4"
                onSubmit={submitHandler}>
        
                <div className="flex items-center bg-transparent border-3 border-white rounded-2xl px-4 py-2 w-full">
                    <UserRound size={28} color="white" className="mr-6"/>
                    <input type="text"
                        className="bg-transparent placeholder-white/60 focus:outline-none focus:ring-0 w-full"
                        id="username_field"
                        name="username"
                        placeholder="Enter an username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="flex items-center bg-transparent border-3 border-white rounded-2xl px-4 py-2 w-full">
                    <Mail size={28} color="white" className="mr-6"/>
                    <input type="text"
                        className="bg-transparent placeholder-white/60 focus:outline-none focus:ring-0 w-full"
                        id="email_field"
                        name="email"
                        placeholder="Enter an email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex items-center bg-transparent border-3 border-white rounded-2xl px-4 py-2 w-full">
                    <Lock size={28} color="white" className="mr-6"/>
                    <input type="password"
                        className="bg-transparent placeholder-white/60 focus:outline-none focus:ring-0 w-full"
                        id="password_field"
                        name="password"
                        placeholder="Enter a password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
        
{/* TODO: InputButton component */}
                    <div className="flex justify-around pt-10">
                        <button type="reset"
                            className="py-2 px-6 bg-transparent border-3 border-white font-semibold rounded-2xl hover:shadow-2xl transition duration-300"
                            onClick={() => {
                                setUsername("");
                                setEmail("");
                                setPassword("");
                            }}
                        >
                            Reset
                        </button>
                        <button type="submit"
                            className="py-2 px-6 bg-transparent border-3 border-white font-semibold rounded-2xl hover:shadow-2xl transition duration-300"
                        >
                            Register
                        </button>
                    </div>

                </form>
        </div>
    )
};

export default RegisterForm;