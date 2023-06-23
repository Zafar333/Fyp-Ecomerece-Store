import express from "express";
import { login, products, register } from "../controllers/userControllers.js";

const router = express.Router();

const userRoute = () => {
  router.post("/login", login);
  router.post("/register", register);
  router.post("/products", products);
  return router;
};

export default userRoute;
