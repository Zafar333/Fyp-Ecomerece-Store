import axios from "axios";

const base = "http://localhost:5000/admin";

export const AdminRegisterAPI = async (data) => {
  try {
    let result = await axios.post(`${base}/register`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};

export const AdminLoginAPI = async (data) => {
  try {
    let result = await axios.post(`${base}/login`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};
export const AdminProductAPI = async (data) => {
  try {
    let result = await axios.post(`${base}/adminproducts`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};
export const AdminProductFetchAPI = async (data) => {
  try {
    let result = await axios.get(`${base}/adminproducts/${data}`);
    return result;
  } catch (error) {
    return error.message;
  }
};
export const AdminProductDeleteAPI = async (id) => {
  try {
    let result = await axios.delete(`${base}/adminproducts/${id}`);
    return result;
  } catch (error) {
    return error.message;
  }
};
export const AdminProductEditAPI = async (id, values) => {
  try {
    let result = await axios.put(`${base}/adminproducts/${id}`, values);
    return result;
  } catch (error) {
    return error.message;
  }
};
