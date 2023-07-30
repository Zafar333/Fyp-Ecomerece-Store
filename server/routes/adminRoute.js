import express from "express";
import {
  AdminProductAdd,
  AdminProductDelete,
  AdminProductGet,
  AdminProductUpdate,
  login,
  register,
} from "../controllers/adminControllers.js";

const router = express.Router();

const adminRoute = () => {
  router.post("/login", login);
  router.post("/register", register);
  router.post("/adminproducts", AdminProductAdd);
  router.get("/adminproducts/:page", AdminProductGet);
  router.delete("/adminproducts/:id", AdminProductDelete);
  router.put("/adminproducts/:id", AdminProductUpdate);

  return router;
};

export default adminRoute;
