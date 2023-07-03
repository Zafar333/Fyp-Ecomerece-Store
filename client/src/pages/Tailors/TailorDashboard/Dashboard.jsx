import React, { useEffect } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch;
  useEffect(() => {
    dispatch();
  }, []);
  const [sidebar, setsidebarClose] = useState(false);

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
          <button className="tailorDashboardBtn">Logout</button>
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
            <p>Arslan</p>
            <img alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
