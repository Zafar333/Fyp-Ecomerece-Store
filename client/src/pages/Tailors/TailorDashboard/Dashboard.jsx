import React, { useEffect } from "react";
import "./dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const tailorProfileDataState = useSelector(
    (state) => state.tailoradminProfile
  );
  const tailorProfileName = localStorage.getItem("tailorName");
  const tailorProfileimage = localStorage.getItem("tailorProfile");
  const [sidebar, setsidebarClose] = useState(false);
  const navigate = useNavigate();
  function tailorLogout() {
    navigate("/tailor/login");
    localStorage.removeItem("id");
    localStorage.removeItem("tailorName");
    localStorage.removeItem("tailorToken");
    localStorage.removeItem("tailorProfile");
  }
  return (
    <div className="dashboardMainContainer">
      <div
        className="tailorLeftPanel"
        style={{ display: sidebar ? "none" : "flex" }}
      >
        <div className="tailorSidebar">
          <p className="tailorSidebarTitle">Tailor Admin</p>
          <div className="tailorSidebarOptions">
            <Link className="optionText1">Dashboard</Link>
            <Link className="optionText2">Orders</Link>
            <Link className="optionText3">Settings</Link>
          </div>
          <button className="tailorDashboardBtn" onClick={tailorLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="tailorRightPanel">
        <div className="tailorDashboardNavbar">
          <div>
            <MenuIcon
              className="sidebarIcon"
              onClick={() => {
                setsidebarClose(!sidebar);
              }}
            />
          </div>
          <div className="tailorNavbarLeftContent">
            <p>{tailorProfileName}</p>
            <img src={tailorProfileimage} alt="" />
          </div>
        </div>
        <h1>Tailor Dashboard</h1>
        <div className="tailorShopContainer">
          <button>Create A shop</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
