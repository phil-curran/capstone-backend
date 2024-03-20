import { Router } from "express";
import Checklist from "../models/checklistModel.js";

const router = Router();

// routes
router.get("/", (req, res) => {
  res.json({ msg: "Home @ server / routes / checklists.js" });
});

// get all checklists
router.get("/", (req, res) => {
  res.json({ msg: "GET all checklists @ server / routes / checklists.js" });
});

// get a single checklist
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single checklist @ server / routes / checklists.js" });
});

// post a checklist
// router.post("/", (req, res) => {
//   res.json({ msg: "POST a checklist @ server / routes / checklists.js" });
// });

// post a workout
router.post("/", async (req, res) => {
  const {
    entryDate,
    timeDown,
    timeUp,
    totalDuration,
    score,
    timeAsleepScore,
    durationAsleep,
    durationAwake,
    deepAndREMScore,
    deepSleep,
    percentREM,
    restorationScore,
    sleepHR,
    restlessness,
  } = req.body;
  console.log("request: ", req.body);
  try {
    const checklist = await Checklist.create({
      entryDate,
      timeDown,
      timeUp,
      totalDuration,
      score,
      timeAsleepScore,
      durationAsleep,
      durationAwake,
      deepAndREMScore,
      deepSleep,
      percentREM,
      restorationScore,
      sleepHR,
      restlessness,
    });
    res.status(200).json({ checklist });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// delete a checklist
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a checklist @ server / routes / checklists.js" });
});

// update a checklist
router.patch("/:id", (req, res) => {
  res.json({ msg: "PUT a checklist @ server / routes / checklists.js" });
});

export default router;
