import React, { useEffect } from "react";
import "./shopProfileCard.css";
import { useNavigate } from "react-router-dom";
import { tailorShopData } from "../../../../Utils/APIs/tailorApi";
import { useState } from "react";
import { toast } from "react-toastify";

import arrowRight from "../../../../assets/arrowRight.png";
import arrowLeft from "../../../../assets/arrowLeft.png";
import { selectClasses } from "@mui/material";

const ShopProfileCard = () => {
  let id;
  const [shopCardArr, setshopCardArr] = useState();
  const [selectedImages, setSelectedImages] = useState(0);
  // setSelectedImages(0);
  useEffect(() => {
    id = localStorage.getItem("id");
    getShopDataReq();
  }, []);

  const navigate = useNavigate();
  function OpenShop() {
    navigate("/tailor/dashboard/createShop");
  }
  const getShopDataReq = async () => {
    let res = await tailorShopData(id);
    if (res.data.status == 200) {
      setshopCardArr(res.data.shopData);
    } else {
      toast.error(res.data.message);
    }
  };

  // Image Next crousel function code is start here
  function crouselImgNext() {
    if (selectedImages < shopCardArr?.designImages?.length - 1) {
      let increment = selectedImages + 1;
      setSelectedImages(increment);
    } else {
      setSelectedImages(shopCardArr?.designImages?.length - 1);
    }
  }
  // Image Next crousel function code is end here

  // Image previous crousel function code is start here
  function crouselImgPrevious() {
    if (selectedImages > 1) {
      let decrement = selectedImages - 1;
      setSelectedImages(decrement);
    } else {
      setSelectedImages(0);
    }
  }
  // Image previous crousel function code is end here

  return (
    <>
      <h1>Tailor Dashboard</h1>

      <div className="shopViewContainer">
        <button className="tailorShopBtn" onClick={OpenShop}>
          Create A shop
        </button>

        <hr />

        {shopCardArr?.designImages?.length > 0 ? (
          <div className="tailorShopCard">
            <div className="crouselButtonBlock">
              <div className="crouselButtons">
                <div style={{ backgroundColor: "white" }}>
                  <img
                    style={{
                      width: "25px",
                      height: "25px",
                      cursor: "pointer",
                    }}
                    src={arrowLeft}
                    onClick={crouselImgPrevious}
                  />
                </div>
                <div style={{ backgroundColor: "white" }}>
                  <img
                    src={arrowRight}
                    onClick={crouselImgNext}
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
              className="CardImgCrousel"
              src={shopCardArr?.designImages[selectedImages]}
              alt=""
            />
            <div className="cardTextBlock">
              <div className="shopName divContainer">
                <label> ShopName:</label> {shopCardArr?.shopName}
              </div>
              <div className="stitchCategory  divContainer">
                <label>Stitch Category:</label> {shopCardArr?.stitchCategory}
              </div>
              <div className="description divContainer">
                <label>Description:</label> {shopCardArr?.description}
              </div>
              <div className="standardPrice divContainer">
                <label>Address:</label> {shopCardArr?.address}
              </div>
              <div className="standardPrice divContainer">
                <label>#Phn No:</label> {shopCardArr?.contactNumber}
              </div>
              <div className="standardPrice divContainer">
                <label>Start At PKR:</label> {shopCardArr?.standardPrice}
              </div>

              {/* <button className="shopDeleteBtn">Delete</button> */}
            </div>
            {/* <button className="shopEditBtn">Edit</button> */}
          </div>
        ) : (
          <h1>Shop is Not Created</h1>
        )}
      </div>
    </>
  );
};

export default ShopProfileCard;
