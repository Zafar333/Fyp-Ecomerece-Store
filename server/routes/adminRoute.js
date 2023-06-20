import express from "express";
import {
  AdminProductAdd,
  login,
  register,
} from "../controllers/adminControllers.js";

const router = express.Router();

const adminRoute = () => {
  router.post("/login", login);
  router.post("/register", register);
  router.post("/adminproducts", AdminProductAdd);
  return router;
};

export default adminRoute;
