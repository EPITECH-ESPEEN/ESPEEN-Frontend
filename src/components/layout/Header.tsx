import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRound } from 'lucide-react';
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
// import { useGetProfileQuery } from "../../redux/api/userApi";
import { useLazyLogoutQuery } from "../../redux/api/authApi";

const Header: React.FC = () => {
    const navigate = useNavigate();

    // const { isLoading } = useGetProfileQuery();
    const [logout] = useLazyLogoutQuery();

    const { user } = useSelector((state: RootState) => state.auth);

    const logoutHandler = () => {
        logout();
        navigate('/', { replace: true });
        setTimeout(() => {
            window.location.reload();
        }, 50);
    }

    if (user) {
        return (
            <nav className="navbar flex justify-between items-center px-5 py-5 drop-shadow-xl md:flex">

{/* TODO: Change to /home (EPSEED profile)*/}
            <Link to="/">
                <div className="hover:opacity-75 transition items-center ml-10 gap-x-20 hidden md:flex">
                    <img
                        src="/img/logo_white.svg"
                        alt="ESPEEN logo"
                    />
                </div>
            </Link>

    {/* TODO : Update route, set Active link effect, mobile responsiveness */}
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
            <div className="hover:opacity-75 transition items-center mr-10 gap-x-10 hidden md:flex">
                <UserRound size={50} color="white"/>
            </div>

            </nav>
        );
    } else {
        return (
            <nav className="navbar-off flex justify-between items-center px-5 py-5 md:flex">
                <Link to="/">
                    <div className="hover:opacity-75 transition items-start ml-10 gap-x-20 hidden md:flex">
                        <img
                            src="/img/logo_green.svg"
                            alt="ESPEEN logo"
                        />
                    </div>
                </Link>
            </nav>
        )
    }
};

export default Header;


//TODO: use grid instead of flex ?

// import React from "react";
// import { Link } from "react-router-dom";
// import { UserRound } from 'lucide-react';

// const Header: React.FC = () => {
//     return (
//         <nav className="navbar grid grid-cols-3 items-center px-5 py-3 mb-10 shadow-md ">
//             <Link to="/">
//                 <div className="hover:opacity-75 transition items-center ml-10 hidden md:flex">
//                     <img
//                         src="/img/logo_white.svg"
//                         alt="ESPEEN logo"
//                     />
//                 </div>
//             </Link>

//             <ul className="flex items-center justify-center space-x-8 md:space-x-36 col-span-2 ">
//                 <li>
//                     <a href="/" className="text-xl md:text-2xl hover:text-gray-200">Espeen</a>
//                 </li>
//                 <li>
//                     <a href="/" className="text-xl md:text-2xl hover:text-gray-200">Libraries</a>
//                 </li>
//                 <li>
//                     <a href="/" className="text-xl md:text-2xl hover:text-gray-200">AREA</a>
//                 </li>
//             </ul>

//             <div className="hover:opacity-75 transition items-center justify-end mr-10 hidden md:flex">
//                 <UserRound size={50} color="white" />
//             </div>
//         </nav>
//     );
// };

// export default Header;
