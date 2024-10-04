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
import { UserRound, Lock } from "lucide-react";
import React, { useState } from "react";
import { useLoginMutation } from "../../redux/api/authApi";
import css from "./loginForm.module.css";


/* ----- COMPONENT ----- */
const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [login, { error }] = useLoginMutation();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loginData = {
            username,
            password,
        };
        login(loginData);
    };

    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={submitHandler}>
                <div className={css.inputs}>
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
                </div>
                <div className={css.buttons}>
                    <button type="reset"
                        className="py-2 px-6 bg-transparent border-3 border-white font-semibold rounded-2xl hover:shadow-2xl transition duration-300"
                        onClick={() => {
                            setUsername("");
                            setPassword("");
                        }}
                    >
                        Reset
                    </button>
                    <button type="submit"
                        className="py-2 px-6 bg-transparent border-3 border-white font-semibold rounded-2xl hover:shadow-2xl transition duration-300"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
};

export default LoginForm;