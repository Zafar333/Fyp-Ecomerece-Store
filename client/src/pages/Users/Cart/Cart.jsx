import React, { useState } from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import Navbar from "../../../components/Navbar";

const Cart = () => {
  let cartData = useSelector((state) => state.cart);
  const [count, setCount] = useState(1);
  return (
    <>
      <Navbar />
      <div className="cart">
        <div className="cartCheckout"></div>
        <table className="cartData">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => {
              return (
                <tr>
                  <td>
                    <img src={item?.profile} alt="" />
                  </td>
                  <td>{item?.name}</td>
                  <td>Rs {item?.price}</td>
                  <td>
                    <div className="counter">
                      <button onClick={() => setCount(count - 1)}>-</button>
                      <p>{count}</p>
                      <button onClick={() => setCount(count + 1)}>+</button>
                    </div>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
