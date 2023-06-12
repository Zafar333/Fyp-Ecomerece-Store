import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../Admin/Login/Login";

const Root = () => {
  let adminToken = localStorage.getItem("adminToken");
  console.log(adminToken);

  return <>{adminToken ? <Outlet /> : <Login />}</>;
};

export default Root;
