const express=require("express")
const mysql=require("mysql2")
const app=express()

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Divhari1@",
    database:"testdb",
    multipleStatements: true // This is the key change
})

connection.connect((err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("connection has been created")

    const creationquery=`
        CREATE TABLE Users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE
        );
        CREATE TABLE Buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(255) NOT NULL UNIQUE,
            totalSeats INT NOT NULL,
            availableSeats INT NOT NULL
        );
        CREATE TABLE Bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber INT NOT NULL
        );
        CREATE TABLE Payments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid DECIMAL(10, 2) NOT NULL,
            paymentStatus VARCHAR(50) NOT NULL
        );
    `;
    
    connection.query(creationquery,(err, results)=>{ // Use query() instead of execute()
        if(err){
            console.log(err)
            connection.end()
            return
        }
        console.log("Tables created successfully");
        connection.end(); // It's good practice to close the connection after the task
    })
})

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(3000,()=>{
    console.log("server is running")
})