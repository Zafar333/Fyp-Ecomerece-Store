import React from "react";
import "./shopProfileCard.css";
import { useNavigate } from "react-router-dom";

const ShopProfileCard = () => {
  const navigate = useNavigate();
  function OpenShop() {
    navigate("/tailor/dashboard/createShop");
  }
  return (
    <>
      <h1>Tailor Dashboard</h1>
      <div className="shopViewContainer">
        <button className="tailorShopBtn" onClick={OpenShop}>
          Create A shop
        </button>
        <hr />
      </div>
    </>
  );
};

export default ShopProfileCard;
