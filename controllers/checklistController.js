import mongoose from "mongoose";
import Checklist from "../models/checklistModel.js";

// CREATE
// POST / create a new workout
const createChecklist = async (req, res) => {
  const { entryDateString, task1, task2, task3, task4, task5 } = req.body;
  console.log("request: ", req.body);
  try {
    const checklist = await Checklist.create({
      entryDateString,
      task1,
      task2,
      task3,
      task4,
      task5,
    });
    res.status(200).json({ checklist });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// READ
// GET All Checklists
const getChecklists = async (req, res) => {
  const checklists = await Checklist.find({}).sort({ createdAt: 1 });
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

// UPDATE

// DELETE
const deleteChecklist = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such checklist" });
  }
  const checklist = await Checklist.findOneAndDelete({ _id: id });
  if (!checklist) {
    return res.status(400).json({ error: "No such checklist" });
  }
  res.status(200).json(checklist);
};

export { createChecklist, getChecklists, getChecklist, deleteChecklist };
