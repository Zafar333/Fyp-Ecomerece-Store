import adminAuth from "../database/models/adminModels/adminAuth.js";
import AdminAuthModel from "../database/models/adminModels/adminAuth.js";
import AdminProductModel from "../database/models/usersModels/productsModel.js";
import { GenerateToken } from "../middlewares/Token.js";
import TailorsModel from "../database/models/tailorsModels/tailorsAuth.js";

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

export const AdminProductAdd = async (req, resp, next) => {
  let { profile, name, price, desc, category } = req.body;
  try {
    if (!profile && !name && !price && !desc && category) {
      return next({ message: "please provide data", statusCode: 401 });
    }
    await AdminProductModel.create({
      profile,
      name,
      price: price * 1,
      desc,
      category,
    });
    return resp.json({ success: true, status: 200, message: "product Added" });
  } catch (error) {
    next(error);
  }
};
export const AdminProductGet = async (req, resp, next) => {
  let page = req?.params?.page || 1;
  let limit = 10;
  let skip = (page - 1) * limit;
  try {
    let totalData = await AdminProductModel.find({}).count();
    let products = await AdminProductModel.find({}).skip(skip).limit(limit);
    resp.json({
      success: true,
      status: 200,
      data: products,
      pagination: {
        totalData,
      },
    });
  } catch (error) {
    next(error);
  }
};
export const AdminProductDelete = async (req, resp, next) => {
  try {
    let deletedProduct = await AdminProductModel.deleteOne({
      _id: req.params.id,
    });
    if (deletedProduct?.deletedCount === 0) {
      return next({ message: "Product not found", statusCode: "404" });
    }
    return resp.json({
      success: true,
      status: 200,
      message: "Product Deleted Successfully!",
    });
  } catch (error) {
    return next(error);
  }
};
export const AdminProductUpdate = async (req, resp, next) => {
  try {
    let updateProduct = await AdminProductModel.updateOne(
      {
        _id: req.params.id,
      },
      { $set: req.body }
    );
    console.log(updateProduct);
    if (updateProduct?.modifiedCount === 0) {
      return next({ message: "Product not found", statusCode: "404" });
    }
    return resp.json({
      success: true,
      status: 200,
      message: "Product Updated Successfully!",
    });
  } catch (error) {
    return next(error);
  }
};

export const GetAllTailorsData = async (req, resp, next) => {
  try {
    let allTailors = await TailorsModel.find({});
    resp.json({ status: 200, data: allTailors });
  } catch (error) {
    next(error);
  }
};
