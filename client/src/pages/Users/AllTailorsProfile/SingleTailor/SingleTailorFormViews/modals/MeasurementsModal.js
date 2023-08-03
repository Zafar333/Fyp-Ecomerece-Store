import React, { useEffect } from "react";
import "./measurementModal.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { userMeasurementDataApi } from "../../../../../../Utils/APIs/tailorApi";
const MeasurementsModal = ({
  setMeasurementModal,
  setUsercontactFormModal,
}) => {
  let id = localStorage.getItem("userOrderId");

  const [formData, setFormData] = useState([]);

  //   onchange function for input read data start here
  function fieldOnchange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  useEffect(() => {
    console.log("userOrderId", id);
  }, [id]);
  //   onchange function for input read data start here

  //   sendata Function is start here
  async function sendFormData() {
    const {
      shoulder,
      chest,
      hip,
      sleeves,
      daman,
      armHole,
      bicep,
      shirtLength,
      trouserLength,
    } = formData;
    let data = {
      shoulder,
      chest,
      hip,
      sleeves,
      daman,
      armHole,
      bicep,
      shirtLength,
      trouserLength,
    };
    if (
      shoulder &&
      chest &&
      hip &&
      sleeves &&
      daman &&
      armHole &&
      bicep &&
      shirtLength &&
      trouserLength
    ) {
      try {
        const res = await userMeasurementDataApi(data, id);
        if (res.data.status == 200) {
          toast.success(res.data.message);
          setMeasurementModal(false);
          setUsercontactFormModal(true);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("please fill all fields");
    }
  }
  //   sendata Function is end here

  function closeModal() {
    setMeasurementModal(false);
  }

  return (
    <>
      <div className="measurementForm">
        <h1>Dress Measurement</h1>
        <div className="measurementFormBox">
          <label>Shoulder</label>
          <input
            type="text"
            name="shoulder"
            placeholder="Enter Sholuder Size in inches"
            onChange={(e) => fieldOnchange(e)}
          />
        </div>
        <div className="measurementFormBox">
          <label>Chest</label>
          <input
            type="text"
            name="chest"
            placeholder="Enter Chest Size in inches"
            onChange={(e) => fieldOnchange(e)}
          />
        </div>
        <div className="measurementFormBox">
          <label>Hip</label>
          <input
            type="text"
            name="hip"
            placeholder="Enter Hip Size in inches"
            onChange={(e) => fieldOnchange(e)}
          />
        </div>
        <div className="measurementFormBox">
          <label>Sleeves</label>
          <input
            type="text"
            name="sleeves"
            placeholder="Enter Sleeves Size in inches"
            onChange={(e) => fieldOnchange(e)}
          />
        </div>
        <div className="measurementFormBox">
          <label>Daman</label>
          <input
            type="text"
            name="daman"
            placeholder="Enter Daman Size in inches"
            onChange={(e) => fieldOnchange(e)}
          />
        </div>
        <div className="measurementFormBox">
          <label>ArmHole</label>
          <input
            type="text"
            name="armHole"
            placeholder="Enter ArmHole Size in inches"
            onChange={(e) => fieldOnchange(e)}
          />
        </div>
        <div className="measurementFormBox">
          <label>Bicep</label>
          <input
            type="text"
            name="bicep"
            placeholder="Enter Bicep Size in inches"
            onChange={(e) => fieldOnchange(e)}
          />
        </div>
        <div className="measurementFormBox">
          <label>ShirtLength</label>
          <input
            type="text"
            name="shirtLength"
            placeholder="Enter ShirtLength Size in inches"
            onChange={(e) => fieldOnchange(e)}
          />
        </div>
        <div className="measurementFormBox">
          <label>TrouserLength</label>
          <input
            type="text"
            name="trouserLength"
            placeholder="Enter TrouserLength Size in inches"
            onChange={(e) => fieldOnchange(e)}
          />
        </div>
        <div className="measurementBtnBox">
          <button className=" measurementCancelBtn" onClick={closeModal}>
            Cancel
          </button>
          <button className="measurementNextBtn" onClick={sendFormData}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default MeasurementsModal;
