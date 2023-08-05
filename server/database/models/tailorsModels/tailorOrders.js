import mongoose from "mongoose";
const tailorOrderSchema = new mongoose.Schema({
  orderDesignImgs: {
    type: [],
  },
  shoulder: {
    type: String,
  },
  chest: {
    type: String,
  },
  hip: {
    type: String,
  },
  sleeves: {
    type: String,
  },
  daman: {
    type: String,
  },
  armHole: {
    type: String,
  },
  bicep: {
    type: String,
  },
  shirtLength: {
    type: String,
  },
  trouserLength: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phnNo: {
    type: String,
  },
  address: {
    type: String,
  },
  tailorName: {
    type: String,
  },
  tailorEmail: {
    type: String,
  },
  tailorId: {
    type: String,
  },
});
export default mongoose.model("tailorsOrders", tailorOrderSchema);
