import React, { useState } from "react";
import "./register.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [image, setimage] = useState(null);
  return (
    <div className="tailorSignupContainer">
      <div className="tailorSignupForm">
        <div className="formImg"></div>
        <div className="formContent">
          <p className="tailorlogo">Tailor SignUp</p>
          <p className="tailorText">Signup in to your Account</p>
          <div className="profileImgCard">
            <p className="profileimgText">Upload Image</p>
          </div>
          <label>UserName:</label>
          <input
            className=""
            type="text"
            name="name"
            placeholder="Enter Your Name"
          ></input>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
          ></input>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
          ></input>
          <NavLink className="tailorSignupBtn" to="/tailor/login">
            Signup
          </NavLink>
          <NavLink className="hintText" to="/tailor/login">
            If You have an account Login?{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
