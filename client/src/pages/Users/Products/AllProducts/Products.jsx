import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import "./products.css";
import { ProductsAPI } from "../../../../Utils/APIs/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../../store/Slices/Users/cartSlice";
import { setSingleProduct } from "../../../../store/Slices/Users/SingleProduct";
import { setCategory } from "../../../../store/Slices/Users/ChangeCategory";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [spin, setSpin] = useState(false);
  const [products, setProducts] = useState([]);
  const categoryState = useSelector((state) => state.changeCategory);
  const [values, setValues] = useState({
    search: "",
    pricesort: "price",
    category: "all",
  });

  useEffect(() => {
    AllProducts(values);
  }, [values]);

  useEffect(() => {
    setValues({ ...values, category: categoryState });
  }, [categoryState]);

  const AllProducts = async (data) => {
    setSpin(true);
    let res = await ProductsAPI(data);
    if (res?.data?.status === 200) {
      setSpin(false);
      setProducts(res?.data?.data);
    } else {
      setSpin(false);
      setProducts([]);
    }
  };
  const ChangeValues = (e) => {
    let { name, value } = e.target;
    setValues((val) => {
      return { ...val, [name]: value };
    });
    if (
      value === "all" ||
      value === "men" ||
      value === "women" ||
      value === "kids"
    ) {
      dispatch(setCategory(value));
    }
  };
  const AddToCart = (event, item) => {
    event.stopPropagation();
    dispatch(setCart(item));
  };
  const SingleProduct = (item) => {
    dispatch(setSingleProduct(item));
    navigate(`/product/${item?._id}`);
  };
  function goBack() {
    navigate("/");
  }

  products.length === 0 && <h2>No Products Found</h2>;
  return (
    <>
      <Navbar />
      <div className="backIcon" onClick={goBack}></div>

      <div className="userProjectsMain">
        <div className="userProduct-upper">
          <div className="searchbar">
            <input
              type="text"
              className="userProductSearch"
              placeholder="Search Products..."
              name="search"
              onChange={ChangeValues}
            />
          </div>
        </div>
        <div className="userProductsMain-lower">
          <div className="userProductsFilters">
            <h3>Filters</h3>
            <div className="userProductSortPrice">
              <div className="sortItem">
                <input
                  type="radio"
                  name="pricesort"
                  value="price"
                  checked={values.pricesort === "price"}
                  onChange={ChangeValues}
                />
                <span>Low Price</span>
              </div>
              <div className="sortItem">
                <input
                  type="radio"
                  name="pricesort"
                  value="-price"
                  checked={values.pricesort === "-price"}
                  onChange={ChangeValues}
                />
                <span>High Price</span>
              </div>
            </div>
            <div className="userProductCategorytype">
              <div className="catItem">
                <input
                  type="radio"
                  name="category"
                  value="all"
                  checked={values.category === "all"}
                  onChange={ChangeValues}
                />
                <span>All</span>
              </div>
              <div className="catItem">
                <input
                  type="radio"
                  name="category"
                  value="men"
                  checked={values.category === "men"}
                  onChange={ChangeValues}
                />
                <span>Mens</span>
              </div>
              <div className="catItem">
                <input
                  type="radio"
                  name="category"
                  value="women"
                  checked={values.category === "women"}
                  onChange={ChangeValues}
                />
                <span>Womens</span>
              </div>
              <div className="catItem">
                <input
                  type="radio"
                  name="category"
                  value="kids"
                  checked={values.category === "kids"}
                  onChange={ChangeValues}
                />
                <span>Kids</span>
              </div>
            </div>
          </div>
          <div className="userProductsCards">
            {spin && <h1>Loading...</h1>}
            {products.length !== 0 ? (
              products.map((item, index) => {
                return (
                  <div className="userProductCard" key={item?._id}>
                    <div
                      className="userProductImg"
                      onClick={() => SingleProduct(item)}
                    >
                      <img src={item?.profile} alt="" />
                    </div>
                    <p className="userProductname">{item?.name}</p>
                    <div className="userProductLower">
                      <div className="userProductPriceInfo">
                        <p className="userProductPrice">Rs {item?.price}</p>
                        <p className="userProductCategory">{item?.category}</p>
                      </div>
                      <button onClick={(e) => AddToCart(e, item)}>Add</button>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Products Found</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
