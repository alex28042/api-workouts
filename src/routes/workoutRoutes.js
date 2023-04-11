const express = require("express");
const {
  updateOneWorkout,
  deleteOneWorkout,
  createNewWorkout,
  getOneWorkout,
  getAllWorkouts,
} = require("../controllers/workoutController");
const router = express.Router();

router
  .get("/", getAllWorkouts)
  .get("/:workoutId", getOneWorkout)
  .post("/:workoutId", createNewWorkout)
  .delete("/:workoutId", deleteOneWorkout)
  .patch("/:workoutId", updateOneWorkout);

module.exports = router;
