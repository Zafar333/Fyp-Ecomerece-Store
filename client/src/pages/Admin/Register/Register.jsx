import React, { useState } from "react";
import "./register.css";
import Avatar from "../../../assets/avatar.jpg";
import { Link, useNavigate } from "react-router-dom";
import {
  EmailValidator,
  PasswordValidator,
  checkLength,
  isEmpty,
} from "../../../Utils/Validation";
import { AdminRegisterAPI } from "../../../Utils/APIs/adminAPI";
import { toast } from "react-toastify";

const Register = () => {
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [values, setValues] = useState({
    profile: "",
    name: "",
    email: "",
    password: "",
  });
  const FormData = (e) => {
    let { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const Profile = (e) => {
    let image = e.target.files[0];
    if (!image) return;
    const filereader = new FileReader();
    filereader.readAsDataURL(image);
    filereader.onload = () => {
      let imageResult = filereader.result;
      setProfile(imageResult);
      setValues({ ...values, profile: imageResult });
    };
    filereader.onerror = (error) => {
      console.log(error);
    };
  };
  const AdminRegister = async () => {
    let { name, email, password } = values;
    let check = isEmpty({ name, email, password });
    let firstnameCheck = checkLength(name, 3);
    let emailCheck = EmailValidator(email);
    let passCheck = PasswordValidator(password);
    if (check) {
      if (firstnameCheck) {
        if (emailCheck) {
          if (passCheck) {
            setSpin(true);
            let res = await AdminRegisterAPI(values);
            if (res?.data?.status === 200) {
              setSpin(false);
              toast.success(res?.data?.message || "Data Saved Successfully!!!");
              navigate("/admin/login");
            } else {
              setSpin(false);
              toast.error(res?.data?.message || res);
            }
          } else {
            toast.error("password should be greater than 8 characters");
          }
        } else {
          toast.error("email is not valid");
        }
      } else {
        toast.error("name should be greater than 2 characters!");
      }
    } else {
      toast.error("please fill all fields");
    }
  };
  return (
    <div className="AdminRegister">
      <div className="main">
        <h1>Sign up</h1>
        <p>Sign in and start managing your candidates!</p>
        <div className="form">
          <label htmlFor="AdminPic" className="file">
            <img src={profile ? profile : Avatar} alt="avatar" />
            <input
              type="file"
              name="AdminPic"
              id="AdminPic"
              onChange={Profile}
              accept="image/*"
            />
          </label>
          <input
            type="text"
            name="name"
            placeholder="your name"
            onChange={FormData}
          />
          <input
            type="text"
            name="email"
            placeholder="your email"
            onChange={FormData}
          />
          <input
            type="text"
            name="password"
            placeholder="your password"
            onChange={FormData}
          />
          <button onClick={AdminRegister}>
            {!spin ? "Register" : "Loading..."}
          </button>
        </div>
        <p className="account">
          Already have an account? <Link to="/admin/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
