import UserAuthModel from "../database/models/usersModels/usersAuth.js";
import ProductsModel from "../database/models/usersModels/productsModel.js";
import { GenerateToken } from "../middlewares/Token.js";
import { st } from "../server.js";

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
    let respData = { ...checkEmail, password: "" };

    GenerateToken(
      checkEmail._id,
      {
        success: true,
        status: 200,
        message: "Login Successfull",
        data: respData,
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
  let { firstname, lastname, email, password, profile } = req.body;

  try {
    const user = await UserAuthModel.create({
      profile,
      firstname,
      lastname,
      email,
      password,
      type: "user",
    });
    resp.json({
      success: true,
      status: 200,
      message: "Registered successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const products = async (req, resp, next) => {
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

export const CheckoutSession = async (req, resp, next) => {
  try {
    let res = await ProductsModel.find({
      _id: { $in: req.body.map((item) => item.id) },
    });

    const session = await st.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: res?.map((item) => {
        let priceInCents = item.price * 100;
        let qant = req.body.filter((d) => item._id == d.id);
        return {
          price_data: {
            currency: "pkr",
            product_data: {
              name: item?.name,
            },

            unit_amount: priceInCents,
          },
          quantity: qant[0].qty,
        };
      }),
      success_url: process.env.SUCCESS_URL,
      cancel_url: process.env.CANCEL_URL,
    });
    resp.json({ status: 200, success: true, url: session?.url });
  } catch (error) {
    next(error);
  }
};

export const GetALLUsers = async (req, resp, next) => {
  try {
    let allUsers = await UserAuthModel.find({});
    resp.json({ status: 200, data: allUsers });
  } catch (error) {
    next(error);
  }
};

export const DeleteUser = async (req, resp, next) => {
  try {
    let deleteData = await UserAuthModel.deleteOne({ _id: req?.params?.id });
    console.log(deleteData);
    if (deleteData?.deletedCount === 0) {
      return next({ message: "User not Found", statusCode: "404" });
    } else {
      return resp.json({ message: "User Deleted Successfully", status: 200 });
    }
  } catch (error) {
    next(error);
  }
};
