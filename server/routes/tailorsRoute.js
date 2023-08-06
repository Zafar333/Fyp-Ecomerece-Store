import express from "express";
import {
  login,
  register,
  createShop,
  fetchTailorShopData,
  fetchAllTailorsData,
  deleteTailor,
} from "../controllers/tailorControllers.js";
import {
  tailorUserOrder,
  userMeasurement,
  userContactDetails,
  allOrders,
  SingleViewOrder,
  deleteOrder,
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
  router.get("/getOrdersData/:id", allOrders);
  router.get("/getSingleViewOrderData/:id", SingleViewOrder);
  router.delete("/deleteTailor/:id", deleteTailor);
  router.delete("/deleteOrder/:id", deleteOrder);

  return router;
};

export default tailorRoute;
