import mongoose from "mongoose";
import UserModel from "../models/userModel.js";

// login user
const loginUser = async (req, res) => {
  res.json({ msg: "login user route" });
};

// singup user
const signupUser = async (req, res) => {
  res.json({ msg: "sign up user route" });
};

export { loginUser, signupUser };
