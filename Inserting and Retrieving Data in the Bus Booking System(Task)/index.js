
const express = require("express")
const mysql1 = require('./utils/dbconnection')
const usersroutes = require('./routes/usersroutes')
const busesroutes = require('./routes/busesroutes')
const app = express()
app.use(express.json())
app.use("/users", usersroutes)
app.use("/buses", busesroutes)
app.listen(3000, (err) => {
    console.log("server is running")
})
