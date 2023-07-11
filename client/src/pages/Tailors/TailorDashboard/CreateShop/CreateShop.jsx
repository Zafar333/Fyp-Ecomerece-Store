import React, { useEffect, useState } from "react";
import "./createShop.css";

const CreateShop = () => {
  const [workimage, setimages] = useState([]);
  function uploadWorkImages(event) {
    const selectedimages = event.target.files;
    let images = Array.from(selectedimages);

    // console.log("selectedfiles", selectedFiles);
    const imageArray = images?.map((item) => {
      return URL.createObjectURL(item);
    });
    setimages([...workimage, ...imageArray]);
  }
  useEffect(() => {
    console.log("usestae", workimage);
  }, [workimage]);
  return (
    <>
      <h1>Create A Shop</h1>
      <div className="createShopForm">
        <div className="shopImagesBlock">
          <label htmlFor="UploadImages">
            <div className="uploadImageDiv">+ Add More Images</div>
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
        </div>
      </div>
    </>
  );
};

export default CreateShop;
