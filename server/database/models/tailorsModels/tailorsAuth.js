import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const tailorAuthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
  },

  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please provide valid email",
    ],
  },
  image: String,
  type: String,
  password: {
    type: String,
    required: [true, "please provide password"],
  },
});
tailorAuthSchema.pre("save", async function (done) {
  if (!this.isModified("password")) {
    done();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  done();
});
export default mongoose.model("tailorAuth", tailorAuthSchema);

//   adminAuthSchema.methods.checkPassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
