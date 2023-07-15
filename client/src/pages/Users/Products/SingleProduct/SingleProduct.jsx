import React, { useEffect } from "react";
import "./singleProduct.css";
import Navbar from "../../../../components/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../../store/Slices/Users/cartSlice";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const { productID } = useParams();
  const product = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();

  const Cart = (item) => {
    let obj = { ...item };
    dispatch(setCart(obj));
    toast.success("Product Added to Cart");
  };

  return (
    <>
      <Navbar />
      {productID == product?._id ? (
        <div className="singleProduct">
          <div className="singleProductLeft">
            <img src={product?.profile} alt="product" />
          </div>
          <div className="singleProfuctRight">
            <p className="singleProductName">{product?.name}</p>
            <p className="singleProductPrice">Rs {product?.price}</p>
            <p className="shipDetail">incl. local Tax & Shipping.</p>
            <p className="singleProductCategory">
              Category: <span>{product?.category}</span>
            </p>
            <button className="addToCartSingle" onClick={() => Cart(product)}>
              Add To Cart
            </button>
            <div className="singleProductDescription">
              <h4>Description:</h4>
              <p>{product?.desc}</p>
            </div>
          </div>
        </div>
      ) : (
        <h1>No Product Found</h1>
      )}
    </>
  );
};

export default SingleProduct;
