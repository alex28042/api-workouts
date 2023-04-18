const connection = require("..");

const getAllWorkoutsDB = async () => {
  const getWorkouts = await connection.query("select * from ejercicios");
  return getWorkouts;
};

module.exports = {
  getAllWorkoutsDB,
};
