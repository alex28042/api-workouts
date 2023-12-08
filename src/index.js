const express = require("express");
const routerWorkouts = require("./routes/workoutRoutes");
const routerUsers = require("./routes/userRoutes")
const app = express();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "entrenamientos"
})

connection.connect((err) => {
  if (err) {
    throw err
  }
  console.log("correcto")
})

const PORT = process.env.PORT || 3000;

app.use("/api/v1/workouts", routerWorkouts)
app.use("/api/v1/users", routerUsers)

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());






app.listen(PORT, () => {
  console.log(`listening ${PORT}`);
});

app.post('/insertar', (req, res) => {
  const { nombre, passworld } = { nombre: "user", passworld: "123" };

  // Realizar la inserción en la base de datos
  const sql = 'INSERT INTO tu_tabla (nombre, passworld) VALUES (?, ?)';
  connection.query(sql, [nombre, passworld], (error, results, fields) => {
    if (error) {
      console.error('Error al insertar en la base de datos:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
      return;
    }
    res.status(200).json({ mensaje: 'Registro insertado correctamente' });
  });
});

module.exports = connection