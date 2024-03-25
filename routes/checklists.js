import express, { Router } from "express";
import {
  getChecklist,
  getChecklists,
  createChecklist,
  deleteChecklist,
} from "../controllers/checklistController.js";

const router = Router();

// // routes
// GET all workouts
router.get("/", getChecklists);

// GET a single workout
router.get("/:id", getChecklist);

// POST a new workout
router.post("/", createChecklist);

// // DELETE a workout
router.delete("/:id", deleteChecklist);

// // UPDATE a workout
// router.patch("/:id", updateWorkout);

export default router;
