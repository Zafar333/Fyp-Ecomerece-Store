import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../../components/Navbar";

const SingleTailorRoot = () => {
  return (
    <>
      <Navbar />
      <h1>Welcome To Tailor Shop</h1>
      <Outlet />
    </>
  );
};

export default SingleTailorRoot;
