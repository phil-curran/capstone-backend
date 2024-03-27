import express, { Router } from "express";
import {
  getChecklist,
  getChecklists,
  createChecklist,
  deleteChecklist,
} from "../controllers/checklistController.js";
import requireAuth from "../middleware/authMiddleware.js";

const checklistRouter = Router();

checklistRouter.use(requireAuth);

// // routes
// GET all workouts
checklistRouter.get("/", getChecklists);

// GET a single workout
checklistRouter.get("/:id", getChecklist);

// POST a new workout
checklistRouter.post("/", createChecklist);

// // DELETE a workout
checklistRouter.delete("/:id", deleteChecklist);

// // UPDATE a workout
// router.patch("/:id", updateWorkout);

export default checklistRouter;
