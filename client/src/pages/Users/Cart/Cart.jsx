import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";

const Cart = () => {
  let cartData = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Cart</h1>
      {cartData.map((item) => {
        return (
          <div style={{ border: "1px solid black" }} key={item?._id}>
            <p>{item?.name}</p>
            <p>{item?.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
