import UserAuthModel from "../database/models/usersModels/usersAuth.js";
import ErrorResponse from "../utils/error.js";

export const login = async (req, resp, next) => {
  let { email, password } = req.body;

  try {
    let checkEmail = await UserAuthModel.findOne({ email });
    if (!checkEmail) {
      next({ message: "Invalid Email or Password", statusCode: 401 });
    }

    let matchPass = await checkEmail.checkPassword(password);
    if (!matchPass) {
      next({ message: "Invalid Email or Password", statusCode: 401 });
    }
    return resp.json({
      success: true,
      status: 200,
      message: "Login Successfull",
    });
  } catch (error) {
    next(error);
  }
};
export const register = async (req, resp, next) => {
  let { firstname, lastname, email, password } = req.body;

  try {
    const user = await UserAuthModel.create({
      firstname,
      lastname,
      email,
      password,
    });

    return resp.json({
      success: true,
      status: 200,
      message: "data saved successfully",
    });
  } catch (error) {
    next(error);
  }
};
