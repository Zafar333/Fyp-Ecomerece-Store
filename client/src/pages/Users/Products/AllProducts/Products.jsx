import React, { useEffect } from "react";
import { CheckToken } from "../../../../Utils/CheckToken";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Navbar from "../../../../components/Navbar";
import "./products.css";

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="userProjectsMain">
        <div className="userProduct-upper">
          <input
            type="text"
            className="userProductSearch"
            placeholder="Search Products..."
          />
          <div className="userProductsCart">
            <ShoppingCartIcon className="cartIcon" />
            <span className="userProductCartNum">1</span>
          </div>
        </div>
        <div className="userProductsMain-lower">
          <div className="userProductsCards">
            <div className="userProductCard">
              <div className="userProductImg">
                <img
                  src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg"
                  alt=""
                />
              </div>
              <p className="userProductname"></p>
              <div className="userProductLower">
                <div className="userProductPriceInfo">
                  <p className="userProductPrice">$299</p>
                  <p className="userProductCategory">women</p>
                </div>
                <button>Add</button>
              </div>
            </div>
            <div className="userProductCard">
              <div className="userProductImg">
                <img
                  src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg"
                  alt=""
                />
              </div>
              <p className="userProductname"></p>
              <div className="userProductLower">
                <div className="userProductPriceInfo">
                  <p className="userProductPrice">$299</p>
                  <p className="userProductCategory">women</p>
                </div>
                <button>Add</button>
              </div>
            </div>
            <div className="userProductCard">
              <div className="userProductImg">
                <img
                  src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg"
                  alt=""
                />
              </div>
              <p className="userProductname"></p>
              <div className="userProductLower">
                <div className="userProductPriceInfo">
                  <p className="userProductPrice">$299</p>
                  <p className="userProductCategory">women</p>
                </div>
                <button>Add</button>
              </div>
            </div>
            <div className="userProductCard">
              <div className="userProductImg">
                <img
                  src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg"
                  alt=""
                />
              </div>
              <p className="userProductname"></p>
              <div className="userProductLower">
                <div className="userProductPriceInfo">
                  <p className="userProductPrice">$299</p>
                  <p className="userProductCategory">women</p>
                </div>
                <button>Add</button>
              </div>
            </div>
            <div className="userProductCard">
              <div className="userProductImg">
                <img
                  src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg"
                  alt=""
                />
              </div>
              <p className="userProductname"></p>
              <div className="userProductLower">
                <div className="userProductPriceInfo">
                  <p className="userProductPrice">$299</p>
                  <p className="userProductCategory">women</p>
                </div>
                <button>Add</button>
              </div>
            </div>
            <div className="userProductCard">
              <di v className="userProductImg">
                <img
                  src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg"
                  alt=""
                />
              </di>
              <p className="userProductname">name of product</p>
              <div className="userProductLower">
                <div className="userProductPriceInfo">
                  <p className="userProductPrice">$299</p>
                  <p className="userProductCategory">women</p>
                </div>
                <button>Add</button>
              </div>
            </div>
          </div>
          <div className="userProductsFilters">
            <div className="userProductSortPrice">
              <div className="sortItem">
                <input type="radio" name="pricesort" />
                <span>Low Price</span>
              </div>
              <div className="sortItem">
                <input type="radio" name="pricesort" />
                <span>High Price</span>
              </div>
            </div>
            <div className="userProductCategorytype">
              <div className="catItem">
                <input type="radio" name="category" />
                <span>All</span>
              </div>
              <div className="catItem">
                <input type="radio" name="category" />
                <span>Mens</span>
              </div>
              <div className="catItem">
                <input type="radio" name="category" />
                <span>Womens</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
