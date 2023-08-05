import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

const TailorRoot = () => {
  const [tailorToken, SetTailorToken] = useState(
    localStorage.getItem("tailorToken")
  );
  console.log("tailortokennnn", tailorToken);
  return <>{tailorToken ? <Outlet /> : <Navigate to={"/tailor/login"} />}</>;
};

export default TailorRoot;
