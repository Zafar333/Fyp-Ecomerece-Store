import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../Admin/Login/Login";

const Root = () => {
  const [adminToken, setAdminToken] = useState(
    JSON.parse(localStorage.getItem("adminToken"))
  );
  return <>{adminToken ? <Outlet /> : <Navigate to="/admin/login" />}</>;
};

export default Root;
