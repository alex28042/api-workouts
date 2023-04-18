const connection = require("..");

const getAllUsersDB = async () => {
  const getUsers = await connection.query("select * from usuarios");
  return getUsers;
};

module.exports = {
  getAllUsersDB,
};
