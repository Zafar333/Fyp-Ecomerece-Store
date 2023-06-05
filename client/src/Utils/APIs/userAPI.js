import axios from "axios";
import { toast } from "react-toastify";

const base = "http://localhost:5000/user";

export const UserRegister = async (data) => {
  try {
    let result = await axios.post(`${base}/register`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};
