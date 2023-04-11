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
  })
  .delete("/:workoutId", (req, res) => {
    res.send(`delete ${req.params.workoutId}`)
  }).patch("/:workoutId", (req, res) => {
    res.send("Update an existing workout");
  })
  .patch("/:workoutId", (req, res) => {
    res.send("Update an existing workout");
  });

module.exports = router;