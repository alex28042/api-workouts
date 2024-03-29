const express = require("express");
const { getAllUsersController } = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsersController).post("/:userId");

module.exports = router;
