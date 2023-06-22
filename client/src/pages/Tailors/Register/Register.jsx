import React, { useState } from "react";
import "./register.css";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TailorRegisterAPI } from "../../../Utils/APIs/tailorApi";
import { EmailValidator } from "../../../Utils/Validation";

const Register = () => {
  const [image, setimage] = useState(null);
  const [signupData, setSignup] = useState();
  const navigate = useNavigate();
  function profileHandleImg(e) {
    let file = e.target.files[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      let result = fileReader.result;
      setimage(result);
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }
  function handleData(e) {
    let { name, value } = e.target;
    setSignup({ ...signupData, [name]: value });
  }

  const tailorSignup = async () => {
    console.log("signup data", signupData);
    let { name, email, password } = signupData;
    let emailCheck = EmailValidator(email);

    if (image && name && email && password) {
      if (emailCheck) {
        try {
          let obj = { image, name, email, password };
          let res = await TailorRegisterAPI(obj);
          if (res?.data.status === 200) {
            navigate("/tailor/login");
            toast.success(res?.data?.message || "Data Saved Successfully!!!");
          } else {
            toast.error(res?.data?.message || res);
          }
        } catch (error) {
          console.log("dsfhsdkj");
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
          <p className="tailorlogo">Tailor SignUp</p>
          <p className="tailorText">Signup in to your Account</p>

          <label className="profileImgSec" htmlFor="profileImg-Tag ">
            {image ? (
              <img
                src={image}
                style={{
                  width: "60%",
                  height: "11vh",
                  borderRadius: "4px",
                  objectFit: "cover",
                  objectPosition: "middle",
                }}
              />
            ) : (
              <div className="profileImgCard"></div>
            )}
          </label>
          <input
            type="file"
            id="profileImg-Tag "
            style={{ display: "none" }}
            name="image"
            onChange={profileHandleImg}
            accept="image/*"
          />

          <label>UserName:</label>
          <input
            className=""
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onChange={handleData}
          ></input>
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
          <button className="tailorSignupBtn" onClick={tailorSignup}>
            Signup
          </button>
          <NavLink className="hintText" to="/tailor/login">
            If You have an account Login?{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
