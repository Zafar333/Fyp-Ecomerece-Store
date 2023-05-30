import express from "express";
import { login, register } from "../controllers/userControllers.js";

const router = express.Router();

const userRoute = () => {
  router.post("/login", login);
  router.post("/register", register);
  return router;
};

export default userRoute;
