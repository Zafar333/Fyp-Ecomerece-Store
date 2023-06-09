import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { AdminLoginAPI } from "../../../Utils/APIs/adminAPI";
import { toast } from "react-toastify";
import { EmailValidator, isEmpty } from "../../../Utils/Validation";
const Login = () => {
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const FormData = (e) => {
    let { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const AdminLogin = async () => {
    let { email } = values;
    let check = isEmpty(values);
    let emailCheck = EmailValidator(email);
    if (check) {
      if (emailCheck) {
        setSpin(true);
        let res = await AdminLoginAPI(values);
        if (res?.data?.status === 200) {
          setSpin(false);
          toast.success(res?.data?.message || "Login Successfully!!!");
          navigate("/admin/login");
        } else {
          setSpin(false);
          toast.error(res?.data?.message || res);
        }
      } else {
        toast.error("email is not valid");
      }
    } else {
      toast.error("please fill all fields");
    }
  };

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
          <button onClick={AdminLogin}>
            {!spin ? "Log in" : "Loading..."}
          </button>
        </div>
        <p className="account">
          Don't have an account? <Link to="/admin/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
