import React, { useEffect, useState } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../components/Navbar";
import {
  DecCart,
  DeleteCartItem,
  IncCart,
} from "../../../store/Slices/Users/cartSlice";
import { PaymentAPI } from "../../../Utils/APIs/userAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoad, setIsLoad] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let count = 0;
    cartData.map((item) => {
      count += item.qty * item.price;
    });
    setTotalPrice(count);
  }, [cartData]);

  const Checkout = async () => {
    if (localStorage.getItem("userToken")) {
      if (totalPrice < 150)
        return toast.error("You cannot Shop less than Rs 150");
      setIsLoad(true);
      let data = cartData.map((item) => {
        return {
          id: item._id,
          qty: item.qty,
        };
      });
      let res = await PaymentAPI(data);
      if (res?.data?.status === 200) {
        window.location.replace(res?.data?.url);
        setIsLoad(false);
      } else {
        toast.error(res?.data?.message || res);
        setIsLoad(false);
      }
    } else {
      toast.error("Please Login to Proceed");
      navigate("/user/login");
    }
  };
  return (
    <>
      <Navbar />
      <div className="cart">
        <div className="cartCheckout">
          <div className="totalPrice">
            <h3>Total Price: Rs: {totalPrice}</h3>
          </div>
          <button
            disabled={cartData?.length === 0 ? true : false}
            onClick={Checkout}
          >
            {isLoad ? "Loading..." : "Checkout"}
          </button>
        </div>
        <div className="cartTableContainer">
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
              {cartData?.length ? (
                cartData.map((item) => {
                  return (
                    <tr>
                      <td>
                        <img src={item?.profile} alt="" />
                      </td>
                      <td>{item?.name}</td>
                      <td>Rs {item?.price}</td>
                      <td>
                        <div className="counter">
                          <button onClick={() => dispatch(DecCart(item))}>
                            -
                          </button>
                          <p>{item?.qty}</p>
                          <button onClick={() => dispatch(IncCart(item))}>
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            dispatch(DeleteCartItem(item));
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5}>No Item Selected</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
