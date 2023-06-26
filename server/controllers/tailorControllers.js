import tailorAuthSchema from "../database/models/tailorsModels/tailorsAuth.js";
import { GenerateToken } from "../middlewares/Token.js";

export const login = async (req, resp, next) => {
  let { email, password } = req.body;
  if ((!email, !password)) {
    return resp.json({ message: "Please provide data" });
  }
  try {
    let tailorLogin = await tailorAuthSchema.findOne({ email });
    if (!tailorLogin) {
      next({ message: "Invalid Email or Password", statusCode: 401 });
      return;
    }
    let matchPass = await tailorLogin.checkPassword(password);
    if (!matchPass) {
      next({ message: "Invalid Email or Password", statusCode: 401 });
      return;
    }
    tailorLogin.password = "";
    GenerateToken(
      tailorLogin._id,
      {
        success: true,
        status: 200,
        message: "Login Successfull",
        data: tailorLogin,
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
  let { image, name, email, password } = req.body;
  if ((!name, !email, !password)) {
    return next({ message: "please provide data", statusCode: 401 });
  }
  try {
    let tailor = await tailorAuthSchema.create({
      image,
      name,
      email,
      password,
      type: "tailor",
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
