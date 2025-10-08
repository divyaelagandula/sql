
const express = require("express")
const routes = express.Router()
const userscontroller = require('../controllers/userscontroller')
routes.get("/", userscontroller.getuserentries)
routes.post("/", userscontroller.adduserentries)
module.exports = routes
