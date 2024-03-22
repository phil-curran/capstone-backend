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
    // date and time asleep
    timeDown: Date,
    // date and time awake
    timeUp: Date,
    // duration of sleep
    totalDuration: Date,
    // sleep score
    score: Number,
    // overall time asleep: # / 50
    timeAsleepScore: Number,
    // hours and minutes
    durationAsleep: Date,
    // hours and minutes
    durationAwake: Date,
    // overall score: # / 25
    deepAndREMScore: Number,
    // hours and minutes
    deepSleep: Number,
    // percent REM
    percentREM: Number,
    // overall restoration score: # / 25
    restorationScore: Number,
    // sleeping heart rate: # below resting
    sleepHR: Number,
    // restlessness percentage
    restlessness: Number,
  },
  // automatically add the date & time created or updated
  { timestamps: true }
);

// export the model & schema
const ChecklistModel = mongoose.model("Checklist", checklistSchema);

export default ChecklistModel;
