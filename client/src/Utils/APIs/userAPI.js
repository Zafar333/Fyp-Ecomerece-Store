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
