import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { tailorShopData } from "../../../../../Utils/APIs/tailorApi";

const TailorDetail = () => {
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
          <label>Tailor Detail</label>
        </div>
        <div className="description singleTailordivContainer">
          <label>Contact Number:</label> {singleTailorData?.contactNumber}
        </div>
        <div className="description singleTailordivContainer">
          <label>Tailor Email:</label>
          {singleTailorData?.email}
        </div>

        <div className="stitchCategory  singleTailordivContainer">
          <label>Name:</label> {singleTailorData?.name}
        </div>
        <div className="description singleTailordivContainer">
          <label>Address:</label>
        </div>
      </div>
    </>
  );
};

export default TailorDetail;
