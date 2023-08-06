import React, { useEffect, useState } from "react";
import "./selectDesignModal.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { userOrderDataApi } from "../../../../../../Utils/APIs/tailorApi";

const SelectDesignModal = ({ setSuitDesignModal, setMeasurementModal }) => {
  let tailorName;
  let tailorEmail;
  const [files, setImgs] = useState([]);
  const [uploadDesign, setUploadDesign] = useState([]);
  const [userSelectedDesign, setUserSelectedDesign] = useState([]);
  const [selectedTailorData, setSelectedTailorData] = useState();

  const params = useParams();
  const allTailorsData = useSelector((state) => state.allTailorsDatas);
  const [singleTailorDesign, setSingleTailorDesign] = useState();

  const id = params.id;

  useEffect(() => {
    let a = allTailorsData.filter((item, ind) => {
      if (item._id == id) {
        return item?.designImages;
      }
    });
    setSingleTailorDesign(a[0]?.designImages);
    setSelectedTailorData(a[0]);
  }, [allTailorsData]);

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
      setUploadDesign([...uploadDesign, ...Temparr]);
    }
  }
  // upload multiple images function is end here
  function closeModal() {
    setSuitDesignModal(false);
  }
  function imgSelected(item) {
    let res = userSelectedDesign.find((i) => i === item);
    if (!res) {
      let temArr = [];
      temArr.push(item);
      setUserSelectedDesign([...userSelectedDesign, ...temArr]);
    } else {
      let arr2 = userSelectedDesign;
      let ind = userSelectedDesign.indexOf(item);
      if (ind !== -1) {
        arr2.splice(ind, 1);
        setUserSelectedDesign([...arr2]);
      }
    }
  }

  async function sendSelectedImgs() {
    if (selectedTailorData) {
      const { name, email, _id } = selectedTailorData;
      let tailorName = name;
      let tailorEmail = email;
      let tailorId = _id;
      let orderDesignImgs = [...uploadDesign, ...userSelectedDesign];
      let data = {
        orderDesignImgs,
        tailorName,
        tailorEmail,
        tailorId,
      };

      if (orderDesignImgs?.length > 0) {
        try {
          const res = await userOrderDataApi(data);
          if (res?.data?.status == 200) {
            // toast.success(res?.data?.message);
            localStorage.setItem("userOrderId", res.data.user);
            setSuitDesignModal(false);
            setMeasurementModal(true);
          } else {
            toast.error(res?.data?.message);
          }
        } catch (error) {
          toast.error(error.message);
        }
      } else {
        toast.error("please select Images");
      }
    } else {
      toast.error("please select Images");
    }
  }

  return (
    <>
      <div className="suitDesignContainer">
        <h2>Select your Design</h2>

        <div className=" suitDesignImages">
          {singleTailorDesign?.map((item, ind) => (
            <div className="suitDesignImagesBox" key={ind}>
              <img
                onClick={() => imgSelected(item)}
                src={item}
                width="300px"
                height="200px"
                style={{
                  outline: userSelectedDesign.includes(item)
                    ? "5px solid skyblue"
                    : "",
                }}
              />
            </div>
          ))}
        </div>
        <hr></hr>
        <h2>Upload Your Design</h2>
        <div className=" uploadDesignImages">
          <label className="labelBlock" htmlFor="uploadDesigns">
            Upload Images
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            onChange={(e) => setImgs(e.target.files)}
            name="userUploadDesign"
            id="uploadDesigns"
            multiple="multiple"
            accept="image/*"
          />
          {uploadDesign.length > 0 &&
            uploadDesign?.map((item, index) => (
              <div className="workImageCard" key={index}>
                <img width={"200px"} height={"200px"} src={item} alt="" />
                <button
                  className="imageDeleteBtn"
                  onClick={() =>
                    setUploadDesign(uploadDesign.filter((arr) => arr !== item))
                  }
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
        <div className="btnContainer">
          <button className="btnContainerCancelBtn" onClick={closeModal}>
            Cancel
          </button>
          <button className=" btnContainerNextBtn" onClick={sendSelectedImgs}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectDesignModal;
