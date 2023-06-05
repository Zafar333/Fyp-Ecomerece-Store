import UserAuthModel from "../database/models/usersModels/usersAuth.js";
import ErrorResponse from "../utils/error.js";

export const login = (req, resp) => {
  resp.json("user login worked");
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
