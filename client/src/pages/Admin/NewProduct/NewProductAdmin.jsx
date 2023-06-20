import React, { useState } from "react";
import Avatar from "../../../assets/avatar.jpg";
import "./newProductAdmin.css";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "../../../Utils/Validation";
import { toast } from "react-toastify";
import { AdminProductAPI } from "../../../Utils/APIs/adminAPI";

const NewProductAdmin = () => {
  const [values, setValues] = useState({
    profile: "",
    name: "",
    price: "",
    category: "",
    desc: "",
  });
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate();
  const FormData = (e) => {
    let { value, name } = e.target;
    if (name == "profile") {
      let image = e.target.files[0];
      if (!image) return;
      const filereader = new FileReader();
      filereader.readAsDataURL(image);
      filereader.onload = () => {
        let imageResult = filereader.result;
        setValues({ ...values, [name]: imageResult });
      };
      filereader.onerror = (error) => {
        console.log(error);
      };
    }
    setValues({ ...values, [name]: value });
  };
  const Cancel = () => {
    navigate("/admin/panel/products");
  };
  const AddProduct = async () => {
    let check = isEmpty(values);
    if (!check) {
      toast.error("please fill all fields");
    }
    setSpin(true);
    let res = await AdminProductAPI(values);
    if (res.data.status === 200) {
      toast.success(res?.data?.message || "Product Added Successfully!!!");
    } else {
      toast.error(res.data.message || res);
    }
  };
  return (
    <div className="newadminproduct">
      <h1>Add New Product</h1>
      <div className="newadminproduct-main">
        <label htmlFor="AdminPic" className="file">
          <img src={values?.profile ? values?.profile : Avatar} alt="avatar" />
          <input
            type="file"
            name="profile"
            id="AdminPic"
            onChange={FormData}
            accept="image/*"
          />
        </label>
        <input
          type="text"
          placeholder="your name"
          name="name"
          onChange={FormData}
          className="adminproductname"
        />

        <input
          type="number"
          placeholder="your price"
          name="price"
          onChange={FormData}
        />
        <select name="category" onChange={FormData}>
          <option value="">Select category</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
        <textarea
          name="desc"
          cols="30"
          rows="10"
          onChange={FormData}
          placeholder="Enter you Product Description"
        ></textarea>
        <div className="adminproductbtns">
          <button onClick={Cancel}>Cancel</button>
          <button onClick={AddProduct}>Add Product</button>
        </div>
      </div>
    </div>
  );
};

export default NewProductAdmin;
