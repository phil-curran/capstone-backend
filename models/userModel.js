import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method:
userSchema.statics.register = async function (email, password) {
  // validation
  // blank fields
  if (!email || !password) {
    throw new Error("Email and password are required");
  }
  // valid email
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email");
  }
  // valid password
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough");
  }

  // check if email already exits
  const exists = await this.findOne({ email });
  if (exists) {
    throw new Error("User already exists");
  }
  // generate salt
  const salt = await bcrypt.genSalt(10);
  // hash pw with salt
  const hash = await bcrypt.hash(password, salt);
  // create user: pass hash as password value
  const user = await this.create({ email, password: hash });

  return user;
};

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
