const express = require("express");
const router = express.Router();

router
  .get("/", (req, res) => {
    res.send("Get all workouts");
  })
  .get("/:workoutId", (req, res) => {
    res.send(`get workout ${req.params.workoutId}`);
  })
  .post("/:workoutId", (req, res) => {
    res.send(`created workout ${req.params.workoutId}`);
  });
