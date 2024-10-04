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
import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../../redux/api/authApi";
import css from "./authForm.module.css";
import Button from "../buttons/default/button";
import InputWithIcon from "../inputs/withIcon/withIcon";
import Modal from "../modal/modal";


/* ----- COMPONENT ----- */
const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);

    const [login, { error }] = useLoginMutation();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loginData = {
            username,
            password,
        };
        login(loginData);
    };

    useEffect(() => {
        if (error) {
            setIsError(true);
        }
    }, [error]);

    return (
        <>
            <div className={css.container}>
                <form className={css.form} onSubmit={submitHandler}>
                    <div className={css.inputs}>
                        <InputWithIcon icon={<UserRound size={28} color="var(--color-light)" />} type="text" value={username} setValue={setUsername} placeholder="Enter an username..." />
                        <InputWithIcon icon={<Lock size={28} color="var(--color-light)" />} type="password" value={password} setValue={setPassword} placeholder="Enter a password..." />
                    </div>
                    <div className={css.buttons}>
                        <Button type="reset" label="Reset" disabled={false} onClick={() => {
                            setUsername("");
                            setPassword("");
                        }} />
                        <Button type="submit" label="Login" disabled={username.length === 0 || password.length === 0} onClick={() => {}} />
                    </div>
                </form>
            </div>
            {isError && error && <Modal title="Error" message="Check your username and password" onClose={() => {
                setUsername("");
                setPassword("");
                setIsError(false);
            }} />}
        </>
    )
};

export default LoginForm;