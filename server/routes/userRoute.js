import express from "express";
import {
  CheckoutSession,
  DeleteUser,
  GetALLUsers,
  login,
  products,
  register,
} from "../controllers/userControllers.js";

const router = express.Router();

const userRoute = () => {
  router.post("/login", login);
  router.post("/register", register);
  router.post("/products", products);
  router.post("/create-checkout-session", CheckoutSession);
  router.get("/getallusers", GetALLUsers);
  router.delete("/:id", DeleteUser);
  return router;
};

export default userRoute;
