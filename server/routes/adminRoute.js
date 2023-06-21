import express from "express";
import {
  AdminProductAdd,
  AdminProductDelete,
  AdminProductGet,
  login,
  register,
} from "../controllers/adminControllers.js";

const router = express.Router();

const adminRoute = () => {
  router.post("/login", login);
  router.post("/register", register);
  router.post("/adminproducts", AdminProductAdd);
  router.get("/adminproducts", AdminProductGet);
  router.delete("/adminproducts/:id", AdminProductDelete);

  return router;
};

export default adminRoute;
