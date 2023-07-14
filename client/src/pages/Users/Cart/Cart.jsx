import React, { useEffect, useState } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../components/Navbar";
import { DecCart, IncCart } from "../../../store/Slices/Users/cartSlice";

const Cart = () => {
  let cartData = useSelector((state) => state.cart);
  let [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let count = 0;
    cartData.map((item) => {
      count += item.qty * item.price;
    });
    setTotalPrice(count);
  }, [cartData]);
  return (
    <>
      <Navbar />
      <div className="cart">
        <div className="cartCheckout">
          <div className="totalPrice">
            <h3>Total Price: ${totalPrice}</h3>
          </div>
        </div>
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
                      <button onClick={() => dispatch(DecCart(item))}>-</button>
                      <p>{item?.qty}</p>
                      <button onClick={() => dispatch(IncCart(item))}>+</button>
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
