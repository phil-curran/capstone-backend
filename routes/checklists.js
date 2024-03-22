import express, { Router } from "express";
import {
  getChecklist,
  getChecklists,
  createChecklist,
} from "../controllers/checklistController";

const router = Router();

// routes
// GET all workouts
router.get("/", getChecklists);

// GET a single workout
router.get("/:id", getChecklist);

// POST a new workout
router.post("/", createChecklist);

// // DELETE a workout
// router.delete("/:id", deleteWorkout);

// // UPDATE a workout
// router.patch("/:id", updateWorkout);

export default router;
