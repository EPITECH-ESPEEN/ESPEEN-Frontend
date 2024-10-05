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
import { UserRound, Mail, Lock } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRegisterMutation } from "../../redux/api/authApi";
import css from "./authForm.module.css";
import Button from "../buttons/default/button";
import InputWithIcon from "../inputs/withIcon/withIcon";
import Modal from "../modal/modal";


/* ----- COMPONENT ----- */
const RegisterForm: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);

    const [register, { error }] = useRegisterMutation();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const registerData = {
            username,
            email,
            password,
        };
        register(registerData);
        if (!error) {
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("token", password);
        }
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
                        <InputWithIcon icon={<Mail size={28} color="var(--color-light)" />} type="text" value={email} setValue={setEmail} placeholder="Enter an email..." />
                        <InputWithIcon icon={<UserRound size={28} color="var(--color-light)" />} type="text" value={username} setValue={setUsername} placeholder="Enter an username..." />
                        <InputWithIcon icon={<Lock size={28} color="var(--color-light)" />} type="password" value={password} setValue={setPassword} placeholder="Enter a password..." />
                    </div>
                    <div className={css.buttons}>
                        <Button type="reset" label="Reset" disabled={false} onClick={() => {
                            setUsername("");
                            setPassword("");
                        }} />
                        <Button type="submit" label="Register" disabled={username.length === 0 || password.length === 0} onClick={() => {}} />
                    </div>
                    </form>
            </div>
            {isError && error && <Modal title="Error" message="Something went wrong..." onClose={() => {
                setUsername("");
                setPassword("");
                setIsError(false);
            }} />}
        </>
    )
};

export default RegisterForm;