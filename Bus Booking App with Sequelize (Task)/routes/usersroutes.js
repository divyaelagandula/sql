const express = require("express");
const routes = express.Router();
const userController = require('../controllers/usercontroller.js');

routes.post("/", userController.postentries); // POST /users
routes.get("/", userController.getentries);   // GET /users

module.exports = routes;