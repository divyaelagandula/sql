
const express = require("express")
const routes = express.Router()
const busescontroller = require('../controllers/busescontroller')
routes.get("/available/:seats", busescontroller.retrivebuses)
routes.post("/", busescontroller.addbuses)
module.exports = routes
