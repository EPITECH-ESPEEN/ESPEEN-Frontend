import React from "react";
import { useGetProfileQuery } from "../../redux/api/userApi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLazyLogoutQuery } from "../../redux/api/authApi";

const Header = () => {
    const navigate = useNavigate();

    const { isLoading } = useGetProfileQuery();
    const [logout] = useLazyLogoutQuery();

    const { user } = useSelector((state) => state.auth);

    const logoutHandler = () => {
        logout();
        navigate('/', { replace: true });

        setTimeout(() => {
          window.location.reload();
        }, 50);
    }

  return (
    <nav className="navbar row">
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
    {user?.name ? (
        <div className="ms-4 dropdown">


            {/* <Link className="dropdown-item" to="/profile">
              {" "}
              Profile{" "}
            </Link> */}

            <Link
                className="btn ms-4" id="logout_btn"
                to="/"
                onClick={logoutHandler}
              >
                Logout{" "}
              </Link>
            </div>
        ) : (
          !isLoading && (
            <Link to="/login" className="btn ms-4" id="login_btn">
              {" "}
              Login{" "}
            </Link>
          )
        )}
        </div>;
    </nav>

  );
};

export default Header;