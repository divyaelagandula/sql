const express=require("express")
const db=require('./utils/dbconnection')
const studentmodel=require('./models/student')

const app=express()
app.use(express.json())
db.sync({force:true}).then(()=>{
app.listen(3000,(err)=>{
    console.log("server is running")
})

}).catch((err)=>{
console.log(err)
})



