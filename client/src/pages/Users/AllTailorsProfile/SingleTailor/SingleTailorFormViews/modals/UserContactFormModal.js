import React, { useEffect, useState } from "react";
import "./userContactFormModal.css";
import { toast } from "react-toastify";
import { userContactDetailsApi } from "../../../../../../Utils/APIs/tailorApi";
import { useNavigate } from "react-router-dom";
import { orderDeleteApi } from "../../../../../../Utils/APIs/tailorApi";

const UserContactFormModal = ({ setUsercontactFormModal }) => {
  const navigate = useNavigate();
  const [contactFormData, setContactFormData] = useState([]);
  const [data, setData] = useState();
  let id = localStorage.getItem("userOrderId");

  function fieldOnchange(e) {
    const { name, value } = e.target;
    setContactFormData({ ...contactFormData, [name]: value });
  }

  async function sendContactFormData() {
    if (contactFormData) {
      const { name, email, phnNo, address } = contactFormData;
      let data = {
        name,
        email,
        phnNo,
        address,
      };
      if (name && email && phnNo && address) {
        try {
          const res = await userContactDetailsApi(data, id);
          if (res.data.status == 200) {
            toast.success(res.data.message);
            setUsercontactFormModal(false);
            navigate("/signleTailor/thanksPage/");
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          toast.error(error.message);
        }
      } else {
        toast.error("please fill all fields");
      }
    } else {
      toast.error("please fill all fields");
    }
  }
  function closeModal() {
    setUsercontactFormModal(false);
    userOrderDelete(localStorage.getItem("userOrderId"));
  }

  async function userOrderDelete(id) {
    const res = await orderDeleteApi(id);
    try {
      if (res?.data?.status == 200) {
        // toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <div className="userContactForm">
        <h1>Contact Details</h1>
        <div className="userContactFormBox">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onChange={(e) => fieldOnchange(e)}
          />
        </div>
        <div className="userContactFormBox">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter Your Address"
            onChange={(e) => fieldOnchange(e)}
          />
        </div>
        <div className="userContactFormBox">
          <label>Number</label>
          <input
            type="text"
            name="phnNo"
            placeholder="Enter Your Contact Number"
            onChange={(e) => fieldOnchange(e)}
          />
        </div>
        <div className="userContactFormBox">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            onChange={(e) => fieldOnchange(e)}
          />
        </div>
        <div className="contactFormBtns">
          <button className="contactFormCancelBtn" onClick={closeModal}>
            Cancel
          </button>
          <button className="contactFormNextBtn" onClick={sendContactFormData}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default UserContactFormModal;
