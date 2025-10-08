const express=require("express")
const sql=require('./utils/dbconnection')
const studentroutes=require('./routes/studentsroutes')
const app=express()
app.use(express.json())
app.use("/students",studentroutes)
app.listen(3000,(err)=>{
    console.log("server is running")
})
