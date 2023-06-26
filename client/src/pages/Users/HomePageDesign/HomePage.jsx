import React from "react";
import "./homePage.css";
import Banner from "./Banner";
import Footer from "../../../components/Footer";
import { NavLink } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const HomePage = () => {
  return (
    <>
      {/* <header className="navbar"></header> */}
      <Navbar />
      <Banner />
      <div className="main-container">
        <div className="main-wrapper">
          <div className="sectionCategory">
            {/* Section Collection Category card code statrt here */}

            <p className="sectionTitle">Collections</p>
            <div className="card-block">
              <div className="card">
                <div className="cardImg1"></div>
                <div className="cardTitle">
                  <p className="titleText">Women Collection</p>
                </div>
              </div>

              <div className="card">
                <div className="cardImg2"></div>
                <div className="cardTitle2">
                  <p className="titleText">Men Collection</p>
                </div>
              </div>

              <div className="card">
                <div className="cardImg3"></div>
                <div className="cardTitle3">
                  <p className="titleText">Kids Collection</p>
                </div>
              </div>
            </div>
          </div>
          {/* Section Collection Category card code end here */}
        </div>
        {/*Order a Tailor Section code Start here */}
        <div className="tailorSection main-wrapper">
          {/* <p className="sectionTitle">Online Tailor</p> */}
          <div className="tailorBlock">
            <div className="tailorImg"></div>
            <div className="tailorContent">
              <div className="tailorContentTitle">
                Tailor
                <pre>In</pre>
                <pre>Your</pre>
                <pre>Hand</pre>{" "}
              </div>
              <NavLink className="tailor-btn">Order Now</NavLink>
            </div>
            <NavLink className="tailor-btn2">Order Now</NavLink>
          </div>
        </div>

        {/* Order a Tailor Section code end here */}

        {/* Become a Tailor Section code start here */}

        <div className="tailorProfileSection main-wrapper">
          <div className="tailorProfileBlock">
            <div className="profileContent">
              <p className="tailorProfileTitle">Create A Tailor Shop</p>
              <p className="profileText">
                Grow Your Business Globally Online Tailor Shops have
                revolutionized the way we approach custom-made
                clothing,Alteration, offering convenience, customization, and
                superior craftsmanship. They provide a platform for individuals
                to embrace their personal style, confidently wear garments
                tailored to their unique measurements, and experience the joy of
                owning clothing that is truly one-of-a-kind. Online tailor shops
                are reshaping the fashion landscape and bringing the world of
                tailored clothing to our fingertips.
              </p>
              <div className="tailorProfileBtn">
                <NavLink className="signupBtn" to="/tailor/register">
                  Signup
                </NavLink>
                <NavLink className="loginBtn" to="/tailor/login">
                  Login
                </NavLink>
              </div>
            </div>
            <div className="profileImgBlock">
              <div className="profileimg1"></div>
              <div className="profileimg2"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
