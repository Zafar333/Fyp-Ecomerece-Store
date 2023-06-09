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
