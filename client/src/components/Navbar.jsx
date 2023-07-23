import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "../assets/avatar.jpg";

const Navbar = () => {
  const [userToken] = useState(localStorage.getItem("userToken"));
  const userAuthData = useSelector((state) => state.userAuth);

  function Logout() {
    localStorage.removeItem("userToken");
    window.location.reload();
  }

  return (
    <div className="navbarMain">
      <div className="navbarContent">
        <div className="appName">
          <h1>Shop</h1>
        </div>
        <div className="navbarLinks">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link>Tailors</Link>
          <div className="navbarLogins">
            {userToken ? (
              <span className="userProfile">
                <img
                  src={
                    userAuthData ? userAuthData?.data?._doc?.profile : Avatar
                  }
                  alt="avatar"
                />
                <b>
                  {userAuthData
                    ? userAuthData?.data?._doc?.firstname
                    : "unKnown"}
                </b>
                <button className="userLogout" onClick={Logout}>
                  Logout
                </button>
              </span>
            ) : (
              <Link className="navbarSignup" to="/user/register">
                Sign up
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
