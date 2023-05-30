import express from "express";
import { login, register } from "../controllers/tailorControllers.js";

const router = express.Router();

const tailorRoute = () => {
  router.post("/login", login);
  router.post("/register", register);
  return router;
};

export default tailorRoute;
