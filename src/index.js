const express = require("express");
const routerWorkouts = require("./routes/workoutRoutes");
const routerUsers = require("./routes/userRoutes")
const app = express();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password1234",
  database: "entrenamientos"
})


connection.connect((err) => {
  if (err) {
    throw err
  }
})

const PORT = process.env.PORT || 3000;


app.use("/api/v1/workouts", routerWorkouts)
app.use("/api/v1/users", routerUsers)


app.listen(PORT, () => {
  console.log(`listening ${PORT}`);
});

module.exports = connection