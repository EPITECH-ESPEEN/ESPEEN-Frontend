import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRound } from 'lucide-react';
// import { useSelector } from "react-redux";

// import { RootState } from "../../redux/store";
// import { useGetProfileQuery } from "../../redux/api/userApi";
// import { useLazyLogoutQuery } from "../../redux/api/authApi";

const Header: React.FC = () => {
    // const navigate = useNavigate();

//   const { isLoading } = useGetProfileQuery();
//   const [logout] = useLazyLogoutQuery();

//   // Typage pour le sélecteur redux
//   const { user } = useSelector((state: RootState) => state.auth);

//   const logoutHandler = () => {
//     logout();
//     navigate('/', { replace: true });

//     setTimeout(() => {
//       window.location.reload();
//     }, 50);
//   }

    return (
        <nav className="navbar flex justify-between items-center px-5 py-3 shadow-md">

        <Link to="/">
            <div className="hover:opacity-75 transition items-center ml-10 gap-x-20 hidden md:flex">
                <img
                    src="/img/logo_white.svg"
                    alt="ESPEEN logo"
                />
            </div>
        </Link>

{/* TODO : Update route, set Active link effect */}
        <ul className="flex justify-center space-x-36">
            <li>
                <a href="/" className="text-2xl hover:text-gray-200 ">Espeen</a>
            </li>
            <li>
                <a href="/" className="text-2xl hover:text-gray-200">Libraries</a>
            </li>
            <li>
                <a href="/" className="text-2xl hover:text-gray-200">AREA</a>
            </li>
        </ul>

{/* TODO: Fix color attribute */}
        <div className="hover:opacity-75 transition items-center mr-10 gap-x-20 hidden md:flex">
            <UserRound size={50} color="white"/>
        </div>

        </nav>
    );
};

export default Header;
