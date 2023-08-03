import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { EmailValidator, isEmpty } from "../../../../../Utils/Validation";
import { toast } from "react-toastify";
import { UserLogin } from "../../../../../Utils/APIs/userAPI";
import { useDispatch } from "react-redux";

const Login = ({ setLoginModal, setRegisterModal, setSuitDesignModal }) => {
  const [spin, setSpin] = useState(false);

  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const FormData = (e) => {
    let { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const Login = async () => {
    let { email } = values;
    let check = isEmpty(values);
    let emailCheck = EmailValidator(email);
    if (check) {
      if (emailCheck) {
        setSpin(true);
        let res = await UserLogin(values);
        if (res?.data?.status === 200) {
          setSpin(false);
          localStorage.setItem(
            "userProfile",
            JSON.stringify(res?.data?.data?._doc?.profile)
          );
          localStorage.setItem(
            "userName",
            JSON.stringify(res?.data?.data?._doc?.firstname)
          );
          localStorage.setItem("userToken", JSON.stringify(res?.data?.token));
          toast.success(res.data.message);
          setLoginModal(false);
          setSuitDesignModal(true);
        } else {
          setSpin(false);
          toast.error(res?.data?.message || res);
        }
      } else {
        toast.error("email is not valid");
      }
    } else {
      toast.error("please fill all fields!");
    }
  };
  function hidingModals() {
    setLoginModal(false);
    setRegisterModal(true);
  }
  return (
    <div className="userRegister">
      <div className="userRegisterLeft">
        <div className="userLogo">LOGO</div>
        <div className="head">
          <h1>Login</h1>
          <p>Create Your Account!</p>
        </div>
        <div className="form">
          <div className="inputs">
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={FormData}
            />
          </div>
          <div className="inputs">
            <p>
              Password{" "}
              <span>
                <Link to="/">Forgot Password?</Link>
              </span>
            </p>
            <input
              type="password"
              placeholder="Your Password"
              onChange={FormData}
              name="password"
            />
          </div>
          <button onClick={Login}>{!spin ? "Login" : "Loading..."}</button>
          <p className="account">
            Don't have an account? <Link onClick={hidingModals}>Sign up</Link>
          </p>
        </div>
      </div>
      <div className="userRegisterRight"></div>
    </div>
  );
};

export default Login;
