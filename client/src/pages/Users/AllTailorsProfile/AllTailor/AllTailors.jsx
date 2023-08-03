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
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  // Image Next crousel function code is start here
  // function ImgNext(item, ind) {
  //   console.log("index", ind);
  //   console.log("item", item);

  //   if (countImg < item?.designImages.length - 1) {
  //     let increment = countImg + 1;
  //     setCountImg(increment);
  //   } else {
  //     setCountImg(item?.designImages.length - 1);
  //   }
  // }
  // Image Next crousel function code is end here

  // Image previous crousel function code is start here
  // function ImgPrevious() {
  //   if (countImg > 1) {
  //     let decrement = countImg - 1;
  //     setCountImg(decrement);
  //   } else {
  //     setCountImg(0);
  //   }
  // }
  // Image previous crousel function code is end here

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
                <div className="allTailorCrouselButtonBlock">
                  {/* <div className="allTailorCrouselButtons">
                    <div style={{ backgroundColor: "white" }}>
                      <img
                        style={{
                          width: "25px",
                          height: "25px",
                          cursor: "pointer",
                        }}
                        src={arrowLeft}
                        onClick={() => ImgPrevious(item, ind)}
                      />
                    </div>
                    <div style={{ backgroundColor: "white" }}>
                      <img
                        src={arrowRight}
                        onClick={() => ImgNext(item, ind)}
                        style={{
                          width: "25px",
                          height: "25px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div> */}
                </div>
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
