import React, { useEffect, useState } from "react";
import "./adminProducts.css";
import { Link, useNavigate } from "react-router-dom";
import {
  AdminProductDeleteAPI,
  AdminProductFetchAPI,
} from "../../../../Utils/APIs/adminAPI";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setProfile } from "../../../../store/Slices/Admin/adminEditProductSlice";

const AdminProducts = () => {
  const [AdminProducts, setAdminProducts] = useState([]);
  const [spin, setSpin] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [TotalPage, setTotalPage] = useState(0);
  const [TotalData, setTotalData] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    FetchProducts(pageNumber);
  }, [pageNumber]);
  useEffect(() => {
    setTotalPage(Math.ceil(TotalData / 10));
  }, [TotalData, TotalPage]);
  const FetchProducts = async (page) => {
    setSpin(true);
    let res = await AdminProductFetchAPI(page);

    if (res?.data?.status === 200) {
      setSpin(false);
      setAdminProducts(res?.data?.data);
      setTotalData(res?.data?.pagination?.totalData);
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

  const EditProduct = (item) => {
    dispatch(setProfile(item));
    navigate(`/admin/panel/products/edit/${item._id}`);
  };
  function SendPage(pagenum) {
    setPageNumber(pagenum);
  }
  function NextPage() {
    // FetchProducts(pageNumber + 1);
    if (pageNumber < TotalPage) {
      setPageNumber(pageNumber + 1);
    }
  }
  function PrevPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }
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
                    <button onClick={() => EditProduct(item)}>Edit</button>
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
          <div className="prevPage" onClick={PrevPage}>
            Prev
          </div>
          <div className="pages">
            {TotalPage &&
              Array.from(Array(TotalPage), (item, ind) => {
                return (
                  <div
                    className="PerPageNumber"
                    onClick={() => SendPage(ind + 1)}
                    style={{
                      backgroundColor:
                        pageNumber === ind + 1 ? "gainsboro" : "",
                      color: pageNumber === ind + 1 ? "black" : "",
                    }}
                  >
                    {ind + 1}
                  </div>
                );
              })}
          </div>
          <div className="nextPage" onClick={NextPage}>
            next
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
