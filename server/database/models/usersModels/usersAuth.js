import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userAuthSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please provide firstname"],
  },
  lastname: {
    type: String,
    required: [true, "Please provide lastname"],
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
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 9,
  },
});

userAuthSchema.pre("save", async function (done) {
  if (!this.isModified("password")) {
    done();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  done();
});

userAuthSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model("usersAuth", userAuthSchema);
