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
// GET all checklists
checklistRouter.get("/", getChecklists);

// GET a single checklists
checklistRouter.get("/:id", getChecklist);

// POST a new checklists
checklistRouter.post("/", createChecklist);

// // DELETE a checklists
checklistRouter.delete("/:id", deleteChecklist);

// // UPDATE a checklists
// checklistRouter.patch("/:id", updateChecklist);

export default checklistRouter;
