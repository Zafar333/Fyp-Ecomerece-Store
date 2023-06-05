import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  isEmpty,
  checkLength,
  EmailValidator,
  PasswordValidator,
} from "../../../Utils/Validation";

const Register = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const FormData = (e) => {
    let { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const Register = () => {
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
            console.log(values);
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
          <button onClick={Register}>Register</button>
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
