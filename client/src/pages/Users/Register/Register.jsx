import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="userRegister">
      <div className="userRegisterLeft">
        <div className="userLogo">LOGO</div>
        <div className="head">
          <h1>Sign up</h1>
          <p>Create Your Account!</p>
        </div>
        <div className="form">
          <div className="inputs">
            <p>First Name</p>
            <input type="text" placeholder="Your Firstname..." />
          </div>
          <div className="inputs">
            <p>Last Name</p>
            <input type="text" placeholder="Your Lastname" />
          </div>
          <div className="inputs">
            <p>Email</p>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="inputs">
            <p>
              Password{" "}
              <span>
                <Link to="/">Forgot Password?</Link>
              </span>
            </p>
            <input type="password" placeholder="Your Password" />
          </div>
          <button>Register</button>
          <p className="account">
            Already have an account? <Link>Log in</Link>
          </p>
        </div>
      </div>
      <div className="userRegisterRight"></div>
    </div>
  );
};

export default Register;
