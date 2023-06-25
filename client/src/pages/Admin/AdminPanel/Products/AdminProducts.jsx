import React, { useEffect, useState } from "react";
import "./adminProducts.css";
import { Link } from "react-router-dom";
import {
  AdminProductDeleteAPI,
  AdminProductFetchAPI,
} from "../../../../Utils/APIs/adminAPI";
import { toast } from "react-toastify";

const AdminProducts = () => {
  const [AdminProducts, setAdminProducts] = useState([]);
  const [spin, setSpin] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    FetchProducts();
  }, []);
  const FetchProducts = async () => {
    setSpin(true);
    let res = await AdminProductFetchAPI();

    if (res?.data?.status === 200) {
      setSpin(false);
      setAdminProducts(res?.data?.data);
    } else {
      setSpin(false);
      toast.error(res?.data?.message || res);
    }
  };
  const DeleteProduct = async (id) => {
    setIsDeleted(true);
    let res = await AdminProductDeleteAPI(id);
    if (res?.data?.status === 200) {
      setIsDeleted(false);
      toast.success(res?.data?.message || "Product deleted");
    } else {
      setIsDeleted(false);
      toast.error(res?.data?.message || res);
    }
  };

  return spin ? (
    <h3>Loading...</h3>
  ) : (
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
          {AdminProducts?.length === 0 && <h2>No Product Found</h2>}
          {AdminProducts?.map((item, index) => {
            return (
              <div className="adminproduct-card" key={item?._id}>
                <img src={item?.profile} alt="" />
                <div className="admincardbottom">
                  <div className="adminproductname">{item?.name}</div>
                  <div className="adminproductprice">Rs {item?.price}</div>
                  <div className="adminproductcard-btns">
                    <button>Edit</button>
                    <button onClick={() => DeleteProduct(item?._id)}>
                      {isDeleted ? "removing..." : "Delete"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="adminproduct-pagination">
          <div className="pageNumber">1</div>
          <div className="pageNumber">2</div>
          <div className="pageNumber">3</div>
          <div className="pageNumber">4</div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
