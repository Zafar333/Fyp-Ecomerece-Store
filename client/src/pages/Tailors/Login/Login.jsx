import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { TailorLoginAPI } from "../../../Utils/APIs/tailorApi.js";
import { EmailValidator } from "../../../Utils/Validation.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTailorProfile } from "../../../store/Slices/TailorAdmin/tailorAdminProfileSlice.js";

const Login = () => {
  const [loginData, setlogin] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleData(e) {
    let { name, value } = e.target;
    setlogin({ ...loginData, [name]: value });
  }

  const tailorLogin = async () => {
    let { email, password } = loginData;
    let emailCheck = EmailValidator(email);

    if (email && password) {
      if (emailCheck) {
        try {
          let obj = { email, password };
          let res = await TailorLoginAPI(obj);
          if (res?.data.status === 200) {
            dispatch(setTailorProfile(res?.data?.data));
            localStorage.setItem("id", res?.data?.data._id);
            localStorage.setItem("tailorToken", res?.data?.token);
            localStorage.setItem("tailorName", res?.data?.data.name);
            localStorage.setItem("tailorProfile", res?.data?.data.image);
            navigate("/tailor/dashboard");
            toast.success(
              res?.data?.message || "You are Login Successfully!!!"
            );
          } else {
            toast.error(res?.data?.message || res);
          }
        } catch (error) {
          toast.error(error.message);
        }
      } else {
        toast.error("email is not valid");
      }
    } else {
      toast.error("please fill all fields");
    }
  };

  return (
    <div className="tailorSignupContainer">
      <div className="tailorSignupForm">
        <div className="formImg"></div>
        <div className="formContent">
          <p className="tailorlogo">Tailor Login</p>
          <p className="tailorText">Login to your Account</p>

          <label
            className="profileImgSec"
            htmlFor="profileImg-Tag "
            style={{ visibility: "hidden" }}
          >
            <div className="profileImgCard"></div>
          </label>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={handleData}
          ></input>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            onChange={handleData}
          ></input>
          <button className="tailorSignupBtn" onClick={tailorLogin}>
            Login
          </button>
          <NavLink className="hintText" to="/tailor/register">
            If You not have an account Signup?{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
