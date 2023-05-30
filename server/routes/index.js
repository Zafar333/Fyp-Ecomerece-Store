import express from "express";
import adminRoute from "./adminRoute.js";
import userRoute from "./userRoute.js";
import tailorRoute from "./tailorsRoute.js";

const router = express.Router();

const Route = () => {
  router.use("/admin", adminRoute());
  router.use("/user", userRoute());
  router.use("/tailors", tailorRoute());

  return router;
};

export default Route;
