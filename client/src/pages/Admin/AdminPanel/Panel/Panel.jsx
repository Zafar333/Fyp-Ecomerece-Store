import React, { useEffect, useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import BusinessIcon from "@mui/icons-material/Business";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import "./panel.css";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";

const Panel = () => {
  const navigate = useNavigate();
  const [ham, setHam] = useState(false);
  let activeStyle = { backgroundColor: "#ece8ff" };
  const [adminProfile] = useState(
    JSON.parse(localStorage.getItem("adminProfile"))
  );
  const [adminName] = useState(JSON.parse(localStorage.getItem("adminName")));
  const [EmbedFunction, setEmbedFunction] = useState(false);
  const Logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminProfile");
    localStorage.removeItem("adminName");
    navigate("/admin/login");
  };
  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setEmbedFunction(true);
    } else {
      setEmbedFunction(false);
    }
  });
  function CLoseSidebarFun() {
    setHam(true);
  }

  return (
    <div className="panel">
      <div className="leftPanel" style={{ display: ham ? "none" : "flex" }}>
        <h1>Admin</h1>
        <button onClick={() => setHam(!ham)} className="closeLeftPanelBtn">
          close
        </button>
        <hr />
        <div className="menus">
          <p className="title">Main</p>

          <NavLink
            to="/admin/panel/dashboard"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={EmbedFunction ? CLoseSidebarFun : ""}
          >
            <DashboardIcon className="icon" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink
            to="/admin/panel/users"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={EmbedFunction ? CLoseSidebarFun : ""}
          >
            <PeopleAltIcon className="icon" />
            <p>Users</p>
          </NavLink>
          <NavLink
            to="/admin/panel/products"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={EmbedFunction ? CLoseSidebarFun : ""}
          >
            <ProductionQuantityLimitsIcon className="icon" />
            <p>Products</p>
          </NavLink>
          <NavLink
            to="/admin/panel/tailors"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={EmbedFunction ? CLoseSidebarFun : ""}
          >
            <BusinessIcon className="icon" />
            <p>Tailors</p>
          </NavLink>
          <NavLink
            to="/admin/panel/settings"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={EmbedFunction ? CLoseSidebarFun : ""}
          >
            <PowerSettingsNewIcon className="icon" />
            <p>Settings</p>
          </NavLink>
        </div>
        <div className="leftPanel_logout">
          <button onClick={Logout}>logout</button>
        </div>
      </div>
      <div className="rightPanel">
        <div className="rightPanel_navbar">
          <MenuIcon
            className="hamburger"
            onClick={() => {
              setHam(!ham);
            }}
          />
          <div className="rightPanelProfile">
            <span>{adminName}</span>
            <img src={adminProfile} alt="" />
          </div>
        </div>
        <div className="rightPanel-comp">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Panel;
