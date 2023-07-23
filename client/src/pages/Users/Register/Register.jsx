import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserRegister } from "../../../Utils/APIs/userAPI";
import {
  isEmpty,
  checkLength,
  EmailValidator,
  PasswordValidator,
} from "../../../Utils/Validation";
import Avatar from "../../../assets/avatar.jpg";

const Register = () => {
  const [profile, setProfile] = useState("");
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    profile: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const FormData = (e) => {
    let { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const Register = async () => {
    let { firstname, lastname, email, password } = values;
    let check = isEmpty(values);
    let firstnameCheck = checkLength(firstname, 3);
    let lastnameCheck = checkLength(lastname, 3);
    let emailCheck = EmailValidator(email);
    let passCheck = PasswordValidator(password);
    if (check) {
      if (firstnameCheck && lastnameCheck) {
        if (emailCheck) {
          if (passCheck) {
            setSpin(true);
            let res = await UserRegister(values);
            if (res?.data?.status === 200) {
              setSpin(false);
              toast.success(res?.data?.message || "Data Saved Successfully!!!");
              navigate("/user/login");
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
        toast.error(
          "first name and last name should be greater than 2 characters!"
        );
      }
    } else {
      toast.error("please fill all fields");
    }
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
          </div>
          <div className="inputs">
            <p>First Name</p>
            <input
              type="text"
              placeholder="Your Firstname..."
              name="firstname"
              onChange={FormData}
            />
          </div>
          <div className="inputs">
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Your Lastname"
              name="lastname"
              onChange={FormData}
            />
          </div>
          <div className="inputs">
            <p>Email</p>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              onChange={FormData}
            />
          </div>
          <div className="inputs">
            <p>Password </p>
            <input
              type="password"
              placeholder="Your Password"
              name="password"
              onChange={FormData}
            />
          </div>
          <button onClick={Register}>
            {!spin ? "Register" : "Loading..."}
          </button>
          <p className="account">
            Already have an account? <Link to="/user/login">Log in</Link>
          </p>
        </div>
      </div>
      <div className="userRegisterRight"></div>
    </div>
  );
};

export default Register;
