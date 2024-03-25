import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

// login route
userRouter.post("/login", loginUser);

// signup route
userRouter.post("/register", registerUser);

// logout route

export default userRouter;
