import React, { useEffect } from "react";
import "./shopProfileCard.css";
import { useNavigate } from "react-router-dom";
import { tailorShopData } from "../../../../Utils/APIs/tailorApi";
import { useState } from "react";
import { toast } from "react-toastify";

import product from "../../../../assets/HeropageImages/kidsimg1.webp";

const ShopProfileCard = () => {
  let id;
  const [shopCardArr, setshopCardArr] = useState();
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
      console.log("i am res", shopCardArr);
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <>
      <h1>Tailor Dashboard</h1>
      <div className="shopViewContainer">
        <button className="tailorShopBtn" onClick={OpenShop}>
          Create A shop
        </button>
        <hr />
        <div className="tailorShopCard">
          <div className="crouselButtonBlock">
            <div className="crouselButtons">
              <button>Next</button>
              <button>Previous</button>
            </div>
          </div>
          <img className="CardImgCrousel" src={product} alt="" />
        </div>
      </div>
    </>
  );
};

export default ShopProfileCard;
