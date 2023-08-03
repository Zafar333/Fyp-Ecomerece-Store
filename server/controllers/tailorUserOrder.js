import tailorOrderSchema from "../database/models/tailorsModels/tailorOrders.js";
export const tailorUserOrder = async (req, res, next) => {
  const {
    orderDesignImgs,
    shoulder,
    chest,
    hip,
    sleeves,
    daman,
    armHole,
    bicep,
    shirtLength,
    trouserLength,
    tailorName,
    tailorEmail,
  } = req.body;
  if (orderDesignImgs && tailorName && tailorEmail) {
    try {
      const orders = await tailorOrderSchema.create({
        orderDesignImgs,
        shoulder,
        chest,
        hip,
        sleeves,
        daman,
        armHole,
        bicep,
        shirtLength,
        trouserLength,
        tailorName,
        tailorEmail,
      });
      if (orders) {
        res.json({
          status: 200,
          success: true,
          user: orders?._id,
          message: "Your Design save sucefully",
        });
      }
    } catch (error) {
      next(error);
    }
  } else {
    return next({ message: "please send Data", statusCode: 401 });
  }
};

export const userMeasurement = async (req, res, next) => {
  const id = req.params.id;
  const {
    shoulder,
    chest,
    hip,
    sleeves,
    daman,
    armHole,
    bicep,
    shirtLength,
    trouserLength,
  } = req.body;
  if (
    (!shoulder,
    !chest,
    !hip,
    !sleeves,
    !daman,
    !armHole,
    !bicep,
    !shirtLength,
    !trouserLength)
  ) {
    return next({ message: "please provide data", statusCode: 401 });
  }
  try {
    let data = await tailorOrderSchema.updateOne(
      {
        _id: id,
      },
      { $set: req.body }
    );
    if (!data?.modifiedCount === 0) {
      return next({
        message: "Data Not Exist",
        statusCode: "404",
      });
    } else {
      res.json({
        success: true,
        message: "Your data save sucessfully ",
        status: 200,
      });
    }
  } catch (error) {
    next(error);
    return;
  }
};

export const userContactDetails = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, phnNo, address } = req.body;
  if ((!name, !email, !phnNo, !address)) {
    return next({ message: "please provide data", statusCode: 401 });
  }
  try {
    let data = await tailorOrderSchema.updateOne(
      {
        _id: id,
      },
      { $set: req.body }
    );
    if (!data?.modifiedCount === 0) {
      return next({
        message: "Data Not Exist",
        statusCode: "404",
      });
    } else {
      res.json({
        success: true,
        message: "Your Order is done Sucessfully",
        status: 200,
      });
    }
  } catch (error) {
    next(error);
    return;
  }
};
