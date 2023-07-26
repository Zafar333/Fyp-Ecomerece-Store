import React from "react";
import "./notFound.css";
import { Link } from "react-router-dom";
import NotFoundPic from "../../assets/NotFoundPic.svg";

const NotFound = () => {
  return (
    <div className="notFoundMain">
      <div className="notFoundLeft">
        <img src={NotFoundPic} alt="Not Found Pic" />
      </div>
      <div className="notFoundRight">
        <div className="notFoundRightContent">
          <h1>404</h1>
          <p>OOOps!</p>
          <p>Page Not Found</p>
          <p>
            This page doesn’t exist or was removed! We suggest you back to home
          </p>
          <Link to="/">Back to homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
