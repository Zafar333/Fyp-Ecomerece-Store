import "./allTailors.css";
import { alltailorsDataGetApi } from "../../../../Utils/APIs/tailorApi.js";
import Navbar from "../../../../components/Navbar";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setAlltailorsData } from "../../../../store/Slices/TailorAdmin/allTailorsData";
import { useSelector } from "react-redux";
import arrowRight from "../../../../assets/arrowRight.png";
import arrowLeft from "../../../../assets/arrowLeft.png";
import { useNavigate } from "react-router-dom";
const AllTailors = () => {
  const navigate = useNavigate();
  const allTailorsData = useSelector((state) => state.allTailorsDatas);
  const [countImg, setCountImg] = useState(0);
  const [Datas, setData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    getAllTailorsData();
  }, []);
  useEffect(() => {
    setData(allTailorsData);
    console.log("i am array", Datas);
  }, [allTailorsData]);

  async function getAllTailorsData() {
    const res = await alltailorsDataGetApi();
    try {
      if (res?.data.status == 200) {
        dispatch(setAlltailorsData(res?.data?.allData));
        // toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  // this Function is go to single tailor page view start here
  function goSingleTailorView(id) {
    navigate(`/signleTailor/viewShop/${id}`);
  }
  // this Function is go to single tailor page view end here

  return (
    <>
      <Navbar />
      <div className="allTailorsWrapper">
        <div className="allTailorsContainer">
          {Datas?.length > 0 ? (
            Datas?.map((item, ind) => (
              <div className="allTailorShopCard" key={ind}>
                <img
                  className="allTailorCardImgCrousel"
                  src={item.designImages[countImg]}
                  alt=""
                />
                <div className="allTailorCardTextBlock">
                  <div className="shopName allTailordivContainer">
                    <label> ShopName:</label> {item.shopName}
                  </div>
                  <div className="stitchCategory  allTailordivContainer">
                    <label>Stitch Category:</label> {item.stitchCategory}
                  </div>
                  <div className="description allTailordivContainer">
                    <label>Description:</label> {item.description}
                  </div>
                  <div className="standardPrice allTailordivContainer">
                    <label>Start At PKR:</label> {item.standardPrice}
                  </div>
                  <button
                    className="viewShopBtn"
                    onClick={() => goSingleTailorView(item._id)}
                  >
                    View Shop
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1>Tailor not Found</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default AllTailors;
