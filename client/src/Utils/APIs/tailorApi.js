import axios from "axios";

const base = "http://localhost:5000/tailors";

export const TailorRegisterAPI = async (data) => {
  try {
    let result = await axios.post(`${base}/register`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};
export const TailorLoginAPI = async (data) => {
  try {
    let result = await axios.post(`${base}/login`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};
export const tailorShopCreateDataApi = async (data, id) => {
  try {
    let result = await axios.patch(`${base}/createShops/${id}`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};
export const tailorShopData = async (id) => {
  try {
    let result = await axios.get(`${base}/tailorShopData/${id}`);
    return result;
  } catch (error) {
    return error.message;
  }
};
