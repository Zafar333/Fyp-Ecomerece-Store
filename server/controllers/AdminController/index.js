import express from "express";
import { Registration } from "./admin.js";
const router = express.Router();

const AdminController = () => {
  router.post("/registration", Registration);
  return router;
};

export default AdminController;
