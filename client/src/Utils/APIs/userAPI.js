import axios from "axios";

const base = "http://localhost:5000/user";

export const UserRegister = async (data) => {
  try {
    let result = await axios.post(`${base}/register`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};

export const UserLogin = async (data) => {
  try {
    let result = await axios.post(`${base}/login`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};
export const ProductsAPI = async (data) => {
  try {
    let result = await axios.post(`${base}/products`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};

export const PaymentAPI = async (data) => {
  try {
    let result = await axios.post(`${base}/create-checkout-session`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};
export const GetAllUsersAPI = async () => {
  try {
    let result = await axios.get(`${base}/getallusers`);
    return result;
  } catch (error) {
    return error.message;
  }
};

export const DeleteUserAPI = async (id) => {
  try {
    let result = await axios.delete(`${base}/${id}`);
    return result;
  } catch (error) {
    return error.message;
  }
};
