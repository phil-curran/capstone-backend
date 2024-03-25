// imports
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

// initialize app
const app = express();

// middleware
// logging
app.use((req, res, next) => {
  console.log("Path: ", req.path);
  console.log("Method: ", req.method);
  console.log("Status: ", res.statusCode);
  console.log("---");
  next();
});

// json
app.use(express.json());

// routes
import checklistRouter from "./routes/checklistRouter.js";
import userRouter from "./routes/userRouter.js";

// API ROUTES
app.use("/api/checklists/", checklistRouter);
app.use("/api/user/", userRouter);

// DISPLAY ROUTES
app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

// connect to db
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // start server
    app.listen(process.env.PORT, () => {
      console.log("Connected to Server & listening on port 3000...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
