import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Avatar from "../assets/avatar.jpg";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [userToken] = useState(localStorage.getItem("userToken"));
  const [userProfile, setUserProfile] = useState(
    JSON.parse(localStorage.getItem("userProfile"))
  );
  const [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem("userName"))
  );
  const [showModal, setShowModal] = useState(false);

  function Logout() {
    localStorage.removeItem("userToken");
    window.location.reload();
  }

  const ShowNavbarModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="navbarMain">
      <div className="navbarContent">
        <div className="appName">
          <h1>Shop</h1>
        </div>
        <div className="navbar_hamburger_container">
          <MenuIcon className="navbar_hamburger" onClick={ShowNavbarModal} />
          <div
            className="navbar_links_inmodal"
            style={{ display: showModal ? "flex" : "none" }}
          >
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link>Tailors</Link>
            <div className="hnavbarLogins">
              {userToken ? (
                <span className="userProfile">
                  <div className="navbarprofileData">
                    <img
                      src={userProfile ? userProfile : Avatar}
                      alt="avatar"
                    />
                    <b>{userName ? userName : "unKnown"}</b>
                  </div>
                  <button className="userLogout removeMargin" onClick={Logout}>
                    Logout
                  </button>
                </span>
              ) : (
                <Link className="navbarSignup removeMargin" to="/user/register">
                  Sign up
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="navbarLinks">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link>Tailors</Link>
          <div className="navbarLogins">
            {userToken ? (
              <span className="userProfile">
                <img src={userProfile ? userProfile : Avatar} alt="avatar" />
                <b>{userName ? userName : "unKnown"}</b>
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
