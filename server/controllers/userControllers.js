import UserAuthModel from "../database/models/usersModels/usersAuth.js";
import ProductsModel from "../database/models/usersModels/productsModel.js";
import { GenerateToken } from "../middlewares/Token.js";

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
export const products = async (req, resp, next) => {
  console.log(req.body);
  try {
    if (req?.body?.search) {
      let products = await ProductsModel.find({
        $and: [
          { name: { $regex: req.body.search } },

          req?.body?.category === "all"
            ? { $or: [{ category: "women" }, { category: "men" }] }
            : { category: req?.body?.category },
        ],
      }).sort(req.body.pricesort);
      return resp.json({ success: true, status: 200, data: products });
    } else {
      let products = await ProductsModel.find(
        req?.body?.category === "all" ? {} : { category: req?.body?.category }
      ).sort(req.body.pricesort);
      return resp.json({ success: true, status: 200, data: products });
    }
  } catch (error) {
    next(error);
  }
};
