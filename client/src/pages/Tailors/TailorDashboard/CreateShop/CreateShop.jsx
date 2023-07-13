import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createShop.css";

const CreateShop = () => {
  const navigate = useNavigate();
  const [workimage, setimages] = useState([]);
  useEffect(() => {
    console.log("usestae", workimage);
  }, [workimage]);
  // upload multiple images function is start here
  function uploadWorkImages(event) {
    const selectedimages = event.target.files;
    let images = Array.from(selectedimages);
    const imageArray = images?.map((item) => {
      return URL.createObjectURL(item);
    });
    setimages([...workimage, ...imageArray]);
  }
  // upload multiple images function is end here

  // Go back function is start here
  function goBack() {
    navigate("/tailor/dashboard");
    console.log("i am back");
  }
  // Go back function is end here

  return (
    <>
      <h1>Create A Shop</h1>
      <div className="createShopForm">
        <div className="shopImagesBlock">
          <label htmlFor="UploadImages" className="imgLabelBlock">
            <div className="uploadImageDiv">+ Add Project Images</div>
          </label>
          <input
            name="workimage"
            onChange={uploadWorkImages}
            type="file"
            id="UploadImages"
            style={{ display: "none" }}
            multiple="multiple"
            accept="image/*"
          />

          {workimage?.map((item, index) => (
            <div className="workImageCard" key={index}>
              <img className="imgTag" src={item} alt="" />
              <button
                className="imageDeleteBtn"
                onClick={() =>
                  setimages(workimage.filter((arr) => arr !== item))
                }
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="inputForm">
          <input
            name="shopName"
            type="text"
            placeholder="Please Enter Your Shop Name"
          />
          <input
            name="contactNumber"
            type="text"
            placeholder="Please Enter Your Contact number"
          />
          <input
            name="standardPrice"
            type="text"
            placeholder="Enter Your Standard Suit Stitch Price"
          />
          <input
            name="fancyPrice"
            type="text"
            placeholder="Please Enter Your Fancy Suit Stitch price"
          />

          <select name="stitchCategory" className="optionCategory">
            <option>Only Male Dress Stitch</option>
            <option>Only Female Dress Stitch</option>
            <option>Both Male&Female Dress Stitch</option>
          </select>
          <textarea
            placeholder="Enter Your Profile Description"
            type="text"
            className="descriptionBox"
          />
          <div className="formBtnBox">
            <button className="formCancelBtn" onClick={goBack}>
              Cancel
            </button>
            <button className="formSubmitBtn">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateShop;
