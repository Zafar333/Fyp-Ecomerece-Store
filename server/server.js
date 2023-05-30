import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import Database from "./database/index.js";
import Route from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 4000;
Database();
app.use(cors());
app.use(express.json());
app.use(Route());
app.use((err, req, resp, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";
  return resp.json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

app.listen(PORT, () => {
  console.log(`Server is live on http://localhost/${PORT}`);
});
