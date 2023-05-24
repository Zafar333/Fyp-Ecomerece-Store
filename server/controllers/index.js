import express from "express";
import AdminController from "./AdminController/index.js";

const router = express.Router();

const Controllers = () => {
  router.use("/admin", AdminController());
  return router;
};

export default Controllers;
