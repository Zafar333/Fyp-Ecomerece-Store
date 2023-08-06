import React, { useEffect } from "react";
import "./dashboard.css";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteTailorApi } from "../../../Utils/APIs/tailorApi";

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

  async function deleteTailorAccount() {
    let id = localStorage.getItem("id");
    if (id) {
      try {
        const res = await deleteTailorApi(id);
        if (res.data.status == 200) {
          toast.success(res.data.message);
          navigate("/tailor/login");
          localStorage.removeItem("id");
          localStorage.removeItem("tailorName");
          localStorage.removeItem("tailorToken");
          localStorage.removeItem("tailorProfile");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
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
            <Link className="optionText2" to="/tailor/dashboard/tailorOrders">
              Orders
            </Link>
            <Link className="optionText3" onClick={deleteTailorAccount}>
              Delete Account
            </Link>
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
