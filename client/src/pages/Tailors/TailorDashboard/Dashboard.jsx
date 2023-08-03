import React, { useEffect } from "react";
import "./dashboard.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const tailorProfileDataState = useSelector(
    (state) => state.tailoradminProfile
  );
  const tailorProfileName = localStorage.getItem("tailorName");
  const tailorProfileimage = localStorage.getItem("tailorProfile");
  const [sidebar, setsidebarClose] = useState(true);
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
        className={sidebar ? "tailorLeftPanel" : "tailorLeftPanelNone"}
        // style={{ display: sidebar ? "none" : "flex" }}
      >
        <div className="tailorSidebar">
          <p className="tailorSidebarTitle">Tailor Admin</p>
          <hr></hr>
          <div className="tailorSidebarOptions">
            <Link to="/tailor/dashboard" className="optionText1">
              Dashboard
            </Link>
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

        <div className="tailorShopContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
