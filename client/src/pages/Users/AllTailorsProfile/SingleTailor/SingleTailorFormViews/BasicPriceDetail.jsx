import React, { useEffect } from "react";
import "./basicPriceDetail.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { tailorShopData } from "../../../../../Utils/APIs/tailorApi";

const BasicPriceDetail = () => {
  const params = useParams();
  let id = params.id;
  const [singleTailorData, setSingleTailorData] = useState();

  useEffect(() => {
    getSingleTailorData(id);
  }, []);

  async function getSingleTailorData(id) {
    const res = await tailorShopData(id);
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
  return (
    <>
      <div className="singleTailorCardTextBlock">
        <div className="standardPrice singleTailordivContainer">
          <label>Start At PKR:</label> {singleTailorData?.standardPrice}
        </div>

        <div className="stitchCategory  singleTailordivContainer">
          <label>Stitch Category:</label> {singleTailorData?.stitchCategory}
        </div>
        <div className="description singleTailordivContainer">
          <label>Description:</label> {singleTailorData?.description}
        </div>
      </div>
    </>
  );
};

export default BasicPriceDetail;
