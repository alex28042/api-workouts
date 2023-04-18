const express = require("express");
const router = require("./routes/workoutRoutes");
const app = express();
const mysql = require("mysql");
const { NODE_ENV_PASSWORD } = require("./config");

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

  console.log("database connected");
})

const PORT = process.env.PORT || 3000;


app.use("/api", router)

app.listen(PORT, () => {
  console.log(`listening ${PORT}`);
});

module.exports = connection