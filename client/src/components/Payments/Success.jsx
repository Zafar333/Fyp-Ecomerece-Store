import React from "react";
import "./success.css";
import ShoppingPic from "../../assets/Shopping.svg";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="success-card-main">
      <div className="success-card-main_child">
        <div className="success-card_upper">
          <div className="success-card-left">
            <h1>Your order is confirmed</h1>
            <p>
              Thank you for shopping with us Your order will reach you soon.
            </p>
          </div>
          <div className="success-card-right">
            <img src={ShoppingPic} alt="Thank you for shopping" />
          </div>
        </div>
        <div className="success-card_lower">
          <button onClick={() => navigate("/products")}>
            Back To Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
