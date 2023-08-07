import React, { useEffect, useState } from "react";
import Avatar from "../../../../assets/productAvatar.jpeg";
import "./newProductAdmin.css";
import { useNavigate, useParams } from "react-router-dom";
import { isEmpty } from "../../../../Utils/Validation";
import { toast } from "react-toastify";
import {
  AdminProductAPI,
  AdminProductEditAPI,
} from "../../../../Utils/APIs/adminAPI";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { useSelector } from "react-redux";

const NewProductAdmin = () => {
  let EditProductState = useSelector((state) => state.adminEditProduct);
  const [values, setValues] = useState({
    profile: "",
    name: "",
    price: "",
    category: "",
    desc: "",
  });
  const id = useParams();
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id?.id) {
      setValues({
        profile: EditProductState?.profile,
        name: EditProductState?.name,
        price: EditProductState?.price,
        category: EditProductState?.category,
        desc: EditProductState?.desc,
      });
    }
  }, []);
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
    let res;
    let check = isEmpty(values);
    if (!check) {
      toast.error("please fill valid and all fields");
      return;
    }
    setSpin(true);
    if (id?.id) {
      res = await AdminProductEditAPI(id?.id, values);
    } else {
      res = await AdminProductAPI(values);
    }

    if (res?.data?.status === 200) {
      setSpin(false);
      toast.success(
        res?.data?.message && id?.id
          ? "Product Updated Succesfully"
          : "Product Added Successfully!!!"
      );
      navigate("/admin/panel/products");
    } else {
      setSpin(false);
      toast.error(res?.data?.message || res);
    }
  };
  return (
    <div className="newadminproduct">
      <h1>{id?.id ? "Edit Product" : "Add New Product"}</h1>
      <div className="newadminproduct-main">
        <h4>Upload Product Pic</h4>
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
          value={values?.name}
          onChange={FormData}
          className="adminproductname"
        />

        <input
          type="number"
          placeholder="your price"
          value={values?.price}
          name="price"
          onChange={FormData}
        />
        <select name="category" value={values.category} onChange={FormData}>
          <option value="">Select category</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <textarea
          name="desc"
          cols="30"
          rows="10"
          value={values?.desc}
          onChange={FormData}
          placeholder="Enter you Product Description"
        ></textarea>
        <div className="adminproductbtns">
          <button onClick={Cancel}>Cancel</button>
          <button onClick={AddProduct}>
            {id?.id
              ? spin
                ? "Updating..."
                : "Edit Product"
              : spin
              ? "Adding..."
              : "Add Product"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProductAdmin;
