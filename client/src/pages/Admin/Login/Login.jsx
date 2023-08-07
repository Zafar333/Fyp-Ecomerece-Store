import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { AdminLoginAPI } from "../../../Utils/APIs/adminAPI";
import { toast } from "react-toastify";
import { EmailValidator, isEmpty } from "../../../Utils/Validation";
import { useDispatch } from "react-redux";
import { setProfile } from "../../../store/Slices/Admin/adminProfileSlice";
const Login = () => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken")
  );
  const dispatch = useDispatch();
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
          localStorage.setItem("adminToken", JSON.stringify(res?.data?.token));
          localStorage.setItem(
            "adminName",
            JSON.stringify(res?.data?.data?.name)
          );
          localStorage.setItem(
            "adminProfile",
            JSON.stringify(res?.data?.data?.profile)
          );

          dispatch(setProfile(res?.data?.data));
          toast.success(res?.data?.message || "Login Successfully!!!");
          navigate("/admin/panel/users");
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
  useEffect(() => {
    if (adminToken) {
      navigate("/admin/panel/users");
    } else {
      return;
    }
  }, [adminToken, navigate]);
  function goBack() {
    navigate("/");
  }

  return (
    <>
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
                type="password"
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
    </>
  );
};

export default Login;
