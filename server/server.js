import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import Database from "./database/index.js";
import Route from "./routes/index.js";
import ErrorResponse from "./utils/error.js";

const app = express();
const PORT = process.env.PORT || 4000;
Database();
app.use(cors());
app.use(express.json({ limit: "20mb", extended: true }));
app.use(Route());
app.use((err, req, resp, next) => {
  let error = { ...err };
  if (err.code === 11000) {
    const message = "Duplicate field value";
    error = new ErrorResponse(message, 400);
  }
  return resp.json({
    success: false,
    status: error.statusCode || 500,
    message: error.message || "Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`Server is live on http://localhost/${PORT}`);
});
