import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "../Admin/Login/Login";

const Root = () => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken")
  );
  return <>{adminToken ? <Outlet /> : <Login />}</>;
};

export default Root;
