import React, { useEffect } from "react";
import "./singleTailorShop.css";
import arrowRight from "../../../../assets/arrowRight.png";
import arrowLeft from "../../../../assets/arrowLeft.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { tailorShopData } from "../../../../Utils/APIs/tailorApi";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate, Outlet, useParams } from "react-router-dom";
import UserLogin from "./UserLogin/Login";
import UserRegister from "./UserRegister/Register";
import SelectDesignModal from "./SingleTailorFormViews/modals/SelectDesignModal";
import MeasurementsModal from "./SingleTailorFormViews/modals/MeasurementsModal";
import UserContactFormModal from "./SingleTailorFormViews/modals/UserContactFormModal";

const SingleTailorShop = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const [suitDesignModal, setSuitDesignModal] = useState(false);
  const [measurementModal, setMeasurementModal] = useState(false);
  const [userContactFormModal, setUsercontactFormModal] = useState(false);

  const [loginModal, setLoginModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  let tailorId = params.id;
  const [singleTailorData, setSingleTailorData] = useState();

  useEffect(() => {
    getSingleTailorData(tailorId);
    opnBasicDetailView(tailorId);
  }, []);

  const [countImg, setCountImg] = useState(0);

  async function getSingleTailorData(tailorId) {
    const res = await tailorShopData(tailorId);
    try {
      if (res?.data.status == 200) {
        setSingleTailorData(res.data.shopData);
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  // Image Next crousel function code is start here
  function ImgNext() {
    if (countImg < singleTailorData?.designImages.length - 1) {
      let increment = countImg + 1;
      setCountImg(increment);
    } else {
      setCountImg(singleTailorData?.designImages.length - 1);
    }
  }
  // Image Next crousel function code is end here

  // Image previous crousel function code is start here
  function ImgPrevious() {
    if (countImg > 1) {
      let decrement = countImg - 1;
      setCountImg(decrement);
    } else {
      setCountImg(0);
    }
  }

  function opnBasicDetailView(tailorId) {
    navigate(
      `/signleTailor/viewShop/:id/SingleTailorInfoFormViewsBasicPrice/${tailorId}`
    );
  }
  function OpnPremiumPrice(tailorId) {
    navigate(
      `/signleTailor/viewShop/:id/SingleTailorInfoFormViewsPremiumPrice/${tailorId}`
    );
  }

  function opnDetailView(tailorId) {
    navigate(
      `/signleTailor/viewShop/:id/SingleTailorInfoFormViewsDetailView/${tailorId}`
    );
  }
  function placeOrder() {
    let UserToken = localStorage.getItem("userToken");
    if (UserToken) {
      setSuitDesignModal(true);
    } else {
      setLoginModal(true);
    }
  }
  function goBack() {
    navigate("/allTailors");
  }

  return (
    <>
      <div className="backIcon" onClick={goBack}></div>

      <div className={!loginModal ? "modalLoginnHide" : "modalLoginn"}>
        <UserLogin
          setLoginModal={setLoginModal}
          setRegisterModal={setRegisterModal}
          setSuitDesignModal={setSuitDesignModal}
        />
      </div>
      <div className={!registerModal ? "modalRegisterrHide" : "modalRegisterr"}>
        <UserRegister
          setLoginModal={setLoginModal}
          setRegisterModal={setRegisterModal}
        />
      </div>

      <div
        className={
          !suitDesignModal ? "suitDesignModalHide" : "suitDesignModalOpn"
        }
      >
        <SelectDesignModal
          setSuitDesignModal={setSuitDesignModal}
          setMeasurementModal={setMeasurementModal}
        />
      </div>

      <div
        className={
          !measurementModal ? "measurementModalHide" : "measurementModalOpn"
        }
      >
        <MeasurementsModal
          setMeasurementModal={setMeasurementModal}
          setUsercontactFormModal={setUsercontactFormModal}
        />
      </div>

      <div
        className={
          !userContactFormModal
            ? "userContactFormModalHide"
            : "userContactFormModalOpn"
        }
      >
        <UserContactFormModal
          setUsercontactFormModal={setUsercontactFormModal}
        />
      </div>

      <h1>Welcome To Tailor Shop</h1>

      <div className="singleTailorShopContainer">
        <div className="singleTailorShopView">
          <div className="singleTailorShopCard">
            <div className="singleTailorCrouselButtonBlock">
              <div className="singleTailorCrouselButtons">
                <div style={{ backgroundColor: "white" }}>
                  <img
                    style={{
                      width: "25px",
                      height: "25px",
                      cursor: "pointer",
                    }}
                    src={arrowLeft}
                    onClick={() => ImgPrevious()}
                  />
                </div>
                <div style={{ backgroundColor: "white" }}>
                  <img
                    src={arrowRight}
                    onClick={() => ImgNext()}
                    style={{
                      width: "25px",
                      height: "25px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
            <img
              className="singleTailorCardImgCrousel"
              src={singleTailorData?.designImages[countImg]}
              alt=""
            />
          </div>

          <div className="singleTailorInfoForm">
            <div className="singleTailorFormOptionBtn">
              <button
                className="singleTailorOptionBtns"
                onClick={() => opnBasicDetailView(tailorId)}
              >
                Basic
              </button>
              <button
                className="singleTailorOptionBtns"
                onClick={() => OpnPremiumPrice(tailorId)}
              >
                Premium
              </button>
              <button
                className="singleTailorOptionBtns"
                onClick={() => opnDetailView(tailorId)}
              >
                Details
              </button>
            </div>
            <div className="outletView">
              <Outlet />
            </div>
            <button className="singleTailorOrderBtn" onClick={placeOrder}>
              Give Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTailorShop;
