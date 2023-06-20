import adminAuth from "../database/models/adminModels/adminAuth.js";
import AdminAuthModel from "../database/models/adminModels/adminAuth.js";
import { GenerateToken } from "../middlewares/Token.js";

export const login = async (req, resp, next) => {
  let { email, password } = req.body;
  if ((!email, !password)) {
    return resp.json({ message: "Please provide data" });
  }
  try {
    let adminLogin = await AdminAuthModel.findOne({ email });
    if (!adminLogin) {
      next({ message: "Invalid Email or Password", statusCode: 401 });
      return;
    }
    let matchPass = await adminLogin.checkPassword(password);
    if (!matchPass) {
      next({ message: "Invalid Email or Password", statusCode: 401 });
      return;
    }
    adminLogin.password = "";
    GenerateToken(
      adminLogin._id,
      {
        success: true,
        status: 200,
        message: "Login Successfull",
        data: adminLogin,
      },
      resp,
      next
    );
  } catch (error) {
    next(error);
    return;
  }
};
export const register = async (req, resp, next) => {
  let { profile, name, email, password } = req.body;
  if ((!name, !email, !password)) {
    return next({ message: "please provide data", statusCode: 401 });
  }
  try {
    let admin = await AdminAuthModel.create({
      profile,
      name,
      email,
      password,
      type: "admin",
    });
    resp.json({
      success: true,
      status: 200,
      message: "Signup Successfully!",
    });
  } catch (error) {
    next(error);
    return;
  }
};
