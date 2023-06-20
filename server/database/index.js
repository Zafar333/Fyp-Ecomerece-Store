import mongoose from "mongoose";

const Database = () => {
  try {
    mongoose.connect(process.env.DB_URL, {});
    console.log("Database Conneced");
  } catch (error) {
    console.log(error.message);
  }
};

export default Database;
