const express = require("express");
const routes = express.Router();
const busController = require('../controllers/buscontroller.js');

routes.post("/", busController.postentries);                  // POST /buses
routes.get("/", busController.getentries);                    // GET /buses (all)
routes.get("/available/:seats", busController.getAvailableBuses); // GET /buses/available/:seats

module.exports = routes;