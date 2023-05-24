import express from "express";
import Controllers from "../controllers/index.js";

const router = express.Router();

const Route = () => {
  router.use("/api", Controllers());
  return router;
};

export default Route;
