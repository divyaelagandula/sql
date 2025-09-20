const express=require("express")
const mysql=require("mysql2")
const app=express()
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Divhari1@",
    database:"testdb"
})
connection.connect((err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("conncetion has been created")
    const creationquery=`CREATE TABLE student(
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DateOfBirth DATE,
    Email VARCHAR(100) UNIQUE
)`
connection.execute(creationquery,(err)=>{
    if(err){
        console.log(err)
        connection.end()
        return
    }
    console.log("table is created")
})
})
app.get("/",(req,res)=>{
    res.send("hello  world")
})
app.listen(3000,(err)=>{
    console.log("server is running")
})