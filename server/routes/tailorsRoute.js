import express from "express";
import {
  login,
  register,
  createShop,
  fetchTailorShopData,
  fetchAllTailorsData,
} from "../controllers/tailorControllers.js";

const router = express.Router();

const tailorRoute = () => {
  router.post("/login", login);
  router.post("/register", register);
  router.patch("/createShops/:id", createShop);
  router.get("/tailorShopData/:id", fetchTailorShopData);
  router.get("/alltailorData", fetchAllTailorsData);
  return router;
};

export default tailorRoute;
