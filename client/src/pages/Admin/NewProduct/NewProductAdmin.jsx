import React, { useState } from "react";
import Avatar from "../../../assets/avatar.jpg";
import "./newProductAdmin.css";
import { useNavigate } from "react-router-dom";

const NewProductAdmin = () => {
  const [values, setValues] = useState({
    profile: "",
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const navigate = useNavigate();
  const FormData = (e) => {
    let { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const Cancel = () => {
    navigate("/admin/panel/products");
  };
  const AddProduct = () => {};
  return (
    <div className="newadminproduct">
      <h1>Add New Product</h1>
      <div className="newadminproduct-main">
        <label htmlFor="AdminProductPic" className="file">
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
          className="adminproductname"
        />
        <input type="text" placeholder="your price" name="price" />
        <select name="category" onChange={FormData}>
          <option value="">Select category</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
        <textarea
          name="description"
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
