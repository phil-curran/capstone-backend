import mongoose from "mongoose";
import UserModel from "../models/userModel.js";

// login user
const loginUser = async (req, res) => {
  res.json({ msg: "login user route" });
};

// singup user
// sign up user
const registerUser = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await UserModel.register(email, password);
    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { loginUser, registerUser };
