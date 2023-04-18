const { getAllUsers } = require("../services/userServices");

const getAllUsersController = (req, res) => {
  const allUsers = getAllUsers();
  res.send("Get All users");
};

module.exports = {
    getAllUsersController
}