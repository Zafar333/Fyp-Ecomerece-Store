import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./createShop.css";
import { tailorShopCreateDataApi } from "../../../../Utils/APIs/tailorApi.js";

const CreateShop = () => {
  const navigate = useNavigate();
  const [files, setImgs] = useState([]);
  const [designImages, setimages] = useState([]);
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    uploadWorkImages();
  }, [files]);

  // upload multiple images function is start here
  async function uploadWorkImages() {
    let Temparr = [];
    if (files.length > 0) {
      for (let singleImage of files) {
        let filereader = new FileReader();
        filereader.readAsDataURL(singleImage);
        await new Promise((resolve) => (filereader.onload = () => resolve()));
        Temparr.push(filereader.result);
      }
      setimages([...designImages, ...Temparr]);
    }
  }
  // upload multiple images function is end here

  // Go back function is start here
  function goBack() {
    navigate("/tailor/dashboard");
  }
  // Go back function is end here

  // onchange input read data function start here
  function handleInput(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  // onchange input read data function end here

  // submit form data function is start here
  const submitFormData = async () => {
    let id = localStorage.getItem("id");
    const {
      shopName,
      contactNumber,
      standardPrice,
      fancyPrice,
      description,
      stitchCategory,
    } = formData;

    let sendData = {
      designImages,
      shopName,
      contactNumber,
      standardPrice,
      fancyPrice,
      description,
      stitchCategory,
    };

    if (
      designImages &&
      shopName &&
      contactNumber &&
      standardPrice &&
      fancyPrice &&
      description &&
      stitchCategory
    )
      try {
        const res = await tailorShopCreateDataApi(sendData, id);

        if (res?.data.status == 200) {
          navigate("/tailor/dashboard");
          toast.success(res?.data.message);
        } else {
          toast.error(res?.data?.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    else {
      toast.error("Please fill all fields");
    }
  };
  // submit form data function is end here

  return (
    <>
      <h1>Create A Shop</h1>
      <div className="createShopForm">
        <div className="shopImagesBlock">
          <label htmlFor="UploadImages" className="imgLabelBlock">
            <div className="uploadImageDiv">+ Add Project Images</div>
          </label>
          <input
            name="designImages"
            onChange={(e) => setImgs(e.target.files)}
            type="file"
            id="UploadImages"
            style={{ display: "none" }}
            multiple="multiple"
            accept="image/*"
          />

          {designImages.length > 0 &&
            designImages?.map((item, index) => (
              <div className="workImageCard" key={index}>
                <img className="imgTag" src={item} alt="" />
                <button
                  className="imageDeleteBtn"
                  onClick={() =>
                    setimages(designImages.filter((arr) => arr !== item))
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
            onChange={handleInput}
          />
          <input
            name="contactNumber"
            type="text"
            placeholder="Please Enter Your Contact number"
            onChange={handleInput}
          />
          <input
            name="standardPrice"
            type="number"
            placeholder="Enter Your Standard Suit Stitch Price"
            onChange={handleInput}
          />
          <input
            name="fancyPrice"
            type="number"
            placeholder="Please Enter Your Fancy Suit Stitch price"
            onChange={handleInput}
          />

          <select
            name="stitchCategory"
            className="optionCategory"
            onChange={handleInput}
          >
            <option>Select Your Category</option>
            <option>Only Male Dress Stitch</option>
            <option>Only Female Dress Stitch</option>
            <option>Both Male&Female Dress Stitch</option>
          </select>
          <textarea
            placeholder="Enter Your Profile Description"
            type="text"
            className="descriptionBox"
            onChange={handleInput}
            name="description"
          />
          <div className="formBtnBox">
            <button className="formCancelBtn" onClick={goBack}>
              Cancel
            </button>
            <button className="formSubmitBtn" onClick={submitFormData}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateShop;
