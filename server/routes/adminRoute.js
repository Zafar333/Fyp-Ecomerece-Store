import express from "express";
import { login, register } from "../controllers/adminControllers.js";

const router = express.Router();

const adminRoute = () => {
  router.post("/login", login);
  router.post("/register", register);
  return router;
};

export default adminRoute;
