import React from "react";
import "./singleProduct.css";
import Navbar from "../../../../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  const { productID } = useParams();
  const product = useSelector((state) => state.singleProduct);
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
            <button className="addToCartSingle">Add To Cart</button>
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
