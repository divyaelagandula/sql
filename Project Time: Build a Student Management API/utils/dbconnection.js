const mysql=require("mysql2")
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Divhari1@",
    database:"studentmanagment"

})
connection.connect((err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("connection is established sucesfully")
    const createtable=`create table if not exists studentman(
    id INT AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(30) NOT NULL,
    EMAIL VARCHAR(30) UNIQUE NOT NULL,
    AGE INT NOT NULL)`

connection.execute(createtable,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("table is created sucesfully")
})
})
module.exports=connection