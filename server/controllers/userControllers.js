import UserAuthModel from "../database/models/usersModels/usersAuth.js";
import { GenerateToken } from "../middlewares/Token.js";
import ErrorResponse from "../utils/error.js";

export const login = async (req, resp, next) => {
  let { email, password } = req.body;

  try {
    let checkEmail = await UserAuthModel.findOne({ email });
    if (!checkEmail) {
      next({ message: "Invalid Email or Password", statusCode: 401 });
      return;
    }

    let matchPass = await checkEmail.checkPassword(password);
    if (!matchPass) {
      next({ message: "Invalid Email or Password", statusCode: 401 });
      return;
    }
    GenerateToken(
      checkEmail._id,
      {
        success: true,
        status: 200,
        message: "Login Successfull",
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
  let { firstname, lastname, email, password } = req.body;

  try {
    const user = await UserAuthModel.create({
      firstname,
      lastname,
      email,
      password,
      type: "user",
    });
    resp.json({
      success: true,
      status: 200,
      message: "data saved successfully",
    });
  } catch (error) {
    next(error);
  }
};
