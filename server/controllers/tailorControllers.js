import tailorAuthSchema from "../database/models/tailorsModels/tailorsAuth.js";

export const login = (req, resp) => {
  resp.json("tailor login worked");
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
