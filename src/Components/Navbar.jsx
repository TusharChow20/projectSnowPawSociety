import React, { use } from "react";
import profileImg from "../assets/profile1.png";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthPRovider.jsx";

const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("Logout successful");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };
  const handleUserIconClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="navbar shadow-xl md:rounded-xl bg-white  px-4">
        <div className="navbar-start">
          <div className="dropdown z-30">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to={"/service"}>All Items</NavLink>
              </li>
              <li>
                <NavLink to={"/aboutUs"}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-12" src="/logo.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to={"/service"}>All Items</NavLink>
            </li>
            <li>
              <NavLink to={"/aboutUs"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div
                className="relative group"
                title={user.displayName || "User"}
              >
                <img
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={handleUserIconClick}
                  src={user.photoURL}
                  alt="user profile"
                />
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-secondary btn-sm lg:btn-md px-4 lg:px-10"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3 items-center">
              <img
                onClick={handleUserIconClick}
                className="w-10"
                src={profileImg}
                alt=""
              />
              <Link
                to={"/login"}
                className="btn btn-secondary btn-sm lg:btn-md px-4 lg:px-10"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
