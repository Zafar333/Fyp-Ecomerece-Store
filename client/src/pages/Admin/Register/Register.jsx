import React, { useState } from "react";
import "./register.css";
import Avatar from "../../../assets/avatar.jpg";
import { Link } from "react-router-dom";

const Register = () => {
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
    };
    filereader.onerror = (error) => {
      console.log(error);
    };
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
          <button>Sign up</button>
        </div>
        <p className="account">
          Already have an account? <Link to="/admin/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
