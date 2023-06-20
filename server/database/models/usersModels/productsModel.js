import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  profile: {
    type: String,
    required: [true, "Please provide Image"],
  },
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  price: {
    type: String,
    required: [true, "Please provide price"],
  },
  category: {
    type: String,
    required: [true, "Please provide category"],
  },
  desc: {
    type: String,
    required: [true, "Please provide description"],
  },
});

export default mongoose.model("products", productSchema);
