import mongoose from "mongoose";
import Checklist from "../checklistModel";

// CREATE
// POST / create a new workout
const createChecklist = async (req, res) => {
  const {
    entryDateString,
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
      entryDateString,
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
};

// READ
// GET All Checklists
const getChecklists = async (req, res) => {
  const checklists = await Checklist.find({}).sort({ createdAt: -1 });
  res.status(200).json(checklists);
};

// GET Specific Checklist
const getChecklist = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such checklist" });
  }
  const checklist = await Checklist.findById(id);
  if (!checklist) {
    return res.status(404).json({ error: "No such checklist" });
  }
  res.status(200).json(checklist);
};

export { createChecklist, getChecklists, getChecklist };
