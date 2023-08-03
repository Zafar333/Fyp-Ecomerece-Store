import express from "express";
import {
  login,
  register,
  createShop,
  fetchTailorShopData,
  fetchAllTailorsData,
} from "../controllers/tailorControllers.js";
import {
  tailorUserOrder,
  userMeasurement,
  userContactDetails,
} from "../controllers/tailorUserOrder.js";
const router = express.Router();

const tailorRoute = () => {
  router.post("/login", login);
  router.post("/register", register);
  router.patch("/createShops/:id", createShop);
  router.get("/tailorShopData/:id", fetchTailorShopData);
  router.get("/alltailorData", fetchAllTailorsData);
  router.post("/orders", tailorUserOrder);
  router.patch("/orderMeasurement/:id", userMeasurement);
  router.patch("/orderContactDetails/:id", userContactDetails);
  return router;
};

export default tailorRoute;
