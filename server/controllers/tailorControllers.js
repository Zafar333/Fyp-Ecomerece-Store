import tailorAuthSchema from "../database/models/tailorsModels/tailorsAuth.js";
import { GenerateToken } from "../middlewares/Token.js";

export const login = async (req, resp, next) => {
  let { email, password } = req.body;
  if (email && password) {
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
      next(error.message);
      return;
    }
  } else {
    return resp.json({ message: "Please provide data" });
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
      designImages: [],
      shopName: "",
      contactNumber: 0,
      standardPrice: 0,
      fancyPrice: 0,
      description: "",
      stitchCategory: "",
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

export const createShop = async (req, res, next) => {
  const id = req.params.id;
  const {
    designImages,
    shopName,
    contactNumber,
    standardPrice,
    fancyPrice,
    description,
    stitchCategory,
    name,
    address,
  } = req.body;
  if (
    (!designImages,
    !shopName,
    !name,
    !contactNumber,
    !standardPrice,
    !fancyPrice,
    !description,
    !stitchCategory,
    !address)
  ) {
    return next({ message: "please provide data", statusCode: 401 });
  }
  try {
    let data = await tailorAuthSchema.updateOne(
      {
        _id: id,
      },
      { $set: req.body }
    );
    if (!data?.modifiedCount === 0) {
      return next({
        message: "your Shop is not created due to invalid account",
        statusCode: "404",
      });
    } else {
      res.json({
        success: true,
        message: "Your data save sucessfully and shop is created",
        status: 200,
      });
    }
  } catch (error) {
    next(error);
    return;
  }
};
export const fetchTailorShopData = async (req, res, next) => {
  const id = req.params.id;
  const data = await tailorAuthSchema.findOne({ _id: id });
  if (!data) {
    return next({ message: "Data not found", statusCode: 401 });
  } else {
    try {
      res.json({ success: true, shopData: data, status: 200 });
    } catch (error) {
      next(error);
      return;
    }
  }
};
export const fetchAllTailorsData = async (req, res, next) => {
  try {
    const data = await tailorAuthSchema.find();
    if (!data) {
      return next({ message: "Data not found", statusCode: 401 });
    } else {
      res.json({
        success: true,
        allData: data,
        status: 200,
        message: "Data Sucessfully",
      });
    }
  } catch (error) {
    next(error);
    return;
  }
};

export const deleteTailor = async (req, res, next) => {
  let id = req.params.id;
  try {
    const data = await tailorAuthSchema.deleteOne({
      _id: id,
    });
    if (!data) {
      return next({ message: "Tailor not found", statusCode: 401 });
    } else {
      res.json({
        success: true,
        status: 200,
        message: "Your Account is Deleted Sucessfully",
      });
    }
  } catch (error) {
    next(error);
    return;
  }
};
