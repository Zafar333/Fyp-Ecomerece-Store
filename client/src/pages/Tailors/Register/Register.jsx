import React from "react";
import "./register.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="tailorSignupContainer">
      <div className="tailorSignupForm">
        <div className="formContent">
          <p className="tailorlogo">Tailor SignUp</p>
          <p className="tailorText">Signup in to your Account</p>
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
        </div>
      </div>
    </div>
  );
};

export default Register;
