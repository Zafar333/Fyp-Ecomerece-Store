import AdminAuthModel from "../database/models/adminModels/adminAuth.js";

export const login = (req, resp) => {
  resp.json("login worked");
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
