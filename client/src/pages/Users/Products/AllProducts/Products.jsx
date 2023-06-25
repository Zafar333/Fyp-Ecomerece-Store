import React, { useEffect, useState } from "react";
import { CheckToken } from "../../../../Utils/CheckToken";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Navbar from "../../../../components/Navbar";
import "./products.css";
import { ProductsAPI } from "../../../../Utils/APIs/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../../store/Slices/Users/cartSlice";

const Products = () => {
  const cartData = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [spin, setSpin] = useState(false);
  const [products, setProducts] = useState([]);
  const [values, setValues] = useState({
    search: "",
    pricesort: "price",
    category: "all",
  });
  useEffect(() => {
    AllProducts(values);
  }, [values]);
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
  };
  const Cart = () => {
    navigate("/cart");
  };
  const AddToCart = (item) => {
    dispatch(setCart(item));
  };

  products.length === 0 && <h2>No Products Found</h2>;
  return (
    <>
      <Navbar />
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
            <button>Search</button>
          </div>
          <div className="userProductsCart" onClick={Cart}>
            <ShoppingCartIcon className="cartIcon" />
            <span className="userProductCartNum">{cartData?.length}</span>
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
            </div>
          </div>
          <div className="userProductsCards">
            {spin && <h1>Loading...</h1>}
            {products.length !== 0 ? (
              products.map((item, index) => {
                return (
                  <div className="userProductCard" key={item._id}>
                    <div className="userProductImg">
                      <img src={item.profile} alt="" />
                    </div>
                    <p className="userProductname">{item?.name}</p>
                    <div className="userProductLower">
                      <div className="userProductPriceInfo">
                        <p className="userProductPrice">Rs {item?.price}</p>
                        <p className="userProductCategory">{item?.category}</p>
                      </div>
                      <button onClick={() => AddToCart(item)}>Add</button>
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
