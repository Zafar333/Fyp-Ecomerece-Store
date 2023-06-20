import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminAuthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  profile: String,

  type: String,
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please provide valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 9,
  },
});

adminAuthSchema.pre("save", async function (done) {
  if (!this.isModified("password")) {
    done();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  done();
});

adminAuthSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model("adminAuth", adminAuthSchema);
