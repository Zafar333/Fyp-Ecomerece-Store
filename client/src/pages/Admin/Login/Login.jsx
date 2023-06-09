import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="AdminRegister">
      <div className="main">
        <h1>Log in</h1>
        <p>Log in and start managing your candidates!</p>
        <div className="form">
          <input
            type="text"
            name="email"
            placeholder="your email"
            onChange={FormData}
          />
          <div className="inputs">
            <input
              type="text"
              name="password"
              placeholder="your password"
              onChange={FormData}
            />
            <span>
              <Link to="/">Forgot Password?</Link>
            </span>
          </div>
          <button>Sign up</button>
        </div>
        <p className="account">
          Dont't have an account? <Link to="/admin/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
