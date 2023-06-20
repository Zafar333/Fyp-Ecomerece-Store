import React from "react";
import "./adminProducts.css";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  return (
    <div className="adminproducts">
      <h1>Products</h1>
      <div className="adminproduct-main">
        <div className="adminproduct-upper">
          <div className="adminproduct-search">
            <input type="text" placeholder="Search Products..." />
          </div>
          <Link to="/admin/panel/products/new">Add New Product</Link>
        </div>
        <div className="adminproduct-products">
          <div className="adminproduct-card">
            <img
              src="https://proveg.com/wp-content/uploads/2018/03/fashion-1024x563.jpg"
              alt=""
            />
            <div className="admincardbottom">
              <div className="adminproductname">jeans jacket</div>
              <div className="adminproductprice">$12</div>
              <div className="adminproductcard-btns">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div className="adminproduct-pagination"></div>
      </div>
    </div>
  );
};

export default AdminProducts;
