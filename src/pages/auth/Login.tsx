// import React, { useEffect, useState } from "react";
// import { useLoginMutation } from "../../redux/api/authApi";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import AuthForm from "../../components/auth/AuthForm";

const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const[login, { isLoading, data }] = useLoginMutation();
//   const { isAuthenticated } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/");
//     }
//   }, [isAuthenticated, navigate]);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     const loginData = {
//       email,
//       password,
//     };

//     login(loginData);
//   };

    return (
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
    );
};

export default Login;