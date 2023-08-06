import React from "react";
import "./thanksOrderPage.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ThanksOrderPage = () => {
  const navigate = useNavigate();
  function goAllTailorsPage() {
    navigate("/allTailors");
  }
  return (
    <div className="thanksContainer">
      <div className="thanksBox">
        <h2>
          Thanks For Your Order Tailor <br />
          will Contact you Soon On Your <br />
          mobile Number
        </h2>
        <div className="thaksImgCard"></div>
        <button className="thanksBoxBtn" onClick={goAllTailorsPage}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ThanksOrderPage;
