// imports
import mongoose from "mongoose";

// init Schema
const Schema = mongoose.Schema;

// define schema
const checklistSchema = new Schema(
  {
    // entryDate string
    entryDateString: {
      type: String,
      required: true,
    },
    task1: {
      type: Number,
      required: true,
      default: 0,
    },
    task2: {
      type: Number,
      required: true,
      default: 0,
    },
    task3: {
      type: Number,
      required: true,
      default: 0,
    },
    task4: {
      type: Number,
      required: true,
      default: 0,
    },
    task5: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  // automatically add the date & time created or updated
  { timestamps: true }
);

// export the model & schema
const ChecklistModel = mongoose.model("Checklist", checklistSchema);

export default ChecklistModel;
