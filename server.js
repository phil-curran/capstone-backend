// imports
import express from "express";
import dotenv from "dotenv";
dotenv.config();

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
import checkListRoutes from "./routes/checklists.js";

// use routes
app.use("/api/checklists/", checkListRoutes);

// port listener
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}...`);
});

// use routes

// API ROUTES
app.use("/api/checklists/", checkListRoutes);

// DISPLAY ROUTES
app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});
